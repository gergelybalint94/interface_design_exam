<!DOCTYPE html>
<html>
	<!-- HEAD: -->
	<?php require_once('templates/head.php'); ?>

	<!-- BODY: -->
	<body>

		<!-- HEADER (POSITION:FIXED): -->
		<?php require_once('templates/header.php'); ?>

		<!-- SIDEBAR: -->
		<?php require_once('templates/sidebar.php'); ?>







		

		<!-- MAIN PAGE CONTENT: -->
		<div class="page-contents" data-page-name="single-event-page">
			<section class="banner-pictures" id="banner-picture"></section>
			<section class="content-max-width-wide" id="single-event-page-content">
				<div id="event-info-container">
					<div id="single-event-title">MICROSOFT Hackathon: Machine Learning for the Search for Extraterrestrial Intelligence</div>
					<div id="single-event-time-location">MAY 26, 2017 <br> ar ORIGINKBH</div>
					<div id="single-event-image-container"></div>
					<div id="single-event-description-container">
						<div id="single-event-description">
							<h1>Description</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in varius nulla. Maecenas quam orci, blandit in rutrum at, egestas ac eros. Nam at blandit libero. Ut volutpat libero ac mi rutrum convallis. Integer mattis vehicula metus, convallis facilisis ligula rutrum non. Suspendisse sapien metus, sagittis quis mauris id, ullamcorper pulvinar enim. Ut lacinia hendrerit ante eget fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
							<h1>About Speakers</h1>
							<p>JANE BRAIN - Cras sed nibh vitae turpis rutrum volutpat. Suspendisse orci turpis, fermentum consequat fermentum sit amet, efficitur a mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<p>JOHN MICROSOFT - Aliquam egestas ac felis non scelerisque. Praesent mollis et nibh ac finibus. In viverra lorem at dui volutpat, eleifend fermentum tellus consectetur. Integer consequat ut nulla id maximus. Nulla facilisi. In a vestibulum odio. In vestibulum at ex id imperdiet. Sed non faucibus quam.</p>
						</div>
						<div id="single-event-tags">Tags: 
							<span class="links-inactive">#MachineLearning</span>
							<span class="links-inactive">#Software</span>
							<span class="links-inactive">#Microsoft</span>
							<span class="links-inactive">#Conference</span>
						</div>
					</div>
				</div>
				<div id="event-side-container">
					<div id="register-to-event-container">
						<div class="links-inactive" id="register-to-event-btn">Register to event</div>
						<div id="single-event-pricing">EVENT PRICE: 150-300DKK</div>
					</div>
					<div id="single-event-guest-list" class="single-event-side-containers">
						<div>See who is attending:</div>
						<div id="single-event-guest-faces" class="single-event-icons">
							<div class="guest-face links-inactive" style="background-image: url('assets/images/attendant_1.jpeg');"></div>
							<div class="guest-face links-inactive" style="background-image: url('assets/images/attendant_2.jpeg');"></div>
							<div class="guest-face links-inactive" style="background-image: url('assets/images/attendant_3.png');"></div>
							<div class="guest-face links-inactive" style="background-image: url('assets/images/attendant_4.png');"></div>
							<div class="guest-face links-inactive" style="background-image: url('assets/images/attendant_5.png');"></div>
							<div class="guest-face links-inactive" style="background-image: url('assets/images/attendant_6.png');"></div>

						</div>
						<div class="single-event-further-info links-inactive"><i class="fa fa-arrow-right"></i></div>
					</div>
					<h2 id="single-event-sponsor-title">Event is supported by:</h2>
					<div id="single-event-sponsor" class="grid-areas"></div>
					<div class="single-event-side-containers" id="single-event-social-container">
						<div>Share event in other media</div>
						<div id="single-event-share-event" class="single-event-icons">
							<div class="single-event-social-media-icons social-media-icons links-inactive" style="background-image: url('assets/icons/facebook-logo-button.svg')"	></div>
							<div class="single-event-social-media-icons social-media-icons links-inactive" style="background-image: url('assets/icons/google-plus-logo-button.svg')"></div>
							<div class="single-event-social-media-icons social-media-icons links-inactive" style="background-image: url('assets/icons/twitter-logo-button.svg')"></div>
							<div class="single-event-social-media-icons social-media-icons links-inactive" style="background-image: url('assets/icons/share.svg')"></div>	
						</div>		
					</div>

				</div>
			</section>
		</div>







		

		<!-- FOOTER: -->
		<?php require_once('templates/footer.php'); ?>

		<!-- LOGIN POPUP: -->
		<?php require_once('templates/login.php'); ?>

		<!-- REGISTRATION POPUP: -->
		<?php require_once('templates/registration.php'); ?>

		<!-- LOGOUT POPUP: -->
		<?php require_once('templates/logout.php'); ?>


		<!-- JQUERY LINKED IN BELOW: -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>