<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/rock-paper-scissor-game/bin/config/database.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/rock-paper-scissor-game/bin/result/result.php';

    
    if (isset($_POST['player1_img']) && isset($_POST['player2_img']) && isset($_POST['player3_img']) 
        && isset($_POST['player4_img']) && isset($_POST['player1_array']) && isset($_POST['player2_array']) 
        && isset($_POST['player3_array']) && isset($_POST['player4_array'])) {

        $player1_img = $_POST['player1_img']; 
        $player2_img = $_POST['player2_img'];
        $player3_img = $_POST['player3_img'];
        $player4_img = $_POST['player4_img'];

        $player1_array = $_POST['player1_array'];
        $player2_array = $_POST['player2_array'];
        $player3_array = $_POST['player3_array'];
        $player4_array = $_POST['player4_array'];

        $uniqueID = uniqid();

        
        $db = new Database();
        
        $userDB = $db->getUserDBConnection();

        
        $user = new Result($userDB);

        
        $user->setUniqueID($uniqueID);
        $user->setInserted(date('Y-m-d H:i:s'));

        
        $response1 = $user->playersResult($player1_img, $player2_img, $player3_img, $player4_img);
        $response2 = $user->playerScorecard($player1_array, $player2_array, $player3_array, $player4_array);

        if($response1 && $response2)
            exit('Hello');
        else
            exit('Na Bhai');
    
    }
?>