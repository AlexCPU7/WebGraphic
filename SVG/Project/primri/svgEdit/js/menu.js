var paper;

$(document).ready(function() {
  paper = new Canvas();
  paper.createCanvasByDiv(document.getElementById("canvas"));
});

function newSvg(){
  if(paper.hasChanges()) {
    if(confirm('Changes will be lost!')) {
      paper.createCanvasByDiv(document.getElementById("canvas"));
    }
  }
}

function openImg() {
  var html =
  '<html><head><title>Open files...</title></head><body>' +
  '<h3>Load Image</h3>' +
  '<form method="post" action="/load.php" enctype="multipart/form-data">' +
  '<input type="file" name="openimg">' +
  '<br><br><input type="submit" value="Open">' +
  '</form>' +
  '</body></html>';
  newWindow('Open', 300, 130, html);
}

function saveSvg() {
  newWindow('Save', 640, 480, "<textarea style='width:100%;height:100%;'>"+paper.getContent()+"</textarea>");
}

function backObj() {
  paper.BackgroundCurObj();
}

function foreObj() {
  paper.ForegroundCurObj();
}

function delObj() {
  paper.DeleteCurObj();
}

function circ() {
  paper.Circle();
}

function line() {
  paper.Line();
}

function rect() {
  paper.Rect();
}

function elips() {
  paper.Ellipse();
}

function setAttr() {
  paper.setObjectAttr($("#attr").val());
}

function changeCurObject() {
  paper.changeCurObject(document.obj.select.options[document.obj.select.selectedIndex].value);
}

function addText() {
  paper.Text();
}

function ZoomIn() {
  paper.ZoomIn();
}

function ZoomOut() {
  paper.ZoomOut();
}

function newWindow(name, width, height, html) {
  var newwin = open('', name, 'width=' + width + ',height=' + height);
  newwin.document.open();
  newwin.document.writeln(html);
  newwin.document.close();
  return true;
}
