<?php
session_start();
if (!isset($_SESSION['uniqueID']) || !isset($_SESSION['player1_name']) || !isset($_SESSION['player2_name'])
    || !isset($_SESSION['player3_name']) || !isset($_SESSION['player4_name'])) {

    //If Session not created
    header('Location: ./index.php'); //Redirect to Index page
    exit();
}

$player1_name = $_SESSION['player1_name'];
$player2_name = $_SESSION['player2_name'];
$player3_name = $_SESSION['player3_name'];
$player4_name = $_SESSION['player4_name'];

?>

<html>

    <head>

        <meta http-equiv="Cache-control" content="no-cache">
        <link rel="stylesheet" type="text/css" href="./assets/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />

    </head>

    <body onload="loadFunction2()">
    	
        <i style="color: #fff; display: block; margin: 20% auto;" id="loader2" class="fas fa-spinner fa-pulse fa-6x fa-fw"></i>
        
        <h1>Rock-Paper-Scissor<span> Game</span></h1>
        <div class="game-page" id="game-page">
        	<div class="container">
        	    <div class="panel-wrapper">
				    <div class="panel-head" id="game-player1-name">
				    	<?php echo $player1_name; ?>
				    </div>
				    <div class="panel-body">
					    <div class="player1-output">
					    	<img src="" id="player1-img" />
						    <button class="player-btn" id="player1-btn">Click Here!</button>
					    </div>
				    </div>
			    </div>
     			<div class="panel-wrapper">
     				<div class="panel-head" id="game-player2-name">
     					<?php echo $player2_name; ?>
     				</div>
     				<div class="panel-body">
     					<div class="player2-output">
     						<img id="player2-img" />
     						<button class="player-btn" style="display: none;" id="player2-btn">Click Here!</button>
     					</div>
     				</div>
     			</div>
    			<div class="panel-wrapper">
    				<div class="panel-head" id="game-player3-name">
    					<?php echo $player3_name; ?>
    				</div>
    				<div class="panel-body">
    					<div class="player3-output">
    						<img id="player3-img" />
    						<button class="player-btn" style="display: none;" id="player3-btn">Click Here!</button>
    					</div>
    				</div>
    			</div>
	    		<div class="panel-wrapper">
	    			<div class="panel-head" id="game-player4-name">
	    				<?php echo $player4_name; ?>
	    			</div>
	    			<div class="panel-body">
	    				<div class="player4-output">
	    					<img id="player4-img" />
	    					<button class="player-btn" style="display: none;" id="player4-btn">Click Here!</button>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	<button class="play-again-btn" id="play-again-btn">Play Again</button>
	    	<div id="current-result-page" class="current-result-page" style="display: none;">
	    	    <h2>Results</h2>
	    	    <table id="personal-details" class="details-table">
			  	    <tr>
			    		<th scope="row"><?php echo $player1_name; ?></th>
			    		<th scope="row"><?php echo $player2_name; ?></th>
			    		<th scope="row"><?php echo $player3_name; ?></th>
			    		<th scope="row"><?php echo $player4_name; ?></th>
			    	</tr>
		      		<tr>
		    	   		<td><input type="text" id="player1" placeholder="Player 1" disabled value="" required></td>
		    	    	<td><input type="text" id="player2" placeholder="Player 2" disabled value="" required></td>
		    	    	<td><input type="text" id="player3" placeholder="Player 3" disabled value="" required></td>
		    	    	<td><input type="text" id="player4" placeholder="Player 4" disabled value="" required></td>
		    	    </tr>
		    	</table>
		    	<table id="personal-details" class="details-table">
		    	    	<tr>
				    	<th scope="row">Totals</th>
				    	<th scope="row"></th>
				    	<th scope="row"></th>
				    	<th scope="row">Against</th>
	    				<th scope="row"></th>
	    				<th scope="row"></th>
	    			</tr>
	    			<tr>
	    				<th scope="row"></th>
	    				<th scope="row"></th>
	    				<th scope="row"><?php echo $player1_name; ?></th>
	    				<th scope="row"><?php echo $player2_name; ?></th>
	    				<th scope="row"><?php echo $player3_name; ?></th>
    					<th scope="row"><?php echo $player4_name; ?></th>
    				</tr>
    				<tr>
    					<th scope="row"></th>
    					<th scope="row"><?php echo $player1_name; ?></th>
    					<td><input type="text" value="-" disabled required></td>
    					<td><input type="text" id="1player2" placeholder="Player 2" disabled required></td>
    					<td><input type="text" id="1player3" placeholder="Player 3" disabled required></td>
    					<td><input type="text" id="1player4" placeholder="Player 4" disabled required></td>
				    </tr>
				    <tr>
				    	<th scope="row">Player Wins</th>
				    	<th scope="row"><?php echo $player2_name; ?></th>
				    	<td><input type="text" id="2player1" placeholder="Player 1" disabled required></td>
				    	<td><input type="text" value="-" disabled required></td>
				    	<td><input type="text" id="2player3" placeholder="Player 3" disabled value="" required></td>
				    	<td><input type="text" id="2player4" placeholder="Player 4" disabled value="" required></td>
				    </tr>
				    <tr>
				    	<th scope="row"></th>
				    	<th scope="row"><?php echo $player3_name; ?></th>
				    	<td><input type="text" id="3player1" placeholder="Player 1" disabled required></td>
				    	<td><input type="text" id="3player2" placeholder="Player 2" disabled required></td>
				    	<td><input type="text" value="-" disabled required></td>
				    	<td><input type="text" id="3player4" placeholder="Player 4" disabled required></td>
				    </tr>
				    <tr>
			    		<th scope="row"></th>
			    		<th scope="row"><?php echo $player4_name; ?></th>
			    		<td><input type="text" id="4player1" placeholder="Player 1" disabled value="" required></td>
			    		<td><input type="text" id="4player2" placeholder="Player 2" disabled value="" required></td>
			    		<td><input type="text" id="4player3" placeholder="Player 3" disabled value="" required></td>
			    		<td><input type="text" value="-" disabled required></td>
			    	</tr>
			    </table>
			    <button class="play-btn">All Results</button>
		    </div>
		</div>

		<script type="text/javascript" src="./assets/style.js"></script>

    </body>

</html>