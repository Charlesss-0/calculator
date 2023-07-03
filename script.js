const result = document.querySelector('#result')
const oneEl = document.querySelector('.one')
const twoEl = document.querySelector('.two')
const threeEl = document.querySelector('.three')
const fourEl = document.querySelector('.four')
const fiveEl = document.querySelector('.five')
const sixEl = document.querySelector('.six')
const sevenEl = document.querySelector('.seven')
const eightEl = document.querySelector('.eight')
const nineEl = document.querySelector('.nine')
const zeroEl = document.querySelector('.zero')
const decimalEl = document.querySelector('.decimal-separator')
const plusEl = document.querySelector('.plus')
const subtractEl = document.querySelector('.subtract')
const multiplyEl = document.querySelector('.multiply')
const divisionEl = document.querySelector('.division')
const allClear = document.querySelector('.all-clear')
const equalSign = document.querySelector('.equals-sign')

let enteredValues = []
function printEl(el) {
    const defaultZero = document.querySelectorAll('.default-zero')
    defaultZero.forEach((e) => {
        e.textContent = ''
    })

    const element = document.createElement('span')
    element.textContent = el
    result.appendChild(element)
    enteredValues.push(el)
    console.log(enteredValues)
}

function clearResult() {
    enteredValues = []
    operators = []
    result.textContent = enteredValues
    result.innerHTML = `
        <span class="default-zero">
            0
        </span>
    `
    console.log(enteredValues)
}

allClear.addEventListener('click', clearResult)

oneEl.addEventListener('click', () => {
    printEl(1)
})

twoEl.addEventListener('click', () => {
    printEl(2)
})

threeEl.addEventListener('click', () => {
    printEl(3)
})

fourEl.addEventListener('click', () => {
    printEl(4)
})

fiveEl.addEventListener('click', () => {
    printEl(5)
})

sixEl.addEventListener('click', () => {
    printEl(6)
})

sevenEl.addEventListener('click', () => {
    printEl(7)
})

eightEl.addEventListener('click', () => {
    printEl(8)
})

nineEl.addEventListener('click', () => {
    printEl(9)
})

zeroEl.addEventListener('click', () => {
    printEl(0)
})

decimalEl.addEventListener('click', () => {
    printEl('.')
})

let operators = []

plusEl.addEventListener('click', () => {
    operators.push('+')
})

subtractEl.addEventListener('click', () => {
    operators.push('-')
})

multiplyEl.addEventListener('click', () => {
    operators.push('*')
})

divisionEl.addEventListener('click', () => {
    operators.push('/')
})

let b = 4

function performCalculation() {
    result.textContent = ''
    const currentValue = enteredValues.map(val => parseInt(val))
    const calcResult = document.createElement('span')
    if (operators == '+') {
        calcResult.textContent = currentValue + b
        result.appendChild(calcResult)

    } else if (operators == '-') {
        calcResult.textContent = currentValue - b
        result.appendChild(calcResult)

    } else if (operators == '*') {
        calcResult.textContent = currentValue * b
        result.appendChild(calcResult)

    } else {
        calcResult.textContent = currentValue / b
        result.appendChild(calcResult)

    }
}

equalSign.addEventListener('click', () => {
    performCalculation()
})