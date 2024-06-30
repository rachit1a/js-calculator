function add() {
    const x = parseFloat(document.getElementById("input1").value);
    const y = parseFloat(document.getElementById("input2").value);
    const result = x + y;
    document.getElementById("output").value = result;
}

function subtract() {
    const x = parseFloat(document.getElementById("input1").value);
    const y = parseFloat(document.getElementById("input2").value);
    const result = x - y;
    document.getElementById("output").value = result;
}

function multiply() {
    const x = parseFloat(document.getElementById("input1").value);
    const y = parseFloat(document.getElementById("input2").value);
    const result = x * y;
    document.getElementById("output").value = result;
}

function divide() {
    const x = parseFloat(document.getElementById("input1").value);
    const y = parseFloat(document.getElementById("input2").value);
    const result = x / y;
    document.getElementById("output").value = result;
}

function clr() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").value = "";
}
