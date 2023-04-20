
const elements = {
    bodyEl: document.querySelector("body"),
    buttonEl: document.querySelector(".button"),
    cloud1El: document.querySelector(".cloud-1"),
    cloud2El: document.querySelector(".cloud-2"),
    cloud3El: document.querySelector(".cloud-3"),

}

const changeModeFunction = () => {
    elements.bodyEl.classList.toggle("darkMode");
    elements.buttonEl.classList.toggle("darkModeButton");
    elements.cloud1El.classList.toggle("darkCloud1");
    elements.cloud2El.classList.toggle("darkCloud2");
    elements.cloud3El.classList.toggle("darkCloud3");
}

const changeModeByKeyFunction = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "b") {
        changeModeFunction();
    }
}

elements.buttonEl.addEventListener("click", changeModeFunction);
document.addEventListener("keydown", changeModeByKeyFunction);