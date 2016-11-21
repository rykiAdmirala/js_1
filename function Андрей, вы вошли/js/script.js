var arrNames = [];

for (var i = 0; i <= 4; i++) {
	arrNames.push(prompt('Введите любое имя'));
}

var userName = prompt('Пожалуйста, введите Ваше имя', 'Вы же не Андрей?');

for (var i = 0; i < arrNames.length; i++) {
	if (userName == arrNames[i]) {
		alert(userName + ', Вы вошли успешно');
	} else {
		alert('Что-то не так!');
	};
}