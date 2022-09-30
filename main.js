console.log("Hi");
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
    document.getElementById("textbox").innerHTML=Content;
}

function speak() {
    var synth=window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    speak_data=document.getElementById("textbox").ariaValueMax;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_data);
    webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    image_quality: 90
});
camera=document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

