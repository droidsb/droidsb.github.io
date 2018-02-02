/*
The MIT License (MIT)

Copyright (c) 2014 Chris Wilson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var r=0;
var g=0;
var b=0;

var reverseR=false;
var reverseG=false;
var reverseB=false;
var audioContext = null;
var meter = null;
var canvasContext = null;
var WIDTH=10000;
var HEIGHT=500;
var rafID = null;

window.onload = function() {

    // grab our canvas
	canvasContext = document.getElementById( "meter" ).getContext("2d");
	
    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	
    // grab an audio context
    audioContext = new AudioContext();

    // Attempt to get audio input
    try {
        // monkeypatch getUserMedia
        navigator.getUserMedia = 
        	navigator.getUserMedia ||
        	navigator.webkitGetUserMedia ||
        	navigator.mozGetUserMedia;

        // ask for an audio input
        navigator.getUserMedia(
        {
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },
        }, gotStream, didntGetStream);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }

}


function didntGetStream() {
    alert('Stream generation failed.');
}

var mediaStreamSource = null;

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Create a new volume meter and connect it.
    meter = createAudioMeter(audioContext);
    mediaStreamSource.connect(meter);

    // kick off the visual updating
    drawLoop();
}

function drawLoop( time ) {
    // clear the background
    canvasContext.clearRect(0,0,WIDTH,HEIGHT);

    // check if we're currently clipping
    /*if (meter.checkClipping())
        canvasContext.fillStyle = "rgb("+Math.round(bacon)+","+Math.round(bacon)+","+Math.round(bacon)+")";
    else
        canvasContext.fillStyle = "black";*/
        var bacon = meter.volume.toString();
        bacon=bacon*255*2
        //console.log(bacon);
        //console.log("rgb("+Math.round(bacon)+","+Math.round(bacon)+","+Math.round(bacon)+")");
        
        
        /*if (meter.checkClipping())
        canvasContext.fillStyle = "rgb("+Math.round(bacon)+","+Math.round(bacon)+","+Math.round(bacon)+")";
    else
        canvasContext.fillStyle = "black";*/
       var rand = Math.floor(Math.random() * 4) + 1;
       var rand2 = Math.floor(Math.random() * 4) + 1;
       var rand3 = Math.floor(Math.random() * 4) + 1;
       
       var done = bacon+rand;
       var done2 = bacon+rand2;
       var done3 = bacon+rand3;
        
        canvasContext.fillStyle = "rgb("+Math.round((r-180)+bacon)+","+Math.round((g-180)+bacon)+","+Math.round((b-180)+bacon)+")";

    // draw a bar based on the current volume
    canvasContext.fillRect(0, 0, 2000,1500 );

    // set up the next visual callback
    rafID = window.requestAnimationFrame( drawLoop );
    
    
    if(r>=255){
    
    	reverseR=true;
    	
    	
    
    }
    
    if(reverseR===true){
    
    	r=(r-1)-rand-bacon/100;
    
    }
    
    if(r<=100){
    
    	reverseR=false;
    	
    	
    
    }
    
    if(reverseR===false){
    
    	r=(r+1)+rand+bacon/100;
    
    }
    
    if(g>=255){
    
    	reverseG=true;
    	
    	
    
    }
    
    if(reverseG===true){
    
    	g=(g-1)-rand2-bacon/100;
    
    }
    if(g<=100){
    
    	reverseG=false;
    	
    	
    
    }
    
    if(reverseG===false){
    
    	g=(g+1)+rand2+bacon/100;
    
    }
    
      if(b>=255){
    
    	reverseB=true;
    	
    	
    
    }
    
    if(reverseB===true){
    
    	b=(b-1)-rand3-bacon/100;
    
    }
    if(b<=100){
    
    	reverseB=false;
    	
    	
    
    }
    
    if(reverseB===false){
    
    	b=(b+1)+rand3+bacon/100;
    
    }
    
    
    
   
    
}
