export function add(num1:number,num2:number) : void{
    console.log(num1+num2)
}
export function subtract(num1:number,num2:number) : void{
    console.log(num1-num2)
}
export function multiply(num1:number,num2:number) : void{
    console.log(num1+num2)
}
export function divide(num1:number,num2:number) : void{
    if (num2===0){
        throw new Error("invalid operation (divide by 0)")
    }   
    console.log(num1+num2)
}
