let timer; //criei a variável timer fora porque o let se fosse criado ali dentro da função não poderia ser usada em outra função

function comecar(){
    timer = setInterval(showTime, 1000); // ai aqui eu do valor pro timer
}
function parar(){
    clearInterval(timer); // e aqui eu limpo
}



function showTime() {
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}

