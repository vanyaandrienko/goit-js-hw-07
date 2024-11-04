
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');


function createBoxes(amount) {
  
  boxesContainer.innerHTML = '';
  
  const boxElements = [];
  let boxSize = 30; 

  for (let i = 0; i < amount; i++) {
    
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    
    
    boxSize += 10;
    
    
    boxElements.push(box);
  }

  
  boxesContainer.append(...boxElements);
}


function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});


destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
