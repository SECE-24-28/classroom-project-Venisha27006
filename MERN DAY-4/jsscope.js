/*let a = 10; // Global scope
if(true){
    let a = 20;  //let block scope
    console.log(a);
}
console.log(a);


//hoisting
var c; //By javascript
console.log(c);
var c = 10;

add();
function add(){
  console.log(10+20);
}

//for..in(object)
var obj = {
    name:"Raj",
    age:20,
    marks:90,
};
for(let i in obj){
    console.log(i,obj[i]);
}

//callback function
var demo=()=>{
    console.log("Hello World");
}

var main=(callback)=>{
    console.log("Main Called");
    callback();
}

main(demo);
*/
//callback function
var main=(a,b,callback)=>{
    var result = a+b;
    callback(result);
}
add(10,20,(res)=>{
    console.log(res);
});


