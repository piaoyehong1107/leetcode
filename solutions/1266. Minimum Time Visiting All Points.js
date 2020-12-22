/**
 * @param {number[][]} points
 * @return {number}
 */
// var minTimeToVisitAllPoints = function(points) {
//     console.log(points.length)
//     let sum=0
//     for(i=0;i<points.length-1;i++){
//         if(Math.abs(points[i][1]-points[i+1][1])<=Math.abs(points[i][0]-points[i+1][0])){
//             sum=sum+Math.abs(points[i][0]-points[i+1][0])
//         }else{
//             sum=sum+Math.abs(points[i][0]-points[i+1][0])+Math.abs(Math.abs(points[i][1]-points[i+1][1])-Math.abs(points[i][0]-points[i+1][0]))
//         }
//     }
//     return sum
// };
​
let minTimeToVisitAllPoints = function(points) {
        let i = 0;
        let result = 0;
        while(i < points.length - 1) {
            let x= Math.abs(points[i][0] - points[i+1][0]);
            let y= Math.abs(points[i][1] - points[i+1][1]);
            result = result + Math.max(x,y);
            i++;
        }
        
        return result;
    };
