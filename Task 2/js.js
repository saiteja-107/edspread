let ans = ""
document.querySelector(".one").addEventListener("click", () => {
    ans = ans + 1;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".two").addEventListener("click", () => {
    ans = ans + 2;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".three").addEventListener("click", () => {
    ans = ans + 3;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".four").addEventListener("click", () => {
    ans = ans + 4;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".five").addEventListener("click", () => {
    ans = ans + 5;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".six").addEventListener("click", () => {
    ans = ans + 6;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".seven").addEventListener("click", () => {
    ans = ans + 7;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".eight").addEventListener("click", () => {
    ans = ans + 8;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".nine").addEventListener("click", () => {
    ans = ans + 9;
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".zero").addEventListener("click", () => {
    ans = ans + 0;
    document.querySelector("h1").innerText = ans;
})

document.querySelector(".div").addEventListener("click", () => {
    ans = ans + "/";
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".mul").addEventListener("click", () => {
    ans = ans + "*";
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".pluse").addEventListener("click", () => {
    ans = ans + "+";
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".neg").addEventListener("click", () => {
    ans = ans + "-";
    document.querySelector("h1").innerText = ans;
})
document.querySelector(".clear").addEventListener("click", () => {
    ans = 0;
    document.querySelector("h1").innerText = ans;
})







document.querySelector(".answer").addEventListener("click", () => {
    ans = eval(ans);
    document.querySelector("h1").innerText = ans;
})