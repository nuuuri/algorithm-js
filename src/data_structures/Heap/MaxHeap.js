class MaxHeap {
  heap = [];

  constructor() {}

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return max;
  }

  _swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] <= this.heap[parentIndex]) break;

      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  _bubbleDown() {
    let index = 0;

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = leftChildIndex + 1;
      let leftChild, rightChild;
      let swapIndex = null;
      const element = this.heap[index];

      if (this.heap[leftChildIndex]) {
        leftChild = this.heap[leftChildIndex];
        if (element < leftChild) swapIndex = leftChildIndex;
      }

      if (this.heap[rightChildIndex]) {
        rightChild = this.heap[rightChildIndex];
        const value = swapIndex ? leftChild : element;
        if (value < rightChild) swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this._swap(index, swapIndex);
      index = swapIndex;
    }
  }
}
