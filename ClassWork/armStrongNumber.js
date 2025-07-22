function armStrongNumbers(element){
    let sum = 0;
    let value = element.toString();

for(let count = 0; count < value.length; count++){
    sum += parseInt(value[count]) ** value.length;
}
         return sum === element;
}


console.log(armStrongNumbers(153));