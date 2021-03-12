

function loop(n){
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i
  }
  return sum;
}

function formula(n){
  return (n*(n + 1)) / 2
}

function test() {
  const num = 1000000000;
  
  console.time('Loop')
  let result1 = loop(num)
  console.timeEnd('Loop')
  console.log(result1)
  
  console.time('Formula')
  let result2 = formula(num)
  console.timeEnd('Formula')
  console.log(result2)
}


test()

