canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

//blue//
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(300,210, 50, 0, 2 * Math.PI);
ctx.stroke();

//black//
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(425,210, 50, 0, 2 * Math.PI);
ctx.stroke();

//red//
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(550,210, 50, 0, 2 * Math.PI);
ctx.stroke();

//yellow//
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(362,270, 50, 0, 2 * Math.PI);
ctx.stroke();

//green//
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(487,270, 50, 0, 2 * Math.PI);
ctx.stroke();