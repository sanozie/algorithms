import { Graph } from '../../structures/graph.js'

/**
 * Depth-first search implementation for connected graph.
 */
function dfs() {
    // Generate default graph
    const graph = new Graph()
    graph.squareGen()

    // dfs uses stack. Memo is to keep from visiting the same nodes multiple times.
    const stack = [graph.root]
    const memo = new Set()

    // Loop through all nodes in stack
    while(stack.length !== 0) {
        // Get the first node. Add to memo when finished working with it
        let node = stack.pop()
        memo.add(node)
        console.log(node)

        // Add neighbors of node to stack
        for(let neighbor of node.neighbors) {
            if(!memo.has(neighbor)) {
                stack.push(neighbor)
            }
        }
    }
}

dfs()