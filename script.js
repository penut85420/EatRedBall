csize = 600
x = csize/2;
y = csize/2;
bsize = 30;
xx = 0; yy = 0;
score = 0;

function setup() {
	createCanvas(csize, csize);
	xx = random(csize-20) + 10;
	yy = random(csize-20) + 10;
}

function draw() {
	tx = mouseX - xx;
	ty = mouseY - yy;
	tx *= tx; ty *= ty;
	if (sqrt(tx+ty) < bsize/2+7) {
		xx = random(csize-20) + 10;
		yy = random(csize-20) + 10;
		bsize += 3;
		score++;
	}
	background(csize, csize);

	fill("Red");
	ellipse(xx, yy, 30);
	fill("Green");
	ellipse(mouseX, mouseY, bsize);
	textSize(72);
	textAlign(CENTER);
	fill(0);
	text("Eat Red Ball!!", 0, 25, csize, 75);
	textSize(32);
	text("Score: " + score, 0, csize-32-10, csize, 32);
	line(0, 0, csize-1, 0);
	line(0, 0, 0, csize-1);
	line(csize-1, 0, csize-1, csize-1);
	line(0, csize-1, csize-1, csize-1);
}