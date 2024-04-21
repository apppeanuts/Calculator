const resultnum = document.getElementById('resultnum');
const one = document.getElementById('one');
const nums = document.querySelectorAll('#num');
const ac = document.getElementById('ac');
const plus = document.getElementById('plus');

const arr = [];

for (const num of nums) {
    num.addEventListener('click', () => {
        arr.push(parseInt(num.textContent));
    });
}

ac.addEventListener('click', () => {
    arr = [];
});

let total = 0;
function sum(iterable) {
    for (let num of iterable) {
        total += num;
    }
    return total;
}

plus.addEventListener('click', () => {
    for (const num of nums) {
        num.addEventListener('click', () => {
            sum(arr);
        });
    }
});
