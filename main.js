//Inserindo Elemento no body
const novoElemento = document.createElement("p");
const body = document.querySelector('body');
const textoElemento = document.createTextNode('Conteúdo do paragrafo novo');

novoElemento.appendChild(textoElemento)
body.appendChild(novoElemento);

console.log(body)
console.log(novoElemento);

//Inserindo Elemento no container
const div = document.getElementById('container')
const el = document.createElement('h1')
el.appendChild(document.createTextNode("ESSE É O H2"))
div.appendChild(el);
console.log(div)
console.log(el)




