var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
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

    if (keypressed == '37') {
        left()
        console.log('left')
    }
    
    if (keypressed == '38') {
        up()
        console.log('up')
    }
    
    if (keypressed == '39') {
        right()
        console.log('right')
    }
    
    if (keypressed == '40') {
        down()
        console.log('down')
    }

    if (keypressed == '67') {
        new_image('cloud.jpg')
        console.log('c')
    }
    
    if (keypressed == '68') {
        new_image('dark_green.png')
        console.log('d')
    }

    if (keypressed == '71') {
        new_image('ground.png')
        console.log('g')
    }
    
    if (keypressed == '76') {
        new_image('light_green.png')
        console.log('l')
    }

    if (keypressed == '82') {
        new_image('roof.jpg')
        console.log('r')
    }
    
    if (keypressed == '84') {
        new_image('trunk.jpg')
        console.log('t')
    }
    
    if (keypressed == '85') {
        new_image('unique.png')
        console.log('u')
    }
    
    if (keypressed == '87') {
        new_image('wall.jpg')
        console.log('w')
    }

    if (keypressed == '89') {
        new_image('yellow_wall.png')
        console.log('y')
    }
}





