//Fibonacci Series

var fiboSeries = function(n) {
  if (n === 1) { 
    return [0, 1];
  }
  else {
    var s = fiboSeries(n - 1);
    s.push(s[s.length - 1] + s [s.length - 2]); 
    return s;
  }
}

console.log(fiboSeries(20));