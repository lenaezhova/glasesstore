import React from 'react';

const MaskedCanvasReact = ({imageUrl}: {
  imageUrl: string
}) => {

  let htmlCode = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css"/>
    <link rel="icon" href="icon.ico" type="image/x-icon"/>
    <title>Document</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/clmtrackr@1.1.2/build/clmtrackr.min.js"></script>
    <script>
    // Вставьте ваш JavaScript код здесь, убедитесь, что вы убрали теги <script> в начале и в конце.
    let outputWidth;
let outputHeight;

let faceTracker;
let videoInput;

let imgMask = "${imageUrl}";
let imgFace = "${imageUrl}";

function preload() {
    imgMask = loadImage(imgMask)
    imgFace = loadImage(imgFace)
}

function setup() {
    const maxWidth = Math.min(windowWidth, windowHeight);
    pixelDensity(1);
    outputHeight = maxWidth * 0.75;
    outputWidth = maxWidth;

    createCanvas(outputWidth, outputHeight)

    videoInput = createCapture('video');
    videoInput.size(outputWidth, outputHeight);
    videoInput.hide();


    // const sel = createSelect();
    // const selectList = ['Mask', 'Face'];
    // sel.option('Select filter', -1);
    // for (let i = 0; i < selectList.length; i++) {
    //     sel.option(selectList[i], i);
    // }
    // sel.changed(applyFilter);

    faceTracker = new clm.tracker();
    faceTracker.init();
    console.log(videoInput.elt)
    faceTracker.start(videoInput.elt);
    console.log(faceTracker)
}

// function applyFilter() {
//     selected = this.selected();
// }

function draw() {
    image(videoInput, 0, 0, outputWidth, outputHeight);

    drawMask();
}

function drawMask() {
    const positions = faceTracker.getCurrentPosition();

    if (positions !== false) {
        push();
        const wx = Math.abs(positions[13][0] - positions[1][0]) * 1.4;
        const wy = Math.abs(positions[7][1] - Math.min(positions[16][0], positions[20][1]));
        translate(-wx/2, -wy/2);
        image(imgMask, positions[33][0], positions[33][1], wx, wy)
        pop();
    }
}

function windowResized() {
    const maxWidth = Math.min(windowWidth, windowHeight);
    pixelDensity(1);
    outputHeight = maxWidth * 0.75;
    outputWidth = maxWidth;

    resizeCanvas(outputHeight, outputHeight);
}
    </script>
  </body>
  </html>`


  // Создайте Blob с HTML кодом
  let blob = new Blob([htmlCode], { type: 'text/html' });

// Создайте URL из Blob
  let url = URL.createObjectURL(blob);



  return (
    <>
      <iframe src={url} style={{
        width: '100%',
        height: 800
      }}/>
    </>
  );
};

export default MaskedCanvasReact;
