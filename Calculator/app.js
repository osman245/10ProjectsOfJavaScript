function appendValue(value) {
  document.getElementById("display").innerText += value;
}

function clearDisplay() {
  document.getElementById("display").innerText = "";
}

function calculate() {
  try {
    document.getElementById("display").innerText = eval(
      document.getElementById("display").innerText
    );
  } catch (error) {
    document.getElementById("display").innerText = "Error";
  }
}
