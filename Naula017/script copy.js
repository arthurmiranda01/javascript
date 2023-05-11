const defaultUser = {
    name: 'Generic',
    email: 'generic@gmail..com',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'Arthur',
}

const admin1 = {
    ...defaultUser,
    name: 'Administrator',
    email: 'administrator@gmail.com',
    level: 2
}

console.log(user1);