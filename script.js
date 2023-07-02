const result = document.querySelector('#result')
const defaultZero = document.querySelector('.default-zero')
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

function printNum(el) {
    defaultZero.classList.add('hidden')
    result.innerHTML += `
        <span class="number-values">
            ${el}
        </span>
    `
}

oneEl.addEventListener('click', () => {
    printNum(1)
})

twoEl.addEventListener('click', () => {
    printNum(2)
})

threeEl.addEventListener('click', () => {
    printNum(3)
})

fourEl.addEventListener('click', () => {
    printNum(4)
})

fiveEl.addEventListener('click', () => {
    printNum(5)
})

sixEl.addEventListener('click', () => {
    printNum(6)
})

sevenEl.addEventListener('click', () => {
    printNum(7)
})

eightEl.addEventListener('click', () => {
    printNum(8)
})

nineEl.addEventListener('click', () => {
    printNum(9)
})

zeroEl.addEventListener('click', () => {
    printNum(0)
})

const allClear = document.querySelector('.all-clear')

function clearResult() {
    result.innerHTML = ''
}

allClear.addEventListener('click', clearResult)