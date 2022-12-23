export const puzzleSolver = (s1, s2, s3, mathOperation) => {
  let solutions = [];
  let foundCombinatons = new Set();

  if (s3.length == 0 && (s1.length > 0 || s2.length > 0)) return false;
  let allChs = {};
  let s123 = s1 + s2 + s3;
  let chs = "";
  let mapping = {};
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < s123.length; i++) {
    if (!allChs.hasOwnProperty(s123[i])) {
      chs += s123[i];
      allChs[s123[i]] = 1;
    }
  }

  let totChAmount = chs.length;
  if (totChAmount > 10) {
    return false;
  }

  let counter = 0;

  while (counter <= totChAmount) {
    solve(
      0,
      totChAmount,
      chs,
      mapping,
      nums,
      s1,
      s2,
      s3,
      mathOperation,
      solutions,
      foundCombinatons
    );
    chs = chs.slice(1) + chs.charAt(0);
    nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    mapping = {};
    counter++;
  }

  return solutions;
};

const solve = (
  index,
  chTotAmount,
  allChs,
  dic,
  nums,
  s1,
  s2,
  s3,
  mathOperation,
  solutions,
  foundCombinatons
) => {
  if (index >= chTotAmount) {
    return verifySolution(
      s1,
      s2,
      s3,
      dic,
      mathOperation,
      solutions,
      foundCombinatons
    );
  }

  for (let i = 0; i < 10; i++) {
    if (nums[i] == -1) continue;
    dic[allChs[index]] = nums[i];
    nums[i] = -1;

    solve(
      index + 1,
      chTotAmount,
      allChs,
      dic,
      nums,
      s1,
      s2,
      s3,
      mathOperation,
      solutions,
      foundCombinatons
    );

    nums[i] = i;
    delete dic[allChs[index]];
  }
  return false;
};

const verifySolution = (
  s1,
  s2,
  s3,
  mapping,
  mathOperation,
  solutions,
  foundCombinatons
) => {
  if (s1.lenght === 0 || s2.lenght === 0 || s3.lenght === 0) return;

  let num1 = getNumericalValue(s1, mapping);
  let num2 = getNumericalValue(s2, mapping);
  let num3 = getNumericalValue(s3, mapping);
  if (num1 === null || num2 === null || num3 === null) return false;

  let num123 = [num1, num2, num3].join("");
  if (foundCombinatons.has(num123)) return true;

  if (mathOperation === "+" && num1 + num2 === num3) {
    solutions.push([num1, num2, num3]);
    foundCombinatons.add(num123);
    return true;
  }
  if (mathOperation === "-" && num1 - num2 === num3) {
    solutions.push([num1, num2, num3]);
    foundCombinatons.add(num123);

    return true;
  }
  if (mathOperation === "*" && num1 * num2 === num3) {
    solutions.push([num1, num2, num3]);
    foundCombinatons.add(num123);

    return true;
  }
  if (mathOperation === "/" && num1 / num2 === num3) {
    solutions.push([num1, num2, num3]);
    foundCombinatons.add(num123);

    return true;
  }
  return false;
};

const getNumericalValue = (str, mapping) => {
  let num = 0;
  let curTenth = 1;

  for (let i = str.length - 1; i >= 0; i--) {
    let curChar = str.charAt(i);

    if (!mapping.hasOwnProperty(curChar)) {
      return null;
    } else {
      let curCharVal = mapping[curChar];
      num = num + curCharVal * curTenth;
      curTenth *= 10;
    }
  }
  return num;
};
