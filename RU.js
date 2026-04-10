var fullname = document.querySelector("#fullname");
var gender = document.querySelector("#gender");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var profile = document.querySelector("#profile");
async function fetchUser() {
    const rawRes = await fetch("https://randomuser.me/api/");
    const data = await rawRes.json();
    const user = data.results[0];
    fullname.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    gender.innerText = user.gender;
    email.innerText = user.email;
    phone.innerText = user.phone;
    profile.src = user.picture.large;
}
fetchUser();