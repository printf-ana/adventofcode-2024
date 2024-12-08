import { createsArrayForEachLineAtArray } from "../utils";

const travelEachArray = () => {
  let arrayOfEverything = [];

  createsArrayForEachLineAtArray.forEach((array) => {
    let checkIfIsSafe = {
      outOfScope: false,
      aumentando: false,
      diminuindo: false,
      valid: true,
    };

    for (let i = 0; i < array.length - 1; i++) {
      const diferenca = Math.abs(array[i + 1] - array[i]);

      if (diferenca < 1 || diferenca > 3) {
        checkIfIsSafe.outOfScope = true;
        checkIfIsSafe.valid = false;
        break;
      }

      if (array[i] < array[i + 1]) {
        checkIfIsSafe.aumentando = true;
      } else if (array[i] > array[i + 1]) {
        checkIfIsSafe.diminuindo = true;
      }
    }

    if (!(checkIfIsSafe.aumentando === checkIfIsSafe.diminuindo)) {
      checkIfIsSafe.valid = false;
    }

    arrayOfEverything.push(checkIfIsSafe);
  });
  return arrayOfEverything;
};

let contador = 0;

travelEachArray().forEach((obj) => {
  if (obj.outOfScope === true || !obj.valid) {
    contador++;
  }
});

const lengthOfFullString = travelEachArray().length;

console.log(lengthOfFullString - contador);
