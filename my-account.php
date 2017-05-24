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
		<div class="page-contents" data-page-name="my-account-page">
			<section class="content-max-width-wide" id="my-account-page-content">
				<div id="my-account-container">
					<div id="container-title">Account settings</div>
					<div id="photo-container">
						<div class="account-label">Photo</div>
						<div id="account-img"></div>
						<div id="photo-info-container">
							<div class="links-inactive" id="change-photo-btn" class="buttons">CHANGE PHOTO <i class="fa fa-sort-desc"></i></div>
							<div id="photo-description">This photo is used for your profile, and appears in event's attendants list</div>
						</div>
					</div>
					<div>
						<div class="account-label">Name</div>
						<div><input type="text" name="account-name" class="account-info-inputs" id="account-name-input" placeholder="name"></div>
					</div>
					<div>
						<div class="account-label">Surname</div>
						<div><input type="text" name="account-surname" class="account-info-inputs" id="account-surname-input" placeholder="surname"></div>	
					</div>
					<div>
						<div class="account-label">Email</div>	
						<div><input type="text" name="account-email" class="account-info-inputs" id="account-email-input" placeholder="email"></div>	
					</div>
					<div>
						<div class="account-label">Password</div>	
						<div><input type="text" name="account-password" class="account-info-inputs" id="account-password-input" placeholder="password"></div>	
						<div id="change-password" class="links-inactive">Change password</div>
					</div>

					<div id="account-save-container">
						<div id="account-save-changes-btn" class="buttons">Save Changes</div>
						<div id="account-delete-account-btn">Delete my account</div>
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