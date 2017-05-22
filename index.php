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
		<div class="page-contents" data-page-name="index-page">
			<section class="full-screen-covers" id="first-cover-picture"></section>

			<section class="background-secondary" id="short-introduction">
				<div class="content-max-width-narrow">

					<h4><img src="assets/logos/logo_white.png" style="height:1.3em" alt="OriginKBH"> is a place hosting events to discover the technology scene in Copenhagen</h4>

					<div class="buttons main-buttons links-inactive">About us</div>

				</div>
			</section>

			<section class="text-black" id="event-list">
				<div class="content-max-width-wide">
					<div id="event-list-content">

						<h4>Check out the upcoming events:</h4>
						<ul id="event-short-list">
							<li class="event-list-items"></li>
							<li class="event-list-items"></li>
							<li class="event-list-items"></li>
						</ul>

					</div>

					<div class="buttons main-buttons links-inactive">Go to event list</div>
				</div>
			</section>

			<section class="background-primary" id="call-to-submit">
				<div class="content-max-width-narrow">
					<div id="call-to-submit-content">

						<h4>Never miss our events</h4>
						<p>Subscribe to our newsletters and stay tuned with updates</p>

						<form>
							<input type="text" name="email" placeholder="Your email">
							<div class="buttons main-buttons links-inactive">Submit</div>
						</form>

					</div>
				</div>
			</section>

			<section class="text-black" id="contact-us">
				<div class="content-max-width-narrow">
					<div id="contact-us-content">

						<h4>Contact us</h4>
						<ul id="contact-info-table">
							<li class="contact-info-cells">
								<p class="fontWeight-medium">OUR ADDRESS</p>
								<p>
									Refhalevej 179.<br>
									1432 København<br>
									Denmark
								</p>
							</li>

							<li class="contact-info-cells">
								<p class="fontWeight-medium">GENERAL INQUIRIES</p>
								<p>
									<a href="mailto:hello@originkbh.dk" class="links-active">hello@originkbh.dk</a><br>
									<a href="tel:+45 5050-5050" class="links-active">+45 5050-5050</a>
								</p>
							</li>

							<li class="contact-info-cells">
								<p class="fontWeight-medium">PARTNERSHIP</p>
								<p>
									<a href="mailto:mikkel@originkbh.dk" class="links-active">mikkel@originkbh.dk</a><br>
									<a href="tel:+45 5050-5050" class="links-active">+45 5050-5051</a>
								</p>
							</li>
						</ul>

						<ul id="social-media-icon-list">
							<li class="social-media-icons" id="instagram"></li>
							<li class="social-media-icons" id="facebook"></li>
							<li class="social-media-icons" id="google-plus"></li>
							<li class="social-media-icons" id="youtube"></li>
						</ul>

					</div>
				</div>
			</section>

			<section class="full-screen-covers" id="bottom-map"></section>

		</div>

		<!-- REGISTRATION POPUP: -->
		<?php require_once('templates/registration.php'); ?>


		<!-- JQUERY LINKED IN BELOW: -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>