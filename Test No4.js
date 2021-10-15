// กำหนดค่าที่จะนำไปทดสอบที่ตัวแปร n และ m
var n = "34";
var m = "1,000,000";

console.log(calculateSum(n, m));

function calculateSum(first, last) {
  var result = 0;

  first = parseFloat(first.replace(/,/g, ""));
  last = parseFloat(last.replace(/,/g, ""));

  for (let i = first; i <= last; i++) {
    result += i;
  }

  return result.toLocaleString();
}
