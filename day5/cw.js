/** @format */

areAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequency = new Object();
  for (let i of str1) {
    frequency[i] = (frequency[i] || 0) + 1;
  }
  for (char of str2) {
    if (!frequency[char]) return false;
    frequency[char]--;
  }
  console.log(frequency);
  return true;
};
let ccn = areAnagrams("ccn", "cnc");
console.log(ccn);
