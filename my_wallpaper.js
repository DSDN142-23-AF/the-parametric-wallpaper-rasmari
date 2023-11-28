//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;

//MY COLOURS
let darkOrange = [243, 125, 89,100];
let lightOrange = [244, 150, 88,100];
let lightOrangeFull = [244, 150, 88];
let blue = [95, 143, 209,100];
let purple = [179, 93, 92];
let green = [159, 238, 93,];
let red = [255, 118, 81,100];
let yellow = [226, 139, 36,100];
let pink = [236, 115, 158,100];
let brown = [63, 45, 33,100];
let beige = [255,255,204];

let colours = [darkOrange, lightOrange, lightOrangeFull, blue, purple, green, red, yellow, pink, brown, beige];

//My Parameters to change the wallpaper
let yellowLineDensity = 14; //must be even number!!
let bigCircleY = 35;
let bigCircleX = 10;
let bigCircleSize = 25;
let colorOffset = 10; //cannot be negative
let smallCubeSize = 14; // smaller than 17

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  //background is beige
  shiftColors(colours, colorOffset);
  background( 255, 255, 204 );
  
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(1);
  
  my_tile(0,0,rect_width,rect_height);
}

function my_tile(x, y, sizex, sizey){
  //repeating lines behind the main pattern
  stroke(1);
  line(x + sizex/10*6, y + sizey/2, x + sizex, y + sizey/2);
  line(x + sizex/10*6, y + (sizey/4)*3, x+sizex, y+sizey/4*3);
  fill(beige);
  noStroke();
  rect(x + sizex/2, y+ sizey/4, sizex/2, sizey/4);
  for (let i=yellowLineDensity/2;i>0;i--){ //The colour rectangles
    noStroke();
    if (i<yellowLineDensity/2+2){
      fill(yellow);
    }
    rect(x + sizex/2, y + sizey/4 + (sizey/(yellowLineDensity*2))*i, sizex/2 , sizey/4-(sizey/(yellowLineDensity*2))*i);
  }
 for (let i=0;i<yellowLineDensity/2;i++){ //The lines
    stroke(1);
    line(x + sizex/2 , y + sizey/4 + (sizey/(yellowLineDensity*2))*i, x + sizex, y + sizey/4+(sizey/(yellowLineDensity*2))*i);
    
  }
  line(x+sizex/2, y, x+sizex/2, y+sizey/2);


  //Simple pink circles top left
  noStroke();
  fill(beige);
  arc(x + sizex/4, y , sizex/2, sizey/2,0,180);
  arc(x + sizex/4, y + sizey, sizex/2, sizey/2,180,0);
  fill(pink);
  arc(x + sizex/4, y , sizex/2, sizey/2,0,180);
  arc(x + sizex/4, y + sizey, sizex/2, sizey/2,180,0);
  fill(red);
  arc(x + sizex/4, y + sizey, sizex/3, sizey/3,180,0);
  arc(x + sizex/4, y , sizex/3, sizey/3,0,180);
  stroke(1);


   //bottom left corner repeating circle
  fill(beige);
  for (let i=yellowLineDensity;i>0;i--){
    if (i!=yellowLineDensity){
      fill(darkOrange);
      stroke(0.5);
    }
    arc(x +sizex/2, y + sizey/2, sizex/yellowLineDensity*i, sizey, 180, 270);
    arc(x +sizex/2, y + sizey/2, sizex/yellowLineDensity*i, sizey, 90, 180);
  }


  //center blue lines
  fill(beige);
  rect (x, y +sizey/2, sizex/2, sizey/4);
  fill(blue);
  rect (x + sizex/2, y+sizey/2 , sizex/10, sizey/2);
  stroke(blue);
  line (x + sizex/20*11, y +sizey/2 , x + sizex/20*11, y + sizey);
  line (x + sizex/40*21, y +sizey/2, x + sizex/40*21, y + sizey);
  line (x + sizex/40*23, y +sizey/2, x + sizex/40*23, y + sizey);

  //repeating rectangle pattern top left corner
  fill(beige);
  noStroke();
  rect(x+sizex/2,y,sizex/2,sizey/4);
  for (let i = 0; i < yellowLineDensity; i++){
    noStroke();
    fill(beige);
    if (i!=0){
      fill(yellow);
    }
    rect(x + (sizex / (yellowLineDensity*2)) * ((yellowLineDensity)+i), y, sizex/(yellowLineDensity*2) *((yellowLineDensity)-i), sizey/4);
    
  }
  for (let i = 0; i < (yellowLineDensity+1); i++){
    stroke(1);
    fill(brown);
    line(x + (sizex / (yellowLineDensity*2)) * (yellowLineDensity+i), y, 
      x + sizex/(yellowLineDensity*2) * (yellowLineDensity+i), y + sizey/4);
  }

  //purple line
  noStroke();
  fill(purple);
  rect(x,y+sizey/20*11, sizex, sizey/10);
  stroke(1);
  line(x,y+sizey/20*11, x + sizex, y + sizey/20*11);
  line(x,y+sizey/20*13, x + sizex, y + sizey/20*13);

  //small rectangles
  for (let i=0; i<6; i++){
    if (i!=3){
      smallRect (x + sizex/12*(i*2), y + sizey/12*8, sizex/12, sizey/12);
      smallRect (x + sizex/12*(i*2), y + sizey/2, sizex/12, sizey/12);
    }
  }
  

 //Purple and blue circle
  fill (purple);
  ellipse(x+sizex/2 +bigCircleX, y+sizey/4+bigCircleY, (sizex/2)+bigCircleSize, (sizey/2)+bigCircleSize);
  fill(blue);
  noStroke();
  arc(x + sizex/2+bigCircleX, y+sizey/4+bigCircleY, (sizex/3)+bigCircleSize, (sizey/3)+bigCircleSize, 270, 90);
  fill(lightOrangeFull);
  arc(x + sizex/2+bigCircleX, y+sizey/4+bigCircleY, (sizex/4)+bigCircleSize, (sizey/4)+bigCircleSize, 270, 90);
  arc(x + sizex/2+bigCircleX, y+sizey/4+bigCircleY, (sizex/3)+bigCircleSize, (sizey/3)+bigCircleSize, 90, 270);
  fill(purple);
  arc(x + sizex/2+bigCircleX, y+sizey/4+bigCircleY, (sizex/4)+bigCircleSize, (sizey/4)+bigCircleSize, 90, 270);
  fill(blue);
  arc(x + sizex/2+bigCircleX, y+sizey/4+bigCircleY, (sizex/4)+bigCircleSize, (sizey/4)+bigCircleSize, 90, 270);
  stroke(1);
  

  //repeating circle pattern right corner
  for (let i = 0; i < yellowLineDensity; i++){
    fill(beige);
    if (i!=0){
      fill(yellow);
    }
    arc(x +sizex, y + sizey, sizex/yellowLineDensity*(yellowLineDensity-i), sizey/yellowLineDensity*(yellowLineDensity-i),
     180, 270);
  }
  
  fill(green);
  arc(x +sizex/2, y+sizey, sizex/20, sizey/20, 180,0);
  arc(x +sizex/2, y-0.5, sizex/20, sizey/20, 0,180);
  
}

function smallRect(x,y,sizex,sizey){
  sizex = sizex + smallCubeSize;
  sizey = sizey + smallCubeSize;
  fill(beige);
  rect(x , y , sizex , sizey); 
  fill(red);
  rect(x , y , sizex, sizey); 
  noStroke();
  rect(x + sizex/8, y + sizey/8, sizex/4*3  , sizey/4*3);
  rect(x + sizex/4, y + sizey/4, sizex/2 , sizey/2);
  //
  //create shape
  fill(beige);
  beginShape();
  vertex(x + sizex/2, y);
  vertex(x + sizex, y + sizey/2);
  vertex(x + sizex/2, y + sizey);
  vertex(x, y + sizey/2);
  endShape(CLOSE);
  stroke(1);
}

function shiftColors(colors, colourOffset) {
  for (let i=0; i<colourOffset; i++){
    for (let j=0; j<colors.length; j++){
      colors[j].push(colors[j].shift());
    }
  }
  
}


