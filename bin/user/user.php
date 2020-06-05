<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/rock-paper-scissor-game/bin/config/database.php';

class User
{
    private $conn;

    private $player1 = "Player1";
    private $player2 = "Player2";
    private $player3 = "Player3";
    private $player4 = "Player4";
    private $players_result = "Players_Result";

    private $uniqueID;
    private $inserted;

    function __construct($db)
    {
        $this->conn = $db;
    }

    public function setUniqueID($uniqueID) 
    {
    	$this->uniqueID = $uniqueID;
    }

    public function setInserted($inserted)
    {
        $this->inserted = $inserted;
    }

    public function playersResult($player1, $player2, $player3, $player4)
    {

        // Query to insert record
        $query = "INSERT INTO " . $this->players_result . "(Unique_ID, Player1, Player2, Player3, Player4, Inserted) VALUES(:uniqueID, :player1, :player2, :player3, :player4, :inserted)";
        // Prepare query
        $stmt = $this->conn->prepare($query);

        // Bind values
        $stmt->bindParam(":uniqueID", $this->uniqueID);
        $stmt->bindParam(":player1", $player1);
        $stmt->bindParam(":player2", $player2);
        $stmt->bindParam(":player3", $player3);
        $stmt->bindParam(":player4", $player4);
        $stmt->bindParam(":inserted", $this->inserted);

        //Execute Query
        if ($stmt->execute())
        	return true;
        return false;
    }

    public function playerScorecard($player1, $player2, $player3, $player4)
    {
    	$player1p = $this->player1();

    	// Query to insert record
        $query1 = "INSERT INTO " . $this->player1 . "(Unique_ID, Player2, Player3, Player4, Inserted) VALUES(:uniqueID, :player2, :player3, :player4, :inserted)";
        // Prepare query
        $stmt1 = $this->conn->prepare($query1);

        $stmt1->bindParam(":uniqueID", $this->uniqueID);
        $stmt1->bindParam(":inserted", $this->inserted);
         
        if($player1p){
            $stmt1->bindParam(":player2", ($player1[0] + $player1p[0]));
            $stmt1->bindParam(":player3", ($player1[1] + $player1p[1]));
            $stmt1->bindParam(":player4", ($player1[2] + $player1p[2]));
        }
        else {
        	$stmt1->bindParam(":player2", $player1[0]);
            $stmt1->bindParam(":player3", $player1[1]);
            $stmt1->bindParam(":player4", $player1[2]);
        }

        // Query to insert record
        $query2 = "INSERT INTO " . $this->player2 . "(Unique_ID, Player1, Player3, Player4, Inserted) VALUES(:uniqueID, :player1, :player3, :player4, :inserted)";
        // Prepare query
        $stmt2 = $this->conn->prepare($query2);

        $stmt2->bindParam(":uniqueID", $this->uniqueID);
        $stmt2->bindParam(":player1", $player2[0]);
        $stmt2->bindParam(":player3", $player2[1]);
        $stmt2->bindParam(":player4", $player2[2]);
        $stmt2->bindParam(":inserted", $this->inserted);

        // Query to insert record
        $query3 = "INSERT INTO " . $this->player3 . "(Unique_ID, Player1, Player2, Player4, Inserted) VALUES(:uniqueID, :player1, :player2, :player4, :inserted)";
        // Prepare query
        $stmt3 = $this->conn->prepare($query3);

        $stmt3->bindParam(":uniqueID", $this->uniqueID);
        $stmt3->bindParam(":player1", $player3[0]);
        $stmt3->bindParam(":player2", $player3[1]);
        $stmt3->bindParam(":player4", $player3[2]);
        $stmt3->bindParam(":inserted", $this->inserted);

        // Query to insert record
        $query4 = "INSERT INTO " . $this->player4 . "(Unique_ID, Player1, Player2, Player3, Inserted) VALUES(:uniqueID, :player1, :player2, :player3, :inserted)";
        // Prepare query
        $stmt4 = $this->conn->prepare($query4);

        $stmt4->bindParam(":uniqueID", $this->uniqueID);
        $stmt4->bindParam(":player1", $player4[0]);
        $stmt4->bindParam(":player2", $player4[1]);
        $stmt4->bindParam(":player3", $player4[2]);
        $stmt4->bindParam(":inserted", $this->inserted);

        if ($stmt1->execute() && $stmt2->execute() && $stmt3->execute() && $stmt4->execute())
        	return true;
        return false;
    }   

    public function player1() {

    	$query = "SELECT Player2, Player3, Player4 FROM " . $this->player1 . " WHERE UniqueID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
    	// Prepare query statement
        $stmt = $this->conn->prepare($query);
        // Execute query
        $stmt->execute();
        // Fetch a row
        $result = $stmt->fetch();

        return $result;
    }

    public function player2() {

    	$query = "SELECT Player1, Player3, Player4 FROM " . $this->player2 . " WHERE UniqueID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
    	// Prepare query statement
        $stmt = $this->conn->prepare($query);
        // Execute query
        $stmt->execute();
        // Fetch a row
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return array($result);
    	
    } 

    public function player3() {

    	$query = "SELECT Player1, Player2, Player4 FROM " . $this->player3 . " WHERE UniqueID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
    	// Prepare query statement
        $stmt = $this->conn->prepare($query);
        // Execute query
        $stmt->execute();
        // Fetch a row
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return $result;
    } 

    public function player4() {
    	
    	$query = "SELECT Player1, Player2, Player3 FROM " . $this->player4 . " WHERE UniqueID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
    	// Prepare query statement
        $stmt = $this->conn->prepare($query);
        // Execute query
        $stmt->execute();
        // Fetch a row
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return $result;

    }

    public function getAllUserDetails()

    {
        $result_query = "SELECT Player1, Player2, Player3, Player4 FROM " . $this->players_result . " Unique_ID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
        $query1 = "SELECT Player2, Player3, Player4 FROM " . $this->player1 . " WHERE Unique_ID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
        $query2 = "SELECT Player1, Player3, Player4 FROM " . $this->player2 . " WHERE Unique_ID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
        $query3 = "SELECT Player1, Player2, Player4 FROM " . $this->player3 . " WHERE Unique_ID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
        $query4 = "SELECT Player1, Player2, Player3 FROM " . $this->player4 . " WHERE Unique_ID='" . $this->uniqueID . "' ORDER BY'" . $this->inserted . "' DESC LIMIT 1";
        
        // Prepare query statement
        $result_stmt = $this->conn->prepare($result_query);
        $result_stmt->execute();
        $result = $result_stmt->fetch(PDO::FETCH_ASSOC);

        // Prepare query statement
        $stmt1 = $this->conn->prepare($query1);
        $stmt1->execute();
        $player1_result = $stmt1->fetch(PDO::FETCH_ASSOC);

        // Prepare query statement
        $stmt2 = $this->conn->prepare($query2);
        $stmt2->execute();
        $player2_result = $stmt2->fetch(PDO::FETCH_ASSOC);

        // Prepare query statement
        $stmt3 = $this->conn->prepare($query3);
        $stmt3->execute();
        $player3_result = $stmt3->fetch(PDO::FETCH_ASSOC);

        // Prepare query statement
        $stmt4 = $this->conn->prepare($query4);
        $stmt4->execute();
        $player4_result = $stmt4->fetch(PDO::FETCH_ASSOC);

        return array(
            "result" => $result,
            "player1_result" => $player1_result,
            "player2_result" => $player2_result,
            "player3_result" => $player3_result,
            "player4_result" => $player4_result
        );
    }
}