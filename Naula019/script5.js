// https://jsonplaceholder.typicode.com/posts
//fetch: função específica pra requisições, eles tem dois parâmetros
//then: significa e então, e então, depois da requisição você faz... Callback
//json(): Basicamente vai transformar meu json em um objeto


function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
    })
}

document.querySelector('#button').addEventListener('click', clicou);