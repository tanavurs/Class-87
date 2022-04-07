var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_widht=30;
block_height=30;

var new_player="";
var block_image="";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        new_player=Img;
        new_player.scaleToWidth(150);
        new_player.scaleToHeight(140);
        new_player.set({
            top:player_y,
            left:player_x
        });
        canvas.add(new_player);
    } )
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        get_image=Img;
        get_image.scaleToWidth(block_width);
        get_image.scaleToHeight(block_height);
        get_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(get_image);
    } )
}

window.addEventListener("keydown", mykeydown)

function mykeydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
if (e.shiftKey == true && keypressed == '80') {
block_width=block_width + 10;
block_height=block_height + 10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}

if (e.shiftKey == true && keypressed == '77') {
    block_width = block_width - 10;
    block_height= block_height - 10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
    }
}






