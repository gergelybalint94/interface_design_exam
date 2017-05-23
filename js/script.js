// CLICK EVENTS:
// ██████████████████████████████

// Redirect when clicking on elements with 'data-href' attribute:
$(document).on('click', '[data-href]', function(){
	
	// Only if link is active:
	if( $(this).hasClass('links-active') ){
		window.location.href = $( this ).attr('data-href');
	}
});













// FUNCTIONS:
// ██████████████████████████████

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
		"method":"POST",
		"url":"api/api-create-user.php",
		"dataType":"json",
		"data":{"firstName":sFirstName,"lastName":sLastName,"password":sPassword, "email":sEmail},
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