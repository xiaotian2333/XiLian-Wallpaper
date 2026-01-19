function getEncodedCanvasImageData(canvas) {
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, 100, 20);
    var colorArray = [];

    for (var d = 0; d < imageData.data.length; d += 4) {
        var write = d / 4 * 3;
        colorArray[write] = imageData.data[d];
        colorArray[write + 1] = imageData.data[d + 1];
        colorArray[write + 2] = imageData.data[d + 2];
    }
    return String.fromCharCode.apply(null, colorArray);
}

// Only execute this logic if the LED plugin has actually been loaded
function startRGB() {
    const canvas = document.getElementById('RGBuse');
    var encodedImageData = getEncodedCanvasImageData(canvas);
    window.wpPlugins.led.setAllDevicesByImageData(encodedImageData, canvas.width, canvas.height);
}

function background2canvas(){

    var rawcanvas = document.getElementById("webglCanvas")
    var nowcanvas = document.getElementById("RGBuse").getContext("2d")

    function draw(){
        
        nowcanvas.drawImage(rawcanvas,0,0,rawcanvas.width,rawcanvas.height,0,0,100,20)
        if(wallpaperSettings.ledPlugin && !isPause && RGB_show){
            startRGB()
            requestAnimationFrame(draw)
        }

    }
    draw()
}

setTimeout(background2canvas,3000)
