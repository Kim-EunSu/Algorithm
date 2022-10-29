//풀이

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]);

//설명
productOfArray([1, 2, 3]);
return arr[0] * productOfArray(arr.slice(1));
return arr[1] * [2, 3];

productOfArray([2, 3]);
return arr[0] * productOfArray(arr.slice(1));
return arr[2] * [3];

// then productOfArray[(3)] === 0 //base case stops
// return [2] * [3] = 6
