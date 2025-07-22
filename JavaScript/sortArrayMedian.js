
function sortArrayMedian(array1, array2) {

    let combined = array1.concat(array2);
    
        combined.sort((a, b) => a - b);

        let mid = Math.floor(combined.length / 2);

        if (combined.length % 2 === 0) {

           return (combined[mid - 1] + combined[mid]) / 2;
         } else {

         return combined[mid];
   }
 }

let list1 = [10, 15, 27];
let list2 = [25, 13, 39];
let result = sortArrayMedian(list1, list2);
console.log(result);
