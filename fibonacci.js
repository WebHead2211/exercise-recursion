//Fibonacci with loop
function fibs(n) {
    let result = [];
    if(n == 0) return 'Please enter a number more than 0.';
    for(let i = 0; i < n; i++) {
        if(i == 0) result = [0];
        else if(i == 1) result = [0, 1];
        else result.push(result[i-1] + result[i-2]);
    }
    return result;
} 

//Fibonacci with recursion
function fibsRec(n) {
    return (n <= 0) ? 'Please enter a number more than 0.' : (n == 1) ? [0] : (n == 2) ? [0, 1] :
    [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]];
}

console.log(fibs(8));
console.log(fibsRec(8));