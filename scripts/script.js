    var closeB1 = document.querySelector('.closeb1')
	var closeB2 = document.querySelector('.closeb2')
	var closeB3 = document.querySelector('.closeb3')
	var chance = Math.floor(Math.random() * (4-1))+1
	var myButton = document.querySelector('.reload')


	
	
	if(chance ===1){
myClick('images/3.png','images/2.png','images/2.png', "<p>Вы проиграли. Попробуйте заново! Нажмите кнопку</p>");
}	
	else if(chance ===2){
myClick('images/2.png','images/3.png','images/2.png');

}	
    else if(chance ===3){
myClick('images/2.png','images/2.png','images/3.png');
}
function myClick(im1,im2,im3)
{
	closeB1.onclick = function() {
	closeB1.setAttribute ('src',im1);
}
    closeB2.onclick = function() {
	closeB2.setAttribute ('src',im2);

}
    closeB3.onclick = function() {
	closeB3.setAttribute ('src',im3);
}
}
    myButton.onclick = function() {
		document.location.reload();
}