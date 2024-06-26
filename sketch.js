var captureGraphics
var capture_width = 640
var capture_height = 480
var span = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
capture.size(capture_widt,capture_heigh);//設定顯示畫面大小
captureGraphics = captureGraphics(capture_width,480)
captureGraphics.translate(capture_width,0)
captureGraphics.scale(-1,1)
capture.hide()
removeElements = createRadio
radioElement.position(width/2-300,20)
radioElement.option("方塊")
radioElement.option("圓圈")
radioElement.style("color","#fff")

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
      if(radioElement.value()=="方塊"){
        rect(x,y,span) 
      }
      if(radioElement.value()=="圓圈"){
        ellipse(x,y,span) 
      }
      if(radioElement.value()=="亮度"){
        ellipse(x,y,span) 
      }
      

    }
  }
  pop()
}
