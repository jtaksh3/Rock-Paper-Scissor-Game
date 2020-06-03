// LOADER

var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("front-page").style.display = "block";
}

// $('.play-btn').on('click',function(){
	
