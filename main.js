Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera")
Webcam.attach(camera)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera_result").innerHTML = "<img id = 'picture' src= '"+data_uri+"'>"
    })
}

console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1tJD99eJe/model.json", model_loaded)
function model_loaded(){
    console.log("Model Loaded")
}
function identify(){
    img = document.getElementById("picture");
    classifier.classify(img, got_result)
}
function got_result(error, result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("object_result").innerHTML = result[0].label
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);

    }
} 