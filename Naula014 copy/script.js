async function inserirPost() {
    document.getElementById('posts').innerHTML = 'Carregando...';
    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', //enviar dados internos juntos com a requisição, na requisição 'GET' não tem body
        body: JSON.stringify({
            title: 'titulo teste',
            body: 'corpo de teste', 
            userID: 4
            //pro body tem que ser enviado uma string com um objeto dentro
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}