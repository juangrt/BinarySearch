/*
  Binary Search Assumes PreSorted array
  Doesn't do type validation
  Non-Recursive Version
*/
function binarySearch(val, array) {
  var mid = null;
  var floor = 0;
      ceil = array.length;
  var midPoint = Math.floor((ceil+floor)/2);

  while (mid !== val){
    var midPoint = Math.floor((ceil+floor)/2);
    
    mid = array[midPoint];
    
    //Break loop when you've run out of space to check
    if(ceil === floor || (ceil - floor) == 1 ){ break; }
    
    if (val > mid){
      floor = midPoint;
    } else if(val < mid){
      ceil = midPoint;
    }
  }
  
  //Checked value other wise return null.
  return (mid === val)? mid : null;
};
