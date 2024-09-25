document.getElementById('calculate-btn').addEventListener('click', function() {
    let feet = parseInt(document.getElementById('height-feet').value);
    let inches = parseInt(document.getElementById('height-inches').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let age = parseInt(document.getElementById('age').value);

    if (isNaN(feet) || isNaN(inches) || isNaN(weight) || isNaN(age)) {
        alert("Please enter valid inputs");
        return;
    }

   
    let heightInInches = (feet * 12) + inches;

    let heightInMeters = heightInInches * 0.0254;
    let weightInKg = weight * 0.453592;

    
    let bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

    
    document.getElementById('bmi-result').textContent = bmi;

    
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-category').textContent = category;

    
    let degree = getNeedleRotation(bmi);
    document.getElementById('needle').style.transform = `t  ranslateX(-50%) rotate(${degree}deg)`;
});

function getNeedleRotation(bmi) {
    
    let minBMI = 16;
    let maxBMI = 40;
    let minDegree = -90; 
    let maxDegree = 90;   

    
    let degree = ((bmi - minBMI) * (maxDegree - minDegree)) / (maxBMI - minBMI) + minDegree;
    return Math.max(minDegree, Math.min(degree, maxDegree));  
}
