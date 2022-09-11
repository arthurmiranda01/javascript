function clicar() {
    let profession = this
    switch (profession) {
        case 'policial':
            document.getElementById('background').style.backgroundColor = blueColor;
            break;
        case 'desenvolvedor':
            document.getElementById('background').style.backgroundColor = greyColor;
            break;
        case 'medica veterinaria':
            document.getElementById('background').style.backgroundColor = pinkColor;
            break;
        default:
            document.getElementById('background').style.backgroundColor = redColor;
            break;
    }
}