let pcount = document.getElementById('count');
let text = document.getElementById('evenodd');
let number1 = 0;

function incr() {
    if (number1 < 10) {
        number1++;
        pcount.textContent = number1;

        if (number1 % 2 == 0 && number1 != 0) {
            text.textContent = 'Even';
        } else {
            text.textContent = 'Odd';
        }
    } else {
        alert('The number is more than 10!!');
        number1 = 0;
        pcount.textContent = number1;   
        text.textContent = '';
    }
}

function decr() {
    if (number1 > 0) {
        number1--;
        pcount.textContent = number1;

        if (number1 % 2 == 0 && number1 != 0) {
            text.textContent = 'Even';
        } else {
            text.textContent = 'Odd';
        }
    }
}
