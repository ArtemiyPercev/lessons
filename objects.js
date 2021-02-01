// const bestFriend  = "property";

// const userArtiom = {
//     name: "Artiom",
//     surname: "Percev",
//     age: 28,
//     profession: "customer support",
//     [bestFriend]: "Denis",
//     kaka: "xaxa"
// }

// for(let key in userArtiom){
//     console.log(key);
// }

// for(let key in userArtiom){
//     console.log(userArtiom[key])
// }
// console.log("name" in userArtiom);
// console.log("age" in userArtiom);
// // console.log([bestDish] in userArtiom);
// // userArtiom.hobby = "tennis";
// // console.log(userArtiom)
// // console.log(userArtiom.name)
// // console.log(userArtiom["surname"])
// // console.log(userArtiom["property"])
// // delete userArtiom.kaka;



// // const lang = prompt("Vvedite nazvanie jazika programmirovanija","javascript");
// // const collection = {
// //     [lang]: "Luchshij jazika programmirovanija"
// // };
// // console.log(collection)

const cource = new Object();
cource.language = "italian";
cource.days = 30;
cource.country = "Lithuania, England";

function country(a, b){
    console.log();
};
delete cource.days;
console.log(cource);