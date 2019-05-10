window.onload = () =>{//программа должна начать работать после загрузки страницы
    //сохраняем поле 1 в переменную
    const num1 = document.getElementById('num1');

    //сохраняем поле 2 в переменную
    const num2 = document.getElementById('num2');

    // сохраняем в переменную кнопку
    let submit = document.querySelector('input[value=Сложить]');

    // сохраняем в переменную поле с результатом
    let resfield = document.getElementById('result');

    // создаем функцию для сложения чисел
        function addStuff(num1,num2, field) {
            // преобразуем строку в число,заменяем запятые на точки если пользователь ввел число таким образом
           let a = Number(num1.value.replace(',','.').replace(' ',''));

           let b = Number(num2.value.replace(',','.').replace(' ',''));

           // переменная-переключатель,для читабельности
           let checkIfisNaN=(Number.isNaN(a)||Number.isNaN(b));
           
           // для сохранения результата
           let res;
           
           // если преобразование не прошло
           if(checkIfisNaN)  { 
               alert('Введите числовые значения');

               //выводим сообщение об ошибке и в поле результата пишем что сложение не удалось
               field.innerHTML = "сложение не удалось";
           } else { 
              res = a + b;
              
              // записываем результат в поле
              field.innerHTML = res;
           }

           return
        };

    // подвешиваем событие на элемент
    submit.addEventListener('click', () => {
        // вызываем функцию с параметрами таким образом
        addStuff(num1,num2,resfield);
    });
};
