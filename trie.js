// class Node{
//     constructor(){
//         this.key=new Map()
//         this.end=false;
//     }
//     isEnd(){
//         return this.end
//     }
//     setEnd(){
//         this.end=true;
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     add(input,node=this.root){
//         if(input.length===0){
//             node.setEnd()
//             return false
//         }
//         else if(!node.key.has(input[0])){
//             node.key.set(input[0],new Node())
//             return this.add(input.substr(1),node.key.get(input[0]))
//         }
//         else{
//             return this.add(input.substr(1),node.key.get(input[0]))

//         }
//  }
 
//  isWord(input){
//     let node=this.root
//     while(input.length>1){
       
//         if(!node.key.has(input[0])){
//             return false
//         }
//         else{
//             node=node.key.get(input[0])
//             input=input.substr(1)
//         }
//     }
//     return(node.key.has(input[0])&&node.key.get(input).isEnd())?true:false
// }
// print(){
//     let word=new Array()
//     function search(node,string){
//         if(node.key.size!=0){
//             for(let letter of node.key.keys()){
//                 search(node.key.get(letter),string.concat(letter))
//             }
//             if(node.isEnd()){
//                 word.push(string)
//             }
//         }
//         else{
//             string.length>0?word.push(string):undefined;
//             return 
//         }
//     }
//     search(this.root, new String());
//     return word.length>0?word:null

// }

// }

// let myTrie=new Trie()
// myTrie.add('shibin')
// myTrie.add('shibu')
// myTrie.add('shaibu')
// myTrie.add('abu')
// console.log(myTrie.isWord('shibu'));
// console.log(myTrie.isWord('sha'));
// console.log(myTrie.print());

//-------------------------------------------------------------------------------------------------------------->

// class Node{
//     constructor(){
//         this.key=new Map()
//         this.end=false
//     }
//     isEnd(){
//         return this.end
//     }
//     setEnd(){
//         this.end=true;
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }
//     add(input,node=this.root){
//         if(input.length===0){
//           node.setEnd()
//           return false
//         }
//         else if(!node.key.has(input[0])){
//             node.key.set(input[0],new Node())
//             return(this.add(input.substr(1),node.key.get[input[0]])) 
//         }else{
//             return(this.add(input.substr(1),node.key.get[input[0]]))   
//         }
//     }
//     isWord(word){
//         let node=this.root
//         while(word.lenght>1){
//             if(!node.key.has(word[0])){
//               return   false
//             }
//             else{
//                 node=node.key.get(word[0])
//                 word=word.substr(1)
//             }
//         }
//         return(node.key.has(word[0])&&node.key.get(word).isEnd())?true:false
//     }
//     print(){
//         let word=new Array()
//        function search(node,string){
//         if(node.key.size!=0){
//             for(let letter of node.key.keys()){
//                 search(node.key.get(letter),string.concat(letter))
            
//             }
//             if(node.isEnd()){
//                 word.push(string)
//             }
//         }else{
//             string.lenght>0?word.push(string):undefined;
//         }

//        }
//         search(this.root,new String())
//         return word.length>0?word:null
//     }
// //    print(){
// //     let word=new Array()
// //     function search(node,string){
// //         if(node.key.size!=0){
// //             for(let letter of node.key.keys()){
// //                 search(node.key.get(letter,string.concat(letter)))
// //             }
// //             if(node.isEnd()){
// //                 word.push(string)
// //             }

// //         }else{
// //             string.length>0?word.push(string):undefined
// //         }

// //     }
// //     search(this.root,new String())
// //     return word.length>0?word:null
// // }
  
// }
// let myTrie=new Trie()
// myTrie.add('shibin')
// myTrie.add('shibu')
// myTrie.add('shaibu')
// myTrie.add('abu')
// console.log(myTrie.isWord('shibu'));
// console.log(myTrie.isWord('sha'));
// console.log(myTrie.print());

//--------------------------------------------------------------------------------------------->
//autoSuggestion

// class Node{
//      constructor(){
//         this.key=new Map()
//         this.end=false
//      }
//      isEnd(){
//         return this.end
//      }
//      setEnd(){

//         this.end=true;
//      }
// }

// class Tire{
//     constructor(){
//         this.root=new Node()
//     }
//     add(input,node=this.root){
//         if(input.length===0){
//             node.setEnd()
//             return false
//         }
//         else if(!node.key.has(input[0])){
//             node.key.set(input[0],new Node())
//             return this.add(input.substr(1),node.key.get(input[0]))
//         }else{

//             return this.add(input.substr(1),node.key.get(input[0]))

//         }
//     }

//     isWord(word){
//         let node=this.root;
//         while(word.length>1){
//             if(!node.key.has(word[0])){
//                 return false
//             }else{
//                 node=node.key.get(word[0])
//                 word=word.substr(1)
//             }
//         }
//         return (node.key.has(word[0])&&node.key.get(word).isEnd())?true:false
//     }
//     print(){
//         let word=new Array()
//         function search(node,string){
//             if(node.key.size){
//                 for(let letter of node.key.keys()){
//                     search(node.key.get(letter),string.concat(letter))
//                 }
//                 if(node.isEnd()){
//                     word.push(string)
//                 }
//             }else{
//                 string.length>0?word.push(string):undefined
//             }


//         }
//         search(this.root,new String())
//         return word
//     }

       // Returns an array of all words in the Trie that start with the given prefix.
        // getSuggestions(prefix) {
        //   let node = this.root;
        //   let suggestions = [];
      
          // Traverse the Trie to find the node corresponding to the prefix.
        //   for (let i = 0; i < prefix.length; i++) {
        //     let char = prefix[i];
        //     if (node.key.has(char)) {
        //       node = node.key.get(char);
        //     } else {
        //       -----// Prefix not found in the Trie.-----------
        //       return suggestions;
        //     }
        //   }
      
        //---------- Recursively traverse the child nodes to find all words that start with the prefix.
        //   function findWords(node, prefix) {
        //     if (node.isEnd()) {
        //       suggestions.push(prefix);
        //     }
        //     for (let [char, childNode] of node.key.entries()) {
        //       findWords(childNode, prefix + char);
        //     }
        //   }
      
        //   findWords(node, prefix);
        //   return suggestions;
        // }

// getSuggestions(word){
//     let node=this.root
//     let suggestions=[]
//     for(let i=0;i<word.length;i++){
//         if(node.key.has(word[i])){
//             node=node.key.get(word[i])
//         }else{
//             return false
//         }
//     }
// function findWords(node,word){
//     if(node.isEnd()){
//         suggestions.push(word)
//     }
//     else{
//         for(let [char,childNode]of node.key.entries()){
//             findWords(childNode,word+char)
//         }
//     }
// }

//     findWords(node,word);
//     return suggestions
// }

// }
      
let myTrie=new Tire()
myTrie.add('shibin')
myTrie.add('shibu')
myTrie.add('shaibu')
myTrie.add('abu')
console.log(myTrie.isWord('shibu'));
console.log(myTrie.isWord('sha'));
// console.log(myTrie.print());


console.log(myTrie.getSuggestions("sh"));

class Node{
    constructor(){
        this.key=new Map()
        this.end=false
    }
    isEnd(){
        return this.end
    }
    setEnd(){
        this.end=true
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }

    add(input,node=this.root){
        if(input.length===0){
            node.setEnd()
            return false
        }
        else if(!node.key.has(input[0])){
            node.key.set(input[0],new Node())
            return this.add(input.substr(1),node.key.get(input[0]))
        }
        else{
            return this.add(input.substr(1),node.key.get(input[0]))
        }
    }
    isWord(input){
        let node=this.root;
        while(input.length>1){
            if(!node.key.has(input[0])){
                return false
            }
            else{
                node=node.key.get(input[0])
                input=input.substr(1)
            }
        }
        return (node.key.has(input[0])&&node.key.get(input).isEnd())?true:false
        
    }
   
    print(){
        let word=new Array()
      
      function search(node,string){
        if(node.key.size){
            for(let letter of node.key.keys()){
                search(node.key.get(letter),string.concat(letter))
            }
            if(node.isEnd()){
                word.push(string)
            }
        }else{
            string.length>0?word.push(string):undefined
        }
      }
      search(this.root,new String)
        return word
    }
    
    getSuggestions(word){
        let node=this.root;
        let suggestions=[];
        for(let i=0;i<word.length;i++){
            if(node.key.has(word[i])){
               node=node.key.get(word[i])
            }else{
                return false
            }
        }
        function findsuggestions(node,word){
            if(node.isEnd()){
                suggestions.push(word)
            }else{
                for(let [char,child]of node.key.entries()){
                    findsuggestions(child,word+char)
                }
            }
        }

        findsuggestions(node,word)
        return suggestions
}

}

