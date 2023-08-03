function mergeSort(array) {
    //base case
    if(array.length < 2) return array;
    //create left and right array
    let leftArr = []
    let rightArr = [];
    leftArr.length = (array.length % 2 == 0) ? array.length / 2 : (array.length + 1) / 2;
    rightArr.length = array.length - leftArr.length;
    leftArr = array.slice(0, leftArr.length);
    rightArr = array.slice(leftArr.length, array.length);

    //recursion
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let result = [];
    //when both arrays have some digits
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();  
        }
    }
    //if only left array digits are left
    while(left.length > 0) {
        result.push(left[0]);
        left.shift();    
    }
    //if only right array digits are left
    while(right.length > 0) {
        result.push(right[0]);
        right.shift();    
    }
    return result;
}