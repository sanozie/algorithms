// Fibonacci with Memoization
let fibMemo = []
function memoFib(n) {
    // base case
    console.log(fibMemo)
    if (n <= 1) {
        fibMemo[n] = n
    } else {
        if (!fibMemo[n]) {
            fibMemo[n] = memoFib(n - 2) + memoFib(n - 1)
        }
    }

    return fibMemo[n]
}

// console.log(memoFib(20))

