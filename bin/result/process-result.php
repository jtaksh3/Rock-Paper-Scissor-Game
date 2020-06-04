<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/Project/bin/config/database.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/Project/bin/result/result.php';


$body = file_get_contents('php://input');
$body = json_decode($body, true);

    
    if (isset($body['player1_value']) && isset($body['player2_value']) && isset($body['player3_value']) && isset($body['player4_value'])) {

        $player1_value = $body['player1_value'];  
        $player2_value = $body['player2_value'];
        $player3_value = $body['player3_value'];
        $player4_value = $body['player3_value'];

        $uniqueID = getIPAddress();  

        
        $db = new Database();
        
        $userDB = $db->getUserDBConnection();

        
        $user = new Result($userDB);

        
        $user->setUniqueID($uniqueID);

        
        $response = $user->insertResult();
            
        exit(json_encode(array("code" => $response)));
    
    }

    function getIPAddress() 
    {  
    //whether ip is from the share internet  
     if(!emptyempty($_SERVER['HTTP_CLIENT_IP'])) {  
                $ip = $_SERVER['HTTP_CLIENT_IP'];  
        }  
    //whether ip is from the proxy  
    elseif (!emptyempty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];  
     }  
    //whether ip is from the remote address  
    else {  
             $ip = $_SERVER['REMOTE_ADDR'];  
     }  
     return $ip;  
}  
?>