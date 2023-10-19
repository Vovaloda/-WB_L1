function nowMoment(){ //Функция для отображения текущей даты в определённом формате
    return moment().format('YYYY-MM-DD'); //Получение текущей даты и отображение её в определённом формате
}

export default nowMoment; //Экспорт