let cont = 0
let hexadecimais = []
let r1 = document.getElementById('r-1')
let r2 = document.getElementById('r-2')
let g1 = document.getElementById('g-1')
let g2 = document.getElementById('g-2')
let b1 = document.getElementById('b-1')
let b2 = document.getElementById('b-2')
let coresEscolhidas = document.getElementById('cores-escolhidas')
let botao = document.getElementById('botao')
let fundo = document.querySelector('body')
let arrayHexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let len = arrayHexadecimal.length

const options = () => {
    let options = []
    for (let i = 0; i < len; i++) {
        options.push(document.createElement('option'))

    }
    return options
}

function colocaOptionsNoSelect(container) {
    Object.values(options()).forEach(el => container.appendChild(el))
}
colocaOptionsNoSelect(r1)
colocaOptionsNoSelect(r2)
colocaOptionsNoSelect(g1)
colocaOptionsNoSelect(g2)
colocaOptionsNoSelect(b1)
colocaOptionsNoSelect(b2)


for (let i = 0; i < len; i++) {
    Object.values(r1.children)[i].innerText = arrayHexadecimal[i]
    Object.values(r2.children)[i].innerText = arrayHexadecimal[i]
    Object.values(g1.children)[i].innerText = arrayHexadecimal[i]
    Object.values(g2.children)[i].innerText = arrayHexadecimal[i]
    Object.values(b1.children)[i].innerText = arrayHexadecimal[i]
    Object.values(b2.children)[i].innerText = arrayHexadecimal[i]
}

function hexadecimal() {
    let valores = `#${r1.value}${r2.value}${g1.value}${g2.value}${b1.value}${b2.value}`
    let hexadecimal = {
        backgroundColor: valores
    }
    return hexadecimal
}

function criarVetorDeObjetos() {
    hexadecimais[cont] = hexadecimal()
    cont++
    return hexadecimais
}

function mudarONomeDoBotao() {
    if(hexadecimais.length >= 2)  botao.innerText = 'iniciar' 
}
function criarCores(){
    let cor = document.createElement('div')
    cor.classList.add('cor')
    cor.style.backgroundColor = Object.values(hexadecimal())
       coresEscolhidas.appendChild(
        cor
    )
}
function transicao(){
   if(botao.innerText == 'iniciar'){
       console.log('ok')
       fundo.animate(criarVetorDeObjetos(),{
        duration: 1000,
        iterations: Infinity
       })
   }
}
botao.addEventListener('click', criarVetorDeObjetos, false)
botao.addEventListener('click', mudarONomeDoBotao, false)
botao.addEventListener('click', criarCores, false)
botao.addEventListener('click', transicao)