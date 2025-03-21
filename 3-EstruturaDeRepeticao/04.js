var popA = 80000;
var popB = 200000;
var taxaDeCrescimentoA = 0.03;
var taxaDeCrescimentoB = 0.015;
var anos = 0;
while (popA < popB) {
    popA += popA * taxaDeCrescimentoA;
    popB += popB * taxaDeCrescimentoB;
    anos++;
}
console.log("A popula\u00E7\u00E3o do pa\u00EDs A ser\u00E1 maior do que a do pa\u00EDs B em cerca de ".concat(anos, " anos."));
