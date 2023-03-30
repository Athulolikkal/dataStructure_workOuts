
// let arr=[15,58,10,99,1]
// let n=arr.length



// heapsort(arr, n)

// function heapsort(arr, n) {
//     for (let i = Math.floor(n / 2)-1; i >= 0; i--) {
//         heapify(arr, n, i)
//     }
//     for (let i = n - 1; i >= 0; i--) {
//         swap(0, i)
//         heapify(arr, i - 1, 0)
//     }
//     console.log(arr);

// }

// function heapify(arr, n, i) {
//     let largest = i
//     let l = 2 * i + 1
//     let r = 2 * i + 2
//     while (l < n && arr[l] > arr[largest]) {
//         largest = l
//     }
//     while (r < n && arr[r] > arr[largest]) {

//         largest = r
//     }
//     if (largest !== i) {
//         swap(largest, i)
//         heapify(arr, n, largest)
//     }
// }
// function swap(i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j] 
//     arr[j]=temp
// }


// let arr=[10,50,16,2,40]
// let n=arr.length
// heapSort(arr,n)

// function heapSort(arr,length){

//     for(let i=Math.floor(length/2)-1;i>=0;i--){
//         heapify(arr,length,i)
//     }
//     for(let i=length-1;i>=0;i--){
//         swap(0,i)
//         heapify(arr,i-1,0)

//     }
// console.log(arr);
// }

// function heapify(arr,length,i){
//     let parent=i;
//     let left=2*i+1
//     let right=2*i+2
//     while(left<length && arr[left]>arr[parent]){
//         parent=left
//     }
//     while(right<length && arr[right]>arr[parent]){
//         parent=right
//     }
//     if(parent!==i){
//         swap(parent,i)
//         heapify(arr,length,parent)

//     }
// }

// function swap(num1,num2){

//     let temp=arr[num1]
//     arr[num1]=arr[num2]
//     arr[num2]= temp

// }

// let arr=[10,50,16,2,40]
// let n=arr.length
// heapSort(arr,n)

// function heapSort(arr,length){

//     for(let i=Math.floor(length/2)-1;i>=0;i--){
//         heapify(arr,length,i)
//     }
//     for(let i=length-1;i>=0;i--){
//         swap(0,i)
//         heapify(arr,i,0)
//     }
//     console.log(arr);
// }

// function heapify(arr,length,i){
//     let parent=i;
//     let left=2*i+1
//     let right=2*i+2
//     if(left<length && arr[left]>arr[parent]){
//         parent=left
//     }
//     if(right<length && arr[right]>arr[parent]){
//         parent=right
//     }
//     if(parent!==i){
//         swap(parent,i)
//         heapify(arr,length,parent)
//     }
// }

// function swap(num1,num2){
//     let temp=arr[num1]
//     arr[num1]=arr[num2]
//     arr[num2]= temp
// }

let arr=[10,50,16,2,40]
let n=arr.length
heapsort(arr,n)




function heapsort(arr,length){
    for(let i=Math.floor(length/2)-1;i>=0;i--){
        heapify(arr,length,i)
    }
    for(let i=length-1;i>=0;i--){
        swap(0,i)
        heapify(arr,i,0)
    }
    console.log(arr);

  function  heapify(arr,length,i){
        let parent=i;
        let left=i*2+1
        let right=i*2+2
        if(left<length&&arr[parent]<arr[left]){
            parent=left
        }
        if(right<length&&arr[parent]<arr[right]){
            parent=right
        }
        if(parent!=i){
            swap(parent,i)
            heapify(arr,length,parent)
        }
    }

    function swap(i,j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }

}