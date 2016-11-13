var action = "up";
  //переменные: канва, контекст, смещение для тени, массив точек, буфер для растра
  var canvas,ctx,offset,points,bufer;

  //инициализация канвы
  function initcnvs(){
   canvas = document.getElementById('cnvs');
   ctx = canvas.getContext('2d');
   ctx.lineWidth = 3;
   //смещение (больше чем ширина канвы)
   offset = 1000;
   //параметры тени
   ctx.shadowBlur = 3;
   ctx.shadowColor = "#000000";
   ctx.shadowOffsetX = -offset;
   points = new Array();
   //в буфере будем хранить растр канвы
   bufer = ctx.getImageData(0,0,canvas.width,canvas.height);
  };

  //при нажатии запоминаем первую точку
  function mDown(e){
   action = "down";
   points.push([e.pageX,e.pageY]);
  };

  //при отпускании кнопки - сохраняем канву и обнуляем массив точек
  function mUp(e){
   action = "up";
   points = new Array();
   bufer = ctx.getImageData(0,0,canvas.width,canvas.height);
  };

  //при движении - восстанавливаем растр из буфера и перерисовываем линию
  function mMove(e){
   if (action == "down") {
    ctx.putImageData(bufer,0,0);
    points.push([e.pageX,e.pageY]);
    ctx.beginPath();
    ctx.moveTo(points[0][0]+offset, points[0][1]);
    for (i = 1; i < points.length; i++){
     ctx.lineTo(points[i][0]+offset,points[i][1]);
    }
    ctx.stroke();
   }
  };