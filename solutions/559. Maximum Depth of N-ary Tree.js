var maxDepth = function(root) {
    let max=0;
    let j;
    // console.log(root.children[0].children.length !==0 )
    const recurse=(node, j)=>{
                if(!node){return}
                if(!node.children.length){
                    if (j>max){
                       max = j;
                    }else{
                        return j;
                    }
                }
          for (let i = 0; i < node.children.length; i++) {
                recurse(node.children[i], j+1)
            }
        }
    recurse(root, 1)
    return max
};
