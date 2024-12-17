// console.log('by query selector',document.querySelector('h1'))
// console.log('byId', document.getElementById('hello'))
// console.log('by query selector all',document.querySelectorAll('h1'))
// console.log('by class name', document.getElementsByClassName('select'))
// console.log('by tag name', document.getElementsByTagName('h1'))


// let toPLay = document.querySelector('img')

// console.log(toPLay.getAttribute('src'))

// // toPLay.removeAttribute('src')


// console.log('img',toPLay);

// function coolStuff(params) {
//     toPLay.setAttribute('alt', 'Ben ten')
    
// }

let light = document.querySelector('img')
let all = document.querySelector('body')

function turnOn(){
    light.setAttribute('src', './res/light-on.svg')
    all.style.color = 'white'
    all.style.backgroundColor = 'black'
}
function turnOff(){
    light.setAttribute('src', './res/light-off.svg')
    all.style.color = 'black'
    all.style.backgroundColor = 'white'
}
function toggleLight(){
    if (light.getAttribute('src') != 'res/light-on.svg' ) {
        console.log(light.getAttribute('src'));
        
        light.setAttribute('src', 'res/light-on.svg')
        all.style.color = 'white'
        all.style.backgroundColor = 'black'
        
    } else {
        light.setAttribute('src', 'res/light-off.svg')
        all.style.color = 'black'
        all.style.backgroundColor = 'white'
        
    }
}



