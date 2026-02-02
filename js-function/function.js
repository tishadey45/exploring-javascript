// const number =45;
// const number2 =55;

// function boitadeu(number,number2){
//     console.log("bosa theke uthe jao");
//     console.log("tabele ace boi");
//     console.log("tabel theke boita amay deu");
//     console.log(number+number2);
// }

// function calculator(n1,n2){
//   console.log(n1*n2);
// }

// calculator(7,6)

// boitadeu(7,9)

// function numbers(x,y,z=0){
//   console.log(x+y+z);
// }

// numbers(4,8,3)


// NaN->not a number


function numberOfElements(...numbers){
    // const dataType = typeof(numbers)
    const dataType = Array.isArray(numbers)
    console.log(dataType);
    const len =numbers.length;
    return len;
}


console.log(numberOfElements(5,8,9,7,8,9));


// function getAge(person){
//     const len = person.age;
//     return len;
// }

// getAge([18,23])


function someOfNumbers(numbers){
    // console.log(numbers);
}
