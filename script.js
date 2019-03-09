var alphabet = {
	0 : " ",
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
	26 : "z",
	27 : "A",
	28 : "B",
	29 : "C",
	30 : "D",
	31 : "E",
	32 : "F",
	33 : "G",
	34 : "H",
	35 : "I",
	36 : "J",
	37 : "K",
	38 : "L",
	39 : "M",
	40 : "N",
	41 : "O",
	42 : "P",
	43 : "Q",
	44 : "R",
	45 : "S",
	46 : "T",
	47 : "U",
	48 : "V",
	49 : "W",
	50 : "X",
	51 : "Y",
	52 : "Z"
}




function getText() {
	var input = document.getElementById("inputText").value;
	inputArr = input.split("");
	switchNum();
}

function switchNum() {
	for (i=0; i<inputArr.length; i++) {
		switch(inputArr[i]) {
			case " " :
				inputArr[i] = 0;
				break;
			case "a" :
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
			case "A" :
				inputArr[i] = 27;
				break;
			case "B":
				inputArr[i] = 28;
				break;
			case "C":
				inputArr[i] = 29;
				break;
			case "D":
				inputArr[i] = 30;
				break;
			case "E":
				inputArr[i] = 31;
				break;
			case "F":
				inputArr[i] = 32;
				break;
			case "G":
				inputArr[i] = 33;
				break;
			case "H":
				inputArr[i] = 34;
				break;
			case "I":
				inputArr[i] = 35;
				break;
			case "J":
				inputArr[i] = 36;
				break;
			case "K":
				inputArr[i] = 37;
				break;
			case "L":
				inputArr[i] = 38;
				break;
			case "M":
				inputArr[i] = 39;
				break;
			case "N":
				inputArr[i] = 40;
				break;
			case "O":
				inputArr[i] = 41;
				break;
			case "P":
				inputArr[i] = 42;
				break;
			case "Q":
				inputArr[i] = 43;
				break;
			case "R":
				inputArr[i] = 44;
				break;
			case "S":
				inputArr[i] = 45;
				break;
			case "T":
				inputArr[i] = 46;
				break;
			case "U":
				inputArr[i] = 47;
				break;
			case "V":
				inputArr[i] = 48;
				break;
			case "W":
				inputArr[i] = 49;
				break;
			case "X":
				inputArr[i] = 50;
				break;
			case "Y":
				inputArr[i] = 51;
				break;
			case "Z":
				inputArr[i] = 52;
				break;
		}
	}
	encrypt();
}

function encrypt() {
	inputNum = parseInt(document.getElementById("inputNumber").value);
	var output = [];
	var x;
	for (i=0; i<inputArr.length; i++) {
		if (inputArr[i]>26) {
			x = inputArr[i]+inputNum;
			if (x>52) {
				x = x-26;
			}
		} else if (inputArr[i]<1) {
			x=0;
		} else {
			x = inputArr[i]+inputNum;
			if (x>26) {
				x = x-26;
			}
		}
		output[i] = alphabet[x];
	}
	writeOut(output);
}

function writeOut(arg) {
	var outArr = [];
	document.getElementById("outputText").innerHTML = "";	
	for (i=0; i<arg.length; i++) {
		outArr += arg[i];
	}
	outString = (outArr.toString()).replace(/,/g,"");
	document.getElementById("outputText").innerHTML = outString;
	document.getElementById("log").innerHTML 
		+= "<tr><td>" + outString + "</td><td>" + inputNum + "</td></tr>";
}
