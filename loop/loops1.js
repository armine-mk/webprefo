// attrapper un element html
const h1 = document.querySelector('h1')


    h1.innerText +='Bienvenue sur mon site'     
    h1.textContent = 'Hello'

// attrapper l'element body du html
const body = document.querySelector('body')
// creer un element html depuis le js
const p = document.createElement('p')
// ajouter notre element p à body
body.appendChild(p)