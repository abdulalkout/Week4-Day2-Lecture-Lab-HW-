//--------------------------//
//--------functions---------//


//---A--------//
printGreeting = (name) => {
    console.log('Hello there, ', name)
}
printGreeting('Abdul')



//------B------//

printCool = (name) =>{
    console.log(`${name} is cool`)
}


//-------C-------//
calculateCube = (number) =>{
    numberCube = number * number *number
    console.log(numberCube)
}
calculateCube(5)


//-------D-------//

function isVowel (letter) {
    let vowels = ['a', 'i', 'o', 'e', 'u']
    if(letter.length > 1){
        console.log('only one letter is allowed')
        return letter
    }
    for(let i=0; i<= vowels.length; i++){
        if(letter.toLowerCase() === vowels[i]){
            return true
        }
    }
    return false
}

console.log(isVowel('A'))



//------E--------------//

let lengthArr = [];
getTwoLengths = (string1, string2) => {
    let secoundString = 0;
    let firstString = 0;
    for(let i=1; i<= string2.length; i++){
        secoundString++;
    }
    for(let j=1; j<= string1.length; j++){
        firstString++;
    }
    lengthArr.push(firstString)
    lengthArr.push(secoundString)
    return lengthArr
}
getTwoLengths('aaxx','SS')
console.log(lengthArr)



//---------F--------------//

function getMultipleLengths (stringsArr=[]){
    let newStringArr =[]
    stringsArr.forEach(string => {
        let counter = 0;
        for(let i=1; i<=string.length; i++){
            counter++
        }
        newStringArr.push(counter)
    })
    console.log(newStringArr)
}

getMultipleLengths(['dd', 'ddd', 'dddd'])


//------G--------//
maxOfThree = (num1, num2, num3) => {
    if(num1 >= num2 && num1 >= num3){
        return num1
    }else if(num2 >= num1 && num2 >= num3){
        return num2
    }else{
        return num3
    }
}
console.log(maxOfThree(12, 12, 13))


//----------H------------//
// console.log('------H-----------')
// printLongestWord = (stringArry =['']) => {
//     let bigest = 0;
//     let bigestIndex =0;
//     for(let i=0; i<=stringArry.length; i++){
//         let newString = stringArry[i];
//         if(bigest < newString.length){
//             bigest = newString.length;
//             bigestIndex = i;
//         }
//     }
//     console.log(stringArry[bigestIndex])
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// let stringry = ['ss', 'sss']
// console.log(stringry[0].length)