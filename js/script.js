// GLOBAL VARIABLES:
// ██████████████████████████████

var sActualPage	= document.location.href.match(/[^\/]+$/)[0];













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
				'href'		: ''
			},
			{
				'label'		: 'manage event list',
				'icon'		: 'edit_event.svg',
				'active'	: false,
				'href'		: ''
			},
			{
				'label'		: 'add new partner',
				'icon'		: 'add_partner.svg',
				'active'	: false,
				'href'		: ''
			},
			{
				'label'		: 'manage partner list',
				'icon'		: 'edit_partners.svg',
				'active'	: false,
				'href'		: ''
			},
			{
				'label'		: 'manage user list',
				'icon'		: 'edit_users.svg',
				'active'	: false,
				'href'		: ''
			},
			{
				'label'		: 'add new website admin',
				'icon'		: 'add_admin.svg',
				'active'	: false,
				'href'		: ''
			},
			{
				'label'		: 'edit site contents',
				'icon'		: 'edit_content.svg',
				'active'	: false,
				'href'		: ''
			},
			{
				'label'		: 'general site settings',
				'icon'		: 'settings-work-tool.svg',
				'active'	: false,
				'href'		: ''
			}
		];
		fnPopulateGridArea('#control-panel-grids', ajGridData);
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

// Function to populate grid areas:
function fnPopulateGridArea( sGridAreaSelector, ajGridData ){
	var sBluePrint = 
		'<div class="grids {{is-active}}" data-href="{{href}}">' +
			'<div class="grid-icons" style="background-image: url(&quot;assets/icons/{{icon}}&quot;);"></div>' +
			'<div class="grid-labels">{{label}}</div>' +
		'</div>';

	for(var i = 0; i < ajGridData.length; i++){

		var sBluePrintCopy = sBluePrint;
			sBluePrintCopy = sBluePrintCopy.replace('{{is-active}}', ( ajGridData[i].active === true ) ? 'links-active' : 'links-inactive' );
			sBluePrintCopy = sBluePrintCopy.replace('{{href}}',  ajGridData[i].href);
			sBluePrintCopy = sBluePrintCopy.replace('{{icon}}',  ajGridData[i].icon);
			sBluePrintCopy = sBluePrintCopy.replace('{{label}}',  ajGridData[i].label);
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

//Function for the popping up signup box
$(document).on("click", "#account-icon", function(){
	console.log("works");
	$("#registration-wrap").fadeIn('fast');
});

//Function to close the signup container
$(document).on("click", ".close-signup-onclick-elements", function(){
	$("#registration-wrap").fadeOut('fast');
});

// Ignore click if it happens on a child element:
$(document).on('click', ".close-signup-onclick-elements *", function(e) {
	e.stopPropagation();
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
		$("#registration-wrap").fadeOut();
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