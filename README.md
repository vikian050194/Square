# submit

[![MIT license][license-badge]][license-url]
[![Maintenance Status][status-badge]][status-url]

## Описание

Сетевая итерационная стратегия, а также поле для экспериментов и возможность получить практический опыт в новых для себя вещах.

## Основные особенности с точки зрения пользователя
- Возможность игры по сети
- Поддержка геймпада
- Возможность игры с ботами
- Чат
- Множество комнат
- Настройка режима игры

## Основные особенности с технической точки зрения
- TDD
- WebSocket
- Gamepad API

## Build and run
TODO: дописать

## Языки, технологии и библиотеки
- Сервер: Node.js, Express
- Клиент: React, Redux, Saga
- Взаимодействие клиента и сервера: пуллинг (позднее WebSocket)
- Контроллеры: клавиатура и геймпад (возможно, добавится мышь)

## Игровая механика
1. У игрока N ходов на итерацию. Здоровье имеет максимальное значение N. Есть броня? Тоже N? Все N ходов необходимо определить. Во время сражения победитель определяется случайным образом. У проигравшего списывается одна единица здоровья.
2. То же самое. Можно определить от 0 до N ходов. Чем меньше ходов определено, тем больше урон можно нанести в сражении. Он рассчитывается обратно пропорционально Количеству определённых ходов. Альтернативный вариант заключается в том, чтобы вероятность выбора победителя была не 1:1, а K:M, где K и M это количество пустых ходов первого и второго игроков соответственно.

## Планы добавления функционала и развития
### v0.1
- Упрощённая авторизация (можно сделать *join* и *leave* просто по нажатию кнопки, имя и id выдаются автоматически)
- Режим зрителя
- Одна комната
- Есть юниты и стены
- Можно сделать несколько ходов (5) за итерацию
- У юнита есть здоровье (3hp)
### v0.2
- Есть бомбы
### v0.3
- Есть блоки
### v1.0
- Полноценная авторизация 
### v1.1
- Несколько комнат
### vX.Y
- У юнита есть броня
- Поддержка ботов
- Поддержка клавиатуры
- Поддержка геймпада
- Можно изменить цвет юнита
- Создание своей комнаты
- Настройка режима игры
- Чат в комнате
- Статистика игр
- Настройка клавиш управления

## Техническое устройсво
Игрок подключается к игре в режиме зрителя.
Зритель может стать игроком, если есть свободные места.
У игры есть максимальное количество игроков.
Если игра началась, то зритель не может стать игроком.
Имя и цвет игрока определяет сервер.
Игрок имеет hp.

TODO: дописать

состояние?
Начальное состояние NOT_READY
Игра начнётся, когда все игроки перейдут в состояние READY_TO_START.
Игроки переходят в состояние PLANNING.
В этом состоянии они должны определить, что будут делать их юнит.
После того, как выбор сделан, игрок переходит в состояние READY_TO_GO.
Когда все сделали свой выбор, то все игроки одновременно переходят в состояние ACTION и совершаю дискредные действия - шаги.
Очки подсчитываются после каждого шага.
На этом цикл завершается и все игроки с не нулевым счётом переходят в состояние PLANNING.
Остальные же переходят в GAME_OVER.

1. NOT_READY
2. READY_TO_START
3. PLANNING
4. READY_TO_GO
5. ACTION
6. GAME_OVER

У самой игры тоже есть состояние
1.  INIT
2.  PLAY
3.  END

Блоки можно уничтожить.
Стены - нет.
Бомбы вызрываются и уничтожают блоки или юнитов.
Юнитам наносится урон.

[status-url]: https://github.com/vikian050194/submit/pulse
[status-badge]: https://img.shields.io/github/last-commit/vikian050194/submit.svg

[license-url]: https://github.com/vikian050194/submit/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/vikian050194/submit.svg