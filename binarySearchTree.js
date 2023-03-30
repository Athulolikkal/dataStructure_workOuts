// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root=null
//     }

// isEmpty(){
//         return this.root===null
//     }
    
// insert(value){
//         let node=new Node(value)
        
//         if(this.isEmpty()){
//             this.root=node;
//         }else{
            
//             this.insertNode(this.root,node)
//         }
//     }
// insertNode(root,node){
        
//         if(node.value < root.value){
//               if(root.left===null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=node;
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
// search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                  return true
//             }
//             else if(value<root.value){
            
//                 return this.search(root.left,value)
//             }
//             else{
               
//                 return this.search(root.right,value)
//             }
//         }

//     }

// ///-----Depth First Search (DFS)
// preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
// }
// inOrder(root){
//     if(root){
//         this.inOrder(root.left)
//         console.log(root.value);
//         this.inOrder(root.right)

//     }
// }
// postOrder(root){
//     if(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value);
//     }
// }

// ///------Breadth First Search (BFS)
// levelOrder(){
//     const queue=[]
//     queue.push(this.root)
   
//     while(queue.length){
//         let curr=queue.shift()
//         console.log(curr.value);
//         if(curr.left){
//             queue.push(curr.left)
//         }
//         if(curr.right){
//             queue.push(curr.right)
//         }
//     }
// }

// min(root){
//     if(!root.left){
//         return root.value
//     }else{
//         return this.min(root.left)
//     }
// }

// max(root){
//     if(!root.right){
//         return root.value
//     }else{
//         return this.max(root.right)
//     }
// }
// delete(value){
   
//     this.root=this.deleteNode(this.root,value)

// }
// deleteNode(root,value){
//     if(root===null){
//         return root
//     }
//     if(value<root.value){
//         root.left=this.deleteNode(root.left,value)
//     }else if(value>root.value){
//         root.right=this.deleteNode(root.right,value)
//     }
//     else{
//         if(!root.left&&!root.right){
//             return null
//         }
//         if(!root.left){
//             return root.right
//         }
//         else if(!root.right){
//             return root.left
//         }

//         root.value=this.min(root.right)
//         root.right=this.deleteNode(root.right,root.value)

//     }
//     return root

// }


// }

// let bts=new binarySearchTree()
// // console.log(bts.isEmpty());
// bts.insert(15)
// bts.insert(3)
// bts.insert(10)
// bts.insert(5)
// bts.insert(7)
// // console.log(bts);
// // console.log(bts.search(bts.root,50));
// // console.log(bts.search(bts.root,52));
// // console.log(bts.search(bts.root,5));
// // bts.preOrder(bts.root)
// // bts.inOrder(bts.root)
// // bts.postOrder(bts.root)
// // bts.levelOrder
// // console.log(bts.min(bts.root));
// // console.log(bts.max(bts.root));
// // bts.levelOrder()
// // console.log('deleted list');
// // bts.delete(15)
// bts.levelOrder()


// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }

// class bts{
//     constructor(){
//         this.root=null;
//     }
//     insert(value){
//         let node=new Node(value) 
//         if(this.root===null){
//             this.root=value;
//         }
//         else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,value){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left=value
//             }else{
//                 this.insertNode(root.left,value)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=value
//             }else{
//                 this.insertNode(root.right,value)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }
//         else{
//             if(root.value===value){
//                 return true
//             }
//             else if(value<root.value){
//                 this.search(root.left,value)
//             }else{
//                 this.search(root.right,value)
//             }
//         }
//     }
//     preorder(root){
//         if(root){
//             console.log(root.value);
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.left)
//         }
//     }
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value);
//         }
//     }

//     // levelorder(){
//     //     let queue=[];
//     //     queue.push[this.root]
//     //     while(queue.length){
//     //         let curr=queue.shift()
//     //         console.log(curr.value);
//     //         if(curr.left){
//     //             queue.push(curr.left)
//     //         }
//     //         if(curr.right){
//     //             queue.push(curr.right)
//     //         }
//     //     }

//     // }

//     levelOrder(){
//         let queue=[];
//         queue.push[this.root]
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
    
//     delete(value){
//         this.root=this.deleteNode(this.root,value)
        
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         if(root.value<value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(root.value>value){
//             root.right=this.deleteNode(root.right,value)
//         }
//         else{
//         if(!root.left&&!root.right){
//             return null
//         }
//         else if(!root.left){
//             return root.right
//         }
//         else if(!root.right){
//             return root.left
//         }
//         root.value=this.min(root.right)
//         root.right=this.deleteNode(root.right,root.value)
//         }
//     }

// }


// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// class bts{
//     constructor(){
//         this.root=null;
//     }
//     isEmpty(){
//         return this.root===null;
//     }
//     insert(value){
//          let node=new Node(value)
//          if(this.root===null){
//             this.root=node
//          }
//          else{
//             this.addNode(this.root,node)
//          }
//     }
//     addNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.addNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=node
//             }else{
//                 this.addNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }
//       else{
//         if(root.value===value){
//             return true
//         }else if(root.value<value){
//          return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//       }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//             }
//     }
//     postOrder(root){
//         if(root){
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.preOrder(root.left)
//             console.log(root.value);
//             this.preOrder(root.right)
          
//         }
//     }
//     levelOrder(){
//         let queue=[];
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }
//         else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }
//         else{
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         else if(root.value>value){
//            root.left= this.deleteNode(root.left,value)
            
//         }else if(root.value<value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.left&&!root.right){
//                 return null
//             }
//             else if(!root.left){
//                 return root.right
//             }
//             else if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
//     isBst(node=this.root,min=-Infinity,max=Infinity){
//         if(node===null){
//             return true
//         }
//         else if(node.value<min || node.value>max){
//                  return false
//         }
//         return (this.isBst(node.left,min,node.value)&&this.isBst(node.right,node.value,max))
//     }
//     closestValue(target){
//         let currNode=this.root
//         let closest=Infinity
//         while(currNode){
           
//             if(Math.abs(target-closest)>Math.abs(target-currNode.value)){
//             //    console.log('jhsdkjfg');
//                 closest=currNode.value
//             }
//             if(target<closest){
//                 currNode=currNode.left
//             }else if(target>closest){
//                 currNode=currNode.right
//             }else{
//                 break;
//             }
//         }
//         return closest
//     }
// }




// let bst=new bts()
// console.log(bst.isEmpty());
// bst.insert(15)
// bst.insert(3)
// bst.insert(10)
// bst.insert(5)
// bst.insert(7)
// bst.preOrder(bst.root)
// console.log(bst.isEmpty());
// console.log(bst.search(10));
// console.log(bst.delete(10));
// bst.levelOrder();
// console.log(bst.isBst());
// console.log(bst.closestValue(6));




class Node{
    constructor(value){
        this.value=value
        this.right=null;
        this.left=null;
    }
}

class Bts{
    constructor(){
        this.root=null
}
isEmpty(){
    return this.root===null
}
insert(value){
    let node=new Node(value)
    if(this.isEmpty()){
        this.root=node
    }else{
        this.add(this.root,node)
    }
}
add(root,node){
    if(root.value>node.value){
        if(root.left===null){
            root.left=node
        }else{
         this.add(root.left,node)
        }
    }else{
        if(root.right===null){
            root.right=node
        }else{
             this.add(root.right,node)
        }
    }
}
search(root,value){
    if(!root){
        return false
    }
    else{
        if(root.value===value){
            return true
        }
        else if(root.value>value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
}
delete(value){
    this.root=this.deleteNode(this.root,value)
}
deleteNode(root,value){
    if(!root){
        return root
    }
    else if(root.value>value){
        root.left=this.deleteNode(root.left,value)
    }else if(root.value<value){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null
        }
        else if(!root.right){
            return root.left
        }
        else if(!root.left){
            return root.right
        }else{
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
    }
}
preorder(root){
    if(root){
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }
    
}

postorder(root){
    if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value);
    }
}
inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
}
levelOrder(){
    let queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
}
isBst(node=this.root,min=-Infinity,max=Infinity){
    if(node===null){
        return true
    }else if(node.value<min||node.value>max){
        return false
    }
    else{
        return(this.isBst(node.left,min,node.value)&&this.isBst(node.right,node.value,max))
    }

}
isClosest(value){
    let currnode=this.root
    let closest=Infinity
    while(currnode){
        if(Math.abs(value-currnode)<Math.abs(value-closest)){
            closest=currnode
        }
        if(value<closest){
            currnode=currnode.left
        }else if(value>closest){
            currnode=currnode.right
        }else{
            break
        }
    }
    return closest
}



}


let bst=new Bts()
console.log(bst.isEmpty());
bst.insert(15)
bst.insert(3)
bst.insert(10)
bst.insert(5)
bst.insert(7)
// bst.preOrder(bst.root)?
// console.log(bst.isEmpty());
console.log(bst.search(10));
// console.log(bst.delete(10));
// bst.preorder(bst.root)
// bst.inOrder(bst.root)
// bst.postorder(bst.root)
bst.levelOrder()