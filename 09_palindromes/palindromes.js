const palindromes = function (str) {
  // //lets make a string wthout punctuations,fullstop in lowercase
  // new_str = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i].toLowerCase() <= "z" && str[i].toLowerCase() >= "a")
  //     new_str +=(str[i].toLowerCase());
  // }
  // reversed_new_str = new_str.split("").reverse().join("")
  // if (reversed_new_str === new_str) return true;
  // else return false;
  const processed_str = str.toLowerCase().replace(/[^a-z]/g, "");
  return processed_str.split("").reverse().join("") == processed_str;
};
palindromes('Animal loots foliated detail of stool lamina.')
// Do not edit below this line
module.exports = palindromes;
