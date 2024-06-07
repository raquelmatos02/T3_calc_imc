// Campos da calculadora
let inputPeso = document.getElementById('peso')
let inputAltura = document.getElementById('altura')
let errorPeso = document.getElementById('errorPeso')
let errorAltura = document.getElementById('errorAltura')
const btnCalc = document.getElementById('calcBtn')

// Resultado
const secResult = document.getElementById('result')
const line = document.getElementById('line')
const imcTxt = document.getElementById('imc')
const classTxt = document.getElementById('class')
const btnE = document.getElementById('btnE')
const btnM = document.getElementById('btnM')
const btnI = document.getElementById('btnI')
const btnClose = document.getElementById('close')


const itemsColors = [line, imcTxt, classTxt, btnE, btnM, btnI]

function variationsColorsItems(elements, colorsClass) {
    elements.forEach(element => {
        element.className = colorsClass;
    });
}
 



function closeModal() {
    secResult.classList.remove('viewResult')

    inputPeso.value = ''
    inputAltura.value = ''
}

btnClose.addEventListener('click', closeModal)

function calculadoraImc() {
    // Validação de inputs
    if (inputPeso.value === '') {
        errorPeso.innerHTML = 'Campo vazio / caractere inválido *'
        return
    } else {
        errorPeso.innerHTML = ''
    }

    if (inputAltura.value === '') {
        errorAltura.innerHTML = 'Campo vazio / caractere inválido *'
        return
    } else {
        errorAltura.innerHTML = ''
    }

    // Formula 
    let imc = inputPeso.value / (inputAltura.value * inputAltura.value)
    imc = imc.toFixed(2)

    if (imc < 18.5) {
        secResult.classList.add('viewResult')
        imcTxt.innerHTML = imc
        classTxt.innerHTML = 'Abaixo do peso'
        btnE.style.display = 'flex'
        btnM.style.display = 'none'
        btnI.style.display = 'none'
        variationsColorsItems(itemsColors, 'b')
        
    } else if (imc >= 18.5 && imc <= 24.9) {
        secResult.classList.add('viewResult')
        imcTxt.innerHTML = imc
        classTxt.innerHTML = 'Peso normal'
        btnE.style.display = 'none'
        btnM.style.display = 'flex'
        btnI.style.display = 'none'
        variationsColorsItems(itemsColors, 'g')

    } else if (imc >= 25 && imc <= 29.9) {
        secResult.classList.add('viewResult')
        imcTxt.innerHTML = imc
        classTxt.innerHTML = 'Sobrepeso'
        btnE.style.display = 'none'
        btnM.style.display = 'none'
        btnI.style.display = 'flex'
        variationsColorsItems(itemsColors, 'y')

    } else if (imc >= 30 && imc <= 34.9) {
        secResult.classList.add('viewResult')
        imcTxt.innerHTML = imc
        classTxt.innerHTML = 'Obesidade grau 1'
        btnE.style.display = 'none'
        btnM.style.display = 'none'
        btnI.style.display = 'flex'
        variationsColorsItems(itemsColors, 'o')

    } else if (imc >= 35 && imc <= 39.9) {
        secResult.classList.add('viewResult')
        imcTxt.innerHTML = imc
        classTxt.innerHTML = 'Obesidade grau 2'
        btnE.style.display = 'none'
        btnM.style.display = 'none'
        btnI.style.display = 'flex'
        variationsColorsItems(itemsColors, 'r')

    } else if (imc >= 40) {
        secResult.classList.add('viewResult')
        imcTxt.innerHTML = imc
        classTxt.innerHTML = 'Obesidade grau 3'
        btnE.style.display = 'none'
        btnM.style.display = 'none'
        btnI.style.display = 'flex'
        variationsColorsItems(itemsColors, 'v')
    }
    

}

btnCalc.addEventListener('click', calculadoraImc)

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculadoraImc()
    }
})