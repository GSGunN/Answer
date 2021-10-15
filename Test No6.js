// กำหนดค่าที่จะนำไปทดสอบที่ตัวแปร data
var data = [];
var maxData = 0; // เก็บค่าที่มากที่สุด
var sum = 0; // เก็บผลรวม
var max = 0; // เก็บค่าที่นำมาแสดง
var fIndex = 1; // ตำแหน่งแรก
var lIndex = 0; // ตำแหน่งสุดท้าย

for (let i = 0; i < data.length; i++) {
  if (sum === 0 && data[i] <= 0) {
    continue;
  } else if (data[i] > maxData) {
    maxData = data[i];
    sum += data[i];
    max = maxData;
    lIndex = i + 1;
  } else if (sum === 0 && data[i] > 0) {
    sum += data[i];
    fIndex = i + 1;
  } else {
    sum += data[i];
  }

  if (sum > max) {
    max = sum;
    lIndex = i + 1;
  }

  if (max === maxData) {
    fIndex = lIndex;
  }
}

console.log("result = {from:", fIndex, ", to: ", lIndex, ", gold: ", max, "}");
