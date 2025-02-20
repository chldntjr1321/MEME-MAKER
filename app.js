const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#dfe6e9",
  "#dfe6e9",
  "#ffeaa7",
  "#ff7675",
  "#d63031",
  "#fdcb6e",
];

let x_coord = 0;
let y_coord = 0;

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(x_coord, y_coord);
  ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

function cursor_move(event) {
  x_coord = event.offsetX;
  y_coord = event.offsetY;
  ctx.beginPath();
  ctx.arc(x_coord, y_coord, 5, 0, 2 * Math.PI);
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.fill();
  console.log("d");
}

canvas.addEventListener("mousemove", onClick);
canvas.addEventListener("click", cursor_move);
