function oddUpToN(n) {
  let result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  console.log(result.join(", "));
}


const input = 6; 
oddUpToN(input);
