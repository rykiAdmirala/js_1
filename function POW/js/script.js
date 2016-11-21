function pow(number, power) {
	var powResult = 1;

	for (var i = 0; i < Math.abs(power); i++) {
		powResult *= number;
	};

	if (power < 0) {
		powResult = 1 / powResult;
	};

	return console.log(powResult);

}

var inputNumber = prompt('Введите число');
var inputPower = prompt('Введите степень, в которую необходимо возвести число');

pow(inputNumber, inputPower);
