const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const heigth = 100;
const width = 100;
const gap = 10;
const x = 100;
const y = 100;

for (let i = 0; i < 5; i++) {
  context.beginPath();
  context.rect(x + (width + gap) * i, y, width, heigth);
  context.stroke();
  for (let j = 1; j < 5; j++) {
    context.beginPath();
    context.rect(x + (width + gap) * i, y + (width + gap) * j, width, heigth);
    context.stroke();
  }
}