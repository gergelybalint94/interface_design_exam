<?php 
	$sFirstName = $_POST['firstName'];
	$sLastName = $_POST['lastName'];
	$sPassword = $_POST['password'];
	$sEmail = $_POST['email'];
	$sFileName = "../texts/users.txt";

	$sajUsers = file_get_contents( $sFileName );
	$ajUsers = json_decode( $sajUsers );

	/*I AM SPECIFYING THE ID OF THE USERS BY CHECKING THE PREVIOUS ARRAY ITEM'S ID VALUE, AVOIDING THE DUPLICATION OF ID-S WHEN DELETING ANY USERS*/
	if( is_array($ajUsers ) ){
		$amountOfUsers = count($ajUsers)-1;
		$lastIdElement = $ajUsers[$amountOfUsers];
		$lastId = $lastIdElement ->sUniqueId;
	}else{
		$ajUsers = [];
		$lastId = 10000;
	};

	$jUsers = json_decode("{}");
	$jUsers -> sUniqueId = $lastId+1;
	$jUsers -> firstName = $sFirstName;
	$jUsers -> lastName = $sLastName;
	$jUsers -> password = $sPassword;
	$jUsers -> email = $sEmail;
	$jUsers -> admin = false;

	array_push( $ajUsers , $jUsers );

	$sajUsers = json_encode( $ajUsers , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE );

	file_put_contents( $sFileName , $sajUsers );

	echo '{"status":"ok"}';

 ?>