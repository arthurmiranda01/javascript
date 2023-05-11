function createPerson(name, lastName, email, phone, age) {
    return{
        name,
        lastName, 
        email, 
        phone, 
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let personA = createPerson('Arthur', 'Miranda', 'arthur.miranda@gmail.com', '51995648634', 21, 'Arthur Miranda')

console.log(`Olá meu nome é ${personA.name + ' ' + personA.lastName}, tenho ${personA.age} anos. Meu e-mail e telefone são: ${personA.email} e ${personA.phone}`);

console.log(personA.getFullName());

