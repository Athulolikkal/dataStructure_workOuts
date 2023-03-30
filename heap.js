//<--------------------------------------------min heap--------------------------------------------------------->


// class minHeap {
//     constructor() {
//         this.heap = []
//     }
//     getLeftChildIndex(parentIndex) {
//         return 2 * parentIndex + 1
//     }
//     getRightChildIndex(parentIndex) {
//         return 2 * parentIndex + 2
//     }
//     getParentIndex(childIndex) {
//         return Math.floor((childIndex - 1) / 2)
//     }
//     hasLeftChild(index){
//         return this.getLeftChildIndex(index)<this.heap.length
//     }
//     hasrightChild(index){
//         return this.getRightChildIndex(index)<this.heap.length
//     }
//     hasParent(index){
//         return this.getParentIndex(index)>=0
//     }
//     leftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }
//     rightChild(index){
//         return this.heap[this.getRightChildIndex(index)]
//     }
//     parent(index){
//         return this.heap[this.getParentIndex(index)]
//     }
//     swap(indexOne,indexTwo){
//         let temp=this.heap[indexOne]
//        this.heap[indexOne]=this.heap[indexTwo]
//        this.heap[indexTwo]=temp
//     }
//     peek(){
//         if(this.heap.length===0){
//             return null
//         }
//         return this.heap[0]
//     }
//     poll(){
//         if(this.heap.length===0){
//             return false
//         }
//         let item=this.heap[0]
//         this.heap[0]=this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown()
//         return item
//     }
//     add(item){
//         this.heap.push(item)
//         this.heapifyUp()

//     }
//     heapifyUp(){
//         let index=this.heap.length-1
//         while(this.hasParent(index)&&this.parent(index)>this.heap[index]){

//             this.swap(index,this.getParentIndex(index))
//             index=this.getParentIndex(index)
//         }
//     }
//     heapifyDown(){
//         let index=0
//         while(this.hasLeftChild(index)){
//         //   console.log('checking..........');
//             let smallerIndex=this.getLeftChildIndex(index)
//             if(this.hasrightChild(index) && this.rightChild(index) < this.leftChild(index)){
//                 // console.log('rightchildd');
//                 smallerIndex=this.getRightChildIndex(index)
//             }
//             if(this.heap[index]<this.heap[smallerIndex]){
//                 break;
//             }else{
//             //    console.log('swappingg');
//                 this.swap(index,smallerIndex)
//             }
//            index=smallerIndex;
//         }

//     }
// }

// let hp=new minHeap()
// hp.add(50)
// hp.add(20)
// hp.add(5)
// hp.add(60)
// hp.add(10)
// console.log(hp);
// hp.poll()
// console.log(hp);
// // console.log(hp.getLeftChildIndex(0));
// // console.log(hp.getRightChildIndex(0));
// // console.log(hp.getParentIndex(2));
// // console.log(hp.getParentIndex(2));

// console.log(hp.leftChild(0));
// console.log(hp.hasrightChild(0));
// console.log(hp.rightChild(0));
// console.log(hp.leftChild(0));


//<--------------------------------------------max heap--------------------------------------------------->


// class maxHeap {
//     constructor() {
//         this.heap = [];
//     }
//     getLeftChildIndex(index) {
//         return 2 * index + 1

//     }
//     getRightChildIndex(index) {
//         return 2 * index + 2
//     }
//     getParentIndex(index) {
//         return Math.floor((index - 1) / 2)
//     }
//     hasLeftIndex(index) {
//         return this.getLeftChildIndex(index) < this.heap.length
//     }
//     hasRightIndex(index) {
//         return this.getRightChildIndex(index) < this.heap.length
//     }
//     leftChild(index) {
//         return this.heap[this.getLeftChildIndex(index)]
//     }
//     rightChild(index) {
//         return this.heap[this.getRightChildIndex(index)]
//     }
//     hasParent(index) {
//         return this.getParentIndex(index) >= 0
//     }
//     parentIs(index) {
//         return this.heap[this.getParentIndex(index)]
//     }
//     swap(index1, index2) {
//         let temp = this.heap[index1]
//         this.heap[index1] = this.heap[index2]
//         this.heap[index2] = temp
//     }
//     peek() {
//         if (this.heap.length === 0) {
//             return null
//         }
//         return this.heap[0]
//     }
//     poll() {
//         if (this.heap.length === 0) {
//             return null
//         }
//         let item = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length - 1]
//         this.heap.pop()
//         this.heapifyDown()
//         return item
//     }
//     heapifyDown() {
//         let index = 0;
//         while (this.hasLeftIndex(index)) {
//             let smallIndex = this.getLeftChildIndex(index)
//             if (this.hasRightIndex(index) && this.rightChild(index) > this.leftChild(index)) {
//                 smallIndex = this.getRightChildIndex(index)
//             }
//             if (this.heap[index] < this.heap[smallIndex]) {
//                 this.swap(index, smallIndex)
//             } else {

//                 break;
//             }
//             index = smallIndex

//         }

//     }
//     add(value) {
//         this.heap.push(value)
//         this.heapifyUp()
//     }
//     heapifyUp() {
//         let index = this.heap.length - 1
//         while (this.hasParent(index) && this.parentIs(index) < this.heap[index]) {
//             this.swap(index, this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//     }
// }

// let hp = new maxHeap()
// hp.add(50)
// hp.add(20)
// hp.add(70)
// hp.add(60)
// hp.add(10)
// console.log(hp);
// hp.poll()
// console.log(hp);


class Heap{
    constructor(){
        this.heap=[]
    }
    getLeftIndex(parentIndex){
        return 2*parentIndex+1
    }
    getRightIndex(parentIndex){
        return 2*parentIndex+2
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    hasLeftIndex(index){
        return this.getLeftIndex(index)<this.heap.length
    }
    hasRightIndex(index){
        return this.getRighttIndex(index)<this.heap.length
    }
    hasParent(index){
        return this.getParentIndex(index)>=0
    }
    rightNode(index){
        return this.heap[this.getRightIndex(index)]
    }
    leftNode(index){
        return this.heap[this.getLeftIndex(index)]
    }
    parentNode(index){
        return this.heap[this.getParentIndex(index)]
    }
    delete(){
        let item=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return item
}
heapifyDown(){
    let index=0;
    while(this.hasLeftIndex(index)){
        let smallerIndex=this.getLeftIndex(index)
        if(this.hasRightIndex(index)&&this.rightNode(index)<this.leftNode(index)){
            smallerIndex=this.getRightIndex(index)
        }
        if(this.heap[index]<this.heap[smallerIndex]){
           break;
        }else{
            this.swap(index,smallerIndex)
        }
        index=smallerIndex;
    }
}
swap(i,j){
    let temp=this.heap[i]
    this.heap[i]=this.heap[j]
    this.heap[j]=temp
}
add(node){
    this.heap.push(node)
    this.heapifyUp()
    
}
heapifyUp(){
    let index=this.heap.length-1;
    while(this.hasParent(index)&&this.parentNode(index)>this.heap[index]){
        this.swap(index,this.getParentIndex(index))
        index=this.getParentIndex(index)
    }
}
}