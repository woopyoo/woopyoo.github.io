let speed = 20;
let scale = 1; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let dvd = {
    x: 0,
    y: 0,
    xspeed: 10,
    yspeed: 10,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dvd.img.src = 'dvd-logo.png';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight-4;

    scale = canvas.width / 1920
    scale = (canvas.width+canvas.height) / (1920+1080)


    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
	    //Draw the "tv screen"
	    canvas.width  = window.innerWidth;
	    canvas.height = window.innerHeight-4;
	if(speed < 20) { speed = speed + 2 }
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(dvd.xspeed > 0) {
	    dvd.img.src = 'dvd-logo2.png';
	}
	else {
	    dvd.img.src = 'dvd-logo.png';
	}

        //Draw DVD Logo and his background
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);

        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

let mousePos = {x: 0, y: 0}
let mouseMov = 0

window.addEventListener('mousemove', (event) => {
	mousePos  = { x: event.clientX, y: event.clientY };
	mouseMov = event.movementX + event.movementY
});
window.addEventListener("resize", (event) => {
	dvd.x = 10
	dvd.y = 10
	    scale = (canvas.width+canvas.height) / (1920+1080)
});

//Check for border collision
function checkHitBox(){
    if(mousePos.x > dvd.x && mousePos.x < dvd.x + dvd.img.width*scale &&
    mousePos.y > dvd.y && mousePos.y < dvd.y + dvd.img.height*scale
	) {
	speed = 5;
    }
    if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
        dvd.xspeed *= -1;
        pickColor();
    }
        
    if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
        dvd.yspeed *= -1;
        pickColor();
    }    

}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb(255,255,255)';
}
