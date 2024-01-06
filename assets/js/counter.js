'use strict';

let numberElements = document.querySelectorAll('.num');
let numbers = [];

numberElements.forEach(num => {
    numbers.push(num.getAttribute('data-count'));
});

function incrementCounter() {
    numbers.forEach((element, index) => {
        for (let i = index; i < element; i++) {
            setTimeout(() => {
                i++;
                numberElements[index].textContent = i;
            }, i / 100);

        }
    });
}

incrementCounter();