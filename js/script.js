// GLOBAL VARIABLES:
// ██████████████████████████████

var sActualPage	= ( document.location.href.match(/[^\/]+$/) !== null ) ? document.location.href.match(/[^\/]+$/)[0] : 'index.php';
var bLoggedIn = false;









// EVENTS:
// ██████████████████████████████

// Check if someone is logged in or not:
$(document).on("ready", function(){
	if(localStorage.getItem("name")!==null){
		bLoggedIn = true;
		var name = localStorage.getItem("name");
		var email = localStorage.getItem("email");
		$("#account-name").append(name);
		$("#account-email").append(email);
	}
});

// Redirect when clicking on elements with 'data-href' attribute:
$(document).on('click', '[data-href]', function(){
	
	// Only if link is active:
	if( $(this).hasClass('links-active') ){
		window.location.href = $( this ).attr('data-href');
	}
});

// Switch side bar icons' background on hover:
$(document).on('mouseover', '#side-bar li:not(:first-of-type)', function(){

	// Get original icon file's relative path:
	var sIconFile = $( this ).find('.side-bar-icons').css('background-image'); // get original icon file
	sIconFile = sIconFile.replace('url(','').replace(')','').replace(/\"/gi, ""); // remove url(" ... ") and keep only its content
	sIconFile = sIconFile.substring(sIconFile.indexOf("assets/")); // remove everything in the URL before "assets"

	// Convert original icon file into string:
	var sIconCode = fnStringifySvg( sIconFile );

	// Change background image's fill by code:
	sIconCode = sIconCode.replace('fill:#1a237e', 'fill:white');

	// Extend CSS background-image url with necessary code:
	sIconCode = 'data:image/svg+xml;utf8,' + sIconCode;

	// Change icon element's background CSS:
	$( this ).find('.side-bar-icons').css('background-image', "url('" + sIconCode + "')");

	// Save original file name into icon element's data attribute:
	$( this ).find('.side-bar-icons').attr('data-original-background', sIconFile);
});

// Switch side bar icons' background back to original on mouse leaving:
$(document).on('mouseout', '#side-bar li:not(:first-of-type)', function(){

	// Get side bar icon's original background image:
	var sIconFile = $( this ).find('.side-bar-icons').attr('data-original-background');

	// Change icon element's background image:
	$( this ).find('.side-bar-icons').css('background-image', "url('" + sIconFile + "')");
});

// Switch filter box on events page:
$(document).on('click', '.main-event-filters', function(){
	$( '.main-event-filters' ).removeClass('selected');
	$( this ).addClass('selected');
});

// Fetch user list on manage user list page:
if( sActualPage === 'manage-users.php'){
	$.ajax({
		url 		: 'texts/users.txt',
		dataType	: 'json',
		async		: false
	})
	.done(function( ajResults ){

		var sBluePrint =
			'<div class="tr" id="{{user-id}}">' +
				'<h4 class="only-mobile">{{full-name}}</h4>' +
				'<div class="td checkmark-cells fa {{icon}} fw links-active">' +
					'<span class="only-mobile admin-action-texts">{{action}} site admin</span>' +
				'</div>' +
				'<div class="td links-inactive first-names">' +
					'<span class="only-mobile">First name:</span>' +
					'<span class="field-values">{{firstName}}</span>' +
				'</div>' +
				'<div class="td links-inactive last-names">' +
					'<span class="only-mobile">Last name:</span>' +
					'<span class="field-values">{{lastName}}</span>' +
				'</div>' +
				'<div class="td links-inactive emails">' +
					'<span class="only-mobile">Email:</span>' +
					'<span class="field-values">{{email}}</span>' +
				'</div>' +
				'<div class="td row-button-wraps">' +
					'<div class="buttons main-buttons save-buttons links-active">Save</div>' +
					'<div class="buttons danger-buttons delete-buttons links-active">Delete</div>' +
				'</div>' +
			'</div>';

		for(var i = 0; i < ajResults.length; i++){
			var sBluePrintCopy = sBluePrint;
			sBluePrintCopy = sBluePrintCopy.replace('{{full-name}}', ajResults[i].firstName + ' ' + ajResults[i].lastName );
			sBluePrintCopy = sBluePrintCopy.replace('{{user-id}}', ajResults[i].sUniqueId );
			sBluePrintCopy = sBluePrintCopy.replace('{{action}}', ( ajResults[i].admin === true ) ? 'Remove' : 'Add user as' );
			sBluePrintCopy = sBluePrintCopy.replace('{{icon}}', ( ajResults[i].admin === true ) ? 'fa-check' : 'fa-circle-o' );
			sBluePrintCopy = sBluePrintCopy.replace('{{firstName}}', ajResults[i].firstName );
			sBluePrintCopy = sBluePrintCopy.replace('{{lastName}}', ajResults[i].lastName );
			sBluePrintCopy = sBluePrintCopy.replace('{{email}}', ajResults[i].email );

			$('#user-list').append( sBluePrintCopy );
		}
	});
}

// Submit edited user list row on manage-users.php:
$(document).on('click', '[data-page-name="manage-users-page"] #user-list .save-buttons', function(){
	var sRowToSave	= $( this ).parent().parent();
	console.log(sRowToSave.attr("id"));
	var bIsAdmin	= ( sRowToSave.find('.checkmark-cells').hasClass('fa-check') ) ? true : false;
	var sFirstName	= sRowToSave.find('.first-names').find('.field-values').text();
	var sLastName	= sRowToSave.find('.last-names').find('.field-values').text();
	var sEmail		= sRowToSave.find('.emails').find('.field-values').text();
	var jFreshData	= {
		"sUniqueId"	: sRowToSave.attr('id'),
		"firstName"	: sFirstName,
		"lastName"	: sLastName,
		"email"		: sEmail,
		"admin"		: bIsAdmin
	};

	// Send data to back end:
	$.ajax({
		method		: 'post',
		url 		: 'api/api-edit-user.php',
		data 		: jFreshData
	})
	.done(function( sResponse ){

		if(fnCheckJsonString( sResponse )){

			var jResponse = JSON.parse( sResponse );

			swal({
			  title: jResponse.sStatusTitle,
			  text: jResponse.sStatusMessage,
			  type: jResponse.sStatusType,
			  confirmButtonText: "Cool"
			});

		} else {

			swal({
			  title: 'Error',
			  text: 'You received the following message from the server: ' + sResponse,
			  type: 'error',
			  confirmButtonText: "Okay"
			});

		}

		$('[data-page-name="manage-users-page"] .checkmark-cells').removeClass('uncommited');
	});
});

// Change user's site admin status on manage user list page:
$(document).on('click', '[data-page-name="manage-users-page"] .checkmark-cells', function(){
	var bUncommited		= $( this ).hasClass('uncommited');
	var bIsAdmin		= $( this ).hasClass('fa-check');
	var sMobileLabel	= $( this ).find('.admin-action-texts');

	// Check if site admin status has been changed:
	if( !bUncommited ){
		$( this ).addClass('uncommited');
	} else {
		$( this ).removeClass('uncommited');
	}

	// Change icon:
	if( bIsAdmin ){
		$( this ).removeClass('fa-check').addClass('fa-circle-o');
	} else {
		$( this ).removeClass('fa-circle-o').addClass('fa-check');
	}

	// Change text:
	if( sMobileLabel.text() === 'Add user as site admin' ){
		sMobileLabel.text('Remove site admin');
	} else {
		sMobileLabel.text('Add user as site admin');
	}
});

// Populate grid areas on certain pages:
switch( sActualPage ){
	case 'control-panel.php':
		var ajGridData = [
			{
				'label'		: 'add new event',
				'icon'		: 'assets/icons/add_event.svg'
			},
			{
				'label'		: 'manage event list',
				'icon'		: 'assets/icons/edit_event.svg'
			},
			{
				'label'		: 'add new partner',
				'icon'		: 'assets/icons/add_partner.svg'
			},
			{
				'label'		: 'manage partner list',
				'icon'		: 'assets/icons/edit_partners.svg'
			},
			{
				'label'		: 'manage user list',
				'icon'		: 'assets/icons/edit_users.svg',
				'href'		: 'manage-users.php',
				'active'	: true
			},
			{

				'label'		: 'site analytics',
				'icon'		: 'assets/icons/analytics.svg'

			},
			{
				'label'		: 'edit site contents',
				'icon'		: 'assets/icons/edit_content.svg'
			},
			{
				'label'		: 'general site settings',
				'icon'		: 'assets/icons/settings-work-tool.svg'
			}
		];
		fnPopulateGridArea('#control-panel-grids', ajGridData);
		break;

	case 'partners.php':
		var ajGridData = [
			{
				'label'		: 'ibm',
				'icon'		: 'assets/logos/ibm_logo.png'
			},
			{
				'label'		: 'danske bank',
				'icon'		: 'assets/logos/danske_bank_logo.png'
			},
			{
				'label'		: 'google',
				'icon'		: 'assets/logos/google.png'
			},
			{
				'label'		: 'microsoft',
				'icon'		: 'assets/logos/Microsoft-Logo-PNG.png'
			},
			{
				'label'		: 'magnetix',
				'icon'		: 'assets/logos/Partner_DK_logo_46.png'
			},
			{
				'label'		: 'peytz&co',
				'icon'		: 'assets/logos/peytz.png'
			},
			{
				'label'		: 'ideo',
				'icon'		: 'assets/logos/IDEO_logo_2.png'
			},
			{
				'label'		: 'danskbiotek',
				'icon'		: 'assets/logos/logo-big.png'
			},
			{
				'label'		: 'novo nordisk',
				'icon'		: 'assets/logos/Novo_Nordisk.svg.png'
			},
			{
				'label'		: 'blue ocean robotics',
				'icon'		: 'assets/logos/robotics2.png'
			},
			{
				'label'		: 'transfer wise',
				'icon'		: 'assets/logos/Transferwise_logo.png'
			},
			{
				'label'		: 'contact us',
				'icon'		: 'assets/icons/menu-partners.svg',
				'extraLine'	: 'become our new partner',
				'highlight'	: true
			}
		];
		fnPopulateGridArea('#partners-grids', ajGridData);
		break;


	case 'single-event.php':
		var ajGridData = [
			{
				'label'		: 'microsoft',
				'icon'		: 'assets/logos/Microsoft-Logo-PNG.png'
			}
		];
		fnPopulateGridArea('#single-event-sponsor', ajGridData);
		break;
}













// FUNCTIONS:
// ██████████████████████████████

// Check if a string is JSON formatted:
function fnCheckJsonString( str ) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// Function to get SVG files as strings:
function fnStringifySvg( sFilePath ){
	var sOutput;
	
	$.ajax({
	  url		: sFilePath,
	  async		: false, // important, otherwise 'return' won't wait for the result!
	  dataType	: 'text',
	  success	: function( sSvgCode ){
	    sOutput = sSvgCode;
	  },
	  error: function(){

		swal({
		  title: 'Error',
		  text: 'file "' + sFilePath + '" could not be found!',
		  type: 'error',
		  confirmButtonText: "Okay"
		});

	  }
	});
	
	return sOutput;
}

// Function to populate grid areas:
function fnPopulateGridArea( sGridAreaSelector, ajGridData ){
	var sBluePrint = 
		'<div class="grids {{is-active}} {{is-highlighted}}" data-href="{{href}}">' +
			'<div class="grid-icon-wraps">' +
				'<div class="grid-icons" id="{{id}}"></div>' +
			'</div>' +
			'{{is-extra-line}}' +
			'<div class="grid-labels">{{label}}</div>' +
		'</div>';

	for(var i = 0; i < ajGridData.length; i++){

		var sBluePrintCopy = sBluePrint;
		sBluePrintCopy = sBluePrintCopy.replace('{{is-active}}', ( typeof( ajGridData[i].active ) === 'undefined' || ajGridData[i].active === false ) ? 'links-inactive' : 'links-active' );
		sBluePrintCopy = sBluePrintCopy.replace('{{is-highlighted}}', ( typeof( ajGridData[i].highlight ) === 'undefined' || ajGridData[i].highlight === false ) ? '' : 'highlighted' );
		sBluePrintCopy = sBluePrintCopy.replace('{{href}}', ( typeof( ajGridData[i].href ) === 'undefined' || ajGridData[i].href === false ) ? '' : ajGridData[i].href );
		sBluePrintCopy = sBluePrintCopy.replace('{{id}}', 'grid-icon' + i);
		sBluePrintCopy = sBluePrintCopy.replace('{{label}}', ajGridData[i].label);
		sBluePrintCopy = sBluePrintCopy.replace('{{is-extra-line}}', ( typeof( ajGridData[i].extraLine ) === 'undefined' || ajGridData[i].extraLine === false ) ? '' : '<p class="extra-lines">' + ajGridData[i].extraLine + '</p>' );

		$( sGridAreaSelector ).append( sBluePrintCopy );



		// Change icon background if it is SVG and grid is highlighted:
		if( ajGridData[i].highlight ){

			// Convert SVG into string:
			var sIconCode = fnStringifySvg( ajGridData[i].icon );

			// Change given background line:
			sIconCode = sIconCode.replace('fill:#1a237e', 'fill:white');

			// Add code which is necessary for CSS:
			sIconCode = 'data:image/svg+xml;utf8,' + sIconCode;

			// Change background CSS:
			$( '#grid-icon' + i ).css('background-image', "url('" + sIconCode + "')");
		} else {

			// Change background CSS:
			$( '#grid-icon' + i ).css('background-image', 'url("' + ajGridData[i].icon + '")');
		}
	}
}

// Function to open sidebar menu:
$(document).on('click', '#sandwich-icon', function(){
	$('#side-bar')
	.animate({ 'left' : '0' })
	.siblings('.destroyer-backgrounds:first-of-type')
	.fadeIn();
});

// Function to close sidebar menu:
$(document).on('click', '.closer-elements', function(){
	$('#side-bar')
	.animate({ 'left' : '-256px' })
	.siblings('.destroyer-backgrounds:first-of-type')
	.fadeOut();
});

//Function for the popping up login box or the account manual
$(document).on("click", "#account-icon", function(){
	if(bLoggedIn===true){
		$("#logout-container").fadeIn("fast");
		$("#logout-container").css("display","flex");
	}else{
		$("#login-wrap").fadeIn('fast');
	}
});

//Function to close the login container
$(document).on("click", ".close-popup-onclick-elements", function(){
	$(".close-these-popups").fadeOut('fast');
});

// Ignore click if it happens on a child element:
$(document).on('click', ".close-popup-onclick-elements *", function(e) {
	e.stopPropagation();
});

//Open the registration popup
$(document).on("click", "#open-registration", function(){
	$("#login-wrap").fadeOut('fast');
	$("#registration-wrap").show(); //with fadeIn it looks awkward
});

// Function to save a new user
function createUser(firstName, lastName, password, email ){
	var sFirstName = firstName;
	var sLastName = lastName;
	var sPassword = password;
	var sEmail = email;
	$.ajax({
		"method"	: "POST",
		"url"		: "api/api-create-user.php",
		"dataType"	: "json",
		"data"		: {
			"firstName"	: sFirstName,
			"lastName"	: sLastName,
			"password"	: sPassword,
			"email"		: sEmail
		},
	}).done(function(sData){
		$("#registration-wrap").fadeOut("fast");
		$("#login-wrap").show();
});
};

//Call the createUser function
$("#submit-registration").on("click",function(){
	var sFirstName = $("#firstName").val();
	var sLastName = $("#lastName").val();
	var sPassword = $("#password").val();
	var sEmail = $("#email").val();
	createUser(sFirstName, sLastName, sPassword, sEmail);
});

//Function for logging in
$("#submit-login").on("click",function(){
	var sEmail = $("#login-email").val();
	var sPassword = $("#login-password").val();
	$.ajax({
		"method":"POST",
		"url":"api/api-log-in.php",
		"data":{"email":sEmail,"password":sPassword},
	}).done(function(sData){
		if(sData){
			var obj = $.parseJSON(sData);
			var email = obj.email;
			var name = obj.name;
			var sUniqueId = obj.sUniqueId;
			localStorage.setItem("email",email);
			localStorage.setItem("name",name);
			localStorage.setItem("sUniqueId",sUniqueId);
			$("#login-wrap").fadeOut("fast");
		    location.reload();
		}else{
			swal({
			  title: "Oooops!",
			  text: "Wrong email or password, please try again",
			  type: "error",
			  confirmButtonText: "Alright!"
			});
		};
	});
});

//function for logging out
$(document).on("click", "#log-out-btn", function(){
	bLoggedIn=false;
	localStorage.clear();
	$("#logout-container").fadeOut("fast");
	location.reload();
});


if (sActualPage=="my-account.php") {

	var sUniqueId = localStorage.getItem("sUniqueId");
	$.ajax({
		"method":"POST",
		"url":"api/api-read-users.php",
		"data":{"sUniqueId":sUniqueId},
	}).done(function(sData){
		if(sData){
			var obj = $.parseJSON(sData);
			var email = obj.email;
			var firstName = obj.firstName;
			var lastName = obj.lastName;
			//fetching and writing the data from the txt file to the input fields
			$("#account-name-input").val(firstName);
			$("#account-surname-input").val(lastName);
			$("#account-email-input").val(email);
		};
	});
};



//update users
$(document).on("click", "#account-save-changes-btn", function(){
	swal({
	  title: "Are you sure?",
	  text: "Your account will be modified on the server!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Yes, update it!",
	  closeOnConfirm: true
	},
	  function(isConfirm) {
  		if (isConfirm) {
			var newFirstName = $("#account-name-input").val();
			var newLastName = $("#account-surname-input").val();
			var newEmail = $("#account-email-input").val();
			var sUniqueId = localStorage.getItem("sUniqueId");
			$.ajax({
				"method":"POST",
				"url":"api/api-edit-user.php",
				"data"		: {
					"firstName"	: newFirstName,
					"lastName"	: newLastName,
					"sUniqueId"	: sUniqueId,
					"email"		: newEmail
				},
			});	
		} else {
		    swal("Cancelled", "Your changes has not taken place in the database :)", "error");
  		}
	});
	
});

//delete users call
$(document).on("click", "#account-delete-account-btn", function(){
	var sUniqueId = localStorage.getItem("sUniqueId");
	swal({
	  title: "Are you sure?",
	  text: "Your will not be able to recover this user!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Yes, delete it!",
	  closeOnConfirm: true
	},
	  function(isConfirm) {
  		if (isConfirm) {
	    	fnDeleteUser(sUniqueId);
			window.location.href = "index.php";
			localStorage.clear();
			 } else {
		    swal("Cancelled", "Your imaginary file is safe :)", "error");
  		}
	});
	});

//function for deleting users
function fnDeleteUser(userId){
	$.ajax({
		"method":"POST",
		"url":"api/api-delete-user.php",
		"data"		: {
			"sUniqueId"	: userId
		},
	});	
};

//call delete function from manage-user.php
$(document).on("click", ".delete-buttons", function(){
	var oClosestRow = $(this).closest(".tr");
	var sUniqueId = $(oClosestRow).attr("id");
	swal({
	  title: "Are you sure?",
	  text: "Your will not be able to recover this user!",
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: "Yes, delete it!",
	  closeOnConfirm: true
	},
	  function(isConfirm) {
  		if (isConfirm) {
	    	fnDeleteUser(sUniqueId);
	    	oClosestRow.slideUp();
			 } else {
		    swal("Cancelled", "Your imaginary file is safe :)", "error");
  		}
	});
});