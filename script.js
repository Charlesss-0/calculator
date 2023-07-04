const resultScreen = document.querySelector('#result')
const btns = document.querySelectorAll('button')

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
            <span>
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
const multiplyEl = document.querySelector('.multiply')
const divisionEl = document.querySelector('.division')

let operators = ['+', '-', '*', '/']

function findValue() {
    if ((operators.includes(resultScreen.innerText))) {
        if (operators.includes(calculation.at(-1))) {
            calculation.splice(-1)
            console.log("operator already entered")
        }
    }
}

plusEl.addEventListener('click', findValue)
subtractEl.addEventListener('click', findValue)
multiplyEl.addEventListener('click', findValue)
divisionEl.addEventListener('click', findValue)