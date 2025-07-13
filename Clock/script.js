const deg = 6;
const hour = document.querySelector("#hr");
const min = document.querySelector("#mn");
const sec = document.querySelector("#sc");
const digitalTime = document.getElementById("digitalTime");
const currentDate = document.getElementById("currentDate");

setInterval(() => {
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();

    const hoursDeg = (hh % 12) * 30 + mm * 0.5;
    const minsDeg = mm * deg;
    const secsDeg = ss * deg;

    hour.style.transform = `rotateZ(${hoursDeg}deg)`;
    min.style.transform = `rotateZ(${minsDeg}deg)`;
    sec.style.transform = `rotateZ(${secsDeg}deg)`;

    const format = (val) => (val < 10 ? "0" + val : val);
    digitalTime.innerText = `${format(hh)}:${format(mm)}:${format(ss)}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.innerText = now.toLocaleDateString(undefined, options);

}, 1000);
