function findMax(a, b, c, d) {
  const array = [+a, +b, +c, +d];
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) { max = array[i]; }
  };
  console.log(max);
}
findMax();
findMax(3, "d", "1");
findMax("d", "1", 9);
findMax(5);
findMax(5, 9);
findMax(5, 2, 16);
findMax(2, 5, 8, 9);

