img="";
status=""
object=[]
function preload(){
     img=loadImage('t.jpeg');
}


function setup(){
    canvas=createCanvas(500,500);
    canvas.center()
    objectdiretor=ml5.objectDetector('cocossd',modelloded);
    document.getElementById("detector").innerHTML="status:detectingObjects"
}
function modelloded(){
   
    console.log("coconut_delivery_service");
    status=true
    objectdiretor.detect(img,getresult);

}
function getresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results
}
function draw(){
image(img,0,0,500,500);
if(status !=""){
for(var i=0; i<object.length;i++){
    document.getElementById("detector").innerHTML="status-object detected";
    fill(255,45,89);
    percent=floor(object[i].confidence*100)
    text(object[i].label+"  "+percent+"%",object[i].x+10,object[i].y);
noFill();
stroke('blue');
rect(object[i].x,object[i].y,object[i].width,object[i].height)

}

}}
