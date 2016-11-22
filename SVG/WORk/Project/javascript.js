//alert("asdf");
//onclick="alert(event.clientX + ' / ' + event.clientY)" //то в свг писать надо
/*function colorCrug() {
	var item = document.getElementById("krug");
	if (item.style.fill = "green"){
		item.style.fill = "red"
	}
}*/
function kek(col){
    var item = document.getElementById("s");
    item.style.stroke = col;
    item.scale(30);
    item.transform.translate(100,100);
    
}


function kek1(){
    var item = document.getElementById("square");
    item.transform.translate(200,100);
    
}