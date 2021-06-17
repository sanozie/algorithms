class MaxBinaryHeap {
    constructor() {
        // Can use an array because max heap will always be a complete binary tree
        this.heap = [30, 20, 10, 7, 9, 5]
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parent = this.heap[parentIndex]

            if (parent >= element) break
            this.heap[index] = parent
            this.heap[parentIndex] = element
            index = parentIndex
        }
    }

    extractMax() {
        let max = this.heap[0]
        this.heap[0] = this.heap.pop() // Get the last element of the heap and set that as new head
        this.sinkDown(0) // Let the new head sink down to it's rightful place
        return max
    }

    sinkDown(index) {
        let left = 2 * index + 1,
            right = 2 * index + 2,
            largest = index
        const length = this.heap.length

        // If left child is greater than parent, set as largest
        if (left <= length && this.heap[left] > this.heap[largest]) {
            largest = left
        }

        // If right child is greater than parent, set as largest
        if (right <= length && this.heap[right] > this.heap[largest]) {
            largest = right
        }

        // Swap the largest with the item at the index
        if(largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
            this.sinkDown(largest)
        }
    }
}

class MinBinaryHeap {
    constructor(heap) {
        this.heap = heap
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parentElement = this.heap[parentIndex]

            if (parentElement <= element) break
            this.heap[index] = parentElement
            this.heap[parentIndex] = element
            index = parentIndex
        }
    }

    extractMin() {
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.sinkDown(0)
        return min
    }

    sinkDown(index) {
        let left = 2 * index + 1,
            right = 2 * index + 2,
            smallest = index
        const length = this.heap.length

        // Check if left is smaller, set as new smallest
        if (left <= length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }

        // Check if right is smaller, set as new smallest
        if (right <= length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }

        // Swap
        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            this.sinkDown(smallest)
        }

    }
}

let minHeap = new MinBinaryHeap([5, 7, 9, 10, 20, 30])
console.log(minHeap.heap)
minHeap.insert(40)
minHeap.extractMin()
minHeap.extractMin()
minHeap.extractMin()
minHeap.extractMin()
console.log(minHeap.heap)