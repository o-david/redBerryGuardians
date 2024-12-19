let output = document.querySelector('h2')
let input1 = document.getElementById('input1') 
let input2 = document.getElementById('input2') 
// function add() {
    //     console.log(output)
    //     output.textContent = +output.textContent + +input.value 
// }
// function sub() {
//     output.textContent = +output.textContent - +input.value 
//     console.log(output)
// }



function solve(operation) {
        switch (operation) {
            case 'add':
               output.textContent = +output.textContent + +input.value     
            break;
            case 'sub':
                output.textContent = +output.textContent - +input.value 
            break;
            case 'divide':
                output.textContent = +output.textContent / +input.value 
            break;
            case 'multi':
                output.textContent = +output.textContent * +input.value 
            break;    
        default:
            alert('Invalid operation!')
            break;
    }
    input.value = ''

}

function triangle(b,h) {
    return 0.5* b *h
}

async function copyAnswer(params) {
    try {
        navigator.clipboard.writeText(output.textContent)
        alert("text copied successfully")
    } catch (error) {
        alert("text copy failed")
    }
}