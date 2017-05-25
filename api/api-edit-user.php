<?php

$sNewFirstName = $_POST['firstName'];
$sNewLastName = $_POST['lastName'];
$sNewEmail = $_POST['email'];
$sId = $_POST['sUniqueId'];



$sFileName = '../texts/users.txt';
$sajUsers = file_get_contents( $sFileName );
$ajUsers = json_decode( $sajUsers );

for( $i = 0; $i < count($ajUsers) ; $i++ ){
	if( $sId ==  $ajUsers[$i]->sUniqueId  ){

		$ajUsers[$i]->firstName = $sNewFirstName;
		$ajUsers[$i]->lastName = $sNewLastName;
		$ajUsers[$i]->email = $sNewEmail;

		// If we receive 'bIsAdmin':
		if( isset( $_POST['admin'] ) ){
			$ajUsers[$i]->admin = ( $_POST['admin'] === 'true' ) ? true : false;
		}

		break;
	};
};


$sajUsers = json_encode( $ajUsers , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE );

file_put_contents( $sFileName , $sajUsers );

// Give response:
$sjResponse = '{
	"sStatusType" 		: "success",
	"sStatusTitle"		: "Success",
	"sStatusMessage"	: "You have successfully updated this user!"
}';

echo $sjResponse;

?>