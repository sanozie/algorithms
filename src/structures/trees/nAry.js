function Tree(root = null) {
    this.root = root
}

function Node(val, children = null) {
    this.val = val
    this.children = []
}

let BT = new Tree()
let root = new Node(10, [new Node(12), new Node(13)])
BT.root = root
console.log(BT)
