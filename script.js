const resultScreen = document.querySelector('#result')
const btns = document.querySelectorAll('button')
const rmvEl = document.querySelectorAll('.rmv')


let btnVal = []
let accumulation

function printBtns(btn) {
    const value = btn.innerText

    if (value === 'AC') {
        btnVal = []
        resultScreen.innerHTML = `
            <span>
                0
            </span>
        `
    } else if (value === '=') {
        resultScreen.innerHTML = `
            <span class="rmv">
                ${eval(accumulation)}
            </span>
        `
    } else {
        btnVal.push(value)
        accumulation = btnVal.join('')
        resultScreen.innerHTML = `
            <span class="rmv">
                ${accumulation}
            </span>
        `
    }
}


btns.forEach(btn => btn.addEventListener('click', () => printBtns(btn)))