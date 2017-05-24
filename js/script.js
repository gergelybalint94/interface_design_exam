// GLOBAL VARIABLES:
// ██████████████████████████████

var sActualPage	= ( document.location.href.match(/[^\/]+$/) !== null ) ? document.location.href.match(/[^\/]+$/)[0] : 'index.php';
var loggedIn = false;













// EVENTS:
// ██████████████████████████████

// Populate grid areas on certain pages:
switch( sActualPage ){
	case 'control-panel.php':
		var ajGridData = [
			{
				'label'		: 'add new event',
				'icon'		: 'assets/icons/add_event.svg',
				'href'		: ''
			},
			{
				'label'		: 'manage event list',
				'icon'		: 'assets/icons/edit_event.svg',
				'href'		: ''
			},
			{
				'label'		: 'add new partner',
				'icon'		: 'assets/icons/add_partner.svg',
				'href'		: ''
			},
			{
				'label'		: 'manage partner list',
				'icon'		: 'assets/icons/edit_partners.svg',
				'href'		: ''
			},
			{
				'label'		: 'manage user list',
				'icon'		: 'assets/icons/edit_users.svg',
				'href'		: ''
			},
			{
				'label'		: 'add new website admin',
				'icon'		: 'assets/icons/add_admin.svg',
				'href'		: ''
			},
			{
				'label'		: 'edit site contents',
				'icon'		: 'assets/icons/edit_content.svg',
				'href'		: ''
			},
			{
				'label'		: 'general site settings',
				'icon'		: 'assets/icons/settings-work-tool.svg',
				'href'		: ''
			}
		];
		fnPopulateGridArea('#control-panel-grids', ajGridData);
		break;

	case 'partners.php':
		var ajGridData = [
			{
				'label'		: 'ibm',
				'icon'		: 'assets/logos/ibm_logo.png',
				'href'		: ''
			},
			{
				'label'		: 'danske bank',
				'icon'		: 'assets/logos/danske_bank_logo.png',
				'href'		: ''
			},
			{
				'label'		: 'google',
				'icon'		: 'assets/logos/google.png',
				'href'		: ''
			},
			{
				'label'		: 'microsoft',
				'icon'		: 'assets/logos/Microsoft-Logo-PNG.png',
				'href'		: ''
			},
			{
				'label'		: 'magnetix',
				'icon'		: 'assets/logos/Partner_DK_logo_46.png',
				'href'		: ''
			},
			{
				'label'		: 'peytz&co',
				'icon'		: 'assets/logos/peytz.png',
				'href'		: ''
			},
			{
				'label'		: 'ideo',
				'icon'		: 'assets/logos/IDEO_logo_2.png',
				'href'		: ''
			},
			{
				'label'		: 'danskbiotek',
				'icon'		: 'assets/logos/logo-big.png',
				'href'		: ''
			},
			{
				'label'		: 'novo nordisk',
				'icon'		: 'assets/logos/Novo_Nordisk.svg.png',
				'href'		: ''
			},
			{
				'label'		: 'blue ocean robotics',
				'icon'		: 'assets/logos/robotics2.png',
				'href'		: ''
			},
			{
				'label'		: 'transfer wise',
				'icon'		: 'assets/logos/Transferwise_logo.png',
				'href'		: ''
			},
			{
				'label'		: 'contact us',
				'icon'		: 'assets/icons/menu-partners.svg',
				'extraLine'	: 'become our new partner',
				'highlight'	: true,
				'href'		: ''
			}
		];
		fnPopulateGridArea('#partners-grids', ajGridData);
		break;
}


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













// FUNCTIONS:
// ██████████████████████████████

//Self calling function to check if someone is logged in or not
$(document).on("ready", function(){
	if(localStorage.getItem("name")===null){
		console.log("not logged in");
	}else{
		console.log("logged in");
		loggedIn = true;
		var name = localStorage.getItem("name");
		var email = localStorage.getItem("email");
		$("#account-name").append(name);
		$("#account-email").append(email);
	}
});

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
	  	console.log('file "' + sFilePath + '" could not be found!');
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
		sBluePrintCopy = sBluePrintCopy.replace('{{href}}', ajGridData[i].href);
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
	if(loggedIn===true){
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
			localStorage.setItem("email",email);
			localStorage.setItem("name",name);
			$("#login-wrap").fadeOut("fast");
		    location.reload();
		}else{
			alert("Invalid email or password, please try again");
		};
	});
});

//function for logging out
$(document).on("click", "#log-out-btn", function(){
	loggedIn=false;
	localStorage.clear();
	$("#logout-container").fadeOut("fast");
	location.reload();
});