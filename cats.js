let cat1 ={
    name : 'meow',
    breed: 'Siamese',
    age : 1
}

let cat2 ={
    name : 'meowwww',
    breed: 'Mog',
    age : 4
}

function combineCats(mama, papa){
    console.log(mama, papa)
    return newCat = {
        name : mama.name+papa.name,
        breed: `${mama.breed}-${papa.breed}`,
        age : 1
    }
}

// combineCats(cat1, cat2)

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

console.log('-----------After---------')
console.log(combineCats(cat1, cat2))


//---------Cat Brain----------//
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));