/*
*
*/

// let firstName = "Jonas"; //string
// let age = 25; //number int
// let price = 12.56; //number float
// let userOnline = false; //boolean

// //object
// let user = {
//     firstName: "Jonas",
//     lastName: "Jonaitis",
//     email: "jonas@gmail.com"
// };

// //Array
// let users = [
//     {
//         firstName: "Jonas",
//         lastName: "Jonaitis",
//         email: "jonas@gmail.com"
//     },
//     {
//         firstName: "Jonas",
//         lastName: "Jonaitis",
//         email: "jonas@gmail.com"
//     },
//     {
//         firstName: "Jonas",
//         lastName: "Jonaitis",
//         email: "algis@gmail.com"
//     },
// ];

// let items = 15;

// console.log(items++);
// console.log(items);

// console.log(++items);

// let userOnePoints = "10";

// if(userOnePoints === userTwoPoints){
//     console.log("Rezultatas yra lygus")
// }else{
//     console.log('Rezultatas nera lygus')
// }
// console.log(users[2]);
// console.log(typeof(users));
// console.log(user);

// const count = 12; //readonly
// console.log(age);
// console.log(price);
// console.log(userOnline);
// console.log(firstName); //output var
// console.log(typeof(firstName)); //data type

// let movieTitle = "The Matrix";
// let items = 12;
// let price = 12.56;

// console.log("Filmo pavadinimas yra:" + movieTitle);
// console.log(`Filmo pavadinimas yra: ${ movieTitle}`);
// console.log(`items price is: ${items*price}`);
// console.log(`Filmo pavadinomo ilgis: ${movieTitle.lenght}`);
// console.log(movieTitle[4]);
// console.log(movieTitle.indexOf('rix'));
// console.log(movieTitle.slice(3,6));
// console.log(movieTitle.replace('The','At'));

let items = ['Phone', 'computer', 'milk'];

console.log(items.length); //count
console.log(typeof(items));
items = items.join(','); //convert array to string

items = items.split(','); //convert string to array


items.push('Smart watch'); //add to array
items.pop(); //remove from array
items.shift(); //remone first element in array
items.unshift('Kazkas'); //add first element to array
console.log(items);

let activeUser = 'Jonas';

if(activeUser === "Jonas" || activeUser.length<=4){
    console.log('Standart user');
}else if(activeUser.length<=8){
    console.log('VIP user')
}
else {
    console.log('User is inactive');
}

let language = "lt";

switch(language){
    case "lt":
        console.log("Labas");
        break;
    case "en":
        console.log("Hello");
        break;
    default:
        console.log('Nezinau tokios kalbos');
}

let result = 12 > 6 ? "True":"false"; //ternary operator
console.log(result);
console.log("Masyvo elementai:");
// for(let i=0;i<items.length;i++){
//     console.log(items[1]);
// }

// for(let item of items){ //works only with array
//     console.log(item)
// }

// for(let item in items){
//     console.log(items[item])
// }

// let item = {
//     code: 1234,
//     title: 'Computer',
//     count: 12,
//     price: 1250.45
// };

// for(let property in item){
//     console.log(`property: ${item[property]}`);
// }

// let userList = [
//     "Gabriele",
//     "Laura",
//     "Greta",
//     "Egle",
//     "Ieva",
//     "Milda",
//     "Jurgita",
//     "Rasa",
//     "Giedre",
//     "Ingrida"
// ];

//isveskite consoles vardus,kuriu ilgis yra 5 simboliai arba vardas yra milda
// for(let item in userList){
//   if(item.length)
// }
// if(userList === "Milda" && userList.length==5){
//     console.log(userList);
// }


let students = [
    {
        id:1,
        firstName: "Jonas",
        lastName: "Jonaitis",
        age:22,
        email:"jonas@gmail.com",
        group:"students"
    },
    {
        id:2,
        firstName: "Algis",
        lastName: "Jonaitis",
        age:24,
        email:"algis@gmail.com",
        group:"students"
    },
    {
        id:3,
        firstName: "Milda",
        lastName: "Jonaitis",
        age:25,
        email:"milda@gmail.com",
        group:"students"
    },
    {
        id:4,
        firstName: "Greta",
        lastName: "Jonaitis",
        age:27,
        email:"greta@gmail.com",
        group:"students"
    },
    {
        id:5,
        firstName: "Dalia",
        lastName: "Jonaitis",
        age:20,
        email:"dalia@gmail.com",
        group:"students"
    }
];
//isvedimas

// Studentu sarasas:
//----------------
    //id:5,
    //firstName: "Karolis",
    //lastName: "Jonaitis",
    //age:31,
    //email:"karolis@gmail.com",
    //group:"students"
//--------------------------
//kitas studebtas...
console.log('Studentu sarasas:')
for(let student of students){
    console.log('--------------')
    if(student.age <=25){
        for(let value in student){
            console.log(`${value}: ${student[value]}`)
        }
     }
}
//isveskite studentus, kuriu amzius nevirsija 25 metus

// let firstName = prompt('Ivesk varda');
// alert(firstName)

// Sukurti sveciu saraso formavimo aplikacija
// paleidus aplikacija paklausiamas sveciu skaicius.
// po sveciu skaiciaus ivedamas prompt rodomas tiek kartu,
// kiek bus sveciu.
// surinkus sveciu vardus, konsole atspausdinamas vardu sarasas.

let guestNr = prompt("Enter the number of guests");
let guestList = []
for(let i=0; i < guestNr; i++){
    let guestName = prompt("Enter the guest's name")
    guestList.push(guestName);
};
 
console.log('Guest list:');
for(let guest of guestList){console.log(guest)}

