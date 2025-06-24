//SELECIONAR ELEMENTO
const addUserText = document.getElementById('add-user');
const addUserText2 = document.querySelector('#add-user');

//SELECIONAR MULTIPLOS ELEMENTOS
const allItems = document.querySelectorAll('.item'); //retorna uma lista
const all = document.getElementsByClassName('item'); //não consegue utilizar as ferramentas de lista (htmlCollection)
const all2 = document.getElementsByTagName('li'); //htmlCollection também


//Manipular os elementos

// const items = document.querySelector('.items');
// console.log(items);

//items.remove();
// items.firstElementChild.remove();
// items.lastElementChild.remove();
//items.lastElementChild.innerHTML = '<h1>Olá</h1>'=> muda diretamente o HTML

const btn = document.querySelector('.btn');
btn.style.background = 'red';

const botao = document.querySelector('#submit-button');
const input = document.querySelector('#name');
const email = document.querySelector('#email');
const myForm = document.querySelector('#my-form');

const items = document.querySelector('.items');

botao.addEventListener('click', function(event){
    event.preventDefault();

    const inputValor = input.value;
    const emailValor = email.value;
    
    if(inputValor === '' || emailValor === ''){
        return alert('Por favor, preencha os campos de nome e e-mail.')
    }

    myForm.style.background = 'red';
    items.firstElementChild.textContent = inputValor;
    items.children[1].textContent = emailValor;

})