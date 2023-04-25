src="./JS/imprimir.js"
let texto1=document.querySelector("textarea");
texto1.focus();

const  diccionario1={
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
}

function preRegExp(dic){
    const preRegex = Object.keys(dic).reduce((diccionario1, next) => diccionario1+"|"+next);
    return new RegExp(preRegex, 'gi')
}
function Encriptar(text, dic){
    let frase=text.value;


    return imprimir(frase.replace(preRegExp(dic), (match) => diccionario1[match]));


}

