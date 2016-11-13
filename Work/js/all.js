var canvas;
var context;

window.onload = function() {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    // Подключаем требуемые для рисования события
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
}

var previousColorElement;

function changeColor(color, colo, imgElement) {
    // 	Меняем текущий цвет рисования
    context.strokeStyle = color;
    
    //  Задаём цвет для div
    var div = document.getElementsByClassName('block1'),
        style = div[0].style;

    style.backgroundColor = colo;

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected";

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousColorElement != null)
        previousColorElement.className = "";

    previousColorElement = imgElement;

}

var previousThicknessElement;

function changeThickness(thickness, imgElement) {
    // Изменяем текущую толщину линии
    context.lineWidth = thickness;

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected";

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousThicknessElement != null)
        previousThicknessElement.className = "";

    previousThicknessElement = imgElement;
}

var ti;

function fourTool(color, thickness, ramka) {
    context.strokeStyle = color;
    context.lineWidth = thickness;

    ramka.className = "Selected";

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (ti != null)
        ti.className = "";

    ti = ramka;
}

function startDrawing(e) {
    // Начинаем рисовать
    isDrawing = true;

    // Создаем новый путь (с текущим цветом и толщиной линии) 
    context.beginPath();

    // Нажатием левой кнопки мыши помещаем "кисть" на холст
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
    if (isDrawing == true) {
        // Определяем текущие координаты указателя мыши
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        // Рисуем линию до новой координаты
        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
/*function funBlock1(colo, color){
	var div = document.getElementsByClassName('block1'),
	 style = div[0].style;
	
	style.backgroundColor = colo;
	context.strokeStyle = color;
};*/

function funCol() {
    var theInput = document.getElementById("col");

    theInput.addEventListener("input", function() {
        context.strokeStyle = theInput.value;
        //document.getElementById("rezCol").innerHTML = theInput.value;

        var div = document.getElementsByClassName('block1'),
            style = div[0].style;

        style.backgroundColor = theInput.value;

    });
};

function save() {

    images.src = canvas.toDataUrl(); // тип такого

}

/*
//не нужно, но пусть останется
function myFunction() {
    var x = document.getElementById("col").value;
    document.getElementById("rezCol").innerHTML = x;
	context.strokeStyle = x;
}
function processData(c1) {
	var cv1 = document.getElementById(c1).value;
	context.strokeStyle = cv1;
}
//не нужно
var funCol = function() {
	var col1 = document.getElementById("rezCol").value;
};*/