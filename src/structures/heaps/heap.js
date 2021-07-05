import MinBinaryHeap from './min-binary-heap'

let minHeap = new MinBinaryHeap([5, 7, 9, 10, 20, 30])
console.log(minHeap.heap)
minHeap.insert(40)
minHeap.extractMin()
minHeap.extractMin()
minHeap.extractMin()
minHeap.extractMin()
console.log(minHeap.heap)