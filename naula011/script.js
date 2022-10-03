function showTime() {
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}