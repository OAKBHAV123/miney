var canvas=new fabric.Canvas("myCanvas");
var player_X=10;
var player_Y=10;

var block_width=30;
var block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}

function newImg(getImg){
fabric.Image.fromURL(getImg,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_object.scaleToWidth(block_width);
    block_object.set({
        top:player_Y,
        left:player_X
    });
    canvas.add(block_object);
});
}
//now waht//

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    KeyPressed=e.keyCode;
    console.log(KeyPressed);

    if(e.shiftKey == true && KeyPressed == "80")
    {
        console.log("p and shift pressed together")
        block_width =block_width + 10;
        block_height= block_height + 10
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    
    if(e.shiftKey == true && KeyPressed == "77")
    {
        console.log("m and shift pressed together")
        block_width =block_width - 10;
        block_height= block_height - 10
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

if(KeyPressed == "37")
left();
console.log("left");

if(KeyPressed == "38")
up();
console.log("up");

if(KeyPressed == "39")
right();
console.log("right");

if(KeyPressed == "40")
down();
console.log("down");

if(KeyPressed == "87")
newImg("wall.jpg");
console.log("w");

if(KeyPressed == "71")
newImg("ground.png");
console.log("g");

if(KeyPressed == "76")
newImg("lighy_green.png");
console.log("l");

if(KeyPressed == "84")
newImg("trunk.jpg");
console.log("t");

if(KeyPressed == "82")
newImg("roof.jpg");
console.log("r");

if(KeyPressed == "89")
newImg("yellow_wall.jpg");
console.log("y");

if(KeyPressed == "68")
newImg("dark_green.png");
console.log("d");

if(KeyPressed == "85")
newImg("unique.png");
console.log("u");

if(KeyPressed == "67")
newImg("cloud.jpg");
console.log("c");

}


function up()
{
    if(player_Y > 0)
    {
        player_Y = player_Y-block_height;
        console.log("block_height is" + block_height);
        console.log("when up aroow key is pressed X =" + player_X + " and y =" + player_Y);
        canvas.remove(player_object)
        player_update();
    }

}

function down()
{
    if(player_Y <= 500)
    {
      player_Y =player_Y + block_height;
      console.log("block_height is" + block_height);
      console.log("when down aroow key is pressed X =" + player_X + " and y =" + player_Y);
      canvas.remove(player_object);
      player_update(); 
    }
}

function left()
{
    if(player_X > 0)
    {
        player_X= player_X - block_width;
        console.log("block_width is" + block_width);
        console.log("when left aroow key is pressed Y" + player_Y +" and x ="+player_X);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_X <=850)
    {
       player_X=player_X + block_width;
       console.log("block_width is" + block_width);
       console.log("when right aroow key os pressed Y" +player_Y + " and x=" + player_X);
       canvas.remove(player_object);
       player_update();
    }
}