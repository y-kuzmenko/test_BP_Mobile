# test_BP_Mobile

Front-end Developer
Тестовое задание

Добрый день!

Рады сообщить Вам, что Вы были выбраны в качестве кандидата на должность Front-end Developer в нашей компании. Чтобы перейти к следующему этапу отбора, предлагаем выполнить тестовое задание. Вы можете ознакомиться с ним ниже в данном документе. Просим разместить выполненное задание на каком-либо бесплатном хостинге и загрузить его на github/gitlab, после чего выслать ссылку Alesia Levdanskaya.
Желаем успехов! 

P.S. Результаты тестового задания не будут использованы в рабочих целях, а послужат лишь инструментом оценки ваших профессиональных навыков. 


Задача

Необходимо сверстать полноэкранную веб-страницу (баннер) для мобильных устройств iPhone SE, 8+, 11 pro, 14, 14 plus, 14 pro max. Требования:
все в портретной ориентации 
на 6 языках (языковые строки в архиве). 

Для iPhone SE, 8+ использовать макет 🎨 Arta_8iphone_1. Пропорционально увеличить, для 8+.

Для iPhone 11 pro, 14, 14 plus, 14 pro max использовать макет 🎨 Arta_13iphone_1. Пропорционально уменьшить для iPhone 11 pro и увеличить для 14 plus, 14 pro max.
Язык должен выбираться исходя из языка системы, а также должно осуществляться переключение путем передачи параметра 'lang' в строке запроса (?lang=en). Значение параметра 'lang' - строка, двухсимвольный код языка. Если системный язык не входит в 6 указанных языков, должна отображаться страница на английском. Обработка параметра lang должна осуществляться на стороне клиента (в JavaScript). 
Языковые строки могут занимать больше пространства, чем в исходном английском варианте (в макете). Перенос строки разрешается только в заголовке и ячейках с описанием свойств продукта. Часть языков будет нуждаться в уменьшении шрифта для размещения в соответствующих контейнерах. Файлы с языковыми строками не следует править вручную - подключать “как есть”, либо обрабатывать в сборщике.
Изображения страницы должны быть оптимизированы под мобильные retina экраны и иметь оптимальный размер. При отрисовке баннера на экране не должно быть полос прокрутки.
Технологии: HTML5, CSS3, нативный JavaScript. Сборщик Webpack (Gulp, Vite).
Информация по макету: 
В макете используются шрифты группы SF Pro (системные шрифты iOS). Крестик, Restore, Terms of Use, Privacy Policy являются ссылками, укажите атрибут href='#' При нажатии на кнопку "Continue" происходит переход по ссылке. Каждой ячейке в панели выбора соответствуют ссылки, сверху вниз: 
● https://apple.com/ 
● https://google.com/ 

Ссылка на макет. 
Языковые строки.
