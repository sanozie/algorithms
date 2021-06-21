/**
 * 0/1 Knapsack with Tabulation
 */
function knapsack(values, weights, target) {
    const tab = Array(values.length + 1).fill().map(() => Array(target + 1).fill(0))
    console.table(tab)

    // for ith item
    for (let i = 1; i <= values.length; i++) {
        // choose all weights from 0 to maximum capacity W

        for (let j = 0; j <= target; j++) {
            // base case: don't pick ith element if j-weights[i-1] is negative
            if (weights[i-1] > j) {
                tab[i][j] = tab[i-1][j];
            } else {
                // store the max value that we get by picking or leaving the i'th item
                tab[i][j] = Math.max(tab[i-1][j], tab[i-1][j-weights[i-1]] + values[i-1]);
            }
            console.table(tab)
        }
    }
}

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const target = 15;

// knapsack(values, weights, target)