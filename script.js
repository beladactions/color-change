const colorBtn = document.getElementById('color-btn');
const container = document.getElementById('container');

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomColor();
  container.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
