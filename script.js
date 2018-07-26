// function changeColor(color){
// 	document.getElementsByTagName('Body')[0].style.backgroundColor=color.value;
// }


let para = document.querySelector("#color-name");



function changeColor(){
	let color = document.querySelector("#color-inp").value;
	// 
	document.getElementsByTagName('Body')[0].style.backgroundColor=color;
	console.log (color);

}