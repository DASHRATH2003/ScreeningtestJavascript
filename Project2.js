function printOddSeries(n) {
  let result = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    result.push(num);
    num += 2;
  }
  console.log(result.join(", "));
}


const input = 4; 
printOddSeries(input);
