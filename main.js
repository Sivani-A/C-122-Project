x = 0;
y = 0;
var screen_width=0;
var screen_height=0;
var apple=""
var to_number=""

var draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 content = event.results[0][0].transcript;
 to_number=Number(content);
 if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Started drawing apple."
    draw_apple="set";
 }
 else{
  document.getElementById("status").innerHTML="A number has not been recognized in the speech"
 }
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 apple=loadImage("apple.png");
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(screen_width, screen_height-150);
 canvas.position(0,150);
}

function draw() {
 
  if(draw_apple == "set")
  {
    speak_data= document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak(speak_data);
    draw_apple = "";
    background("pink")
    
    for(let i=1; i<=to_number;i++)
    {
      x=Math.floor(Math.random()*700)
      y=Math.floor(Math.random()*400)
      image(apple, x, y, 100, 100)
    }
    
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

