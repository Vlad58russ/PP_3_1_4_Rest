const userUrl = 'http://localhost:8080/api/user';


function getUserPage() {
    fetch(userUrl).then(response => response.json()).then(user =>
        getInformationAboutUser(user))
}

function getInformationAboutUser(user) {

    let result = '';
    result =

        `<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.surname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.roles.map(role => " " + role.name.substring(5))}</td>
</tr>`
    document.getElementById('userTableBody').innerHTML = result;
}

getUserPage();

function getCurrentUser() {
    fetch('http://localhost:8080/api/user')
        .then(res => res.json())
        .then(user => {
            document.getElementById('usernamePlaceholder').textContent = user.email;
        });
}


getCurrentUser();