class heap{
    constructor(){
        this.heap=[]
    }
    getLeftChildIndex(parentIndex){
        return parentIndex*2+1

    }
    getRightChildIndex(parentIndex){
        return parentIndex*2+2

    }
    getParentIndex(index){
        return Math.floor(index/2)-1
    }
    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1;
        if(this.hasParent(index)&&this.Parent(index)>this.heap[index]){
            this.swap(index,this.getParentIndex(index))
            index=this.getParentIndex(index)
            
        }



    }
}
