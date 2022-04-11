# Модуль отображения заявок на перевозку // transportation request display module

Деплой проекта доступен по адресу: https://hannahstarling.github.io/transportation-req-module-intelogis-test/

## Для запуска проекта: // Available Scripts

1. Скачать проект (клонировать репозиторий).
2. Находясь в корне проекта: // In the project directory, you can run:

### `npm start`

Поочередно запустить в терминале команды:

```bash
npm i
npm start
```

Проект будет запущен по адресу (локально) // Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Приложение выводит таблицу с заявками и карту:

При выборе в таблице строки с заявкой выбранная строка должна подсвечивается, а на карте отображаются точки погрузки и разгрузки заявки в виде маркеров и полилиния трека движения между этими точками
Точки погрузки/разгрузки заявок в таблице редактируются (в виде селекта из справочника точек).
Граница между таблицей и картой изменяется с помощью мышки (resizer).
Таблица при недостатке места для отображения таблицы с учетом минимальной ширины столбцов имеет возможность горизонтальной прокрутки.

## Стек технологий

- React.js
- AntDesign
- JavaScript (ES6)
- Redux
- Leaflet
- Заготовка под работу с redux-saga (для работы с асинхронными событиямиы)

#### Планы по доработке проекта:

- Работа с redux-saga (асинхронные зарпосы) в случае получения справочника адресов с API
- Связать полилинию с произвольным сервисом построения треков по дорогам

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
