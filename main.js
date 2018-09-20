window.onload = setTimeout(function(){
if (confirm('Tu veux venir sur xXxvidsxXx ?')) {
	window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
else {
	return false ;
}
}, 10000);

document.querySelector('button').onclick = function () {
  document.body.style.backgroundColor = "#ff00ff";  //background color in magenta
  document.querySelector('p').style.color="blue" // paragraphs "p" font color in green
  document.body.style.color = 'green'; // headings in green
  document.querySelector('p').style.fontFamily = "Papyrus"; // paragraphs font family in Papyrus
  document.querySelector('h1','h2','h3').style.fontFamily = "Comic Sans MS";} // header font family comic sans





