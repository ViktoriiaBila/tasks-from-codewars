function removeEveryOther(arr){
  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) if (i % 2 == 0) newArr.push(arr[i]);
  return newArr;
}