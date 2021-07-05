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

export default MinBinaryHeap