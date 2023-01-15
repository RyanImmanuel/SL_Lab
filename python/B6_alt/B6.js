function noOfOccurences(str) {
  digits = 0;
  alphabets = 0;
  whitespaces = 0;
  specialcharacters = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      digits++;
    } else if (str[i] == " ") {
      whitespaces++;
    } else if (
      (str[i] >= "a" && str[i] <= "z") ||
      (str[i] >= "A" && str[i] <= "Z")
    ) {
      alphabets++;
    } else {
      specialcharacters++;
    }
  }
  document.getElementById("digits").innerHTML = digits;
  document.getElementById("white").innerHTML = whitespaces;
  document.getElementById("alphabets").innerHTML = alphabets;
  document.getElementById("special").innerHTML = specialcharacters;
}

function noOfWordOccurences(str, word) {
  occurences = 0;
  lis = str.split(" ");
  for (i = 0; i < lis.length; i++) {
    if (word == lis[i]) {
      occurences++;
    }
  }
  document.getElementById("occurences").innerHTML = occurences;
}

function printStrings(str, word) {
  document.getElementById("stringResult").innerHTML = str;
  document.getElementById("substringResult").innerHTML = word;
}

function indexPosition(str, word) {
  pos = str.indexOf(word);
  document.getElementById("pos").innerHTML = pos;
}

function main() {
  string = document.getElementById("string").value;
  substring = document.getElementById("substring").value;
  printStrings(string, substring);
  noOfOccurences(string);
  noOfWordOccurences(string, substring);
  indexPosition(string, substring);
}
