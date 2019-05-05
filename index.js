window.onload= function(){//программа должна начать работать после загрузки страницы
    let num1=document.getElementById('num1')//сохраняем поле 1 в переменную
    let num2=document.getElementById('num2')//сохраняем поле 2 в переменную
    let submit=document.querySelector('input[value=Сложить]')//сохраняем в переменную кнопку
    let resfield=document.getElementById('result');//сохраняем в переменную поле с результатом
        function addstuff(num1,num2, field){//создаем функцию для сложения чисел
           let a=Number(num1.value.replace(',','.').replace(' ',''))//преобразуем строку в число,заменяем запятые на точки если пользователь ввел число таким образом
           let b=Number(num2.value.replace(',','.').replace(' ',''))
           let flag=false//переменная-переключатель,для читабельности
           let res//для читабельности
           flag = (Number.isNaN(a)||Number.isNaN(b))//проверяем произошло ли преобразование в число
           if(flag){//если преобразование не прошло
               alert('Введите числовые значения')
               field.innerHTML="сложение не удалось"//выводим сообщение об ошибке и в поле результата пишем что сложение не удалось
           }
           else{//есл преобразование прошло успешно
              res=a+b
              field.innerHTML=res//записываем результат в поле
           }
           return
        }
    submit.addEventListener('click', function(){//подвешиваем событие на элемент
        addstuff(num1,num2,resfield)//вызываем функцию с параметрами таким образом
    })
}