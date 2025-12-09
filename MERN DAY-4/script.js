/*

// datatypes
var p = 20;//number
var q = "Hello"; //string
var bool = true; //boolean
var r = null;  //null
var s ; //undefined
var big = 1234567890123456789012345678901234567890n;
var sym = Symbol("Hello");
console .log(typeof p);
console .log(typeof q);
console .log(typeof bool);
console .log(typeof r);
console .log(typeof s);
console .log(typeof big);
console .log(typeof sym);



// ARRAY
var arr = [1,2,3,4,5]; //array
console.log(arr);

//obj
var object = { //object
    name : "Raj",
    age : 20,
}   
console.log(typeof object);
console.log(typeof arr);

//Artimetic operation[+,-,*,/,%]
var a = 10;
var b =" 10";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Relational operator[>,<,>=,<=,==,!=]
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

//assignment operator[=,+=,-=,*=,/=,%=]
a = 10;
b= 2;
console.log(a);
console.log(a+=10);
console.log(a-=10);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

//logical operator[&&,||,!] 
a=true;
b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

//for loop
/*
for(initialization;condition;increment/decrement){
    //code
}*/

for(var i=0;i<=10;i++){
    console.log(i);
}
/* while loop
while(condition){
    //code
}*/
var j=0;
while(j!==5){
    j++;
    console.log(j);
}
console.log(j);
/*do while loop
do{
    //code
}while(condition);*/

a=0;
do{
    console.log(a);
}while(a===1);

//conditional statement
//if 
a=5;
if(a%2===0){
    console.log("a is even");
}
//if.else
    if(a%2===0){
        console.log("a is even");
    }
    else{
        console.log("a is odd");
    }
    //else.if
    var marks = 90;
    if(marks>=90){
        console.log("O");
    }
    else if(marks>=70){
        console.log("A");
    }
    else if(marks>=50){
        console.log("B");
    }
    else{
        console.log("Fail");
    }

    //switch
    var day = 1;
    switch(day){
        case 1: {
            console.log("Sunday");
            break;
        }
        case 2:{
            console.log("Monday");
            break;
        }
        case 3: {
            console.log("Tuesday");
            break;
        }
        case 4:{
            console.log("wednesday");
            break;
        }
        case 5:{
            console.log("Thursday");
            break;
        }
        case 6:{
             console.log("Friday");
            break;
        }
        case 7:{
            console.log("Saturday");
            break;
        }
        default:{
            console.log("Invalid");
    }
}
 // Ternary operator
Synatax
condition ? Value : value;
 
//Ternary operator[? :]

var age = 20;
var result = age>=18 ? "Eligible" : "Not Eligible";
console.log(result);

//ternary operator
var marks = 90;
var result = marks>=90 ? "Grade O" : marks>=70 ? "Grade A" : marks>=50 ? "Grade B" : "Fail";
console.log(result);

//function
function add(){
    console.log(10+20);
}
add();

//function with parameter
function addParam(a,b){
    console.log(a+b);
}
add(10,20);

//arrow function

var addParam = (a, b) => {
    console.log(a+b);
}
addParam(10, 20);
console.log(typeof addParam);

//Spread operator

const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
console.log(a);
console.log(b);

//Destructing operator

const [name,age,marks] = ["Raj",20,90];
console.log(name);
console.log(age);
console.log(marks);

//object
const [name,age,marks]={
    name:"Raj",
    age:20,
    marks:90,
}
console.log(name);
console.log(age);
console.log(marks);

//for..in(index value)
var arr = [1,2,3,4,5];
for(int i in arr){
    console.log(i);
}
//for..of(value)
for(int j of arr){
    console.log(j);
}

//forEach
arr.forEach((val,index) => {
    console.log(val,index);
});

// class and object
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}
var p1 = new Person("Raj", 20);
p1.display();


let a = 10; // Global scope
if(true){
    let a = 20;  //let block scope
    console.log(a);
}
console.log(a,b);

//hoisting
var a; //By javascript
console.log(a);
var a = 10;