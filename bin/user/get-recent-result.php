<?php

    include_once $_SERVER['DOCUMENT_ROOT'] . '/Rock-Paper-Scissor-Game/bin/config/database.php';
    include_once $_SERVER['DOCUMENT_ROOT'] . '/Rock-Paper-Scissor-Game/bin/user/user.php';

    session_start();
    if (!isset($_SESSION['uniqueID']) || !isset($_SESSION['player1_name']) || !isset($_SESSION['player2_name'])
    || !isset($_SESSION['player3_name']) || !isset($_SESSION['player4_name'])) {

        //If Session not created
        exit('Unauthorized');
    }

    $uniqueID = $_SESSION['uniqueID'];

    $db = new Database();
    // Connect to db
    $userDB = $db->getUserDBConnection();

    // Create a user instance
    $user = new User($userDB);

    // Get user data from session variable
    $user->setUniqueID($uniqueID);

    if (isset($_GET['getRecentScores'])) {
        $scores = $user->getRecentScores();
        exit(json_encode(array("status" => 1, "data" => $scores)));
    }
exit(json_encode(array("status" => 0))); // Status 0 means request failed