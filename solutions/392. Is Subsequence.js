/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    sarr=s.split("")
    tarr=t.split("")
    let i=0
  while(i<sarr.length){
      if(tarr.includes(sarr[i])){
          ind=tarr.indexOf(sarr[i])
          tarr=tarr.slice(ind+1)
          i++
      }else{
          return false
      }
  }
    return true
};
