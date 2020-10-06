module.exports = function reverse (n) {
  let newN = n;
  if(newN<0) {newN *= -1};
  newN = String(newN).split('').reverse().join('');
  newN = Number(newN);
  return newN;
}
