var popA = 80000
var popB = 200000

var taxaDeCrescimentoA = 0.03
var taxaDeCrescimentoB = 0.015

var anos = 0

while (popA < popB) {
  popA += popA * taxaDeCrescimentoA
  popB += popB * taxaDeCrescimentoB

  anos++
}

console.log(`A população do país A será maior do que a do país B em cerca de ${anos} anos.`)