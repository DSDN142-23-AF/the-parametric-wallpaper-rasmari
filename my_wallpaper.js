//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;


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
  let sumx =3;
  let sumy =3;
  
  /*
  for (let i = 0; i < sumx; i++) {
    for (let j = 0; j < sumy; j++) {
        my_tile(0 + i*(rect_width/sumx), 0 + j*(rect_height/sumy), rect_width/sumx, rect_height/sumy);
    }
  }*/

  //for pattern creation
  my_tile(0, 0, rect_width, rect_height);


}

function my_tile(x, y, sizex, sizey){
  //Line Structure 
  line(x + sizex/2, y , x + sizex/2, y + sizey);
  line(x , y + sizey/2, x + sizex, y + sizey/2);
  line(x + sizex/2,  y + sizey/4, x + sizex, y + sizey/4 );
  line(x , y+ sizey/4*3, x + x+ sizex/2, y + sizey/4*3);

  //draw the 5 circles
  noFill();
  ellipse(x + sizex/2, y + sizey/2, sizex , sizey); 
  ellipse(x + sizex/4, y + sizey/4, sizex/2 , sizey/2);
  ellipse(x + sizex/8*5, y + sizey/8*3, sizex/4, sizey/4); 

  arc(x + sizex/4, y + sizey, sizex/2, sizey/2, 180, 0);
  arc(x + sizex, y + sizey, sizex, sizey, 180, 270);
  arc(x + sizex/4, y, sizex/2, sizey/2, 0, 180);

  //additional details
  fill (100,0,0,100);
  rect (x , y, x + sizex/2, y + sizey/2);
  rect ()


}
