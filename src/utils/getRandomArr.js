const isSamePrevNum = (arr, target) => {
  const temp = arr.slice();
  const prevNum = temp.pop();

  if (prevNum === target) return true;
  else return false;
};

// 0~limit까지 randomw 숫자 count개 추출
const getRandomArr = (count, limit) => {
  let arr = [];

  for (let i = 0; i < count; i += 1) {
    const n = Math.floor(Math.random() * limit);

    if (i !== 0 && isSamePrevNum(arr, n)) {
      i -= 1;
    } else {
      arr.push(n);
    }
  }

  return arr;
};

export default getRandomArr;
