'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.fillStyle = 'purple';
context.fillRect(100, 100, 300, 300);

context.beginPath();
context.rect(100, 100, 300, 300);
context.stroke();

context.beginPath();
context.arc(100, 100, 50, 0, Math.PI * 2);
context.arc(100, 400, 50, 0, Math.PI * 2);
context.arc(400, 100, 50, 0, Math.PI * 2);
context.arc(400, 400, 50, 0, Math.PI * 2);
context.stroke();