// Fibonacci with Memoization
let fibMemo = []
function memoFib(n) {
    // base case
    console.log(fibMemo)
    if (!fibMemo[n]) {
        fibMemo[n] = memoFib(n - 1) + memoFib(n - 2)
    }
    return fibMemo[n]
}

memoFib(20)