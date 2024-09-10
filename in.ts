let sum:(x:number,y:number)=>number =function(x,y){
    return x+y;
}
console.log(sum(2,3))

function sum1(x:number,y:number):number{
    return x+y
}
sum1(2,4)
function createBox(height:number,width:number,depth=1){
    return {height,width,depth}
}
console.log(createBox(4,4,6))

