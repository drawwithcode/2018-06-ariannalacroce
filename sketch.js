var data;
var myBalls= [];
var myImage;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage6;
var myImage7;
var myImage8;

var palace;
var royal;

function preload(){
  data = loadJSON('assets/monarchs.json');
  myImage = loadImage('./assets/Elizabeth.png');
  myImage2 = loadImage('./assets/Charles.png');
  myImage3 = loadImage('./assets/Charlotte.png');
  myImage4 = loadImage('./assets/Harry.png');
  myImage5 = loadImage('./assets/Meghan.png');
  myImage6 = loadImage('./assets/george.png');
  myImage7 = loadImage('./assets/kate.png');
  myImage8 = loadImage('./assets/william.png');

  palace = loadImage('./assets/palace.jpg');
  royal = loadImage('./assets/cake.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  for(var i=0; i<data.people.length; i++ ) {
    var x = random(0,width);
    var y = random(0,height/3);
    var zx = data.people[i].reign/1.5;
    var zy = data.people[i].reign/1.5;
    var name = data.people[i].name;

    var b = new royalc(x, y, zx,zy, name);
    myBalls.push(b);
  }
}

function draw() {
  frameRate(2);
  image(palace,0,0, palace.width/1.3, palace.height/1.3);

  image(myImage,random(380,390),random(300,310),myImage.width/5, myImage.height/5);
  image(myImage2,random(200,210),random(330,340),myImage2.width/5, myImage2.height/5);
  image(myImage3,random(350,360),random(200,210),myImage3.width/13, myImage3.height/13);
  image(myImage4,random(300,310),random(260,270),myImage4.width/7, myImage4.height/7);
  image(myImage5,random(440,450),random(220,230),myImage5.width/8, myImage5.height/8);
  image(myImage6,random(640,650),random(220,230),myImage6.width/13, myImage6.height/13);
  image(myImage7,random(560,570),random(250,260),myImage7.width/11.5, myImage7.height/11.5);
  image(myImage8,random(640,650),random(360,370),myImage8.width/7, myImage8.height/7);

  for(var i=0; i<myBalls.length; i++){
    myBalls[i].display();
  }

  fill(0);
  textSize(18);
  var w = textWidth("How old are they?");
  rect(115, 222, w+20, 25);
  fill(255);
  textAlign(CENTER);
  text("How old are they?", 200, 240);
}

function royalc(_x,_y,_zx,_zy,_name){
  this.x = _x;
  this.y = _y;
  this.zx = _zx;
  this.zy = _zy;
  this.name = _name;

  this.display = function(){
    image(royal,this.x,this.y,this.zx,this.zy);

if (mouseIsPressed) {
  fill(0);
  textSize(13);

  var w = textWidth(this.name);
  rect(this.x-50, this.y-25, w+40, 20);
  fill(255);

  textAlign(CENTER);
  text(this.name, this.x+30, this.y-10)
} else {}
}}

  function photo(){
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.color = 'red';

  this.move = function() {
    this.x += this.x + random(-5,5);
    this.y += this.y + random(-5,5);
  }
}
