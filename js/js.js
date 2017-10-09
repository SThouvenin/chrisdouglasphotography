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

