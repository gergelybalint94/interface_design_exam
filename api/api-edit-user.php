<?php
/*THIS API FOR UPDATING EACH USER'S PRIVILEGE, EITHER FOR UPGRADING OR DEGRADING, DEPENDING ON THE POSTED DATA*/


$sNewFirstName = $_POST["firstName"];
$sNewLastName = $_POST["lastName"];
$sNewEmail = $_POST["email"];
$sId = $_POST["sUniqueId"];


$sFileName = "../texts/users.txt";
$sajUsers = file_get_contents( $sFileName );
$ajUsers = json_decode( $sajUsers );

for( $i = 0; $i < count($ajUsers) ; $i++ ){
	if( $sId ==  $ajUsers[$i]->sUniqueId  ){
		$ajUsers[$i]->firstName = $sNewFirstName;
		$ajUsers[$i]->lastName = $sNewLastName;
		$ajUsers[$i]->email = $sNewEmail;
		break;
	};
};


$sajUsers = json_encode( $ajUsers , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE );

file_put_contents( $sFileName , $sajUsers );

echo $sNewEmail;

?>