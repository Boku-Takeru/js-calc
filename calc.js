function get_value(btn) {
  // 変数を定義。
  // calc-mainのdisplay、inputタグを取得
  let display = document.forms["calc_main"].elements["display"];

  // 数字で無い場合はdisplayに表示させない
  if (!isNaN(btn.value)) {
    display.value += btn.value;
  }

  // C押したらクリアする
  switch (btn.value) {
    case "C":
      display.value = "";
      break;
  }
}
