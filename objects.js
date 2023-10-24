//----Objects------//

let user = {
    name : 'Abdul',
    email : 'Abdul@gmail.com',
    age: 28,
    purchased :[]
};

user.email = 'AAlkout@gmail.com';
user.age++;

user.location = 'Chicago';
console.log(user)

user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
console.log(user.purchased[2])


user.friend = {
    name: "Mouad",
    age: 27,
    location : 'Germany',
    purchased :[]
}
console.log(user.friend.name)
console.log(user.friend.location)

user.friend.age = 55;
user.friend.purchased.push('The One Ring')
user.friend.purchased.push('A latte')
console.log(user.friend.purchased[1])

console.log('-------------------------------------')
user.purchased.forEach(element => {
    console.log(element)
});


console.log('-------------------------------------')
user.friend.purchased.forEach(element => {
    console.log(element)
});

// Functions in Objects //
function updateUser(){
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser()



function oldAndLoud(person){
    person.age++;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user.friend)
console.log(user)
