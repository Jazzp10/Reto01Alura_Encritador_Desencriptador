
src="./JS/imprimir.js"
let texto2=document.querySelector("textarea");
texto2.focus();

const  diccionario={
    ai:    'a',
    enter: 'e',
    imes:  'i',
    ober:  'o',
    ufat:  'u'
}

function preRegExp(dic){
    const preRegex = Object.keys(dic).reduce((diccionario, next) => diccionario+"|"+next);
    return new RegExp(preRegex, 'gi')
}
function Desencriptacion(text, dic){
    let frase=text.value;


    return imprimir(frase.replace(preRegExp(dic), (match) => diccionario[match]));


}



