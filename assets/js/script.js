let horas = localStorage.getItem('horas') ? localStorage.getItem('horas') : '0' + 1
let minutos = localStorage.getItem('minutos') ? localStorage.getItem('minutos') : 39
let segundos = localStorage.getItem('segundos') ? localStorage.getItem('segundos') : 59

function start() {

    if(localStorage.getItem('hdbfowb')) {
       document.querySelector('#exitpop').remove()
    }

    setInterval(() => {
        timer()
    }, 1000)
}

function timer() {
    segundos--;
    if (segundos < 10 && segundos > 0) {
        segundos = '0' + segundos
    }

    if (segundos == 0) {
        segundos = 59;
        minutos--;
        if (minutos < 10 && minutos > 0) {
            minutos = '0' + minutos
        }

        if (minutos == 0) {
            minutos = 59;
            horas--;
        }
    }
    document.querySelector('#horas').innerHTML = horas
    document.querySelector('#minutos').innerHTML = minutos
    document.querySelector('#segundos').innerHTML = segundos

    localStorage.setItem('horas', horas)
    localStorage.setItem('minutos', minutos)
    localStorage.setItem('segundos', segundos)
}

function activePop() {
    document.body.innerHTML += 
    `
    <div id="backgroundPop" onclick="closePop()">
        <div id="pop" class="w-75 h-25">
            <button class="btn-close float-end m-3 d-block" aria-label="Close"></button>
            <div class="container d-flex align-self-center justify-content-center text-center">
                <span class="h2">
                    Não saia! Você continuará a ter problemas com seu animalzinho!
                </span>
            </div>
            <div class="container d-flex justify-content-center">
                <img src="./assets/images/cachorro-triste.jpg" width="350" alt="" class="img-fluid">
            </div>
            <div class="container">
                <button class="btn btn-success w-100" onclick="closePop()">VOLTAR</button>
            </div>
        </div>
    </div>
    `
    localStorage.setItem('hdbfowb', 'true')
}

function closePop() {
    document.querySelector('#backgroundPop').remove()
}