var luckyNumbers  = function(matrix) {
    var m = matrix.length
    var i;
    var j;
    
    var result=[];
    var minNum;
    var minInd;
    var maxNum
          
    for (i=0; i<m; i++){
        var newArr=[];
      minNum = Math.min(...matrix[i]);
      minInd = matrix[i].indexOf(minNum);
      for (j=0; j<m; j++){
           newArr.push(matrix[j][minInd])
      }
         maxNum = Math.max(...newArr);
    
    if (maxNum == minNum)
    {result.push(maxNum)}
    }
   
 return result;
};
