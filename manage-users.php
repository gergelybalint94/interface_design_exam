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
		<div class="page-contents" data-page-name="manage-users-page">
			<section class="banner-pictures" id="banner-picture"></section>

			<section class="content-max-width-narrow" id="manage-users-page-content">
				<h4>Manage user list</h4>

				<div id="user-list">

					<!-- Header row: -->
					<div class="tr" id="header-row">
						<div class="td fontWeight-medium checkmark-cells fa fa-key fw"></div>
						<div class="td fontWeight-medium">Name</div>
						<div class="td fontWeight-medium">Surname</div>
						<div class="td fontWeight-medium">Email</div>
						<div class="td fontWeight-medium row-button-wraps"></div>
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