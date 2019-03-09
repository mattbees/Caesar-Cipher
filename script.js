
function testFunc() {
	var inputNum = document.getElementById("inputNumber").value;
	var input = document.getElementById("inputText").value;
	inputArr = input.split("");
	document.getElementById("outputText").innerHTML = inputArr;
	newFunc();
}

function newFunc() {
	for (i=0; i<inputArr.length; i++) {
		switch(inputArr[i]) {
			case "a":
				inputArr[i] = 1;
				break;
			case "b":
				inputArr[i] = 2;
				break;
			case "c":
				inputArr[i] = 3;
				break;
			case "d":
				inputArr[i] = 4;
				break;
			case "e":
				inputArr[i] = 5;
				break;
			case "f":
				inputArr[i] = 6;
				break;
			case "g":
				inputArr[i] = 7;
				break;
			case "h":
				inputArr[i] = 8;
				break;
			case "i":
				inputArr[i] = 9;
				break;
			case "j":
				inputArr[i] = 10;
				break;
			case "k":
				inputArr[i] = 11;
				break;
			case "l":
				inputArr[i] = 12;
				break;
			case "m":
				inputArr[i] = 13;
				break;
			case "n":
				inputArr[i] = 14;
				break;
			case "o":
				inputArr[i] = 15;
				break;
			case "p":
				inputArr[i] = 16;
				break;
			case "q":
				inputArr[i] = 17;
				break;
			case "r":
				inputArr[i] = 18;
				break;
			case "s":
				inputArr[i] = 19;
				break;
			case "t":
				inputArr[i] = 20;
				break;
			case "u":
				inputArr[i] = 21;
				break;
			case "v":
				inputArr[i] = 22;
				break;
			case "w":
				inputArr[i] = 23;
				break;
			case "x":
				inputArr[i] = 24;
				break;
			case "y":
				inputArr[i] = 25;
				break;
			case "z":
				inputArr[i] = 26;
				break;
		}
	}
	document.getElementById("outputText").innerHTML += inputArr;
}

var alphabet = {
	1 : "a",
	2 : "b",
	3 : "c",
	4 : "d",
	5 : "e",
	6 : "f",
	7 : "g",
	8 : "h",
	9 : "i",
	10 : "j",
	11 : "k",
	12 : "l",
	13 : "m",
	14 : "n",
	15 : "o",
	16 : "p",
	17 : "q",
	18 : "r",
	19 : "s",
	20 : "t",
	21 : "u",
	22 : "v",
	23 : "w",
	24 : "x",
	25 : "y",
	26 : "z"
}
