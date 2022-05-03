var Canvas = new fabric.Canvas("myCanvas");
block_imageWidth = 30;
block_imageHeight = 30;

player_x=10;
player_y=10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_imageWidth);
        block_image_object.scaleToHeight(block_imageHeight);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='80') {
        console.log("p and shift key is pressed.");
        block_imageWidth=block_imageWidth+10;
        block_imageHeight=block_imageHeight+10;
        document.getElementById("current_width").innerHTML=block_imageWidth;
        document.getElementById("current_height").innerHTML=block_imageHeight;
    }

    if (e.shiftKey==true && keyPressed=='77') {
        console.log("m and shift key is pressed.");
        block_imageWidth=block_imageWidth-10;
        block_imageHeight=block_imageHeight-10;
        document.getElementById("current_width").innerHTML=block_imageWidth;
        document.getElementById("current_height").innerHTML=block_imageHeight;
    }

    if (keyPressed=='38') {
        up();
        console.log("up");
    }

    if (keyPressed=='40') {
        down();
        console.log("down");
    }

    if (keyPressed=='37') {
        left();
        console.log("left");
    }

    if (keyPressed=='39') {
        right();
        console.log("right");
    }

    if (keyPressed=='87') {
        new_image('wall.jpg');
        console.log("w");
    }

    if (keyPressed=='71') {
        new_image('ground.png');
        console.log("g");
    }

    if (keyPressed=='76') {
        new_image('light_green.png');
        console.log("l");
    }

    if (keyPressed=='84') {
        new_image('trunk.jpg');
        console.log("t");
    }

    if (keyPressed=='82') {
        new_image('roof.jpg');
        console.log("r");
    }

    if (keyPressed=='89') {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if (keyPressed=='68') {
        new_image('dark_green.png');
        console.log("d");
    }

    if (keyPressed=='85') {
        new_image('unique.png');
        console.log("u");
    }

    if (keyPressed=='67') {
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up()
        {
          if (player_y>=0)
          {
              player_y = player_y - block_imageHeight;
              console.log("block_imageHeight" + block_imageHeight);
              console.log("When Up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
              Canvas.remove(player_object);
              player_update();
          }
        }

function down()
        {
          if (player_y<=500)
          {
              player_y = player_y + block_imageHeight;
              console.log("block_imageHeight" + block_imageHeight);
              console.log("When Down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
              Canvas.remove(player_object);
              player_update();
          }
        }

function left()
        {
          if (player_x>=0)
          {
              player_x = player_x - block_imageWidth;
              console.log("block_imageWidth" + block_imageWidth);
              console.log("When Left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
              Canvas.remove(player_object);
              player_update();
          }
        }

function right()
        {
          if (player_x<=850)
          {
              player_x = player_x + block_imageWidth;
              console.log("block_imageWidth" + block_imageWidth);
              console.log("When Right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
              Canvas.remove(player_object);
              player_update();
          }
        }

