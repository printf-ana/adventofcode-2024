import { createsArrayForEachLineAtArray } from "../utils.js";
import inputOfProblem from "./input.js";

const arrayOfArraysForLine = createsArrayForEachLineAtArray(inputOfProblem);

const createObjectToEachUnsafeArray = arrayOfArraysForLine.map(
  (innerArray) => ({
    [innerArray.join(" ")]: "SAFE",
  })
);

const setIfHaveInconsistency = (numbers) => {
  let isIncreasing = false;
  let isDecreasing = false;
  let differenceBiggerThan3 = false;
  let isEqual = false;

  for (let i = 0; i < numbers.length - 1; i++) {
    const diferenca = Math.abs(numbers[i] - numbers[i + 1]);
    if (diferenca > 3) {
      differenceBiggerThan3 = true;
    } else if (numbers[i] < numbers[i + 1]) {
      isIncreasing = true;
    } else if (numbers[i] > numbers[i + 1]) {
      isDecreasing = true;
    } else if (numbers[i] === numbers[i + 1]) {
      isEqual = true;
    }
  }

  if ((isIncreasing && isDecreasing) || differenceBiggerThan3 || isEqual) {
    return true;
  }
};

const determineIfArrayIsSafeOrNot = () => {
  return createObjectToEachUnsafeArray.map((sonObject) => {
    const valuesToAnalyze = Object.keys(sonObject)[0];
    const numbers = valuesToAnalyze.split(" ").map(Number);

    if (setIfHaveInconsistency(numbers) == true) {
      sonObject[valuesToAnalyze] = "UNSAFE";
    }
    return createObjectToEachUnsafeArray;
  });
};

const safeAndUnsafeElements = determineIfArrayIsSafeOrNot().pop();

const possibleRemoveElements = () => {
  return safeAndUnsafeElements.map((sonObject) => {
    if (Object.values(sonObject)[0] === "UNSAFE") {
      const numbersToAnalyze = Object.keys(sonObject)[0];
      const numbers = numbersToAnalyze.split(" ").map(Number);

      for (let i = 0; i < numbers.length; i++) {
        const testArray = [...numbers];
        testArray.splice(i, 1);

        if (!setIfHaveInconsistency(testArray)) {
          sonObject[numbersToAnalyze] = "SAFE";
          return sonObject;
        }
      }
    }
    return sonObject;
  });
};

possibleRemoveElements().filter((element) => element !== undefined);

const howManyElementsAreSafe = safeAndUnsafeElements.filter(
  (item) => Object.values(item)[0] === "SAFE"
).length;

console.log(howManyElementsAreSafe);
