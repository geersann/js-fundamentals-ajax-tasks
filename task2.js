// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.getElementById('getUserButton').addEventListener('click', async () => {

    const userName = document.getElementById('userNameInput').value.trim();

    const url = `https://jsonplaceholder.typicode.com/users?name=${encodeURIComponent(userName)}`;
    const response = await fetch(url);
    const data = await response.json();

    const userCity = data.length > 0 ? data[0].address.city : null;
    document.getElementById('userCity').innerText = userCity ? `User's city: ${userCity}` : 'User not found';

});