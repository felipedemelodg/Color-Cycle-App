let options = document.getElementsByClassName("op");
let r1 = document.getElementById("r-1");
let r2 = document.getElementById("r-2");
let g1 = document.getElementById("g-1");
let g2 = document.getElementById("g-2");
let b1 = document.getElementById("b-1");
let b2 = document.getElementById("b-2");
let quadro_de_cores = document.getElementById("cores-escolhidas");
let add = document.getElementById("add");
let fundo = document.querySelector("body");
let cont = 0;
let array = [];
let listaDeCores = [];
let controlador = document.getElementById("controlador");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let cores = document.getElementsByClassName("cor");
let lenCores = cores.length;

function criarDivNoQuadroDeCores() {
    const cor = document.createElement("div");
    cor.classList.add("cor");
    quadro_de_cores.appendChild(cor);
    darCorADivNoQuadroDeCores(cor)
    retornaOsFilhosDoQuadroDeCores(quadro_de_cores)

}

function pegaOsValoresDosOptions() {
    const values = [];
    Object.values(options).forEach((el) => {
        values.push(el.value);
    });
    return values
}
function hexadecimal() {
    return "#" + pegaOsValoresDosOptions().join().replace(/,/g, '');
}
function darCorADivNoQuadroDeCores(el) {
    el.classList.add(hexadecimal())
    el.style.backgroundColor = hexadecimal()
}

function objetoDaAnimacao() {
    return { backgroundColor: hexadecimal() }
}
function keyframes() {
    const array = []
    Object.values(quadro_de_cores.children).forEach(el => {
        array.push({ backgroundColor: el.style.backgroundColor })
    })
    return array
}
function animacao(el, keyframes) {
    el.animate(keyframes, {
        duration: parseInt(controlador.value) * 2500,
        iterations: Infinity
    })
}
function rodeAnimacao() {
    animacao(fundo, keyframes())
}

function mudarVelocidadeDaAnimação() {
    const tempo = parseInt(controlador.value) / 5
    document.getAnimations().forEach(el => {
        el.playbackRate = tempo
    })
}
function pausarAnimacao() {
    document.getAnimations().forEach(el => {
        el.playbackRate = 0
    })
}

function retornarElementoDoQuadroDeCores(e) {
    adicionarSelecao(e.target)
}
function adicionarSelecao(el) {
    el.classList.add('selecionado')
    const selecionado = document.getElementsByClassName('selecionado')
    Object.values(selecionado).forEach(selecao => {
        if (selecao.classList.contains('selecionado')) {
            selecao.classList.remove('selecionado')
            el.classList.add('selecionado')
            backgroundColorDoSelecionado()
        }
    })
}

function backgroundColorDoSelecionado() {
    const selecionado = document.querySelector('.selecionado').classList[1]
    alteraValorDosOptions(selecionado)
}

function alteraValorDosOptions(el) {
    let valor = el.replace('#', "")
    let select = Object.values(options)

    for (let i = 0; i < valor.length; i++) {
        select[i].value = valor[i]
    }
}
function mudarCorDoSelecionado(){
    const seleconado = document.querySelector('.selecionado')
    seleconado.style.backgroundColor = hexadecimal()
}

Object.values(options).forEach(el => {
    el.addEventListener('input', mudarCorDoSelecionado)
})

function retornaOsFilhosDoQuadroDeCores(filho) {
    Object.values(filho.children).forEach(el => {
        el.addEventListener('click', retornarElementoDoQuadroDeCores, false)
    })
}
controlador.addEventListener('input', mudarVelocidadeDaAnimação)
play.addEventListener('click', rodeAnimacao, false)
pause.addEventListener('click', pausarAnimacao, false)
add.addEventListener("click", criarDivNoQuadroDeCores, false);
