function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color');
const bodyColor = document.querySelector('body')
const spanColor = document.querySelector('.color')

const onBtnClick = () => { 
  bodyColor.style.backgroundColor = getRandomHexColor();
  const newColor = getRandomHexColor();
  spanColor.textContent = newColor;
};

btnEl.addEventListener('click', onBtnClick);