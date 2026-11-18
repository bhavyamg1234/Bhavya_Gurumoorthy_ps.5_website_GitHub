let soundfile, fft; 


async function setup() {
 createCanvas(1000, 600);
 soundfile = await loadSound('./assets/hello.mp3');
 textAlign(CENTER);
 textSize(10);

 fft = new p5.FFT();
 soundfile.connect(fft);
 soundfile.loop();
}

function mousePressed() {
 if(!soundfile.isPlaying()) {
   soundfile.play();
 }
 else {
   soundfile.stop();
 }
}

function draw() {
 background(255,235,205,100);
  
 text('tap to play', width/2, height/2 - 20);
 let waveform = fft.waveform();
 fill(196,84,0);
 beginShape();
 stroke(20);
 for (let i = 0; i < waveform.length; i++){
   let x = map(i, 0, waveform.length, 0, width);
   let y = map( waveform[i], -1, 1, 0, height);
   vertex(x,y);
 }
 endShape();
}