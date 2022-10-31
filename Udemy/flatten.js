//풀이

function flatten(arr) {
  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

flatten([1, 2, 3, [4, 5]]);

// i=0  newArr=[1]
// i=1  newArr=[1,2]
// i=2  newArr=[1,2,3]

// i=3. newArr=[1,2,3,[4,5]]  arr.length는 3
// rethrn newArr=[1,2,3,4,5]
