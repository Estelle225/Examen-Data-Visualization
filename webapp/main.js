document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;

    const counterDisplay = document.getElementById('counter-display');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');

    function updateCounterDisplay() {
        counterDisplay.textContent = counter;
    }

    increaseButton.addEventListener('click', function() {
        counter++;
        updateCounterDisplay();
    });

    decreaseButton.addEventListener('click', function() {
        counter--;
        updateCounterDisplay();
    });

    resetButton.addEventListener('click', function() {
        counter = 0;
        updateCounterDisplay();
    });

    updateCounterDisplay(); 
});
