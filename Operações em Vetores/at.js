// Soma todos os números de um vetor
function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// Soma apenas os números ímpares de um vetor
function sumOdds(arr) {
  return arr
    .filter(n => n % 2 !== 0)
    .reduce((acc, val) => acc + val, 0);
}

// Produto de todos os números de um vetor
function product(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
}

// Exemplos de uso:
console.log(sum([1, 2, 3]));           // 6
console.log(sum([2, 2, 2]));           // 6
console.log(sum([1, 2, 3, 4, 5, 6]));  // 21

console.log(sumOdds([1, 2, 3]));       // 4
console.log(sumOdds([2, 2, 2]));       // 0
console.log(sumOdds([1, 2, 3, 4, 5, 6])); // 9

console.log(product([1, 2, 3]));       // 6
console.log(product([2, 2, 2]));       // 8
console.log(product([1, 2, 3, 4, 5, 6])); // 720

console.log("ian")