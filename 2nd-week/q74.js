// We are given an array of Integers. We have to perform the following operation on the array until it is fully exhausted: Select the max number in the array and delete that number including all the numbers to its right side in the array. Repeat this step for the left elements of the array i.e select the maximum element in the left elements and delete it including all numbers to its right. Our task is to simulate the above procedure and return the number of steps that will be taken until the first element (index 0) of the array is also deleted and the array is exhausted. (Ex: Array = [2, 3, 5, 4, 1], Output : Steps Taken: 3)

function steps(arr) {
  let count = 0;
  let end = arr.length - 1;

  while (end >= 0) {
    let max = arr[0];
    let index = 0;

    for (let i = 1; i <= end; i++) {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }

    end = index - 1;
    count++;
  }

  return count;
}

console.log(steps([2, 3, 5, 4, 1]));

// function countSteps(arr) {
//   let steps = 0;
//   let end = arr.length - 1;

//   while (end >= 0) {
//     let maxIndex = 0;

//     // Find max in remaining array
//     for (let i = 0; i <= end; i++) {
//       if (arr[i] > arr[maxIndex]) {
//         maxIndex = i;
//       }
//     }

//     // Move to left part
//     end = maxIndex - 1;

//     steps++;
//   }

//   return steps;
// }

// let arr = [2, 3, 5, 4, 1];

// console.log("Steps Taken:", countSteps(arr));