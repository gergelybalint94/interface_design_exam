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
		<div class="page-contents" data-page-name="control-panel-page">
			<section class="banner-pictures" id="banner-picture"></section>

			<section class="content-max-width-wide" id="about-page-content">
				<h4>Control panel</h4>
				<h5>Here you can modify and edit your settings.</h5>
			</section>

			<section class="grid-areas content-max-width-wide" id="control-panel-grids">
			</section>
		</div>

		<!-- FOOTER: -->
		<?php require_once('templates/footer.php'); ?>

		<!-- REGISTRATION POPUP: -->
		<?php require_once('templates/registration.php'); ?>


		<!-- JQUERY LINKED IN BELOW: -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>