
var audio = new Audio(`res/wopyoo1.ogg`);
var previous = 0

function woop() {
	var random= Math.floor(Math.random() * 11) + 1;
	audio = new Audio(`res/wopyoo${random}.ogg`);
	audio.play()
}

var bgm = new Audio('res/bgm.ogg');
bgm.loop = true;

function toggleBGM() {
	bgm.paused ? bgm.play() : bgm.pause();
}
