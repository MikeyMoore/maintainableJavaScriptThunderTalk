function isEven(n) {
   return n % 2 === 0;
}

function findMedian(numArray) {
  var sortedNumArray = numArray.sort();

  if (isEven(numArray.length)){
    var highMiddleIndex = (numArray.length/2);
    var lowMiddleIndex = highMiddleIndex - 1;
    var median = ((sortedNumArray[lowMiddleIndex] + sortedNumArray[highMiddleIndex]) / 2);

    return median;
  } else {
    var middleIndex = Math.floor(sortedNumArray.length/2);

    return sortedNumArray[middleIndex];
  }
}



