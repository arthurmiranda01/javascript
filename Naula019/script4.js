/* O que é um callback?

Uma função que eu crio pra fazer algo que vai ser executado no futuro.
Uma função que eu passo pra alguém executar a hora que ele quiser

*/

let Callback = function() {
    alert('clicou no botão')
} // a função de callback, basicamente criei uma função pra quem quiser, executar a hora que quiser

document.querySelector('#botão').addEventListener('click', Callback); // O callback vai ser executado aqui

/* 

Exemplo de callback para requisição:
-Crio uma função
-Peço uma requisição a URL x
-Quando a requisição me retornar executa a função callback

*/