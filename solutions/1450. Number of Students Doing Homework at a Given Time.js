/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let n=startTime.length
    let count=0
    for(i=0;i<n;i++){
        if(startTime[i]<=queryTime && queryTime<=endTime[i]){
            console.log(queryTime)
            count++
        }
    }
    return count
};
