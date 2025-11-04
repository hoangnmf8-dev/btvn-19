//Bài 1
console.log("Bài 1:");
const myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sumRowArr = myArr.map((item) => {
  let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum += item[i];
  }
  return sum;
});
console.log("🚀 ~ sumRowArr:", sumRowArr);

const sumColArr = [];
for (let i = 0; i < myArr[0].length; i++) {
  sumColArr[i] = myArr[0][i];
}

for (let i = 0; i < sumColArr.length; i++) {
  for (let j = 1; j < myArr.length; j++) {
    sumColArr[i] += myArr[j][i];
  }
}
console.log("🚀 ~ sumColArr:", sumColArr);

const newArr = myArr.filter((item) => {
  let sum = 0;
  for (let i = 0; i < item.length; i++) {
    sum += item[i];
  }
  return sum > 10;
});

console.log("🚀 ~ newArr:", newArr);
console.log("================================");

//Bài 2
console.log("Bài 2:");
const arrs = [
  ["hello", "world"],
  ["javascript", "php"],
  ["css", "html"],
];

const upperArr = arrs.map((arr) => arr.map((item) => item.toLocaleUpperCase()));
console.log("🚀 ~ upperArr:", upperArr);

const newArrs = arrs.map((arr) => arr.filter((item) => item.length > 4));
console.log("🚀 ~ newArrs:", newArrs);

const flatArr = arrs.map((arr) => arr.join(", "));
console.log("🚀 ~ flatArr:", flatArr);
// Nếu array có nhiều cấp array lồng nhau thì có thể dùng đệ quy phi tuyến để giải quyết triệt để
// const flatArr = [];
// function flattenArr(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     if(Array.isArray(arr[i])) {
//       flattenArr(arr[i]);
//     } else {
//       flatArr.push(arr[i]);
//     }
//   }
// }

// flattenArr(arrs);
// console.log("🚀 ~ flatArr:", flatArr);
console.log("================================");

//Bài 3
console.log("Bài 3:");
const otherArr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

const mainDiagonalArr = otherArr.map((item, index) => item[index]);
console.log("🚀 ~ mainDiagonalArr:", mainDiagonalArr);

const secondaryDiagonalArr = otherArr.map(
  (item, index) => item[item.length - 1 - index]
);
console.log("🚀 ~ secondaryDiagonalArr:", secondaryDiagonalArr);

let sum = 0;
mainDiagonalArr.concat(secondaryDiagonalArr).forEach((item) => (sum += item));
console.log("🚀 ~ sum:", sum);
console.log("================================");

//Bài 4
console.log("Bài 4:");
const scores = [
  [8, 9, 7], // học sinh 1
  [6, 5, 7], // học sinh 2
  [10, 9, 8], // học sinh 3
];

const averageScore = scores.map((score) => {
  let sumAverage = 0;
  for (let value of score) {
    sumAverage += value;
  }
  return sumAverage / score.length;
});
console.log("🚀 ~ averageScore:", averageScore);

const filterStudent = averageScore.filter((score) => score >= 8);
console.log("🚀 ~ filterStudent:", filterStudent);

const newScores = scores.map((score) =>
  score.map((item) => (item < 10 ? item + 1 : item))
);

console.log("🚀 ~ newScores:", newScores);





