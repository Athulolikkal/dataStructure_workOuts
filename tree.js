class tree{
    constructor(value){
        this.value=value;
        this.child=[]
    }
    addChild(value){
        this.child.push(value)
    }
    DFS(node){
        console.log(node.value);
        for(let i=0;i<node.child.length;i++){
            this.DFS(node.child[i])
        }
    }
}

let rootNode=new tree(10)
let childA=new tree(20)
let childB=new tree(30)
let childC=new tree(40)
rootNode.addChild(childA)
rootNode.addChild(childB)
childB.addChild(childC)
rootNode.DFS(rootNode)
