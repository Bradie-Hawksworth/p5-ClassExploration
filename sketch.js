class Rectangle{
  constructor(height, width){
    this.height = height;
    this.width = width
  }
  
  draw(){
    fill('blue');
    rect(10, 10, this.height, this.width);
  }
}

let rectangle1 = new Rectangle(20, 40);

let rectangle2 = {
  height : 20,
  width : 40,
  draw : function(){
    fill('red');
    rect(10, 60, this.height, this.width);
  }
};


function setup() {
  createCanvas(400, 400);
  console.log(rectangle1);
  console.log(rectangle2);
}

function draw() {
  background(220);
  rectangle1.draw();
  rectangle2.draw();  
}
