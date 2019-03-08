

function testFunc() {
	var inputNum = document.getElementById("inputNumber").value;
	var input = document.getElementById("inputText").value;
	var inputArr = input.split("");
	document.getElementById("outputText").innerHTML = inputArr;
}
