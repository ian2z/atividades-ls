function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}


function sumOdds(arr) {
  return arr
    .filter(n => n % 2 !== 0)
    .reduce((acc, val) => acc + val, 0);
}


function product(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
}

//testando a atividade
console.log(sum([1, 2, 3]));
console.log(sum([2, 2, 2]));
console.log(sum([1, 2, 3, 4, 5, 6]));

console.log(sumOdds([1, 2, 3]));
console.log(sumOdds([2, 2, 2]));
console.log(sumOdds([1, 2, 3, 4, 5, 6])); 

console.log(product([1, 2, 3]));
console.log(product([2, 2, 2]));
console.log(product([1, 2, 3, 4, 5, 6])); 
