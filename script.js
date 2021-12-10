const IntegerNumber = 2021;

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

function HowManyDigits (number) {
	for (var counter=0; number>=1; counter++) {
		number = number/10;
	}
	return counter;
};

function Pot (arg1, arg2) {
	if (arg2 == 0) {
		arg1 = 1;
	} else {
		let originalValue = arg1;
		while (arg2 > 1) {
			arg1 = arg1*originalValue;
			arg2--;
		}
	}
	return arg1;
};

function isValid (number) {
	return (/^\d+$/.test(number) && number < 10000);
}

function ResolveNumber (number) {
	if (isValid(number)) {

		number = number.toString();
		var finalNumber = "";
		while (number != "") {
			var digits = HowManyDigits(number);
			var firstNumber = number[0];

			if (firstNumber < 5) {
				if (firstNumber < 4) {
					for (let i=0; i<firstNumber; i++) {
						finalNumber += letter[1*Pot(10, digits-1)];
					}
				} else {
					finalNumber += letter[1*Pot(10, digits-1)];
					finalNumber += letter[5*Pot(10, digits-1)];
				}
			} else {
				if (firstNumber < 9) {
					finalNumber += letter[5*Pot(10, digits-1)];
					if (firstNumber > 5) {
						for (let i=0; i<firstNumber-5; i++) {
							finalNumber += letter[1*Pot(10, digits-1)];
						}
					}
				} else {
					finalNumber += letter[1*Pot(10, digits-1)];
					finalNumber += letter[1*Pot(10, digits)];
				}
			}

			number = number.substring(1);
		}
		return finalNumber;

	} else {
		return "Invalid Operation";
	}
};

console.log(ResolveNumber(IntegerNumber));