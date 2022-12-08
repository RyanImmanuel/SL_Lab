function submit() {
  cakeQuantity = document.getElementById("cakeQuantity").value;
  cookieQuantity = document.getElementById("cookieQuantity").value;
  cakeSelected = document.getElementById("cake").checked;
  cookieSelected = document.getElementById("cookies").checked;
  if (cakeQuantity < 0 || cookieQuantity < 0) alert("Invalid entry");
  else if (cakeSelected && cakeQuantity && cookieSelected && cookieQuantity)
    alert("Total bill = " + (cakeQuantity * 100 + cookieQuantity * 50));
  else if (cakeSelected && cakeQuantity)
    alert("Bill for cake = " + cakeQuantity * 100);
  else if (cookieSelected && cookieQuantity)
    alert("Bill for cookies = " + cookieQuantity * 50);
  else if (!cakeSelected && !cookieSelected) alert("Select an item");
  else alert("Invalid integer");
}
