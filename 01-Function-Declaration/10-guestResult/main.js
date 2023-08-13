function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // ไม่เกิดอะไรขึ้น เพราะไม่ได้เรียกใช้ฟังก์ชัน
console.log(sayHi(10)); // alert "Hi kid" เพราะเรียกใช้ฟังก์ชันตรงตามเงื่อนไข