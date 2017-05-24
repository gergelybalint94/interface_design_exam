<?php
$sId = $_POST["sUniqueId"];

$sFileName = "../texts/users.txt";
$sajUsers = file_get_contents( $sFileName );
$ajUsers = json_decode( $sajUsers );

for( $i = 0; $i < count($ajUsers) ; $i++ ){
	if( $sId ==  $ajUsers[$i]->sUniqueId  ){
		array_splice( $ajUsers , $i , 1);	
		break;
	};
};


$sajUsers = json_encode( $ajUsers , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE );

file_put_contents( $sFileName , $sajUsers );

echo '{"status":"ok"}';
?>