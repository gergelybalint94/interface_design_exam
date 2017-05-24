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
		<div class="page-contents" data-page-name="about-page">
			<section class="banner-pictures" id="banner-picture"></section>

			<section class="content-max-width-narrowest" id="about-page-content">
				<h4>About us</h4>
				<h5>OriginCPH is a place where Copenhagen tech events happen</h5>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
			</section>

			<section id="follow-us">
				<h4>Follow us on social media:</h4>

				<?php require_once('templates/social-media-icon-list.php'); ?>
			</section>

			<section class="content-max-width-narrowest" id="team-picture">
				<img src="assets/images/origin-team.jpg">
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