// Captura os elementos
const form = document.getElementById('form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const value = document.getElementById('value');
const description = document.querySelector('#description span');
const infos = document.getElementById('infos');

// Evita recarregar a página
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Pega os valores e transforma em número
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  // Verifica se os valores são válidos
  if (!weight || !height || weight <= 0 || height <= 0) {
    alert('Por favor, insira um peso e altura válidos.');
    return;
  }

  // Calcula o IMC
  const bmi = (weight / (height * height)).toFixed(2);

  // Mostra o valor
  value.textContent = bmi.replace('.', ',');

  // Classifica o IMC
  let classification = '';
  let cssClass = '';

  if (bmi < 18.5) {
    classification = 'Magreza';
    cssClass = 'attention';
  } else if (bmi < 24.9) {
    classification = 'Peso normal';
    cssClass = 'normal';
  } else if (bmi < 29.9) {
    classification = 'Sobrepeso';
    cssClass = 'attention';
  } else if (bmi < 39.9) {
    classification = 'Obesidade';
    cssClass = 'attention';
  } else {
    classification = 'Obesidade grave';
    cssClass = 'attention';
  }

  // Exibe a descrição
  description.textContent = classification;

  // Aplica as classes de cor
  value.className = cssClass;
  description.className = cssClass;

  // Exibe a seção de resultado
  infos.classList.remove('hidden');
});