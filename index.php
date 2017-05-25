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
				<div class="content-max-width-narrowest">

					<h4><img src="assets/logos/logo_white.png" style="height:1.5em" alt="OriginKBH"> is a place hosting events to discover the technology scene in Copenhagen</h4>

					<div class="buttons main-buttons links-active" data-href="about.php">About us</div>

				</div>
			</section>

			<section class="text-black" id="event-list">
				<div class="content-max-width-wide">
					<div id="event-list-content">

						<h4>Check out the upcoming events:</h4>
						<section id="event-list">

							<div class="event-list-item-wraps background-pictures links-active" style="background-image:url('assets/images/events-machine-learning.png');" data-href="single-event.php">
								<div class="event-list-items">
									<div class="event-titles fontWeight-medium">MICROSOFT Hackathon: Machine Learning for the Search for Extraterrestrial Intelligence</div>
									<div class="event-date-place-wraps">
										<div class="event-dates">May 26, 2017</div>
										<div class="event-places">Origin KBH</div>
									</div>
								</div>
							</div>

							<div class="event-list-item-wraps background-pictures links-inactive" style="background-image:url('assets/images/mr-robot.png');">
								<div class="event-list-items">
									<div class="event-titles fontWeight-medium">BLUE OCEAN ROBOTICS presents: Meet the scientist. Robotics.</div>
									<div class="event-date-place-wraps">
										<div class="event-dates">May 31, 2017</div>
										<div class="event-places">Origin KBH</div>
									</div>
								</div>
							</div>

							<div class="event-list-item-wraps background-pictures links-inactive" style="background-image:url('assets/images/biotech.jpg');">
								<div class="event-list-items">
									<div class="event-titles fontWeight-medium">Exploring the New Horizons of Nano Biotech</div>
									<div class="event-date-place-wraps">
										<div class="event-dates">June 16, 2017</div>
										<div class="event-places">Origin KBH</div>
									</div>
								</div>
							</div>
							</section>
								</div>

								<div class="buttons main-buttons links-active" data-href="events.php">Go to event list</div>
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

						<?php require_once('templates/social-media-icon-list.php'); ?>

					</div>
				</div>
			</section>

			<section class="full-screen-covers" id="bottom-map"></section>

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