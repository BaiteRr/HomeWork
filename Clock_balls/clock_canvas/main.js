let
    can = document.getElementById('canvas'),
    ctx = can.getContext('2d'),

    can1 = document.getElementById('canvas1'),
    ctx1 = can1.getContext('2d'),

    can2 = document.getElementById('canvas2'),
    ctx2 = can2.getContext('2d');


ctx.translate(350, 350);
ctx1.translate(350, 350);
ctx2.translate(350, 350);

ctx.arc(0, 0, 300, 0, Math.PI * 2);
ctx.lineWidth = 10;
ctx.stroke();


ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(140, 140);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.closePath();
ctx.stroke();

setInterval(function () {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(140, 140);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.rotate(6 * Math.PI / 180);
    ctx.clearRect(0, 0, 170, 110);
    ctx.stroke();
}, 1000);

ctx1.beginPath();
ctx1.moveTo(0, 0);
ctx1.lineTo(140, 140);
ctx1.lineWidth = 6;
ctx1.closePath();
ctx1.stroke();

setInterval(function () {
    ctx1.beginPath();
    ctx1.moveTo(0, 0);
    ctx1.lineTo(140, 140);
    ctx1.lineWidth = 6;
    ctx1.closePath();
    ctx1.rotate(6 * Math.PI/180);
    ctx1.clearRect(0, 0, 190, 110);
    ctx1.stroke();
}, 60000);

ctx2.beginPath();
ctx2.moveTo(0, 0);
ctx2.lineTo(10, 150);
ctx2.lineWidth = 10;
ctx2.closePath();
ctx2.stroke();

setInterval(function () {
    ctx2.beginPath();
    ctx2.moveTo(0, 0);
    ctx2.lineTo(10, 150);
    ctx2.lineWidth = 10;
    ctx2.closePath();
    ctx2.rotate(6 * Math.PI/180);
    ctx2.clearRect(0, 0, 120, 170);
    ctx2.stroke();
}, 3600000);


ctx.font = '40px Arial';
ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
for (let n = 1; n <= 12; n++) {
    let theta = (n - 3) * (Math.PI * 2) / 12;
    let x = 350 * 0.7 * Math.cos(theta);
    let y = 350 * 0.7 * Math.sin(theta);
    ctx.fillText(n, x, y);
}

ctx.font = '10px Arial';
ctx.fillStyle = '#000';
for (let n = 1; n <= 60; n++) {
    let theta = (n - 3) * (Math.PI * 2) / 60;
    let x = 350 * 0.7 * Math.cos(theta);
    let y = 350 * 0.7 * Math.sin(theta);
    ctx.fillText('o', x, y);
}