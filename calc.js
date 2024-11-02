let currentInput = "";
let displayElement = document.querySelector("#display");

// ディスプレイの表示を更新する関数
function updateDisplay(value) {
  displayElement.value = value;
}

// 数字ボタンが押されたときの処理
function get_value(btn) {
  currentInput += btn.value;
  updateDisplay(currentInput);
}

// 演算子ボタンが押されたときの処理
// 同じ演算子の入力を防ぐ
function handleOperator(operator) {
  if (currentInput !== "" && !currentInput.endsWith(operator)) {
    currentInput += operator;
    updateDisplay(currentInput);
  }
}

// クリアボタンが押されたときの処理
function clearkey() {
  currentInput = "";
  updateDisplay("");
}

// イコールボタンが押されたときの処理
function epualkey() {
  try {
    const result = eval(currentInput.replace("×", "*").replace("÷", "/"));
    currentInput = result.toString();
    updateDisplay(currentInput);
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}
