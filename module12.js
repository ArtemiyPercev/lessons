// Task 1

const userArtiom = {
    name: "Artiom",
    surname: "Percev",
    age: 28
};

function nameArtiom(userArtiom){
    for(let key in userArtiom){
        if(userArtiom.hasOwnProperty(key)){
            console.log(key, userArtiom[key]);
             }
        }
    }
    nameArtiom(userArtiom);
    
// Task 2

const example = {
    num: 1,
    string: "abc"
};

a = (i, object) => {
    if(i in object){
        return true 
    }
}
console.log(a("num", example))

// a("abc", example);

// Task 3

function createObj(name){

   return Object.create(null)
}
createObj();

// Task 4 Tv/ Computer

function ElectricAppliance(name, weight, length){
   this.name = name,
    this.getWeight = function(weight){
        console.log(`${weight} кг`)
    }
    this.getLength = function(length){
        console.log(`${length} см`)
    }
};

ElectricAppliance.prototype.getStatus = function(power){
    if(power > 0){
        console.log(`Прибор включен в розетку`);
    } else if(power === 0){
        console.log(`Прибор отключен от сети`);
    } else {
        console.log(undefined)
    }
}

function Tv(name, size, color) {
    this.name = name,
    this.getSize = function showDisplaySize(){
        console.log(`${size} дюймов`)
    },
    this.color = color
};

Tv.prototype = new ElectricAppliance();

function Lamp(name, material, lightColor) {
    this.name = name,
    this.material = material,
    this.lightColor = lightColor
};

Lamp.prototype = new ElectricAppliance();

const samsungTv = new Tv("Samsung", 45, "black");
const xiaomiLamp = new Lamp("Xiaomi", 43, "Plastic", "Candlelight");

console.log(samsungTv);
console.log(xiaomiLamp);

samsungTv.getStatus(1);
samsungTv.getSize(33);
samsungTv.getWeight(10);
samsungTv.getLength(30);
xiaomiLamp.getWeight(2);
xiaomiLamp.getLength(39);

// Task 5 
/*
class ElectricAppliance {
    constructor(name){
    this.name = name
    
    this.getWeight = function(weight){
        console.log(`${weight} кг`)
    }
    this.getLength = function(length){
        console.log(`${length} см`)
        }
    this.getStatus = function(power){
    if(power > 0){
        console.log(`Прибор включен в розетку`);
    } else if(power === 0){
        console.log(`Прибор отключен от сети`);
    } else {
        console.log(undefined)
    }
        }
    }
};

class Tv extends ElectricAppliance{
    constructor(name, size, color){
        super(name)
        this.getSize = function showDisplaySize(){
            console.log(`${size} дюймов`)
    },
        this.color = color
    }
}

class Lamp extends ElectricAppliance{
    constructor(name, material, lightColor){
    super(name);
    this.material = material
    this.lightColor = lightColor
    }
} 


const xiaomiLamp = new Lamp("Xiaomi", "Plastic", "Candlelight");
const samsungTv = new Tv("Samsung", 45, "black");

console.log(xiaomiLamp)
console.log(samsungTv);
xiaomiLamp.getWeight(30);
xiaomiLamp.getLength(40);
xiaomiLamp.getStatus(30);
samsungTv.getSize(40);
samsungTv.getLength(50);
samsungTv.getWeight(20);
samsungTv.getStatus(30);
*/
/*
1 почему темнеют weight and length и надо вписывать в арументы, не понял куда и почему надо вписывать в аргменты функции конструктора или а аргументы внтренних функции
2 почему в if else иногда просят поставить знак ; между условями и летералом и выполняется только тогда код: пример  if(ex){
console.log()
}
else()здесь;{
    console.log(dsada)
}
3 как обратится и расширить классы Tv and Lamp к самому главной функции конструктору
4 как можно укоротить запись вызовов функции.
5 Console.log( `Сегодня ${example}`), console.log(' Сегодня ' + ' example ' ), можно писать все время 1 вариант или есть договоренности как правильно записывать?
6 super дает воможность взять все методы и свойства родителя. Надо обязательно писать везде super где есть одинаковые свойства? В данном примере было с name.

*/











 