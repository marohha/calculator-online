let btnDark = document.getElementById('mode-dark_btn');
let btnLight = document.querySelector('.mode-light_btn');
let calcBtns = Array.from(document.querySelectorAll('.button'));
let btnFigure = document.querySelectorAll('.btn-figure');
let display = document.querySelector('.display');
let main = document.querySelector('.main');
let displayValue = document.querySelector('.display-value');

btnDark.addEventListener('click', () => {
    btnDark.style.backgroundColor = '#1f1f1f';
    btnLight.style.backgroundImage = 'url(\'img/sun-2-svgrepo-com (1).png\')';
    btnDark.style.backgroundImage = 'url(\'img/moon-svgrepo-com (1).png\')';
    btnLight.style.backgroundColor = '#1f1f1f';
    display.style.backgroundColor = '#1f1f1f';
    display.style.color = 'white';
    main.style.backgroundColor = '#1f1f1f';
    calcBtns.forEach(e => {
        e.style.backgroundColor = '#1f1f1f';
        e.style.boxShadow = '0px 0px 2px 2px #545454';
    });
    btnFigure.forEach(e => {
        e.style.color = 'white';
    });
    btnDark.style.boxShadow = ('0px 0px 2px 2px #545454');
    btnLight.style.boxShadow = ('0px 0px 2px 2px #545454');
})

btnLight.addEventListener('click', () => {
    btnDark.style.backgroundColor = '#fff';
    btnLight.style.backgroundColor = '#fff';
    btnLight.style.backgroundImage = 'url(\'img/sun-2-svgrepo-com.png\')';
    btnDark.style.backgroundImage = 'url(\'img/moon-svgrepo-com.png\')';
    display.style.backgroundColor = '#fff';
    display.style.color = 'black';
    main.style.backgroundColor = '#fff';
    calcBtns.forEach(e => {
        e.style.backgroundColor = '#fff';
        e.style.boxShadow = '0px 0px 2px 2px #ededed';
    });
    btnFigure.forEach(e => {
        e.style.color = 'black';
    });
    btnDark.style.boxShadow = ('0px 0px 2px 2px #ededed');
    btnLight.style.boxShadow = ('0px 0px 2px 2px #ededed');
})

calcBtns.forEach(e => {
    e.addEventListener('mousedown', () => {
        e.style.boxShadow = '0px 0px 0px 0px ';
    });
    // e.style.backgroundColor === '#fff' ? e.addEventListener('mouseup', () => { e.style.boxShadow = '0px 0px 2px 2px #ededed' }) : e.addEventListener('mouseup', () => { e.style.boxShadow = '0px 0px 2px 2px #545454' });
    e.addEventListener('mouseup', () => {
        e.style.boxShadow = '0px 0px 2px 2px #ededed';
    });
});

calcBtns.map(e => {
    e.addEventListener('click', (el) => {
        switch (el.target.innerText) {
            case 'AC':
                displayValue.innerText = '0';
                break;
            case '+/-':
                displayValue.innerText = '-';
                break;
            case '=':
                try {
                    displayValue.innerText = eval(display.innerText);
                    break
                } catch (el) {
                    displayValue.innerText = 'Error';
                    break;
                }
            case '%':
                displayValue.innerText = displayValue.innerText / 100;
                break;
            default:
                if (displayValue.innerText === '0' && displayValue.innerText !== '.') {
                    displayValue.innerText = el.target.innerText;
                } else {
                    displayValue.innerText += el.target.innerText;
                }
        } 
    });
})




