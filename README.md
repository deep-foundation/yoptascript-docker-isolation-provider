# yoptascript-docker-isolation-provider

## Как вкатиться нах
```js
ассо (жЫ data, deep, require есть) внатурепизже жЫ
    // твоя поебень
есть
```


## Инфа о путях
- `/healthz` - Здоровье чекаем, ебать! Метод GET, и если всё заебок, то 200. В ответ - нихуя
- `/init` - Это типа начало всего, нах. Опять GET, снова 200, и опять нихуя в ответе.
- `/call` - Вот тут уже начинается ахтунг, братва! Ебанный GET, и если в теле запроса не сдохло, то 200. А в запросе там херачится тело:
  - params:
    - jwt: STRING - Строка, ёпт, диплинки этот токен посылают, чтоб создать gql и deep client.
    - code: STRING - Ахуеть, опять строка, код хэндлера.
    - data: {} - Объект, нахуй, данные для хэндлера из диплинков
      > Если эта хуета - тип хэндера
    - oldLink - из deeplinks, сылка до транзакции
    - newLink - из deeplinks, сылка перед транзакцией 
    - promiseId - from deeplinks, promise id
  - В ответе может быть { resolved?: any; rejected?: any; }, и если они не нулевые, то это результат исполнения, нах.


## Че за хуйня в параметрах функции

- `deep` - Экземпляр Deep Client, брат.
- `data` - Данные для выполнения хэндлера из deeplinks, тоже нихера не сложно, брат.
- `require` - Позволяет ебашить модули в твой говнокод.


## Смари чё можно захуячить
```js
ассо (жЫ data, deep, require есть) внатурепизже жЫ
    отвечаю data нахуй
есть
```

```js
ассо (жЫ data, deep, require есть) внатурепизже жЫ
    отвечаю сидетьНахуй deep.select(1) нахуй
есть
```

```js
ассо (жЫ data, deep, require есть) внатурепизже жЫ
    отвечаю сидетьНахуй deep.insert(жЫ
        "type_id": 58,
        "from_id": 0,
        "to_id": 0
    есть) нахуй
есть
```
