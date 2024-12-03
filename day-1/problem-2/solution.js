import { crescentArrays, separetesNumbersInSidesList } from "../utils.js";
import inputOfProblem from "./input.js";

const leftList = crescentArrays(
  separetesNumbersInSidesList(inputOfProblem).leftList
);

const rightList = crescentArrays(
  separetesNumbersInSidesList(inputOfProblem).rightList
);

// retorna a quantidade de vezes que cada número aparece
function countOccurrences(rightList, elementoAtualDoLeftList) {
  return rightList.filter((item) => item === elementoAtualDoLeftList).length;
}

function calculateEverything(leftList, rightList) {
  //cada número de leftList é o elAtual
  return leftList.reduce((acc, elAtual) => {
    //retorna quantas vezes o número aparece em rightList
    const countage = countOccurrences(rightList, elAtual);
    const multiplica = elAtual * countage;
    return acc + multiplica;
  }, 0);
}

console.log(calculateEverything(leftList, rightList));
