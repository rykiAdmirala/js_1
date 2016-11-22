function checkName() {

	var arrNames = [];

	for (var i = 0; i <= 4; i++) {
		arrNames.push(prompt('Введите любое имя'));
	}

	var userName = prompt('Пожалуйста, введите Ваше имя', 'Вы же не Андрей?');

	for (var i = 0; i < arrNames.length; i++) {
		if (userName == arrNames[i]) {
			return alert(userName + ', Вы вошли успешно');
		}
	}
	
	return alert('Что-то не так!');
}

checkName();