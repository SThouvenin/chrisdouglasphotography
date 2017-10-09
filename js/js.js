function changeImage()
{
    var img = document.getElementById("rotator");
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 800, true);
    setTimeout("changeImage()", 10000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}

var images = [],
x = 0;

images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image4.jpg";
images[3] = "image5.jpg";
images[4] = "image6.jpg";
images[5] = "image7.jpg";
images[6] = "image8.jpg";
images[7] = "image9.jpg";
images[8] = "image10.jpg";
images[9] = "image11.jpg";
setTimeout("changeImage()", 10000)

// (function() {
// var rotator = document.getElementById('rotator');  // change to match image ID
// var imageDir = 'assets/';                          // change to match images folder
// var delayInSeconds = 1;                            // set number of seconds delay
//    var delayInSeconds = 1,                           //delay in seconds
//    var num = 0,                                      //start number
//    var len = 9999;                                      //limit
// var images = ['image1.jpg','image2.jpg', 'image3.jpg', 'image4.jpg'];

// // don't change below this line
// var num = 0;
// var changeImage = function() {
//     var len = images.length;
//     rotator.src = images[num++];
//     if (num == len) {
//         num = 0;
//     }
// };
// setInterval(function(){                           //interval changer
//     num = (num === len) ? 0 : num;                //reset if limit reached
//     rotator.src = images + num  ;                     //change picture
//     num++;                                        //increment counter
// }, delayInSeconds * 1000);
// })();




