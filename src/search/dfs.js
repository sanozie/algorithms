const adjList = new Map()

function dfs(start, search) {
    let visited = new Set()
    let stack = [start]

    while (stack.length !== 0) {
        let node = stack.pop()
        let connections = adjList.get(node)

        for (let vertex of connections) {
            if(!visited.has(vertex)) {
                if (vertex === search) {
                    // Search callback
                }

                visited.push(vertex)
                stack.push(vertex)
            }
        }
    }
}