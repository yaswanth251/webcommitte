document.querySelectorAll('.gallery img').forEach(image =>{
	image.onclick=()=>{
		document.querySelector('.popup').style.display='block';
		document.querySelector('body').style.background='rgb(54, 24, 82)';
		document.querySelector('.gallery').style.display='none'
		document.querySelector('.popup img').src=image.getAttribute('src');

	}
});
document.querySelector('.popup span').onclick=()=>{
	document.querySelector('.popup').style.display='none';
	document.querySelector('body').style.background='rgb(53, 25, 53)';
	document.querySelector('.gallery').style.display='grid'	

}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
