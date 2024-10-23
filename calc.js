function get_value(btn) {
  let display = document.forms["calc_main"].elements["onclick"];
  switch (btn.value) {
    case "C":
      display.value = "";
      break;
  }
  document.calc_main.display.value += btn.value;
}
