
var myVar;
var min = Math.ceil(0);
var max = Math.floor(2);
var player1;
var player2;
var player3;
var player4;

function loadFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("front-page").style.display = "block";
}

$('.play-btn').on('click',function(){
	$('#front-page').css('display', 'none');
	$('#loader1').css('display', 'block');
	myVar = setTimeout(showGamePage, 2000);
});

function showGamePage() {
  document.getElementById("loader1").style.display = "none";
  document.getElementById("game-page").style.display = "block";
}

$('#player1-btn').on('click',function(){
	$('#player1-btn').css('display', 'none');
	player1 = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player1 === 0)
		$('#player1-img').attr('src', './assets/img/paper.jpg');
	else if(player1 === 1)
		$('#player1-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player1-img').attr('src', './assets/img/scissor.jpg');

	$('#player2-btn').css('display', 'block');
});

$('#player2-btn').on('click',function(){
	$('#player2-btn').css('display', 'none');
	player2 = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player2 === 0)
		$('#player2-img').attr('src', './assets/img/paper.jpg');
	else if(player2 === 1)
		$('#player2-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player2-img').attr('src', './assets/img/scissor.jpg');
	
	$('#player3-btn').css('display', 'block');
});

$('#player3-btn').on('click',function(){
	$('#player3-btn').css('display', 'none');
	player3 = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player3 === 0)
		$('#player3-img').attr('src', './assets/img/paper.jpg');
	else if(player3 === 1)
		$('#player3-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player3-img').attr('src', './assets/img/scissor.jpg');
	
	$('#player4-btn').css('display', 'block');
});

$('#player4-btn').on('click',function(){
	$('#player4-btn').css('display', 'none');
	player4 = Math.floor(Math.random() * (max - min + 1)) + min;
	if(player4 === 0)
		$('#player4-img').attr('src', './assets/img/paper.jpg');
	else if(player4 === 1)
		$('#player4-img').attr('src', './assets/img/rock.jpg');
	else
		$('#player4-img').attr('src', './assets/img/scissor.jpg');
	
	$('#player1-btn').css('display', 'block');

	//AJAX request
    $.ajax({
      type: "POST",
      url: ,
      cache: false,
      data: 
});