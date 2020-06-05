//GLOBAL VARIABLES
var myVar;
var min = Math.ceil(0);
var max = Math.floor(2);
var player1_value;
var player2_value;
var player3_value;
var player4_value;
var player1_img;
var player2_img;
var player3_img;
var player4_img;
var player1_name = 'Player 1';
var player2_name = 'Player 2';
var player3_name = 'Player 3';
var player4_name = 'Player 4';

//LOADERS
function loadFunction1() {
  myVar = setTimeout(showIndexPage, 2000);
}

function loadFunction2() {
  myVar = setTimeout(showGamePage, 2000);
}

function showIndexPage() {
  document.getElementById("loader1").style.display = "none";
  document.getElementById("front-page").style.display = "block";
}

function showGamePage() {
  document.getElementById("loader2").style.display = "none";
  document.getElementById("game-page").style.display = "block";
}

//OPENS MANUAL PLAYER NAME FORM
$('#player-name-btn').on('click',function(){
	$('#player-name-btn').css('display', 'none');
	$('.front-page p').css('display', 'none');
	$('#play-btn').css('display', 'none');
	$('#row').css('display', 'block');
});

//SAVES MANUAL PLAYER NAME FORM
$('#player-name-save-btn').on('click',function(){

	if($.trim($('#player1-name').val()))
		player1_name = $('#player1-name').val();
	if($.trim($('#player2-name').val()))
		player2_name = $('#player2-name').val();
	if($.trim($('#player3-name').val()))
		player3_name = $('#player3-name').val();
	if($.trim($('#player4-name').val()))
		player4_name = $('#player4-name').val();

	$('#player-name-btn').css('display', 'block');
    $('.front-page p').css('display', 'block');
	$('#play-btn').css('display', 'block');
	$('#row').css('display', 'none');


});

//CLOSES MANUAL PLAYER NAME FORM
$('#player-name-close-btn').on('click',function(){
	
	$('#player1-name').val(player1_name);
	$('#player2-name').val(player2_name);
	$('#player3-name').val(player3_name);
	$('#player4-name').val(player4_name);

	$('#player-name-btn').css('display', 'block');
	$('.front-page p').css('display', 'block');
	$('#play-btn').css('display', 'block');
	$('#row').css('display', 'none');
});

//REDIRECTS TO THE GAME PAGE BY SAVING PLAYER DETAILS AND GENERATES UNIQUEID
$('#play-btn').on('click',function(){

	$.ajax({
        url: "./bin/user/create-session.php",
        type: "POST",
        data: {
            player1_name: player1_name,
            player2_name: player2_name,
            player3_name: player3_name,
            player4_name: player4_name
        },
        success: function(response) {
        	response = $.trim(response);
        	if (response == 'Success')
        	    window.location.href = "./game.php";
        }
    });
});

//GENERATES THE OUTPUT OF PLAYER 1
$('#player1-btn').on('click',function(){
	$('#player1-btn').css('display', 'none');
	player1_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player1_value == 0) {
		$('#player1-img').attr('src', './assets/img/paper.jpg');
		player1_img = 'paper';
	}
	else if(player1_value == 1) {
		$('#player1-img').attr('src', './assets/img/rock.jpg');
		player1_img = 'rock';
	}
	else {
		$('#player1-img').attr('src', './assets/img/scissor.jpg');
		player1_img = 'scissor';
	}

	$('#player2-btn').css('display', 'block');
});

//GENERATES THE OUTPUT OF PLAYER 2
$('#player2-btn').on('click',function(){
	$('#player2-btn').css('display', 'none');
	player2_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player2_value == 0) {
		$('#player2-img').attr('src', './assets/img/paper.jpg');
		player2_img = 'paper';
	}
	else if(player2_value == 1) {
		$('#player2-img').attr('src', './assets/img/rock.jpg');
		player2_img = 'rock';
	}
	else {
		$('#player2-img').attr('src', './assets/img/scissor.jpg');
		player2_img = 'scissor';
	}
	
	$('#player3-btn').css('display', 'block');
});

//GENERATES THE OUTPUT OF PLAYER 3
$('#player3-btn').on('click',function(){
	$('#player3-btn').css('display', 'none');
	player3_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player3_value == 0) {
		$('#player3-img').attr('src', './assets/img/paper.jpg');
		player3_img = 'paper';
	}
	else if(player3_value == 1) {
		$('#player3-img').attr('src', './assets/img/rock.jpg');
		player3_img = 'rock';
	}
	else {
		$('#player3-img').attr('src', './assets/img/scissor.jpg');
		player3_img = 'scissor';
	}
	
	$('#player4-btn').css('display', 'block');
});

// FUNCTION TO CALCULATE SCORES OF PLAYERS
function calculateScores(p1, p2, p3, p4) {
	let scoresArray = new Array();
	if(p1 == 0) {
		if(p2 == 1)
			scoresArray[0] = 1;
		else
			scoresArray[0] = 0;

		if(p3 == 1)
			scoresArray[1] = 1;
		else
			scoresArray[1] = 0;

		if(p4 == 1)
			scoresArray[2] = 1;
		else
			scoresArray[2] = 0;
	}

	else if(p1 == 1) {
		if(p2 == 2)
			scoresArray[0] = 1;
		else
			scoresArray[0] = 0;

		if(p3 == 2)
			scoresArray[1] = 1;
		else
			scoresArray[1] = 0;

		if(p4 == 2)
			scoresArray[2] = 1;
		else
			scoresArray[2] = 0;
	}

	else {
		if(p2 == 0)
			scoresArray[0] = 1;
		else
			scoresArray[0] = 0;

		if(p3 == 0)
			scoresArray[1] = 1;
		else
			scoresArray[1] = 0;

		if(p4 == 0)
			scoresArray[2] = 1;
		else
			scoresArray[2] = 0;
	}
	return scoresArray;
}

//GENERATES THE OUTPUT OF PLAYER 4
$('#player4-btn').on('click',function(){
	$('#player4-btn').css('display', 'none');
	player4_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player4_value == 0) {
		$('#player4-img').attr('src', './assets/img/paper.jpg');
		player4_img = 'paper';
	}
	else if(player4_value == 1) {
		$('#player4-img').attr('src', './assets/img/rock.jpg');
		player4_img = 'rock';
	}
	else {
		$('#player4-img').attr('src', './assets/img/scissor.jpg');
		player4_img = 'scissor';
	}

	var player1_array = calculateScores(player1_value, player2_value, player3_value, player4_value);
	var player2_array = calculateScores(player2_value, player1_value, player3_value, player4_value);
	var player3_array = calculateScores(player3_value, player1_value, player2_value, player4_value);
	var player4_array = calculateScores(player4_value, player1_value, player2_value, player3_value);


    //AJAX request to insert the result
    $.ajax({
        url: "./bin/user/insert-result.php",
        type: "POST",
        data: {
            player1_img: player1_img,
            player2_img: player2_img,
            player3_img: player3_img,
            player4_img: player4_img,
            player1_array: player1_array,
            player2_array: player2_array,
            player3_array: player3_array,
            player4_array: player4_array
         },
        success: function(response) {
        	response = $.trim(response);
        	if(response == 'Success') {
        	    $('#play-again-btn').css('display', 'block');
             	$('#current-result-page').css('display', 'block');
            }
        }
    });

    $.ajax({
        url: "./bin/user/get-recent-scores.php",
        method: "GET",
        dataType: "json",
        contentType: "application/json",
        data: {
          getRecentScores: true
        },
        success: function(response) {

            if (response.status == 1) {
                var result = response.data.result;
			    var player1_result = response.data.player1_result;
			    var player2_result = response.data.player2_result;
			    var player3_result = response.data.player3_result;
			    var player4_result = response.data.player4_result;
            }
  }
});
});