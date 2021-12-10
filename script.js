//define the integer number here
const IntegerNumber = 10000;

//letters for each number
const letter = {
	1:'I',
	5:'V',
	10:'X',
	50:'L',
	100:'C',
	500:'D',
	1000:'M',
	5000:'V̅',
	10000:'X̅'
};

//calculates how many digits the number has
function HowManyDigits (number) {
	for (var counter=0; number>=1; counter++) {
		number = number/10;
	}
	return counter;
};

//returns the potency of base 10 according the exponent
function Pot10 (exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		let total = 10;
		while (exponent > 1) {
			total = total*10;
			exponent--;
		}
		return total;
	}
};

//checks if the inserted number is valid (not having decimals or letters)
function isValid (number) {
	return (/^\d+$/.test(number) && number <= 10000);
};

/*----------
transforms the inserted integer number in a roman numeral
1st - converts the valid number onto string and takes the first algarism
2nd - analyzes that number and assign the correspondent letter according how many digits the number has
3rd - repeats the process until the end, excluding the algarisms already readed
----------*/
function ResolveNumber (number) {

	if (isValid(number)) {

		number = number.toString();
		var result = "";
		while (number != "") {
			var unity = Pot10(HowManyDigits(number)-1);
			var firstNumber = number[0];

			if (firstNumber < 5) {
				if (firstNumber < 4) { 
					//0,1,2,3
					for (let i=0; i<firstNumber; i++) {
						result += letter[unity];
					}
				} else { 
					//4
					result += letter[unity];
					result += letter[5 * unity];
				}
			} else {
				if (firstNumber < 9) { 
					//5,6,7,8
					result += letter[5 * unity];
					if (firstNumber > 5) {
						for (let i=0; i<firstNumber-5; i++) {
							result += letter[unity];
						}
					}
				} else { 
					//9
					result += letter[unity];
					result += letter[unity + 1];
				}
			}

			number = number.substring(1);
		}
		return result;

	} else {
		return "Invalid Operation";
	}

};

//show the result on the console
console.log(ResolveNumber(IntegerNumber));