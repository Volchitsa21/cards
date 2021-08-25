const h3 = document.querySelectorAll("h3");
for (const pElement of h3) {
    console.log(pElement.textContent);
    pElement.classList.toggle("blue");
}


const button = document.querySelector("#clickMe");

const block = document.querySelectorAll(".color");



const changeButtonColor = () => {
    block.classList.toggle("red");
    block.classList.toggle("green");
}


button.addEventListener("", (event) => {
    console.log(event)
    changeSpanColor()
});