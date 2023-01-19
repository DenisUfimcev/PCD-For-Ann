/* let number = {
    a: '',
    b: '',
    c: '',
}

for (let key in number) {
    if (number[key] === '') {
        let one = prompt('Pls enter a new number', '35');
        number[key] = one;
    }
    '-', '+'
}; */


let number = {
    a: '',
    b: '',
    c: '',
    d: '',
};

const digit = ['What you want?', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['X', 'ПЗ'];
const next = ['='];

const out = document.querySelector('.calc-screen p');

let universal = '';

function clearAll () {
    key = '';
    universal = '';
    number.a = '';
    number.b = '';
    number.c = '';
    number.d = '';
    out.textContent = 'Hi, What can I do for you?';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

    if(!event.target.classList.contains('btn')) return;

    if(event.target.classList.contains('ac')) return;

    function doit() {
       let result = (((number.a * number.b / 100) * number.c) / 100) * number.d;
       out.textContent = 'Your salary: ' + result;
    }
    function ask() {
        out.textContent = 'How much sold in one day?';
};
    function press() {
        if (number.a === '') {
        number.a = universal
        out.textContent = 'How much days have you worked?';
        universal = '';
    } else if (number.b === '') {
        number.b = universal
        out.textContent = 'How much you percent picked up?';
        universal = '';
    } else if (number.c === '') {
        number.c = universal
        out.textContent = 'What your percent?';
        universal = '';
    } else if (number.d === '') {
        number.d = universal
        universal = '';
        doit()
    } else {
        out.textContent = 'Do you want something else?'
    }
};

    function machine() {
            universal += key
            out.textContent = universal;
    }

    out.textContent = '';

    const key = event.target.textContent;



    if (action.includes(key)) {
        ask();
    }
    if (next.includes(key)) {
        press();
    }
    if(digit.includes(key)) {
        machine();
    }


    
}

