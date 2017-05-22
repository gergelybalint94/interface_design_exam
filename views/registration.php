<!DOCTYPE html>
	<html>
	<!-- HEAD: -->
	<head>
	<title>Under Discussion</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900">
	<link rel="stylesheet" href="../css/style.css" type="text/css" >
</head>

	<!-- BODY: -->
	<body>

		<!-- HEADER (POSITION:FIXED): -->
		<?php require_once('../templates/header.php'); ?>
		<?php require_once('../templates/sidebar.php'); ?>
		<div class="page-contents" data-page-name="registration-page">
			<div id="signup-container">
				<div class="signup-container-child">
					<h1 class="fontWeight-medium">Sign up</h1>
				</div>
				<div class="signup-container-child">
					<div class="signup-container-fields">
						<div id="signup-facebook"><div class="fa fa-facebook"></div> Signup with Facebook</div>
						<div id="signup-google"><div class="fa fa-google"></div> Signup with Google+</div>
					</div>
					<form class="forms" id="signup-form" method="post">
					<div class="signup-container-fields">
						<div id="signup-names">
							<input type="text" name="firstName" id="firstName" placeholder="First Name">
							<input type="text" name="lastName" id="lastName" placeholder="Last Name">
						</div>
						<input type="email" name="email" id="email" placeholder="Email">
						<input type="password" name="password" id="password" placeholder="password">
						<input type="password" name="password" id="password" placeholder="Repeat Password">
						<button type="submit" name="submit-signup" class="fontWeight-medium">Sign up</button>
					</div>
					</form>
				</div>
			</div>
		</div>

		<!-- JQUERY LINKED IN BELOW: -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="../js/script.js"></script>
	</body>
</html>