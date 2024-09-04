
// [2,4,2,3]
//[2,2,3,4] output
function bubbleSort(arr){
    for (let i = 0; i<arr.length -1 ; i++){
        for (let j = i + 1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
  return arr;
}


console.log(bubbleSort([2,4,2,3]))