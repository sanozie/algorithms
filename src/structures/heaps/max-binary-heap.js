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

export default MaxBinaryHeap