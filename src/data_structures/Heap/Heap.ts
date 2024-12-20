export default class Heap {
  private _heap: number[];
  private _flag: 1 | -1;

  constructor(options: { type: "MIN" | "MAX" }) {
    this._heap = [0]; // root 노드의 index를 1로 설정하기 위함
    this._flag = options.type === "MAX" ? -1 : 1; // Min Heap을 기준으로 연산
  }

  private swap(indexA: number, indexB: number) {
    const temp = this._heap[indexA];
    this._heap[indexA] = this._heap[indexB];
    this._heap[indexB] = temp;
  }

  public getHeap() {
    return this._heap.map((val) => val * this._flag).slice(1);
  }

  public top() {
    return this._heap.length === 1 ? null : this._heap[1] * this._flag;
  }

  public insert(value: number) {
    this._heap.push(value * this._flag);

    let currentIndex = this._heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      parentIndex !== 0 &&
      this._heap[currentIndex] < this._heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  public remove() {
    const returnValue = this._heap[1] * this._flag;

    // root 노드를 제거하고, 가장 마지막 노드를 root로 옮김
    this._heap[1] = this._heap[this._heap.length - 1];
    this._heap.pop();

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    // current의 값이 left child 또는 right child보다 큰 경우
    while (
      (this._heap[leftChildIndex] &&
        this._heap[leftChildIndex] < this._heap[currentIndex]) ||
      (this._heap[rightChildIndex] &&
        this._heap[rightChildIndex] < this._heap[currentIndex])
    ) {
      // left child와 right chlid 중 더 작은 값을 선택
      let smallerIndex = leftChildIndex;
      if (
        this._heap[rightChildIndex] &&
        this._heap[rightChildIndex] < this._heap[smallerIndex]
      ) {
        smallerIndex = rightChildIndex;
      }

      this.swap(currentIndex, smallerIndex);

      currentIndex = smallerIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
