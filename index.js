const btnEl = document.getElementById('btn');
const bmiResultEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

function calculateBMI() {
    const heightEl = document.getElementById('height').value / 100;
    const weightEl = document.getElementById('weight').value;

    const bmiValue = weightEl / (heightEl * heightEl);
    bmiResultEl.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionEl.innerHTML = "Underweight";
    }
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        weightConditionEl.innerHTML = "Normal";
    }
    else {
        weightConditionEl.innerHTML = "Overweight";
    }
}

btnEl.addEventListener('click', calculateBMI);
