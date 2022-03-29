let options = document.getElementsByClassName('op')
let r1 = document.getElementById('r-1')
let r2 = document.getElementById('r-2')
let g1 = document.getElementById('g-1')
let g2 = document.getElementById('g-2')
let b1 = document.getElementById('b-1')
let b2 = document.getElementById('b-2')
let coresEscolhidas = document.getElementById('cores-escolhidas')
let add = document.getElementById('add')
let fundo = document.querySelector('body')
let cont = 0
let array = []
let listaDeCores = []
let controlador = document.getElementById('controlador')
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let cores = document.getElementsByClassName('cor')
let lenCores = cores.length



function hexadecimal() {
    let red = `${r1.value}${r2.value}`
    let green = `${g1.value}${g2.value}`
    let blue = `${b1.value}${b2.value}`
    let hexadecimal = `#${red}${green}${blue}`
    return hexadecimal
}


function pegarCores() {
    let cor = document.createElement('div')
    cor.classList.add('cor', hexadecimal())
    cor.style.backgroundColor = hexadecimal()
    coresEscolhidas.appendChild(
        cor
    )
    retonarCores()
}

function objetoDaTransicao() {
    return {
        backgroundColor: hexadecimal()
    }
}

function arrayDaTransicao() {
    array[cont] = objetoDaTransicao()
    cont++
    return array
}

function animacao(el, transicao, tempo, int = Infinity) {
    el.animate(transicao, {
        duration: tempo,
        iterations: int
    })
}

function parar() {
    document.getAnimations().forEach(el => {
        el.playbackRate = 0
    })
}

function velocidade() {
    let velocidade = parseInt(controlador.value * 1000)
    return velocidade
}


function comecarAnimacao() {
    if (coresEscolhidas.children.length > 1) {
        animacao(fundo, arrayDaTransicao(), velocidade())
    }
    if (play.classList.contains('foco')) {
        play.classList.remove('foco')
    }
}

function focoNoElemento() {
    play.classList.add('foco')
}

function codigoDasCores(e) {
    let hexadecimal = (e.target.classList[1])
    colocaCodigoDasCoresNosInputs(hexadecimal)
}

function colocaCodigoDasCoresNosInputs(el) {
    r1.value = [el[1]]
    r2.value = [el[2]]
    g1.value = [el[3]]
    g2.value = [el[4]]
    b1.value = [el[5]]
    b2.value = [el[6]]

}

function selecionarElemento(e) {
    e.target.classList.add('selecionado')
    let selecionado = document.getElementsByClassName('selecionado')
    if (selecionado.length > 1) {
        Object.values(selecionado).forEach(el => {
            el.classList.remove('selecionado')
            e.target.classList.add('selecionado')
        })
    }
}

function retonarCores() {
    Object.values(cores).forEach(el => {
        el.addEventListener('click', codigoDasCores, false)
        el.addEventListener('click', selecionarElemento, false)
    })
}

function colocarValoresDosOptionsNasCores() {
    let selecionado = document.querySelector('.selecionado')
    let red = `${r1.value}${r2.value}`
    let green = `${g1.value}${g2.value}`
    let blue = `${b1.value}${b2.value}`
    let hexadecimal = `#${red}${green}${blue}`
    selecionado.style.backgroundColor = hexadecimal
    // console.log(selecionado)
}

Object.values(options).forEach(op => {
    op.addEventListener('input', colocarValoresDosOptionsNasCores, false)

})


add.addEventListener('click', pegarCores, false)
add.addEventListener('click', objetoDaTransicao, false)
add.addEventListener('click', arrayDaTransicao, false)
pause.addEventListener('click', parar, false)
play.addEventListener('click', comecarAnimacao, false)
controlador.addEventListener('input', velocidade, false)
controlador.addEventListener('input', focoNoElemento, false)