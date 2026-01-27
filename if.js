// let age = 21;
// if (age >=20){
//     console.log("adult");
// }else{
//     console.log("child");
// }

// let tomatoPrice = 50;
// if (tomatoPrice >= 58){
//     console.log("adult");
// }else{
//     console.log("child");
// }

// let marks = 60;
// if (marks >= 58){
//     console.log("A+");
// }else{
//     console.log("A-");
// }

// const applePrice = 500;
// if (applePrice >= 98) {
//   console.log("kinbo");
// } else {
//   console.log("kinbo na");
// }


// let marks = 60;
// 100+ => Invalid Input
// 100-80 => A+
// 70-79=>A
// 60-69=>A-
// 50-59=>B
// 40-49=>C
// 30-39=>D
// 0-32=>F

const marks = 110;
if (marks >= 100){
    console.log("Invalid Input");
}else if(marks >=100 && marks<=80){
    console.log("A+");
}else if(marks >=70 && marks <=79){
     console.log("A");
}else if(marks>=60 && marks <=69){
    console.log("A-");
}else if(marks>=50 && marks <=59){
    console.log("B");
}else if(marks >= 40 && marks <= 49){
    console.log("C");
}else if(marks >= 30 && marks <=39){
    console.log("D");
}else if(marks >= 0 && marks <=32){
    console.log("F");
}
