// Implementing a bfs with a matrix

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

const ROW = matrix.length, COL = matrix[0].length
const moveRow = [-1, 0, 1, 0], moveCol = [0, 1, 0, -1]

/**
 * Checking for two cases: checking if cell has been visited already, and checking if cell exists
 * @param visited
 * @param row
 * @param col
 */
const isValid = (visited, col, row) => {
    console.log(`Trying [${[col, row]}]:`)
    // If cell lies out of bounds
    if (row < 0 || col < 0 || row >= ROW || col >= COL) {
        console.log(`${[col, row]} didn't work: Out of Bounds.`)
        return false;
    }


    // If cell is already visited
    if (visited[row][col]) {
        console.log(`[${[col, row]}] didn't work: Already visited.`)
        return false;
    }
    // Otherwise
    console.log(`${[col, row]} worked!`)
    return true;
}

/**
 * Breadth-first search function.
 * @param {[int]} start [x, y]
 */
let bfs = (start) => {
    // Initialize queue and empty visited array
    let queue = [start], visited = Array(ROW).fill().map(() => Array(COL).fill(undefined))
    visited[start[1]][start[0]] = true

    console.log('Started Visited: ', visited)

    while (queue.length > 0) {
        let cell = queue.shift() // Dequeues and mutates array
        console.log('Working with: ', cell)
        let [x, y] = cell

        // Looking at ajacent parts
        for(let i = 0; i < 4; i++) {
            let adjx = x + moveCol[i], adjy = y + moveRow[i]
            console.log([adjx, adjy])
            // Making sure stuff exists and hasn't been visited yet
            if (isValid(visited, adjx, adjy)) {
                queue.push([adjx, adjy])
                visited[adjy][adjx] = true
                console.log(visited)
            }
        }
    }
}

bfs([0, 0])
