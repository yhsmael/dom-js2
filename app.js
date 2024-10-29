
// 1
const lista = document.querySelector('#lista');
console.log(lista.innerHTML);

// 2
 lista.children[1].innerHTML = 'item modificado!'

// 3
 const novoElement = document.createElement('li');
 novoElement.innerText 
 += 'novo elemento adicionado'
 lista.appendChild(novoElement)
 console.log(lista);


// 4
 function elementCreater(){
    const createElem = document.createElement('li');
    createElem.innerText = "adicionei outro elemento dinamicamente";
    lista.appendChild(createElem)
 }

 const btn = document.querySelector('button').addEventListener('click', elementCreater)
// 5
 const input = document.querySelector('input')

 const showpassword = document.querySelector('.showpassword')
 showpassword.addEventListener('click', () => {
    const input = document.querySelector('input')
    input.setAttribute('type', 'text')
 })

// 6
lista.children[2].style.color = 'blue'
lista.children[3].style.fontStyle = 'italic'

// 7
lista.before('Antes da lista')
lista.after('Depois da lista')

// 8
function verifiction(){
    if(!input.hasAttribute('required')) input.setAttribute('required', 'required')
        console.log('atributo adicionado')
}
verifiction();