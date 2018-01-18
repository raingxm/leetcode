function fullRange(numbers) {
  let result = [];
  if (numbers.length < 1) {
    return result;
  }

  if (numbers.length === 1) {
    result.push([numbers[0]]);
    return result;
  }

  for (let i = 0; i < numbers.length; i++) {
    let currentEle = numbers[i],
      others = numbers.slice(0, i).concat(numbers.slice(i + 1));

    result = result.concat(merge(currentEle, others));
  }

  return result;
}

function merge(one, others) {
  let othersResult = fullRange(others);
  return othersResult.map((eachOrder) => {
    return [one].concat(eachOrder);
  });
}

module.exports = fullRange;


