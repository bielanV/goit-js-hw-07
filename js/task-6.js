function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

        const controlsEl = document.getElementById('controls');
        const inputEl = controlsEl.querySelector('input');
        const createBtnEl = controlsEl.querySelector('[data-create]');
        const destroyBtnEl = controlsEl.querySelector('[data-destroy]');
        const boxesEl = document.getElementById('boxes');

        
        function createBoxes(amount) {
            
            destroyBoxes();

            const elements = [];
            let size = 30;

            for (let i = 0; i < amount; i++) {
                const div = document.createElement('div');
                div.style.width = `${size}px`;
                div.style.height = `${size}px`;
                div.style.backgroundColor = getRandomHexColor();
                size += 10;
                elements.push(div);
            }

            boxesEl.append(...elements);
        }

        
        function destroyBoxes() {
            boxesEl.innerHTML = '';
        }

        
        createBtnEl.addEventListener('click', () => {
            const amount = Number(inputEl.value);

            if (amount >= 1 && amount <= 100) {
                createBoxes(amount);
            }

            inputEl.value = ''; 
        });

        
        destroyBtnEl.addEventListener('click', destroyBoxes);