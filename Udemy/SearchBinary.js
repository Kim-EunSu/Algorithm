//1. 배열과 값을 인자로 받아야함
function binarySearch(arr, elem) {
  // 2.시작점 중간점 종료점 설정
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  //   중간점이 우리가 찾는 값이 아닌 경우
  while (arr[middle] !== elem) {
    console.log(start, middle, end);
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
