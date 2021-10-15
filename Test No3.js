//3. จงหาคำตอบของคำสั่งด้านล่าง พร้อมทั้งอธิบาย
//a.	ผลลัพธ์ของคำสั่งนี้คืออะไร พร้อมทั้งอธิบาย
let a = 1;
let b = 2;
let c = "";
console.log(`a = ${a}, b = ${b}, c = ${c}`);
a += 0;
b = a + c;
if (b === a) {
  console.log("a equal b");
} else {
  console.log("something went wrong");
}
//ตอบข้อ a: แสดงข้อความ “something went wrong” เนื่องจาก c ไม่ได้มีค่าเป็นตัวเลขทำให้ a ไม่มีทางเท่ากับ b ได้

//b.	ผลลัพธ์ของคำสั่ง 2 ชุดด้านล่างนี้ เหมือนหรือต่างกัน พร้อมทั้งอธิบาย
console.log(square(5));

var square = function (n) {
  return n * n;
};

console.log(square(5));

function square(n) {
  return n * n;
}
//ตอบข้อ b: ผลลัพธ์ที่ได้นั้นไม่เหมือนกัน แต่ว่าหากมีการปรับปรุงตำแหน่งของโค้ด จะทำให้สามารถแสดงผลลัพธ์ได้เหมือนกัน เนื่องจากคำสั่งแรกมีการใช้ var
//          ซึ่งเป็นการประกาศตัวแปรทำให้การ console.log นั้นไม่สามารถแสดงค่าได้ เนื่องจากโปรแกรมไม่รู้จัก square มาก่อน
//          ต่างจากคำสั่งที่สองที่เขียนแบบเป็นฟังก์ชั่นทำให้สามารถเรียกใช้ได้ตลอด