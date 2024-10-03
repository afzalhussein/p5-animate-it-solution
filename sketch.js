let width=600;
let height=400;
let blueLeft=0;
let direction=0;
function setup() {
     // https://p5js.org/reference/#/p5/createCanvas
     // (width, height) of canvas
      createCanvas(width, height);
   }

   function draw() {
      // https://p5js.org/reference/#/p5/background
      background(220);
      strokeWeight(1);
      stroke(51);
      fill('red');
      rect(275, 0, 55, 55);
      strokeWeight(0);
      stroke(51);
      fill('blue');
      if(!direction){  
        rect(blueLeft++, 165, 55, 55);
      } 
     if(direction){
        rect(blueLeft--, 165, 55, 55);
      }
      strokeWeight(4);
      stroke('black');
      line(300, 55, blueLeft+30, 165);
      if(blueLeft+55>width) direction=1;
      if(blueLeft<0) direction=0;
   }