<?php

    include_once $_SERVER['DOCUMENT_ROOT'] . '/rock-paper-scissor-game/bin/config/database.php';

    if (isset($_POST['player1_name']) && isset($_POST['player2_name']) && isset($_POST['player3_name']) 
        && isset($_POST['player4_name'])) {

        

        $player1_name = $_POST['player1_name'];
        $player2_name = $_POST['player2_name'];
        $player3_name = $_POST['player3_name'];
        $player4_name = $_POST['player4_name'];

        session_start();
            
        $_SESSION['uniqueID'] = uniqid();
        $_SESSION['player1_name'] = htmlspecialchars(strip_tags($player1_name));
        $_SESSION['player2_name'] = htmlspecialchars(strip_tags($player2_name));
        $_SESSION['player3_name'] = htmlspecialchars(strip_tags($player3_name));
        $_SESSION['player4_name'] = htmlspecialchars(strip_tags($player4_name));

        exit('Success');
    }

    exit('Failed');

?>