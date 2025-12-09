/*
var age = 19;
var name = "Venisha"
var str = `Venisha age is ${age}`
console.log(str);
console.log(`${name} age is ${age}`)
console.log(name + " age is " + age);

//map
var arr = [1,2,3,4,5];
var double = arr.map(num => num*2);
console.log(double);

//filter
var even = arr.filter(num => num%2===0);
console.log(even);

//reducer
var total = arr.reduce((sum,num) => (sum+num),0);
console.log(total);

var totalNo=arr.reduce((sum,nums)=>(sum=sum+1),0) // 0 to initialize sum=0
console.log(totalNo)

var evencount= arr.map(nums=>nums**3).filter(nums=>nums%2==0).reduce((sum,nums)=>(sum+1),0)
console.log(evencount)

var student = [
    {name:'Venisha',
    marks: 90,},
    {name:'Dinesh',
    marks: 80,},
    {name:'Rubika',
    marks: 88,  },
    {name:'Dharani',
    marks: 89,  }    
]
//filter
var studentMark = student.filter(student => student.marks>80);
console.log(studentMark);

//map
var studentName = student.map(student => student.name);
console.log(studentName);

//reduce
var TotalMarks = student.reduce((sum, student) => (sum+student.marks), 0);
console.log(TotalMarks);
var Avg = TotalMarks/student.length;
console.log(Avg);
*/

/*
//promise
const promise = new Promise((resolve, reject) => {
  var success = true; // Success
    // var success = false; //Failed
    if (success) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});
promise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
});
*/
/*
//This gives 2 sec delay
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 2000);
});
promise.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
});
*/
/*
// To get data from palceholder
const getData = ()=> {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}
getData().then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
*/
/*
//async await
const getData = async (req,response)=> {
    var response = await fetch('https://jsonplaceholder.typicode.com/posts');
    var data =  await response.json();
    console.log(data);
}
getData();
*/

//async await with try catch to write API

const getData = async (req, response)=> {
    try{
        var response = await fetch('https://jsonplaceholder.typicode.com/posts');
        var data =  await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getData();
