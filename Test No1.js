const data = {
  a: 120,
  b: 90,
  c: 40,
};

var sum = data.a + data.b + data.c;
var saleA = calculatePercent(sum, data.a);
var saleB = calculatePercent(sum, data.b);
var saleC = calculatePercent(sum, data.c);

var sumPercent = saleA + saleB + saleC;

function calculatePercent(total, data) {
  const result = (data * 100) / total;
  return result;
}

console.log("รุ่น a ขายได้", saleA, "%");
console.log("รุ่น b ขายได้", saleB, "%");
console.log("รุ่น c ขายได้", saleC, "%");
console.log("ทั้งหมดรวมเป็น", sumPercent, "%");
