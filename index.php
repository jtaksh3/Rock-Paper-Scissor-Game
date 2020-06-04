<html>

    <head>

        <meta http-equiv="Cache-control" content="no-cache">
        <link rel="stylesheet" type="text/css" href="./assets/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />

    </head>

    <body onload="loadFunction()">
    <body>

    	<i style="color: #fff; display: block; margin: 20% auto;" id="loader" class="fas fa-sync fa-spin fa-6x fa-fw"></i>
    	<i style="color: #fff; display: none; margin: 20% auto;" id="loader1" class="fas fa-spinner fa-pulse fa-6x fa-fw"></i>
    	<i style="color: #fff; display: none; margin: 20% auto;" id="loader2" class="fas fa-stroopwafel fa-spin fa-6x fa-fw"></i>
            
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

        <div class="game-page" id="game-page">
        	<div class="container">
        	    <div class="panel-wrapper">
				    <div class="panel-head" id="game-player1-name">
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
			    		<th scope="row">Player 1</th>
			    		<th scope="row">Player 2</th>
			    		<th scope="row">Player 3</th>
			    		<th scope="row">Player 4</th>
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
	    				<th scope="row">Player 1</th>
	    				<th scope="row">Player 2</th>
	    				<th scope="row">Player 3</th>
    					<th scope="row">Player 4</th>
    				</tr>
    				<tr>
    					<th scope="row"></th>
    					<th scope="row">Player 1</th>
    					<td><input type="text" value="-" disabled required></td>
    					<td><input type="text" name="1player2" placeholder="Player 2" disabled required></td>
    					<td><input type="text" name="1player3" placeholder="Player 3" disabled required></td>
    					<td><input type="text" name="1player4" placeholder="Player 4" disabled required></td>
				    </tr>
				    <tr>
				    	<th scope="row">Player Wins</th>
				    	<th scope="row">Player 2</th>
				    	<td><input type="text" name="2player1" placeholder="Player 1" disabled required></td>
				    	<td><input type="text" value="-" disabled required></td>
				    	<td><input type="text" name="2player3" placeholder="Player 3" disabled value="" required></td>
				    	<td><input type="text" name="2player4" placeholder="Player 4" disabled value="" required></td>
				    </tr>
				    <tr>
				    	<th scope="row"></th>
				    	<th scope="row">Player 3</th>
				    	<td><input type="text" name="3player1" placeholder="Player 1" disabled required></td>
				    	<td><input type="text" name="3player2" placeholder="Player 2" disabled required></td>
				    	<td><input type="text" value="-" disabled required></td>
				    	<td><input type="text" name="3player4" placeholder="Player 4" disabled required></td>
				    </tr>
				    <tr>
			    		<th scope="row"></th>
			    		<th scope="row">Player 4</th>
			    		<td><input type="text" name="4player1" placeholder="Player 1" disabled value="" required></td>
			    		<td><input type="text" name="4player2" placeholder="Player 2" disabled value="" required></td>
			    		<td><input type="text" name="4player3" placeholder="Player 3" disabled value="" required></td>
			    		<td><input type="text" value="-" disabled required></td>
			    	</tr>
			    </table>
			    <button class="play-btn">All Results</button>
		    </div>
		</div>

		<div class="result-page" id="result-page">
		</div>
    
    <script type="text/javascript" src="./assets/style.js"></script>

    </body>

</html>