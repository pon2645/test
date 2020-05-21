var myImage = document.querySelector('img');

myImage.onclick = function() {
	const imageArea = document.getElementById('imageArea');
	const images = ['images/flower_marigold.png', 'images/flower_himawari_mark.png', 'images/asagao_hachiue.png'];

	const imageNo = Math.floor( Math.random() * images.length);
	//imageArea.src = images[imageNo];
	myImage.setAttribute ('src',images[imageNo])
}