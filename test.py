import requests

options = {
    "params": {
        "code": '''
fn(params) {
//код на епта
}
''',
        "jwt": "",
        "data": {
            "triggeredByLinkId": 380,
            "oldLink": None,
            "newLink": {
                "from_id": 0,
                "type_id": 1137,
                "id": 1170,
                "to_id": 0,
                "value": None
            },
            "promiseId": 1171
        }
    }
}

# URL локального сервера
url = "http://localhost:39100/call"

# Выполнение POST-запроса
response = requests.post(url, json=options)

# Проверка статуса ответа
if response.status_code == 200:
    print("Запрос успешно выполнен.")
    print("Текст:", response.text)
else:
    print("Произошла ошибка при выполнении запроса.")
    print("Код ошибки:", response.status_code)
    print("Текст ошибки:", response.text)