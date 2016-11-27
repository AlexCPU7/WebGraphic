function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));   
   ev.dataTransfer.setDragImage(ev.target,100,100);
   return true;
}