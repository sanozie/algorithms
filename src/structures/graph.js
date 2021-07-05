/**
 * Graph wrapper
 */
class Graph {
    constructor(root) {
        this.root = root
    }

    squareGen() {
        const node1 = new Node(0)
        const node2 = new Node(1)
        const node3 = new Node(2)
        const node4 = new Node(3)
        node1.neighbors.push(node2)
        node1.neighbors.push(node3)
        node2.neighbors.push(node1)
        node2.neighbors.push(node4)
        node3.neighbors.push(node1)
        node3.neighbors.push(node4)
        node4.neighbors.push(node2)
        node4.neighbors.push(node3)

        this.root = node1
    }
}


/**
 * Adjacent List implementation of Graph
 */
class Node {
    constructor(val, neighbors = []) {
        this.val = val
        this.neighbors = neighbors
    }
}

export default { Graph, Node }