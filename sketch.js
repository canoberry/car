var wall, bullet;
var line1, line2 ; 

function setup(){
  var canvas = createCanvas(1200,400);
   wall1 = new Wall(700,320);
   bullet = new Bullet(100,320,30,30);

}
function draw(){
    background(0);

    wall1.display();
    bullet.display();
}