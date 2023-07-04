const resultScreen = document.querySelector('#result')
const btns = document.querySelectorAll('button')

let calculation = []
let accumulation

function add(a, b) {
    const sum = a + b
    resultScreen.innerHTML = `
        <span>
            ${sum}
        </span>
    `
}

function subtract(a, b) {
    const sum = a - b
    resultScreen.innerHTML = `
        <span>
            ${sum}
        </span>
    `
}

function multiply(a, b) {
    const sum = a * b
    resultScreen.innerHTML = `
        <span>
            ${sum}
        </span>
    `
}

function division(a, b) {
    const sum = a / b
    resultScreen.innerHTML = `
        <span>
            ${sum}
        </span>
    `
}

function getNumberValues(btn, firstNum, secondNum) {
    const value = btn.innerText

    if (value === 'AC') {
        calculation = []
        resultScreen.innerHTML = `
            <span>
                0
            </span>
        `
    } else if (value === '=') {
        if (calculation.includes('+')) {
            add(+firstNum, +secondNum)

        } else if (calculation.includes('-')) {
            subtract(calculation.join(''))

        } else if (calculation.includes('*')) {
            multiply()

        } else if (calculation.includes('/')) {
            division()
        }
    } else {
        calculation.push(value)
        accumulation = calculation.join('')
        resultScreen.innerHTML = `
            <span>
                ${accumulation}
            </span>
        `
    
    }
}

btns.forEach(btn => btn.addEventListener('click', () => getNumberValues(btn)))
