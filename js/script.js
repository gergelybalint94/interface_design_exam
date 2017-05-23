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
				'icon'		: 'add_event.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'manage event list',
				'icon'		: 'edit_event.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'add new partner',
				'icon'		: 'add_partner.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'manage partner list',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'manage user list',
				'icon'		: 'edit_users.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'add new website admin',
				'icon'		: 'add_admin.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'edit site contents',
				'icon'		: 'edit_content.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'general site settings',
				'icon'		: 'settings-work-tool.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			}
		];
		fnPopulateGridArea('#control-panel-grids', ajGridData);
		break;

	case 'partners.php':
		var ajGridData = [
			{
				'label'		: 'ibm',
				'icon'		: 'add_event.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'danske bank',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'google',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'microsoft',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'magnetix',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'peytz&co',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'ideo',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'danskbiotek',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'novo nordisk',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'blue ocean robotics',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'transfer wise',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: false,
				'href'		: ''
			},
			{
				'label'		: 'contact us',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'highlight'	: true,
				'extraLine'	: 'become our new partner',
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

// Function to populate grid areas:
function fnPopulateGridArea( sGridAreaSelector, ajGridData ){
	var sBluePrint = 
		'<div class="grids {{is-active}} {{is-highlighted}}" data-href="{{href}}">' +
			'<div class="grid-icons" style="background-image: url(&quot;assets/icons/{{icon}}&quot;);"></div>' +
			'{{is-extra-line}}' +
			'<div class="grid-labels">{{label}}</div>' +
		'</div>';

	for(var i = 0; i < ajGridData.length; i++){

		var sBluePrintCopy = sBluePrint;
			sBluePrintCopy = sBluePrintCopy.replace('{{is-active}}', ( typeof( ajGridData[i].active ) === 'undefined' || ajGridData[i].active === false ) ? 'links-inactive' : 'links-active' );
			sBluePrintCopy = sBluePrintCopy.replace('{{is-highlighted}}', ( typeof( ajGridData[i].active ) === 'undefined' || ajGridData[i].highlight === false ) ? '' : 'highlighted' );
			sBluePrintCopy = sBluePrintCopy.replace('{{href}}', ajGridData[i].href);
			sBluePrintCopy = sBluePrintCopy.replace('{{icon}}', ajGridData[i].icon);
			sBluePrintCopy = sBluePrintCopy.replace('{{label}}', ajGridData[i].label);
			sBluePrintCopy = sBluePrintCopy.replace('{{is-extra-line}}', ( typeof( ajGridData[i].extraLine ) === 'undefined' || ajGridData[i].extraLine === false ) ? '' : '<p class="extra-lines">' + ajGridData[i].extraLine + '</p>' );
		$( sGridAreaSelector ).append( sBluePrintCopy );
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

//Function to close the logout container
$(document).on("click", "#close-log-out-container", function(){
	$("#logout-container").fadeOut('fast');
});

//Function to close the login container
$(document).on("click", "#close-login-container", function(){
	$("#login-wrap").fadeOut('fast');
});

//Function to close the signup container
$(document).on("click", ".close-signup-onclick-elements", function(){
	$("#registration-wrap").fadeOut('fast');
});

// Ignore click if it happens on a child element:
$(document).on('click', ".close-signup-onclick-elements *", function(e) {
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