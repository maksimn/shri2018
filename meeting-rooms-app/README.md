# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Задание
Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:
1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```

---

## Исправление ошибок

1) Первая ошибка - ошибка при запуске приложения. По стеку вызовов было найдено место, в котором возникает исключение, приведшее к краху приложения. Причиной оказалась неправильная инициализация параметров конструктора при использовании библиотеки sequelize. Вызов конструктора был переписан с помощью одного из примеров, приведенных в документации к sequelize, после чего приложение запустилось без ошибок.

2) `app.use('/graphgl', graphqlRoutes);` --> `app.use('/graphql', graphqlRoutes);` -- исправлена опечатка в маршруте.

3) Исправлены queries и mutations.

4) Для единого code style в проект добавлен `eslint` и заданы его правила.

5) Изменена структура папок проекта -- весь код вынесен в папку `./src`.

---

# ШРИ-2018 задание 3 по JavaScript

Надо объединить бэкенд из 1 задания и верстку из 2 задания и сделать единое прекрасное приложение Переговорок.

Доп. пункт - реализовать алгоритм getRecommendation, который будет подбирать переговорки для вашей встречи.

Мы будем оценивать реализацию функциональности, а также

* оформление кода
* архитектуру приложения
* организованную вами инфраструктуру для разработки
* наличие и качество тестов
* перформанс
