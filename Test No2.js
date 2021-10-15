// กำหนดค่าที่จะนำไปทดสอบที่ตัวแปร input
const input = "";

console.log(checkBracket(input));

function checkBracket(input) {
  var output;
  var checkFirstType = 0;
  var checkSecondType = 0;
  var checkThirdType = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{") {
      checkFirstType++;
    } else if (input[i] === "}") {
      checkFirstType--;
    } else if (input[i] === "[") {
      checkSecondType++;
    } else if (input[i] === "]") {
      checkSecondType--;
    } else if (input[i] === "(") {
      checkThirdType++;
    } else if (input[i] === ")") {
      checkThirdType--;
    }
  }

  if (checkFirstType === 0 && checkSecondType === 0 && checkThirdType === 0) {
    output = true;
  } else {
    output = false;
  }

  return output;
}
