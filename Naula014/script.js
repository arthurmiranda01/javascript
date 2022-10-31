async function loadPost() {
    document.getElementById('posts').innerHTML = 'Loading...';
    
    //forma mais rápida
    let reqt = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await reqt.json();
    montarBlog(json);

    //forma mais demorada
    /*let req = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json){
            montarBlog(json);
        })
        .catch(function(error){
            console.log('Deu error!');
        })*/
}

function montarBlog(lista) {
    let html = '';
    for(let i in lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }
    document.getElementById('posts').innerHTML = html;
}