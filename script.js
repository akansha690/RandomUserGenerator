
async function getRandomUser() {

    let p = await fetch("https://randomuser.me/api/?results=1");
    let data = await p.json();
    let user = data.results[0];
    displayUser(user);
}


function displayUser(user) {

    let phone = document.getElementById('phone');
    let location = document.getElementById('location');
    let email = document.getElementById('email');
    let gender = document.getElementById('gender');

    phone.innerHTML = `${user.phone}`;
    location.innerText = `${user.location.city}`;
    email.innerText = `${user.email}`;
    gender.innerText = `${user.gender}`;

}



