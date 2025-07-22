
function getEvenNumbers(array){

    for(let count= 0;count<array.length;count++){
        for (let counter = 0; counter < array.length; counter++){
            if(array[count] % 2 == 0){
                return array[count];
            }
        }
        //return array[count];
    }

}

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(getEvenNumbers(numbers));