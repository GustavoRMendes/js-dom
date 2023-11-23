//Set e Remove Attribute
const list = document.getElementById('lista');
const title = document.getElementById('title');
title.setAttribute('class','titulo');
title.removeAttribute('class');
list.setAttribute('class','class-list')
list.removeAttribute('id');

//Desativando Button
const btn = document.getElementById('btn');
btn.setAttribute('disabled','')