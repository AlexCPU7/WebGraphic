function incSize(event){
    //alert("123");
    var coordinatiX = (event.clientX); 
    var coordinatiY = (event.clientY);
    console.log(coordinatiX + "/" + coordinatiY);
    alert(document.elementFromPoint(coordinatiX,coordinatiY));
    
    /*var width = Number(event.target.style.width.substring(0, event.target.style.width.length -2));
    $(event.target).unbind();
    $("<p> x " + event.clientX + "/ y " + event.clientY+ "<p>").insertAfter("div:last");*/
    
}

$(document).ready(function() {
    $("div").bind("click", incSize);
});
