function loadPost() {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            console.log(resultado);
        })
        .catch(function(error){
            console.log('Deu error!')
        })
}