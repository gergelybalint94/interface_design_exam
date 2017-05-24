<?php 
/*AN API FOR LOGGING IN*/


$sUniqueId = $_POST['sUniqueId'];

$sFileName = "../texts/users.txt";

$sajUsers = file_get_contents( $sFileName );
$ajUsers = json_decode( $sajUsers );
for($i=0;$i<sizeOf($ajUsers);$i++){
	if($ajUsers[$i]->sUniqueId == $sUniqueId){
		$firstName = $ajUsers[$i]->firstName;
		$lastName = $ajUsers[$i]->lastName;
		$email = $ajUsers[$i]->email;
		$sUniqueId = $ajUsers[$i]->sUniqueId;
		echo '{"email":"'.$email.'", "firstName":"'.$firstName.'", "lastName":"'.$lastName.'", "sUniqueId":"'.$sUniqueId.'"}';
	}
};
?>