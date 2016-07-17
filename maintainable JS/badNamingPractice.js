function even(n) {
   return n % 2 === 0;
}

function median(x) {
  var y = x.sort();
  if (even(x.length)){
    var one = (x.length/2);
    var two = one - 1;
    var median = ((y[two] + y[one]) / 2);
    return median;
  } else {
    var mid = Math.floor(y.length/2);
    return y[mid];
  }
}
