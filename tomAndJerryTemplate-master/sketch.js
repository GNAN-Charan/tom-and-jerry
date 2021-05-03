var bgimg
var cat,catimg1,catimg2,catimg3
var housemouse,mouseimg1,mouseimg2,mouseimg3

function preload() 
{
    //load the images here
    bgimg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg3 = loadAnimation("images/mouse4.png")
}

function setup()
{
    createCanvas(1000,800);
    
    cat = createSprite(800,600,10,10)
    cat.scale = .3
    cat.addAnimation("catsitting",catimg1)
    cat.addAnimation("catrunning",catimg2)
    
    housemouse = createSprite(200,600,10,10)
    housemouse.scale = .3
    housemouse.addAnimation("mousestanding",mouseimg1)
    housemouse.addAnimation("mouseteasing",mouseimg2)
}

function draw()
{

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    

    drawSprites();
    keyPressed()
}


function keyPressed()
{

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
    housemouse.changeAnimation("mouseteasing",mouseimg2)
    housemouse.framedelay = 25
  }

  if(keyCode === LEFT_ARROW)
{
    cat.changeAnimation("catrunning",catimg2)
    cat.velocityX = -2
    cat.framedelay = 25 
}

}
