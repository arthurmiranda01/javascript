function loadPost() {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json()
        })
        .then(function(json){
            console.log(json);
        })
        .catch(function(error){
            console.log('Deu error!')
        })
}