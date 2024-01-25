// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 


const usersApi = 'https://jsonplaceholder.typicode.com/users';
const list = document.querySelector(".usersList");

fetch(usersApi)
    .then(res => {
        console.log("Response status:", res.status);
        return res.json();
    })
    .then(data => {
        if (data) {
            const users = data;
    
            users.forEach(user => {
                list.innerHTML += `<li>${user.name}</li>`;
            });
        } else {
            console.error("Invalid users");
        }
    });

