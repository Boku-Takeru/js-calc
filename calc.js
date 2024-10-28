let currentInput = ""; // 現在の入力値
let displayElement = document.querySelector("#display"); // ディスプレイ要素

// ディスプレイの表示を更新する関数
function updateDisplay(value) {
  displayElement.value = value;
}

// 数字ボタンが押されたときの処理
function get_value(btn) {
  currentInput += btn.value; // 入力を追加
  updateDisplay(currentInput); // ディスプレイに表示
}

// 演算子ボタンが押されたときの処理
function handleOperator(operator) {
  if (currentInput !== "" && !currentInput.endsWith(operator)) {
    currentInput += operator; // 演算子を追加
    updateDisplay(currentInput); // ディスプレイに表示
  }
}

// クリアボタンが押されたときの処理
function clearkey() {
  currentInput = ""; // 入力をリセット
  updateDisplay(""); // ディスプレイをクリア
}

// イコールボタンが押されたときの処理
function epualkey() {
  try {
    // evalを使用して計算を実行（安全のため、入力内容をチェックしてから実行することを推奨）
    const result = eval(currentInput.replace("×", "*").replace("÷", "/"));
    currentInput = result.toString(); // 計算結果を保持
    updateDisplay(currentInput); // 結果をディスプレイに表示
  } catch {
    updateDisplay("Error"); // エラー時は「Error」と表示
    currentInput = ""; // 入力をリセット
  }
}
