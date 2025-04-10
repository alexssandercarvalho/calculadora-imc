const form = document.getElementById('form');
const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');
const infos = document.getElementById('infos');
const value = document.getElementById('value');
const description = document.getElementById('description');

function calculateIMC(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

function createDescription(imc) {
    let desc = "";

    if (imc < 18.5) {
        desc = "Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
        desc = "Você está com peso normal.";
    } else if (imc >= 25 && imc <= 29.9) {
        desc = "Você está com sobrepeso.";
    } else if (imc >= 30 && imc <= 34.9) {
        desc = "Obesidade grau 1.";
    } else if (imc >= 35 && imc <= 39.9) {
        desc = "Obesidade grau 2.";
    } else {
        desc = "Obesidade grau 3.";
    }

    return desc;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = +inputWeight.value.replace(',', '.');
    const height = +inputHeight.value.replace(',', '.');

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Por favor, preencha peso e altura corretamente.");
        return;
    }

    const imc = calculateIMC(weight, height);

    value.textContent = imc.replace('.', ',');
    description.textContent = createDescription(imc);

    infos.classList.remove('hidden');

    if (imc >= 18.5 && imc <= 24.9) {
        value.classList.remove('attention');
        value.classList.add('normal');
    } else {
        value.classList.remove('normal');
        value.classList.add('attention');
    }
});
