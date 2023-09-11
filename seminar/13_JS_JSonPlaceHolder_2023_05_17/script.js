const url = "https://jsonplaceholder.typicode.com/users";

const userList2 = document.getElementById("userList2");
const userDetailsDiv = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
const users = [];

// user.push({null});
// users = [];

fetch(url)
    .then((res) => res.json())
    .then((users) => {
        const userList = document.getElementById("userList");
        users.forEach((user) => {
            const li = document.createElement("li");
            li.innerText = user.name;
            li.addEventListener('click', () => displayUsersDetails(user));
            userList.append(li);
        });
    })
    .catch((err) => console.log(err));



fetch(url)
    .then((res) => res.json())
    .then((users) => {
        let filteredUsers = users;
        displayUsers(filteredUsers);

        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(searchTerm)
            );
            displayUsers(filteredUsers);
        });
    })
    .catch((error) => {
        console.log("Error fetching user", error);
    });

function displayUsers(users) {
    userList2.innerHTML = "";

    users.forEach((user) => {
        const li = document.createElement("li");
        li.innerText = user.name;
        li.addEventListener('click', () => displayUsersDetails(user));
        userList2.append(li);
    });
}

function displayUsersDetails(user) {
    userDetailsDiv.innerHTML = '';

    const nameHeading = document.createElement('h2');
    nameHeading.innerText = user.name;

    const nickName = document.createElement('p');
    nickName.innerText = `<strong>Username:</strong> ${user.username}`;

    const email = document.createElement('p');
    nickName.innerText = `<strong>Email:</strong> ${user.email}`;

    const phone = document.createElement('p');
    nickName.innerText = `<strong>Phone:</strong> ${user.phone}`;

    userDetailsDiv.append(nameHeading, nickName, email, phone);
}

// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
//     displayUsers(filteredUsers);
// })

// function displayUsers(users) {
//     userList2.innerHTML = '';

//     users.forEach(user => {
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         userList2.append(li);
//     })
// }

//"Hello world".includes("llo"); // true, ищет в строке совпадения на подстроку