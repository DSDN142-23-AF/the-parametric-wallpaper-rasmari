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

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  //background is beige
  background( 255, 255, 204 );
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let sumx =2;
  let sumy =2;
  
  strokeWeight(0.8);
  
  for (let i = 0; i < sumx; i++) {
    for (let j = 0; j < sumy; j++) {
        my_tile(i*(rect_width/sumx),  j*(rect_height/sumy), rect_width/sumx, rect_height/sumy);
    }
  }

}

function my_tile(x, y, sizex, sizey){
  //Line Structure 
  line(x + sizex/2, y , x + sizex/2, y + sizey);
  line(x + sizex/2,  y + sizey/4, x + sizex, y + sizey/4 );
  line(x , y+ sizey/4*3, x + sizex/2, y + sizey/4*3);
  line(x + sizex/10*6, y + sizey/2, x + sizex, y + sizey/2);
  //draw the 5 circles
  noFill();
  
  fill(red);
  arc(x + sizex/4, y + sizey, sizex/2, sizey/2,180,0);
  arc(x + sizex/4, y , sizex/2, sizey/2,0,180);
  arc(x + sizex, y + sizey, sizex, sizey, 180, 270);
  fill(lightOrange);
  arc(x + sizex/2, y + sizey/2, sizex , sizey,90,270); 

  
   //left corner repeating circle
  fill(beige);
  for (let i=10;i>0;i--){
    if (i!=10){
      fill(darkOrange);
    }
    arc(x +sizex/2, y + sizey/2, sizex/10*i, sizey, 180, 270);
    arc(x +sizex/2, y + sizey/2, sizex/10*i, sizey, 90, 180);
  }
  fill(beige);
  rect (x, y +sizey/2, sizex/2, sizey/4);

  fill(blue);
  rect (x + sizex/2, y , sizex/10, sizey);
  line (x + sizex/20*11, y , x + sizex/20*11, y + sizey);
  line (x + sizex/40*21, y , x + sizex/40*21, y + sizey);
  line (x + sizex/40*23, y , x + sizex/40*23, y + sizey);

  //repeating rectangle pattern left corner
  fill(beige);
  noStroke();
  rect(x+sizex/2,y,sizex/2,sizey/4);
  for (let i = 0; i < 10; i++){
    noStroke();
    fill(beige);
    if (i!=0){
      fill(yellow);
    }
    rect(x + (sizex / 20) * (9+i), y, sizex/20 *(11-i), sizey/4);
    
  }
  for (let i = 0; i < 11; i++){
    stroke(1);
    fill(brown);
    line(x + (sizex / 20) * (10+i), y, x + sizex/20 * (10+i), y + sizey/4);
  }
  
  fill(226,139,36);
  arc(x + sizex/8*7, y + sizey/4, sizex/4, sizey/4, 0, 180);
  arc(x + sizex/8*7, y + sizey/4, sizex/20*3, sizey/20*3, 0, 180);
  arc(x + sizex/8*7, y + sizey/4, sizex/120*6, sizey/120*6, 0, 180);
  fill (purple);
  ellipse(x+sizex/2, y+sizey/4, sizex/2, sizey/2);
  fill(blue);
  arc(x + sizex/2, y+sizey/4, sizex/3, sizey/3, 270, 90);
  fill(lightOrangeFull);
  arc(x + sizex/2, y+sizey/4, sizex/4, sizey/4, 270, 90);
  arc(x + sizex/2, y+sizey/4, sizex/3, sizey/3, 90, 270);
  fill(purple);
  arc(x + sizex/2, y+sizey/4, sizex/4, sizey/4, 90, 270);
  fill(blue);
  arc(x + sizex/2, y+sizey/4, sizex/4, sizey/4, 90, 270);

  fill(purple);
  rect(x,y+sizey/20*11, sizex, sizey/10);

  //small rectangles
  for (let i=0; i<6; i++){
    if (i!=3){
    smallRect (x + sizex/12*(i*2), y + sizey/12*8, sizex/12, sizey/12);
    smallRect (x + sizex/12*(i*2), y + sizey/2, sizex/12, sizey/12);
  }
  }
  
  


  //repeating circle pattern right corner
  for (let i = 0; i < 10; i++){
    fill(beige);
    if (i!=0){
      fill(yellow);
    }
    arc(x +sizex, y + sizey, sizex/10*(10-i), sizey/10*(10-i), 180, 270);
  }
  
  fill(green);
  arc(x +sizex/2, y+sizey, sizex/20, sizey/20, 180,0);
  arc(x +sizex/2, y-0.5, sizex/20, sizey/20, 0,180);
  


}

function smallRect(x,y,sizex,sizey){
  fill(beige);
  rect(x , y , sizex , sizey); 
  fill(red);
  rect(x , y , sizex , sizey); 
  rect(x + sizex/8, y + sizey/8, sizex/4*3 , sizey/4*3);
  rect(x + sizex/4, y + sizey/4, sizex/2 , sizey/2);
 
}
