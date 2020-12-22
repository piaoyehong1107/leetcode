/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const lenarr=[]
    indexs=[];
    newArr=[];
   mat.forEach(eles=> {
       arr=[]
       arr=eles.filter(ele=> ele===1)
       lenarr.push(arr.length)
        }
    )
  for (i=0;i<lenarr.length;i++){
    newArr[i]=[lenarr[i],i]
  }
  newArr.sort(function(left, right) {
    return left[0] - right[0]
  });    
  newArr.forEach(ele=>{
    indexs.push(ele[1])
  })
  
  return indexs.slice(0,k)
}
