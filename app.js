const resultnum = document.getElementById('resultnum');
const nums = document.querySelectorAll('#num');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const percent = document.getElementById('percent');
const plusminus = document.getElementById('plusminus');
const period = document.getElementById('period');
const c = document.getElementById('c');
const ac = document.getElementById('ac');
const equal = document.getElementById('equal');

let numCount = 0;  // 数字が押されるたびに1増える
let symbolCount = 0;  // 四則演算記号が押されるたびに1増える

for (let num of nums) {
    num.addEventListener('click', () => {
        numCount++;
        // numCount !== 1の必要性: numCount === 1の時は初めて数字を押したときなので、初めての時に+=してしまうと、最初の0に対して、押された数字xが+=されて0xとなってしまうから。
        // symbolCount === 1の必要性: 初めて四則演算記号が押されたとき、という意味。その記号に押された数字を+=する。これによって、デフォルトの0から数字を押す前にいきなり記号を押したとしても、0-〇とか0+〇とかのように0からの計算が可能となる。
        if (numCount !== 1 || symbolCount === 1) {
            resultnum.textContent += num.textContent;
        } else {
            resultnum.textContent = num.textContent;
        }
    });
}

addition.addEventListener('click', () => {
    symbolCount++;
    resultnum.textContent += '+';
});

subtraction.addEventListener('click', () => {
    symbolCount++;
    resultnum.textContent += '-';
});

multiplication.addEventListener('click', () => {
    symbolCount++;
    resultnum.textContent += '*';
});

division.addEventListener('click', () => {
    symbolCount++;
    resultnum.textContent += '/';
});

// 丸め誤差の影響により、9.7 + 2.1などは計算結果が正解とずれる
period.addEventListener('click', () => {
    symbolCount++;
    resultnum.textContent += '.';
});

percent.addEventListener('click', () => {
    resultnum.textContent /= 100;
});

// numのaddEventListener内に書く必要ありそうと思ってたが、ここでokなよう
plusminus.addEventListener('click', () => {
    let lastNum = resultnum.textContent[resultnum.textContent.length - 1];
    // slice(0, -1)なので、最初~最後から2番目となる。最後は含まないことが重要
    resultnum.textContent = resultnum.textContent.slice(0, -1) + (-lastNum);
});

equal.addEventListener('click', () => {
    resultnum.textContent = eval(resultnum.textContent);
});

c.addEventListener('click', () => {
    symbolCount++;
    // 配列と違い文字列は個々の要素を変更することができないため、以下では変化なし
    // resultnum.textContent[resultnum.textContent.length - 1] = '';
    resultnum.textContent = resultnum.textContent.slice(
        0, resultnum.textContent.length - 1
    );
});

ac.addEventListener('click', () => {
    resultnum.textContent = 0;
    numCount = 0;
    symbolCount = 0;
});
