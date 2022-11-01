var arr = [1,2,3,5,1,5,9,1,2,8]

function removeDuplicates(arr) {
    var newArr = [];

    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    });

    return newArr;
}

console.log(removeDuplicates(arr));