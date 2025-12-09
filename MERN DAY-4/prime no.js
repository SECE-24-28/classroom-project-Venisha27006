var a = 10;
var flag = true;
if(a<=1) flag = false;
else {
    for(var i=2;i<a;i++){
        if(a%i===0){
            flag = false;
            break;
        }
    }
}
var result = flag===true ? "Prime" : "Not Prime";
console.log(result);