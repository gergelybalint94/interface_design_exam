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
					<div class="tr">
						<div class="td fontWeight-medium checkmark-cells">Site admin</div>
						<div class="td fontWeight-medium">Name</div>
						<div class="td fontWeight-medium">Surname</div>
						<div class="td fontWeight-medium">Email</div>
						<div class="td fontWeight-medium row-button-wraps"></div>
					</div>
					<div class="tr">
						<div class="td checkmark-cells">S</div>
						<div class="td">Name</div>
						<div class="td">Surnamsdfe</div>
						<div class="td">name@gmail.com</div>
						<div class="td row-button-wraps">
							<div class="buttons main-buttons">Edit</div>
							<div class="buttons warning-buttons">Delete</div>
						</div>
					</div>
					<div class="tr">
						<div class="td checkmark-cells">S</div>
						<div class="td">Namsdfsdfe</div>
						<div class="td">Surname</div>
						<div class="td">name@gmail.com</div>
						<div class="td row-button-wraps">
							<div class="buttons main-buttons">Edit</div>
							<div class="buttons warning-buttons">Delete</div>
						</div>
					</div>
					<div class="tr">
						<div class="td checkmark-cells">S</div>
						<div class="td">Name</div>
						<div class="td">Surname</div>
						<div class="td">namsdfe@gmail.com</div>
						<div class="td row-button-wraps">
							<div class="buttons main-buttons">Edit</div>
							<div class="buttons warning-buttons">Delete</div>
						</div>
					</div>
					<div class="tr">
						<div class="td checkmark-cells">S</div>
						<div class="td">Name</div>
						<div class="td">Surname</div>
						<div class="td">name@gmail.com</div>
						<div class="td row-button-wraps">
							<div class="buttons main-buttons">Edit</div>
							<div class="buttons warning-buttons">Delete</div>
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