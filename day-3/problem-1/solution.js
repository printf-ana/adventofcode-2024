import { processedComplexString } from "./processComplexInput.js";

function findValidMuls(texto) {
  const resultados = [];
  let index = 0;

  while (index < texto.length) {
    const inicio = texto.indexOf("mul(", index);
    if (inicio === -1) break;

    let fim = texto.indexOf(")", inicio);

    if (fim === -1) break;

    const expressao = texto.substring(inicio, fim + 1);

    const conteudo = expressao.slice(4, -1).split(",");
    if (conteudo.length === 2 && conteudo.every((num) => !isNaN(Number(num)))) {
      resultados.push(expressao);
    }

    index = inicio + 1;
  }

  return resultados;
}

const storeValidElements = findValidMuls(processedComplexString);

const removeMulFromString = () => {
  let splitString = [];
  storeValidElements.map((numbers, index) => {
    let indexx = 0;

    while (indexx < numbers.length) {
      const removeFirstPartOfString = numbers.replace("mul(", "");
      const removeLastPartOfString = removeFirstPartOfString.replace(")", "");
      const transformCommaInSpace = removeLastPartOfString.replace(",", " ");
      splitString.push(transformCommaInSpace);
      break;
    }
  });

  return splitString;
};

const multiplyEachElement = () => {
  return removeMulFromString().map((element) => {
    const [a, b] = element.split(" ").map(Number);
    return a * b;
  });
};

const sumOfEachElement = multiplyEachElement().reduce(
  (acc, curr) => acc + curr,
  0
);
