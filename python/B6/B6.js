var str, word;
str = prompt("Enter String : ");

function countCharacterType(str) {
  var characters = 0,
    whitespace = 0,
    specialChar = 0,
    digit = 0; // str.length() function to count number of // character in given string.
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      characters++;
    } else if (ch >= "0" && ch <= "9") digit++;
    else if (ch == " ") whitespace++;
    else specialChar++;
  }
  document.write("Consonant: " + characters + "<br>");
  document.write("White_Space: " + whitespace + "<br>");
  document.write("Digit: " + digit + "<br>");
  document.write("Special Character: " + specialChar + "<br>");
}
function countOccurrences(str, word) {
  // split the string by spaces in a
  let a = str.split(" "); // search for pattern in a
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    // if match found increase count
    if (word == a[i]) count++;
  }
  return count;
}
function printIndex(str, s) {
  var flag = false;
  for (var i = 0; i < str.length - s.length + 1; i++) {
    if (str.substring(i, s.length + i) == s) {
      document.write(i + " ");
      flag = true;
    }
  }
  if (flag === false) {
    document.write("NONE");
  }
}
console.log(countCharacterType(str));
word = prompt("Enter word to be searched in String: ");
document.write("Number of Occurences :" + countOccurrences(str, word));
document.write("<br> Index:");
printIndex(str, word);
