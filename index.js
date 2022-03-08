function getDayInfo(date) {
    let array = toArrDate(date)
    //Проверка корректности введенной пользователем даты
	if (array == 0) {
        return 'Введенная дата некорректна'
    } else {
        let day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        let month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        let myDate = new Date()
        let firstDate = new Date()
		//передаем значения введенной пользователем даты
        myDate.setDate(array[0])
        myDate.setMonth(array[1] - 1)
        myDate.setYear(array[2])
		//установим точкой отсчета для недели первое число введенного месяца
        firstDate.setDate(1)
        firstDate.setMonth(array[1] - 1)
        firstDate.setYear(array[2])
        let week
        //используем для воскресения другую формулу, так как воскресение == 0
		if (firstDate.getDay(1) == 0) {
            week = Math.ceil((myDate.getDate() - 1) / 7) + 1
        } else {    
            week = Math.ceil((myDate.getDate() - (8 - firstDate.getDay(1))) / 7) + 1
        }
        return day[myDate.getDay()] + ', ' + week + ' неделя ' + month[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' года'
    }
}

function toArrDate (inputDate) {
    let array = inputDate.split('.').map(Number) //парсим введенную дату в массив чисел
    let long = [1, 3, 5, 7, 8, 10, 12] //месяцы по 31 дню
    let short = [4, 6, 9, 11] //месяцы по 30 дней
    //Проверка корректности и действительности даты
	if (Number.isInteger(array[0]) && Number.isInteger(array[1]) && Number.isInteger(array[2]) && array[0] > 0 && array[1] > 0 && array[2] > 0 && array[1] < 13 &&     
        ((array[0] < 32 && long.indexOf(array[1]) >= 0) ||
        ((array[0]) < 31 && short.indexOf(array[1]) >= 0) || 
        (array[0] < 30 && array[1] == 2 && array[2] % 4 == 0) || 
        (array[0] < 29 && array[1] == 2 && array[2] % 4 !== 0))) {
        return array
    } else {
        return 0
    }
}