function filter(ogs, ml) {
  lis = [];
  for (i = 0; i < ogs.length; i++) {
    if (ml[i] <= 3) {
      tup = ["<br>", ogs[i], ml[i]];
      lis.push(tup);
    }
  }
  document.getElementById("result").innerHTML = lis;
}

function button() {
  Original_String = ["Hello", "I", "am", "Ryan"];
  string = document.getElementById("string").value;
  Original_String.unshift(string);
  document.getElementById("newString").innerHTML = Original_String;

  myLength = [];
  for (i = 0; i < Original_String.length; i++) {
    myLength[i] = Original_String[i].length;
  }
  document.getElementById("lengths").innerHTML = myLength;
  filter(Original_String, myLength);
}
