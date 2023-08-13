let x = 1;
function func() {
  console.log(x); // * RefError เพราะประกาศตัวแปร x ทีหลัง
  let x = 2;
}
func();