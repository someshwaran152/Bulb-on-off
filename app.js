//https://cdn.pixabay.com/photo/2014/06/25/06/33/light-bulb-376926_1280.jpg
//https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_1280.png

const on_btn = document.getElementById("on");
const off_btn = document.getElementById("off");
var img = document.getElementById("bulb");

function bulb_on()
{
    img.src="https://cdn.pixabay.com/photo/2014/06/25/06/33/light-bulb-376926_1280.jpg";
}

function bulb_off()
{
    img.src="https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_1280.png";
}