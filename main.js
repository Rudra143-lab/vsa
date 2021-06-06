var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " ";
    Recognition.start();


}

Recognition.onresult = function (event) {
    console.log(event);
    var data = event.results[0][0].transcript;
    console.log(data)

    document.getElementById("textbox").innerHTML = data;
    if (data == "take my selfie") {
        speak();

    }
}

function speak() {
    var SS = window.speechSynthesis;
    voice_data = "TAKING MY SELFIE";
    var this_synthesis = new SpeechSynthesisUtterance(voice_data);
    SS.speak(this_synthesis);
    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}






var camera = document.getElementById("cam");

Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function take_snapshot() 
{
    Webcam.snap(function (data_uri) 
    {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

        });


}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}