import { Graph } from '../../structures/graph.js'

/**
 * Breath-first search implementation for connected graph.
 */
function bfs() {
    // Generate default graph
    const graph = new Graph()
    graph.squareGen()

    // DFS uses queue. Memo is to keep from visiting same nodes over and over.
    const queue = [graph.root]
    const memo = new Set()

    // Loop through each node in the queue
    while(queue.length !== 0) {
        // Do something with the node. Make sure to add to the visited memo to not revisit it.
        let node = queue.pop()
        memo.add(node)
        console.log(node)

        // Add the neighbors of the node to the queue.
        for(let neighbor of node.neighbors) {
            if(!memo.has(neighbor)) {
                queue.push(neighbor)
            }
        }
    }
}

bfs()