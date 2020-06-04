<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/Assignment/bin/config/database.php';

class Result
{
    private $conn;

    private $player1 = "Player1";
    private $player2 = "Player2";
    private $player3 = "Player3";
    private $player4 = "Player4";
    private $players_result = "Players_Result";

    function __construct($db)
    {
        $this->conn = $db;
    }

}