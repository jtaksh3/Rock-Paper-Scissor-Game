<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/rock-paper-scissor-game/bin/config/database.php';

function aaja() {

$player1 = "Player1";
$uniqueID = '5ed9e305c8742';

    $db = new Database();
    // Connect to db
    $userDB = $db->getUserDBConnection();

    $conn = $userDB;

$query = "SELECT Player2, Player3, Player4 FROM " . $player1 . " WHERE Unique_ID='" . $uniqueID . "' ORDER BY Inserted";
      // Prepare query statement
        $stmt = $conn->prepare($query);
        // Execute query
        $stmt->execute();
        // Fetch a row
        $result = $stmt->fetchAll();

        return $result;
      }

      $hello = aaja();

      print_r($hello);
      // if($hello)
        // echo $hello[0] . "uoo";
?>