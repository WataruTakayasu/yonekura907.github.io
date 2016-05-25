window.onload =function() {

	document.getElementById('btn1').onclick=changeColor;
	document.getElementById('btn2').onclick=changeSize;


	function changeColor() {
		ballOjt.style.color='#FFF';
		ballOjt.style.backgroundColor = '#06F';
	}

	function changeSize() {
		ballOjt.style.width = '160px';
		ballOjt.style.height = '160px';
		ballOjt.style.borderRadius = '80px';

	}
	function changeReset(){
		ballOjt.style.color='#000';
		ballOjt.style.backgroundColor = '#F60';
		ballOjt.style.width = '80px';
		ballOjt.style.height = '80px';
		ballOjt.style.borderRadius = '40px';
		ballOjt.style.top = '0px';
		ballOjt.style.left = '0px';
	}

	function movePos(xpos,ypos){
		ballOjt.style.top = ypos+'px';
		ballOjt.style.left = xpos+'px';
	};
};