<?php
session_start();
if (isset($_SESSION['uniqueID']) && isset($_SESSION['player1_name']) && isset($_SESSION['player2_name'])
    && isset($_SESSION['player3_name']) && isset($_SESSION['player4_name'])) {

    //If Session created
    header('Location: ./game.php'); //Redirect to Game page
    exit();
}

?>

<html>

    <head>

        <meta http-equiv="Cache-control" content="no-cache">
        <link rel="stylesheet" type="text/css" href="./assets/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />

    </head>

    <body onload="loadFunction1()">
    <body>

    	<i style="color: #fff; display: block; margin: 20% auto;" id="loader1" class="fas fa-sync fa-spin fa-6x fa-fw"></i>
    	
    	<i style="color: #fff; display: none; margin: 20% auto;" id="loader3" class="fas fa-stroopwafel fa-spin fa-6x fa-fw"></i>
            
        <h1>Rock-Paper-Scissor<span> Game</span></h1>
        <div class="front-page" id="front-page">
            <p>Want to Enter Player Name Manually <button class="player-name-btn" id="player-name-btn">Click Here</button></p>
            <div class="row" id="row">
                <button title="Close" class="player-name-close-btn" id="player-name-close-btn">&times;</button>
                <div class='col adjust'>
                    <label>First Player Name</label>
                    <input type="text" placeholder="Default (Player 1)" id="player1-name">
                </div>
                <div class="col">
                    <label>Second Player Name</label>
                    <input type="text" placeholder="Default (Player 2)" id="player2-name">
                </div>
                <div class="col">
                    <label>Third Player Name</label>
                    <input type="text" placeholder="Default (Player 3)" id="player3-name">
                </div>
                <div class="col">
                    <label>Fourth Player Name</label>
                    <input type="text" placeholder="Default (Player 4)" id="player4-name">
                </div>
                <button class="player-name-save-btn" id="player-name-save-btn">Save</button>
            </div>
            <button class="play-btn" id="play-btn">Let's Play</button>
        </div>

        

		<div class="result-page" id="result-page">
		</div>
    
    <script type="text/javascript" src="./assets/style.js"></script>

    </body>

</html>