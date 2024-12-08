export const createsArrayForEachLineAtArray = (inputOfProblem) => {
  return inputOfProblem
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(" ").map((item) => parseInt(item.trim())));
};
