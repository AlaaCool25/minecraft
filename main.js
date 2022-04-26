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