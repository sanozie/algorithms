let adjList = new Map()
function bfs(start, search) {
    const queue = [start]
    const visited = new Set()
    // This will loop until the queue is empty or we break out of it
    while (queue.length > 0) {
        const node = queue.shift() // dequeues with mutation
        // Assuming
        const connections = adjList.get(node)
        for (const vertex of connections) {
            if (vertex === search) {
                // Found it!
            }

            if (!visited.has(vertex)) {
                visited.add(vertex)
                queue.push(vertex)
            }
        }
    }
}
