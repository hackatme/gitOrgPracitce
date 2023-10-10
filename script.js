var body = document.getElementsByTagName('body')[0];
var btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    body.classList.toggle("chBg")
});
