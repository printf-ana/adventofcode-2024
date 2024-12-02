import inputOfProblem from "./input.js";

function removeSpaces(fullString) {
  return fullString
    .replace(/[\n\r\t]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createsArrayWithAllNumbers(withoutSpaceString) {
  const unseparatedString = removeSpaces(withoutSpaceString);
  return unseparatedString.match(/\d{5}/g);
}

function separetesNumbersInSidesList(arrayOfALotOfNumbers) {
  const leftList = [];
  const rightList = [];

  const fullArray = createsArrayWithAllNumbers(arrayOfALotOfNumbers);

  fullArray.forEach((item, index) => {
    if (index % 2 === 0) {
      leftList.push(item);
    } else {
      rightList.push(item);
    }
  });

  return { leftList, rightList };
}

function crescentArrays(disorderArray) {
  return disorderArray.sort((a, b) => a - b);
}

const leftList = crescentArrays(
  separetesNumbersInSidesList(inputOfProblem).leftList
);
const rightList = crescentArrays(
  separetesNumbersInSidesList(inputOfProblem).rightList
);

function comparatesTwoValuesFromDifferentsLists(firstList, secondList) {
  const arrayOfSums = [];

  firstList.forEach((firstItem, firstIndex) => {
    secondList.forEach((secondItem, secondIndex) => {
      if (firstIndex === secondIndex) {
        arrayOfSums.push(Math.abs(firstItem - secondItem));
      }
    });
  });

  const sumOfAllArrayElements = arrayOfSums.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return sumOfAllArrayElements;
}

console.log(comparatesTwoValuesFromDifferentsLists(leftList, rightList));
