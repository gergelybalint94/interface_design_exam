// CLICK EVENTS:
// ██████████████████████████████

// Redirect when clicking on elements with 'data-href' attribute:
$(document).on('click', '[data-href]', function(){
	window.location.href = $( this ).attr('data-href');
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