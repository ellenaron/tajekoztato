const navBtn = document.querySelector(".collbtn");
const collNav = document.querySelector(".collapsed-nav");

navBtn.addEventListener('click', collapse);

function collapse() {
    navBtn.classList.toggle("active");
    collNav.classList.toggle("active");
}