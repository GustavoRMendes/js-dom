//criando Elemento e adicionando o InsertBefore

const newParagraph = document.createElement("p");
newParagraph.classList = 'paragrafo';
const text = document.createTextNode('Olá, Mundo!');
newParagraph.appendChild(text);
console.log(newParagraph);
const container = document.getElementById('container');
container.appendChild(newParagraph);

//container.removeChild(newParagraph)
//container.remove()

const newParagraph1 = document.createElement('p');
newParagraph1.classList = 'paragrafo-before';
const text1 = document.createTextNode('Before');
newParagraph1.appendChild(text1);
container.insertBefore(newParagraph1,newParagraph);

//Trocando elemento
const troca = document.createElement('h2')
const trocaTexto = document.createTextNode('MUDOU');
troca.appendChild(trocaTexto)
const title = document.querySelector("#title")
const pai = title.parentNode;

pai.replaceChild(troca,title); //(atual,antigo)


