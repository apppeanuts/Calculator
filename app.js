const resultnum = document.getElementById('resultnum');
const one = document.getElementById('one');
const num = document.querySelectorAll('#num');

const arr = [];
for (const button of num) {
    button.addEventListener('click', () => {
        arr.push(button.textContent);
    });
}
