function draw(f) {

        rdr = new FileReader(),
        im  = new Image(),
        ext = format.value;
         
    rdr.onload = function() {
        im.onload = function() {
            cnv.width = this.width;
            cnv.height = this.height;                
            ctx.drawImage(this, 0, 0);
            image.src = picture.innerHTML = cnv.toDataURL(ext)
        }
        im.src = this.result
    }
     
    rdr.readAsDataURL(f)
}