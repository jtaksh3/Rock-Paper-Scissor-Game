
var myVar;
var min = Math.ceil(0);
var max = Math.floor(2);
var player1_value;
var player2_value;
var player3_value;
var player4_value;
var player1_name = 'Player 1';
var player2_name = 'Player 2';
var player3_name = 'Player 3';
var player4_name = 'Player 4';

function loadFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("front-page").style.display = "block";
}

$('#player-name-btn').on('click',function(){
	$('#player-name-btn').css('display', 'none');
	$('.front-page p').css('display', 'none');
	$('#play-btn').css('display', 'none');
	$('#row').css('display', 'block');
});

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


$('#play-btn').on('click',function(){
	$('#front-page').css('display', 'none');
	$('#loader1').css('display', 'block');
	$('#game-player1-name').html('' + player1_name);
	$('#game-player2-name').html('' + player2_name);
	$('#game-player3-name').html('' + player3_name);
	$('#game-player4-name').html('' + player4_name);
	myVar = setTimeout(showGamePage, 2000);
});

function showGamePage() {
  document.getElementById("loader1").style.display = "none";
  document.getElementById("game-page").style.display = "block";
}

$('#player1-btn').on('click',function(){
	$('#player1-btn').css('display', 'none');
	player1_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player1_value === 0)
		$('#player1-img').attr('src', './assets/img/paper.jpg');
	else if(player1_value === 1)
		$('#player1-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player1-img').attr('src', './assets/img/scissor.jpg');

	$('#player2-btn').css('display', 'block');
});

$('#player2-btn').on('click',function(){
	$('#player2-btn').css('display', 'none');
	player2_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player2_value === 0)
		$('#player2-img').attr('src', './assets/img/paper.jpg');
	else if(player2_value === 1)
		$('#player2-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player2-img').attr('src', './assets/img/scissor.jpg');
	
	$('#player3-btn').css('display', 'block');
});

$('#player3-btn').on('click',function(){
	$('#player3-btn').css('display', 'none');
	player3_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player3 === 0)
		$('#player3-img').attr('src', './assets/img/paper.jpg');
	else if(player3_value === 1)
		$('#player3-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player3-img').attr('src', './assets/img/scissor.jpg');
	
	$('#player4-btn').css('display', 'block');
});

$('#player4-btn').on('click',function(){
	$('#player4-btn').css('display', 'none');
	player4_value = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player4_value === 0)
		$('#player4-img').attr('src', './assets/img/paper.jpg');
	else if(player4_value === 1)
		$('#player4-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player4-img').attr('src', './assets/img/scissor.jpg');
	
	$('#play-again-btn').css('display', 'block');

	//AJAX request
    // $.ajax({
    //   type: "POST",
    //   url: ,
    //   cache: false,
    //   data: 
});