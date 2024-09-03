const symArr = (arr1,arr2) =>{
    const output = [];
    for(const el of arr1){
        if(!output.includes(el)  && !arr2.includes(el)){
            output.push(el);
        }
    }
    for(const el of arr2){
        if(!output.includes(el)  && !arr1.includes(el)){
            output.push(el);
        }
    }
    return output;
}

function sym(){
    const arrOfArr = [...arguments];
    let firstArr = arrOfArr[0];
    for(let i=1;i<arrOfArr.length;i++){
        firstArr = symArr(firstArr,arrOfArr[i]);
    }
    return firstArr.sort();
}
git in
console.log(sym([1,2,3], [5,4,2,1])) ;