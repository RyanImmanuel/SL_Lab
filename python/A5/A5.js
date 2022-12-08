function changeString() {
  str = document.getElementById("string").value;
  s = str.split("");
  for (i = 0; i < s.length; i++) {
    switch (s[i]) {
      case " ":
        break;
      case "z":
        s[i] = "A";
        break;
      case "Z":
        s[i] = "A";
        break;
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt());
        switch (s[i]) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            s[i] = s[i].toUpperCase();
        }
    }
  }
  s = s.join(" ");
  document.getElementById("result").innerText = s;
}
