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
		<div class="page-contents" data-page-name="events-page">
			<section class="banner-pictures" id="banner-picture"></section>

			<section class="content-max-width-narrow" id="events-page-content">
				<h4>Origin KBH events</h4>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
			</section>

			<section class="content-max-width-narrow" id="event-filter-area">
				<input type="text" name="txt-keyword" placeholder="Short events BY KEYWORD">
				<div id="main-event-filters-wrap">
					<div class="main-event-filters links-active selected" id="by_date">Short by date</div>
					<div class="main-event-filters links-active" id="by_price">Short by price</div>
					<div class="main-event-filters links-active" id="by_cat">Short by category</div>
				</div>
			</section>

			<section class="content-max-width-narrow" id="event-list">

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

				<div class="event-list-item-wraps background-pictures links-inactive" style="background-image:url('assets/images/awards.jpg');">
					<div class="event-list-items">
						<div class="event-titles fontWeight-medium">Tech Geek Awards 2017</div>
						<div class="event-date-place-wraps">
							<div class="event-dates">September 11, 2017</div>
							<div class="event-places">Origin KBH</div>
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