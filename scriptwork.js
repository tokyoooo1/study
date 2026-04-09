//calculating bmi
let weight = 10
let height = 6
console.log(weight * height)


//variable
//let number = 8
//console.log(number * 2)

let age = 20;
let name = "Daniel";



let oruko = "Tosin";
let figure = 21;
let  food = "yam"
console.log(oruko, figure, food)

num1 = 20
num2 = 6
console.log(num1 * num2)


//condition( decision making)
let digit = 18;
if (digit >= 18) {
    console.log("You can vote");
} else {
    console.log("Too young");
}


let password = "JESUS";
if (password >= "JESUS") {
 console.log("You are born again");
} else {
    console.log("Give your life to Christ");
}

let access = "Nigeria";
if (access >= "Nigeria") {
    console.log("Welcome Home");
} else {
    console.log("Visit the visitor arena");
}

let score = 75;
if (score >= 50 ) {
    console.log("Pass");
} else {
    console.log("Fail");
}



//loops
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let y = 2; y <= 10; y++) {
     console.log(y);
}



//while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Arrays (List of Items)
let cities = ["Lagos", "Ikeja", "Abuja"]
console.log(cities[0]);
console.log(cities[1]);


let color = ["blue", "yellow", "skyblue"]
console.log(color[1]);
console.log(color[2]);


//functions
function add(a, b) {
    return a + b;
}
console.log(add(5,4));


function add(a, b) {
    return a - b;
}
console.log(add(1 + 4));



let places = ["market", "church", "office", "school"];
let target = "church";
let found = false;

for (let i = 0; i < places.length; i++) {
    if (places[i] === target) {
        found = true;
        break;
    }
}
console.log(found);


//use variables + conditions
let value = 500;
let ag = 20;
let countr = "tokyo"
console.log(countr)



let a = 5;
let b = 3;

console.log(a + b);


//even
let num = 45689;
console.log(num % 2);

// length
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);

//let numbers = [4, 7, 2, 9, 5,];
//console.log(numbers.length);

//push- add item to the end
let fruit =  ["apple", "banana", "orange"];
fruits.push("orange");
console.log(fruits);

//ad "mango" to the Array

let fruis = ["apple", "banana",]
 fruis.push("mango");

 //slice copy part of an array
 let numbrs = [10, 20, 30, 40, 50];
 //let result = numbrs.slice(2,5);
 //console.log(result);
//
 let nums = ["rice", "bean", "indomie", "garri",]
 let result =nums.slice(0,3);
 console.log(result);



 //reverse() - flip the array.
 let numbers = [1, 2, 3, 4];
 numbers.reverse();
 console.log(numbers);

 let numss = [5, 10, 15];
 numss.reverse(1);
 console.log(numss);


 //shift - remove first item
 let car = ["bike", "motor", "yellow bus", "hp"];
 car.shift("motor");
 console.log(car);



 //unshift() - add to the beginning
 let nme = ["tune", "cart", "time", "clock", "inu"];
 nme.unshift("Tokyo");
 console.log(nme);

 let cla = ["red", "blue", "green"];
 cla.push("yellow");
 console.log(cla);

 let n = [10, 20, 30, 40, 50];
 n.shift(10);
 console.log(n);

 let f = ["apples", "banana", "mango",];
 f.shift("orange");
 console.log(f);

 let entrance = "member";
 if (entrance  >= "member") {
    console.log("pass") 
    } else {
    console.log("pass")
    }

    $name = "Daniel";
    $age = 20;

    //javascript
    let citie = ["lagos", "ibadan"];
    citie.filter(item => item.startsWith("O"))

    cities.filter(item => item.length < 6)

    cities.filter(item => item.endsWith("n"))






    const myArray = new Array(100);
const mySecondArray = [];
console.log(myArray.length, mySecondArray.length)

const stacks = ["web", "dev"]
const stackstring =stacks.join("*.");
console.log(stackstring);

///object///
const myObj = {
 name:"John",
 age: 12,
 class: "JSS 2",
 isPresent: true,
 subjects: ["Mathematics", "English", "Basic Science"],
 canJump: () => {console.log("jumping")}
}
console.log(myObj.name, myObj.canJump()), myObj.subjects

const jumpTheFence = ()=>{
  /*
  run fast
  Carry one length
  Carry second length
  Land in the sugarcane farm
*/
}

( ()=>{console.log("anonymous")})();
(()=>{console.clear(), console.log("Welcome to the JS store")})();

const cart = []
function addItem(name, price) {
cart.push({name, price}); //{name, price}
console.log(`${name} added to cart.`);
console.log(cart);


}


addItem("Laptop", 1200);
addItem("Mouse", 25);
addItem("car", 90000)
addItem("table", 600);
addItem("phone", 10000);





const calTax = ()=>{
    let price = 0;
    cart.forEach((item)=> {
        price = item.price
        let pricepercent =price*0.1;
        console.log(pricepercent)
    })
};

calTax();



//Task 1: Wrap the starting logic in an IIFE to clear the console and greet "Welcome to the JS store---" the user immediately when the script runs.
//Task 2: Add more items to your cart at least 5
//Task 3: Use a concise arrow function to calculate a 10% tax.




class Shirt {
    constructor(name, color, price) {
      this.name = name;
      this.color = color;
      this.price = price;




    }
   canIron(){
       return`${this.name} is ironable and the price is ${this.price}`

   };
   getDiscount(){
    return this.price*0.1

   }
   setNewPrice() {
    this.price = this.price - this.getDiscount();
        return this
   }


   
};

const myShirt = new Shirt("Micello", ["red", "white"],25000);
const favourShirt = new Shirt("Favourite", ["Pink", "Purple"], 5000);
console.log(myShirt)
console.log(favourShirt())
console.log(myShirt.getDiscount())
console.log(myShirt.setNewPrice().canIron().chartAt(3))

class Hod extends User {
   constructor(name, email, number, title) {
    super(name, email, number);
    this.title = title;
   } 
   getProfessionProfile(){
    return`${super.getProfile()} (professional: ${this.title})`

   }
}
const STA101Lec =  new Hod("Prof. OLatunji",
"proflatunji@university.com", "0909090909090", "HOD II")
console.log(STA101Lec.getProfessionProfile())








//Assignment
      class Person {
        constructor(name, age, country) {
            this.name = name;
            this.age = age;
            this.country = country;
        }
        displayDdetails(){
            return`$(this.name), $(this.age) $(this.country)`
        }
      }
1
const myPerson = new Person("Tobi", 23, "Togo",);
const ukPerson = new Person("Lily", 26, "London");
console.log(myPerson)
console.log(ukPerson())


2
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
 const Rectangle = (width * height)



 3
class Vechicle {
    constructor (make, model, year) {
        this.
    }
}



7.
class University {
    constructor (name) {
    this.name = name
    this.departments = []
    }
    addDepartment(dept){
       this.departments.push(dept)
    }
    removeDepartment(deptName) {
        
    }
}


