var closeB1 = document.querySelector('.closeb1')
	var closeB2 = document.querySelector('.closeb2')
	var closeB3 = document.querySelector('.closeb3')
	var chance = Math.floor(Math.random() * (4-1))+1
	alert (chance)
	
	
	
	
	if(chance ===1){
	closeB1.onclick = function() {
	closeB1.setAttribute ('src','images/3.png');
}
    closeB2.onclick = function() {
	closeB2.setAttribute ('src','images/2.png');
}
    closeB3.onclick = function() {
	closeB3.setAttribute ('src','images/2.png');
}
}	
	else if(chance ===2){
	closeB1.onclick = function() {
	closeB1.setAttribute ('src','images/2.png');
}
    closeB2.onclick = function() {
	closeB2.setAttribute ('src','images/3.png');
}
    closeB3.onclick = function() {
	closeB3.setAttribute ('src','images/2.png');
}
}	
    else if(chance ===3){
	closeB1.onclick = function() {
	closeB1.setAttribute ('src','images/2.png');
}
    closeB2.onclick = function() {
	closeB2.setAttribute ('src','images/2.png');
}
    closeB3.onclick = function() {
	closeB3.setAttribute ('src','images/3.png');
}
}	