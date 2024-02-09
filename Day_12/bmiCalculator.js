
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    // to prevent values from being sent to the server
    e.preventDefault();
    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const details = document.querySelector("#details");

    if (height === "" || isNaN(height) || height <= 0) {
        results.innerHTML = "Please provide a valid height";
    } else if (height === "" || isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        // for underweight
        if (bmi < 18.6) {
            details.innerHTML = `<span>You are underweight</span>`;
        }
        // for normal weight
        else if (bmi >= 18.6 && bmi <= 24.9) {
            details.innerHTML = `<span>Your weight is Normal</span>`;
        }
        // for overweight
        else {
            details.innerHTML = `<span>You are overweight</span>`;
        }
    }
});
