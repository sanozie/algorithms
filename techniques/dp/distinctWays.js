/**
 * Fining Unique Paths to Destination ( In Grid )
 * Description - You're located at the top-left corner of a m x n grid. You can only move either down or right at any
 * point in time. You're trying to reach the bottom-right corner of the grid. Calculate number of unique paths possible
 * to destination.
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    /* Create a tabulation object. Each cell will hold the number of ways there are to get to that cell as it's value.
    Start off as 1 because there's 1 way to get to any cell in the first row or first column.
    (you can't take turns if you have to go straight).
    */
    const tabs = Array(m).fill().map(() => Array(n).fill(1))

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            /* Each cell is calculated by adding the unique ways to get to the previous cells.
            */
            tabs[i][j] = tabs[i][j-1] + tabs[i-1][j];
            console.table(tabs)
        }
    }

    return tabs[m - 1][n - 1]
};

uniquePaths(4,5 )