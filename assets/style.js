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

function loadFunction3() {
  myVar = setTimeout(showResultsPage, 2000);
}

function showIndexPage() {
  document.getElementById("loader1").style.display = "none";
  document.getElementById("front-page").style.display = "block";
}

function showGamePage() {
  document.getElementById("loader2").style.display = "none";
  document.getElementById("game-page").style.display = "block";
}

function showResultsPage() {
  document.getElementById("loader3").style.display = "none";
  document.getElementById("result-page").style.display = "block";
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
        	if (response == 'Success') {

	            sessionStorage.setItem("p1", player1_name);
	            sessionStorage.setItem("p2", player2_name);
	            sessionStorage.setItem("p3", player3_name);
	            sessionStorage.setItem("p4", player4_name);
        	    window.location.href = "./game.php";
        	}
        },
        error: function(request, error) {
        	$('h1').html('hello');
        }
    });
});

$('#game-close-btn').on('click',function() {
	$.ajax({
		url: "./bin/user/destroy-session.php",
		method: "POST",
		dataType: "text",
		data: {},
		success: function(response) {
			window.location.href = "./index.php";
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
             	$('#current-result-section').css('display', 'block');
            }
        }
    });
       //AJAX request to retrieve the recent result
    $.ajax({
        url: "./bin/user/get-recent-result.php",
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

			    $('#player1').val(result.Player1);
			    $('#player2').val(result.Player2);
			    $('#player3').val(result.Player3);
			    $('#player4').val(result.Player4);

			    $('#1player2').val(player1_result.Player2);
			    $('#1player3').val(player1_result.Player3);
			    $('#1player4').val(player1_result.Player4);

			    $('#2player1').val(player2_result.Player1);
			    $('#2player3').val(player2_result.Player3);
			    $('#2player4').val(player2_result.Player4);

			    $('#3player1').val(player3_result.Player1);
			    $('#3player2').val(player3_result.Player2);
			    $('#3player4').val(player3_result.Player4);

			    $('#4player1').val(player4_result.Player1);
			    $('#4player2').val(player4_result.Player2);
			    $('#4player3').val(player4_result.Player3);
            }
        }
    });
});

//Play Again Button
$('#play-again-btn').on('click',function() {

	$('#player1-img').attr('src', '');
	$('#player2-img').attr('src', '');
	$('#player3-img').attr('src', '');
	$('#player4-img').attr('src', '');

	$('#player1-btn').css('display', 'block');

	$('#current-result-section').css('display', 'none');

	$('#play-again-btn').css('display', 'none');

});

$('#all-results-btn').on('click',function() {
	window.location.href = './results.php';
});

$('#result-close-btn').on('click',function(){
    window.location.href = "./game.php";
});

//AJAX request to retrieve the result
$.ajax({
        url: "./bin/user/get-all-result.php",
        method: "GET",
        dataType: "json",
        contentType: "application/json",
        data: {
          getAllScores: true
        },
        success: function(response) {

            if (response.status == 1) {

                var result = response.data.result;
                var player1_result = response.data.player1_result;
			    var player2_result = response.data.player2_result;
                var player3_result = response.data.player3_result;
			    var player4_result = response.data.player4_result;
        
        		if(result[0]) {

        			var i = 0;

        			while(result[0]) {
                        
                        var h21 = document.createElement("H2");

                        var text10 = document.createTextNode('Iteration ' + (i+1));

                        h21.appendChild(text10);

        			    var table1 = document.createElement("TABLE");
			            table1.setAttribute('class', 'details-table');

        			    var text11 = document.createTextNode(sessionStorage.getItem("p1"));
			            var text12 = document.createTextNode(sessionStorage.getItem("p2"));
        			    var text13 = document.createTextNode(sessionStorage.getItem("p3"));
			            var text14 = document.createTextNode(sessionStorage.getItem("p4"));
        
        			    var tr11 = document.createElement("TR");
        			    var tr12 = document.createElement("TR");
        
        			    var th11 = document.createElement("TH");
			            th11.setAttribute('scope', 'row');
        			    var th12 = document.createElement("TH");
			            th12.setAttribute('scope', 'row');
        			    var th13 = document.createElement("TH");
			            th13.setAttribute('scope', 'row');
        			    var th14 = document.createElement("TH");
        			    th14.setAttribute('scope', 'row');
        
        			    th11.appendChild(text11);
			            th12.appendChild(text12);
        			    th13.appendChild(text13);
			            th14.appendChild(text14);
        
			            tr11.appendChild(th11);
        			    tr11.appendChild(th12);
        			    tr11.appendChild(th13);
			            tr11.appendChild(th14);
        
			            var td11 = document.createElement("TD");
			            var td12 = document.createElement("TD");
			            var td13 = document.createElement("TD");
        			    var td14 = document.createElement("TD");
        
			            var input11 = document.createElement("INPUT");
        			    input11.setAttribute('type', 'text');
			            input11.setAttribute('value', result[i][0]);
			            input11.setAttribute('disabled', '');
			            var input12 = document.createElement("INPUT");
			            input12.setAttribute('type', 'text');
			            input12.setAttribute('value', result[i][1]);
        			    input12.setAttribute('disabled', '');
			            var input13 = document.createElement("INPUT");
			            input13.setAttribute('type', 'text');
        			    input13.setAttribute('value', result[i][2]);
			            input13.setAttribute('disabled', '');
			            var input14 = document.createElement("INPUT");
			            input14.setAttribute('type', 'text');
			            input14.setAttribute('value', result[i][3]);
			            input14.setAttribute('disabled', '');
        
			            td11.appendChild(input11);
			            td12.appendChild(input12);
        			    td13.appendChild(input13);
			            td14.appendChild(input14);

			            tr12.appendChild(td11);
			            tr12.appendChild(td12);
			            tr12.appendChild(td13);
			            tr12.appendChild(td14);
        
			            table1.appendChild(tr11);
			            table1.appendChild(tr12);

			            var h22 = document.createElement("H2");

                        var text20 = document.createTextNode('Leaderboard');

                        h22.appendChild(text20);

                        //TABLE 2 FOR LEADERBOARD

                        var table2 = document.createElement("TABLE");
			            table2.setAttribute('class', 'details-table');

			            var tr21 = document.createElement("TR");
			            var tr22 = document.createElement("TR");
			            var tr23 = document.createElement("TR");
			            var tr24 = document.createElement("TR");
			            var tr25 = document.createElement("TR");
			            var tr26 = document.createElement("TR");

			            var th21 = document.createElement("TH");
			            th21.setAttribute('scope', 'row');
        			    var th22 = document.createElement("TH");
			            th22.setAttribute('scope', 'row');
        			    var th23 = document.createElement("TH");
			            th23.setAttribute('scope', 'row');
        			    var th24 = document.createElement("TH");
        			    th24.setAttribute('scope', 'row');
        			    var th25 = document.createElement("TH");
			            th25.setAttribute('scope', 'row');
        			    var th26 = document.createElement("TH");
			            th26.setAttribute('scope', 'row');
        			    var th27 = document.createElement("TH");
			            th27.setAttribute('scope', 'row');
        			    var th28 = document.createElement("TH");
        			    th28.setAttribute('scope', 'row');
        			    var th29 = document.createElement("TH");
			            th29.setAttribute('scope', 'row');
        			    var th30 = document.createElement("TH");
			            th30.setAttribute('scope', 'row');
        			    var th31 = document.createElement("TH");
			            th31.setAttribute('scope', 'row');
        			    var th32 = document.createElement("TH");
        			    th32.setAttribute('scope', 'row');
        			    var th33 = document.createElement("TH");
			            th33.setAttribute('scope', 'row');
        			    var th34 = document.createElement("TH");
			            th34.setAttribute('scope', 'row');
        			    var th35 = document.createElement("TH");
			            th35.setAttribute('scope', 'row');
        			    var th36 = document.createElement("TH");
        			    th36.setAttribute('scope', 'row');
        			    var th37 = document.createElement("TH");
			            th37.setAttribute('scope', 'row');
        			    var th38 = document.createElement("TH");
			            th38.setAttribute('scope', 'row');
        			    var th39 = document.createElement("TH");
			            th39.setAttribute('scope', 'row');
        			    var th40 = document.createElement("TH");
        			    th40.setAttribute('scope', 'row');

        			    var text21 = document.createTextNode('Totals');
        			    var text22 = document.createTextNode('Against');
        			    var text23 = document.createTextNode(sessionStorage.getItem("p1"));
			            var text24 = document.createTextNode(sessionStorage.getItem("p2"));
        			    var text25 = document.createTextNode(sessionStorage.getItem("p3"));
			            var text26 = document.createTextNode(sessionStorage.getItem("p4"));
			            var text27 = document.createTextNode(sessionStorage.getItem("p1"));
			            var text28 = document.createTextNode(sessionStorage.getItem("p2"));
        			    var text29 = document.createTextNode(sessionStorage.getItem("p3"));
			            var text30 = document.createTextNode(sessionStorage.getItem("p4"));
			            var text31 = document.createTextNode('Player Wins');

        			    th21.appendChild(text21);
        			    th24.appendChild(text22);
        			    th29.appendChild(text23);
        			    th30.appendChild(text24);
        			    th31.appendChild(text25);
        			    th32.appendChild(text26);
        			    th34.appendChild(text27);
        			    th36.appendChild(text28);
        			    th38.appendChild(text29);
        			    th40.appendChild(text30);
        			    th35.appendChild(text31);

        			    var td21 = document.createElement("TD");
			            var td22 = document.createElement("TD");
			            var td23 = document.createElement("TD");
        			    var td24 = document.createElement("TD");
        			    var td25 = document.createElement("TD");
			            var td26 = document.createElement("TD");
			            var td27 = document.createElement("TD");
        			    var td28 = document.createElement("TD");
        			    var td29 = document.createElement("TD");
			            var td30 = document.createElement("TD");
			            var td31 = document.createElement("TD");
        			    var td32 = document.createElement("TD");
        			    var td33 = document.createElement("TD");
			            var td34 = document.createElement("TD");
			            var td35 = document.createElement("TD");
        			    var td36 = document.createElement("TD");

        			    var input21 = document.createElement("INPUT");
        			    input21.setAttribute('type', 'text');
			            input21.setAttribute('value', '-');
			            input21.setAttribute('disabled', '');
			            var input22 = document.createElement("INPUT");
			            input22.setAttribute('type', 'text');
			            input22.setAttribute('value', player1_result[i][0]);
        			    input22.setAttribute('disabled', '');
			            var input23 = document.createElement("INPUT");
			            input23.setAttribute('type', 'text');
        			    input23.setAttribute('value', player1_result[i][1]);
			            input23.setAttribute('disabled', '');
			            var input24 = document.createElement("INPUT");
			            input24.setAttribute('type', 'text');
			            input24.setAttribute('value', player1_result[i][2]);
			            input24.setAttribute('disabled', '');
			            var input25 = document.createElement("INPUT");
        			    input25.setAttribute('type', 'text');
			            input25.setAttribute('value', player2_result[i][0]);
			            input25.setAttribute('disabled', '');
			            var input26 = document.createElement("INPUT");
			            input26.setAttribute('type', 'text');
			            input26.setAttribute('value', '-');
        			    input26.setAttribute('disabled', '');
			            var input27 = document.createElement("INPUT");
			            input27.setAttribute('type', 'text');
        			    input27.setAttribute('value', player2_result[i][1]);
			            input27.setAttribute('disabled', '');
			            var input28 = document.createElement("INPUT");
			            input28.setAttribute('type', 'text');
			            input28.setAttribute('value', player2_result[i][2]);
			            input28.setAttribute('disabled', '');
			            var input29 = document.createElement("INPUT");
        			    input29.setAttribute('type', 'text');
			            input29.setAttribute('value', player3_result[i][0]);
			            input29.setAttribute('disabled', '');
			            var input30 = document.createElement("INPUT");
			            input30.setAttribute('type', 'text');
			            input30.setAttribute('value', player3_result[i][1]);
        			    input30.setAttribute('disabled', '');
			            var input31 = document.createElement("INPUT");
			            input31.setAttribute('type', 'text');
        			    input31.setAttribute('value', '-');
			            input31.setAttribute('disabled', '');
			            var input32 = document.createElement("INPUT");
			            input32.setAttribute('type', 'text');
			            input32.setAttribute('value', player3_result[i][2]);
			            input32.setAttribute('disabled', '');
			            var input33 = document.createElement("INPUT");
        			    input33.setAttribute('type', 'text');
			            input33.setAttribute('value', player4_result[i][0]);
			            input33.setAttribute('disabled', '');
			            var input34 = document.createElement("INPUT");
			            input34.setAttribute('type', 'text');
			            input34.setAttribute('value', player4_result[i][1]);
        			    input34.setAttribute('disabled', '');
			            var input35 = document.createElement("INPUT");
			            input35.setAttribute('type', 'text');
        			    input35.setAttribute('value', player4_result[i][2]);
			            input35.setAttribute('disabled', '');
			            var input36 = document.createElement("INPUT");
			            input36.setAttribute('type', 'text');
			            input36.setAttribute('value', '-');
			            input36.setAttribute('disabled', '');

			            td21.appendChild(input21);
			            td22.appendChild(input22);
        			    td23.appendChild(input23);
			            td24.appendChild(input24);
			            td25.appendChild(input25);
			            td26.appendChild(input26);
        			    td27.appendChild(input27);
			            td28.appendChild(input28);
			            td29.appendChild(input29);
			            td30.appendChild(input30);
        			    td31.appendChild(input31);
			            td32.appendChild(input32);
			            td33.appendChild(input33);
			            td34.appendChild(input34);
        			    td35.appendChild(input35);
			            td36.appendChild(input36);

			            tr21.appendChild(th21);
        			    tr21.appendChild(th22);
        			    tr21.appendChild(th23);
			            tr21.appendChild(th24);
			            tr21.appendChild(th25);
			            tr21.appendChild(th26);

			            tr22.appendChild(th27);
        			    tr22.appendChild(th28);
        			    tr22.appendChild(th29);
			            tr22.appendChild(th30);
			            tr22.appendChild(th31);
			            tr22.appendChild(th32);

			            tr23.appendChild(th33);
        			    tr23.appendChild(th34);
        			    tr23.appendChild(td21);
			            tr23.appendChild(td22);
			            tr23.appendChild(td23);
			            tr23.appendChild(td24);

			            tr24.appendChild(th35);
        			    tr24.appendChild(th36);
        			    tr24.appendChild(td25);
			            tr24.appendChild(td26);
			            tr24.appendChild(td27);
			            tr24.appendChild(td28);

			            tr25.appendChild(th37);
        			    tr25.appendChild(th38);
        			    tr25.appendChild(td29);
			            tr25.appendChild(td30);
			            tr25.appendChild(td31);
			            tr25.appendChild(td32);

			            tr26.appendChild(th39);
        			    tr26.appendChild(th40);
        			    tr26.appendChild(td33);
			            tr26.appendChild(td34);
			            tr26.appendChild(td35);
			            tr26.appendChild(td36);

			            table2.appendChild(tr21);
			            table2.appendChild(tr22);
			            table2.appendChild(tr23);
			            table2.appendChild(tr24);
			            table2.appendChild(tr25);
			            table2.appendChild(tr26);

                        document.getElementById('result-page').appendChild(h21);
			            document.getElementById('result-page').appendChild(table1);
			            document.getElementById('result-page').appendChild(h22);
			            document.getElementById('result-page').appendChild(table2);

			            i++;
			        }

			    }

			    else {
			    	var h2 = document.createElement("H2");
			    	var text = document.createTextNode('No Results');

			    	h2.appendChild(text);

			    	document.getElementById('result-page').appendChild(h2);
			    }
            }
        }
    });