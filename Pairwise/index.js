function pairwise(arr, arg) {

  const usedDict = arr.reduce(
    (acc, _, i) => ({
      ...acc,
      [i]: false,
    }),
    {}
  );
  
  let output = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (usedDict[i]) {
      continue;
    }
    const iVal = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (usedDict[j]) {
        continue;
      }
      const jVal = arr[j];
      if (iVal + jVal === arg) {
        usedDict[iVal] = true;
        usedDict[jVal] = true;
        output += i + j;
        break;
      }
    }
  }

  return usedDict;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
