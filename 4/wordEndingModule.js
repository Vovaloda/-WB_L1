const wordEndingChanger = (function(){ //Обёртка для функции format 

    return {
        format: function (num, endingsArray){

            num = Math.abs(num); //модуль числа, чтобы оно всегда было положительным
            num = num % 100; //Перезаписываю число, равное остатку от деления на 100
            
            if (num >= 11 && num <= 19) { //Если входит в данный диапозон, то форма слова третья
                return endingsArray[2];
            }

            num = num % 10; //Перезаписываю число, равное остатку от деления на 100

            if (num === 1) {  //Если теперь число равно 1, то форма слова первая
                return endingsArray[0];
            }
            else if (num >= 2 && num <= 4) { //Если входит в данный диапозон, то форма слова вторая
                return endingsArray[1];
            }

            //В остальных случаях третья форма слова
            return endingsArray[2];
        }
    }
})();

export default wordEndingChanger; //Экспорт