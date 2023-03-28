
var romanToInt = function(s) {
    
    let result = 0;
  const romanChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const romanValues = [1, 5, 10, 50, 100, 500, 1000];

  for (let i = 0; i < s.length; i++) {
    const current = romanValues[romanChars.indexOf(s[i])];
    const next = romanValues[romanChars.indexOf(s[i + 1])];
    if (next && next > current) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
}
 console.log(romanToInt("X"))