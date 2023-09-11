const baseUrl = 'https://jsonplaceholder.typicode.com/';

const userList = document.getElementById('userList');
const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', async () => {
    const users = await fetchUsers();
    displayUsers(users);
})

async function fetchUsers() {
    try {
        const response = await fetch(`${baseUrl}users`);
        const users = response.json();
        return users;
    } catch (error) {
        console.log('Error fetching users: ', error);
    }
}
function displayUsers(users) {
    userList.innerHTML = '';

    users.forEach(({name, phone}) => {
        const li = document.createElement('li');
        const phoneFormat = phone.split(' ')[0];
        li.textContent = name + '   ' + phoneFormat;
        userList.append(li);
    });

    // const alt = users.map(user => {
    //     const phoneFormat = user.phone.split(' ')[0];
    //     return `<li>${user.name} ${phoneFormat}</li>`;
    // }).join('');

    // userList.innerHTML = alt;

}