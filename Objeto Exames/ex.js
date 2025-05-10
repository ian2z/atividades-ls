class Exam {
  constructor(answer, weight) {
    this.answer = answer;
    this.weight = weight;
    this.exams = [];
  }

  add(exam) {
    this.exams.push(exam);
  }

  avg() {
    const scores = this.exams.map(resps => this._grade(resps));
    const total = scores.reduce((acc, n) => acc + n, 0);
    return scores.length ? total / scores.length : 0;
  }

  min(count = 1) {
    const scores = this._allScores().sort((a, b) => a - b);
    return scores.slice(0, count);
  }

  max(count = 1) {
    const scores = this._allScores().sort((a, b) => b - a);
    return scores.slice(0, count);
  }

  lt(limit) {
    return this._allScores().filter(score => score < limit);
  }

  gt(limit) {
    return this._allScores().filter(score => score > limit);
  }

  _grade(resps) {
    let total = 0;
    for (let i = 0; i < this.answer.length; i++) {
      if (resps[i] === this.answer[i]) {
        total += this.weight[i];
      }
    }
    return total;
  }

  _allScores() {
    return this.exams.map(resps => this._grade(resps));
  }
}

//parte de teste do codigo
const gabarito = ['a', 'b', 'a', 'c', 'd'];
const pesos = [2, 2, 2, 2, 2];
const prova = new Exam(gabarito, pesos);

prova.add(['a', 'b', 'b', 'b', 'b']);
prova.add(['a', 'b', 'a', 'c', 'd']);
prova.add(['a', 'b', 'c', 'd', 'a']);


console.log('Média:', prova.avg());
console.log('Nota mínima:', prova.min());
console.log('Nota máxima:', prova.max());
console.log('Notas menores que 5:', prova.lt(5));
console.log('Notas maiores que 6:', prova.gt(6));
