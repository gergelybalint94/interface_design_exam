<?php 
/*AN API FOR LOGGING IN*/


$email = $_POST['email'];
$password = $_POST['password'];

$sFileName = "../texts/users.txt";

$sajUsers = file_get_contents( $sFileName );
$ajUsers = json_decode( $sajUsers );
for($i=0;$i<sizeOf($ajUsers);$i++){
	if($ajUsers[$i]->email == $email && $ajUsers[$i]->password == $password){
		$firstName = $ajUsers[$i]->firstName;
		$lastName = $ajUsers[$i]->lastName;
		$fullName = $firstName . " " . $lastName;
		echo '{"email":"'.$email.'", "name":"'.$fullName.'"}';
	}
};
?>