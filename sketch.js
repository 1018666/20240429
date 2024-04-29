var captureGraphics
var capture_width = 640
var capture_height = 480
var span = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
capture.size(640,480);//設定顯示畫面大小
captureGraphics = captureGraphics(capture_width,480)
captureGraphics.translate(capture_width,0)
captureGraphics.scale(-1,1)
capture.hide()

}

function draw() {
  background(220);
  push()
  translate(width/2-capture_width/2, height/2-capture_height/2)
  captureGraphics.image(capture,0,0)
  for(var x =0;x<captureGraphics.width;x=x+10){
    for(var y =0;y<captureGraphics.height;y=y+span){
      var pixel =captureGraphics.get(x,y)
      fill(pixel)
      rect(x,y,span)

    }
  }
  pop()
}
