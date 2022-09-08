var hora = 01

if (hora > 05 && hora < 12) {
    console.log('Bom Dia')
} else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde')
} else if (hora >= 18) {
    console.log('Boa Noite')
} else if (hora > 0 && hora <= 5) {
    console.log('Boa Madrugada')
} else {
    console.log('ERROR')
}