const resultScreen = document.querySelector('#result')
const btns = document.querySelectorAll('button')
const rmvEl = document.querySelectorAll('.rmv')

let calculation = []
let accumulation

function printBtns(btn) {
    const value = btn.innerText
    if (value === 'AC') {
        calculation = []
        resultScreen.innerHTML = `
            <span>
                0
            </span>
        `
    } else if (value === '=') {
        resultScreen.innerHTML = `
            <span class="rmv">
                ${math.evaluate(accumulation)}
            </span>
        `
    } else {
        calculation.push(value)
        accumulation = calculation.join('')
        resultScreen.innerHTML = `
            <span class="rmv">
                ${accumulation}
            </span>
        `
    }
}

btns.forEach(btn => btn.addEventListener('click', () => printBtns(btn)))

const plusEl = document.querySelector('.plus')
const subtractEl = document.querySelector('.subtract')
const multiplyEl = document.querySelector('multiply')

function findValue() {
    if ((resultScreen.innerText === '+') || (resultScreen.innerText === '-') || (resultScreen.innerText === '*') || (resultScreen.innerText === '/')) {
        let printArr = []
        let print = `Yeah, it has the value`
        printArr.push(print)
        console.log(printArr)
    }
}

plusEl.addEventListener('click', findValue)
subtractEl.addEventListener('click', findValue)