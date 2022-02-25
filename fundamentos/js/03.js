const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = 100;
const height = 100;
const gap = 20;
const y = 100;
let x = 100;

for (let i = 0; i < 5; i++) {
  let y = 100;
  for (let j = 0; j < 5; j++) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();
    if (Math.random() < 0.5) {
      context.beginPath();
      context.rect(x + 10, y + 10, width - 20, height - 20);
      context.stroke();
    }
    y += height + gap;
  }
  x += width + gap;
}