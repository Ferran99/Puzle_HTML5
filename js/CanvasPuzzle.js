function splitIntoPieces (rows, columns){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    var img = new Image();
    img.onload = function (){
        for( i = 0; i < 10 /* rows */; i++){
            for( j = 0; j < 10 /* columns */; j++){
                x = i * 40;
                y = j * 40;

                ctx.drawImage(img, x, y, 40, 40, x + i * 5, y + j * 5, 40, 40);
            }        
        }
    }
}