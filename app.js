const resultnum = document.getElementById('resultnum');
const one = document.getElementById('one');
const nums = document.querySelectorAll('#num');

const arr = [];
for (const num of nums) {
    num.addEventListener('click', () => {
        arr.push(num.textContent);
    });
}
