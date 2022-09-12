let res = 00;
document.querySelector(".pos").addEventListener("click", () => {
    res++;
    document.querySelector("h1").innerText = res;
    let rand = Math.floor(Math.random() * 100 % 10);
    let url = '(' + 'images/' + rand + '.jpeg)';
    url = "url" + url + ""
    document.body.style.backgroundImage = url;
    document.body.style.backgroundSize = "cover";
})
document.querySelector(".neg").addEventListener("click", () => {
    res--;
    document.querySelector("h1").innerText = res;
    let rand = Math.floor(Math.random() * 100 % 10);
    let url = '(' + 'images/' + rand + '.jpeg)';
    url = "url" + url + ""
    document.body.style.backgroundImage = url;
    document.body.style.backgroundSize = "cover";
})
document.querySelector(".reset").addEventListener("click", () => {
    res = "00";
    document.querySelector("h1").innerText = res;
    document.body.style.backgroundImage = "url('images/0.jpeg')";
    document.body.style.backgroundSize = "cover";

})