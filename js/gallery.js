

const elements = {
    picturesListEl: document.querySelector(".pictures-list"),
    pictureItemEl: document.querySelector(".picture-item"),
    createdElementsEl: document.querySelectorAll(".picture-item"),
    srcSpanEl: document.querySelector(".src-input"),
    altSpanEl: document.querySelector(".alt-input"),
    quantitySpanEl: document.querySelector(".quantity-span"),
    quantityInputEl: document.querySelector(".quantity-input"),
    openPictureCreaterButtonEl: document.querySelector(".create-picture-button"),
    changePictureButtonEl: document.querySelector(".change-picture-button"),
    changePictureButtonItemEl: document.querySelector(".change-picture-button-item"),
    removeChangeModeButtonEl: document.querySelector(".close-change-mode-button"),
    removeChangeModeButtonItemEl: document.querySelector(".close-change-mode-button-item"),
    createPictureWindowEl: document.querySelector(".create-container"),
    closeChangeWindowButtonEl: document.querySelector(".close-change-window-button"),
    createNewImageButtonEl: document.querySelector(".create-button"),
    createNewImageFormEl: document.querySelector(".create-form"),
    checkNameEl: document.querySelector("#name-checked-input"),
    closeCreateWindowButtonEl: document.querySelector(".close-create-window-button"),
    changePictureWindowEl: document.querySelector(".change-window"),
    backdropEl: document.querySelector(".backdrop"),
    changeWindowTitleEl: document.querySelector(".change-window-title"),
    exampleLookImageEl: document.querySelector(".example-look-image"),
    srcInfo: document.querySelector(".src"),
    altInfo: document.querySelector(".alt"),
    srcChangeButtonEl: document.querySelector(".src-change-button"),
    altChangeButtonEl: document.querySelector(".alt-change-button"),
    srcChangeFormEl: document.querySelector(".change-src-form"),
    altChangeFormEl: document.querySelector(".change-alt-form"),
    nameCheckedInputExample: document.querySelector("#name-checked-input-example"),
    deletePictureButtonEl: document.querySelector(".delete-picture-button"),
    deleteAllPicturesButtonEl: document.querySelector(".delete-all-pictures-button"),
    createdPicturesEl: document.querySelectorAll(".created-image"),
    newImagesArr: [],
    openChangeModalFunction(event) {

        // Start of Function

        event.target.classList.add("pickedImage");
        elements.changePictureWindowEl.classList.toggle("isNotActive");
        elements.backdropEl.classList.replace("isNotActive", "isActive");
        elements.createdElementsEl = document.querySelectorAll(".picture-item");
        const neededIndex = elements.newImagesArr.findIndex((image) => image.classList.contains("pickedImage"));
        const pickedItem = elements.createdElementsEl[neededIndex];
        elements.changeWindowTitleEl.textContent = `The information about the picture number ${neededIndex + 1}`;
        elements.srcInfo.href = `${elements.newImagesArr[neededIndex].src}`;
        if (!pickedItem.classList.contains("picture-item-with-text")) {
            elements.exampleLookImageEl.innerHTML = `<img 
        src="${elements.newImagesArr[neededIndex].src}" 
        class="created-image">
        </img>`
        
        } else {
            elements.exampleLookImageEl.innerHTML = `<img 
            src="${elements.newImagesArr[neededIndex].src}" 
            class="created-image">
            </img>
            <p class="image-text" >${elements.newImagesArr[neededIndex].alt}</p>`;
            elements.nameCheckedInputExample.checked = "true";
            

        }

        // Create/Remove Text of Image

        const createTextImageFunction = () => {
            if (elements.nameCheckedInputExample.checked) {
            elements.exampleLookImageEl.innerHTML = `<img 
            src="${elements.newImagesArr[neededIndex].src}" 
            class="created-image">
            </img>
            <p class="image-text" >${elements.newImagesArr[neededIndex].alt}</p>`;
            pickedItem.innerHTML = `<img 
            src="${elements.newImagesArr[neededIndex].src}" 
            class="created-image">
            </img>
            <p class="image-text" >${elements.newImagesArr[neededIndex].alt}</p>`;
            pickedItem.classList.add("picture-item-with-text");
        } else if (!elements.nameCheckedInputExample.checked) {
            elements.exampleLookImageEl.innerHTML = `<img 
            src="${elements.newImagesArr[neededIndex].src}" 
            class="created-image">
            </img>`;
            pickedItem.innerHTML = `<img 
            src="${elements.newImagesArr[neededIndex].src}" 
            class="created-image">
            </img>`;
            pickedItem.classList.remove("picture-item-with-text");
            }
        }

        elements.nameCheckedInputExample.addEventListener("change", createTextImageFunction)

        // Information about Image 

        if (elements.newImagesArr[neededIndex].alt !== "") {
            elements.altInfo.textContent = `${elements.newImagesArr[neededIndex].alt.toUpperCase()}`;
        } else {
            elements.altInfo.textContent = "Doesn`t have";
        }


        // Change Characteristics of Image 

        const changeSrcFunction = () => {
            elements.srcChangeFormEl.classList.toggle("isNotActive");
            elements.srcChangeButtonEl.classList.toggle("isNotActive");
        }

        const changeAltFunction = () => {
            elements.altChangeFormEl.classList.toggle("isNotActive");
            elements.altChangeButtonEl.classList.toggle("isNotActive");
        }

        const changeSrcOkFunction = (event) => {
            event.preventDefault();
            elements.newImagesArr[neededIndex].src = event.currentTarget.elements.src.value;
            event.currentTarget.elements.src.value = "";
            elements.srcChangeFormEl.classList.toggle("isNotActive");
            elements.srcChangeButtonEl.classList.toggle("isNotActive");
            if (elements.nameCheckedInputExample.checked) {
                elements.exampleLookImageEl.innerHTML = `<img 
                src="${elements.newImagesArr[neededIndex].src}" 
                class="created-image">
                </img>
                <p class="image-text" >${elements.newImagesArr[neededIndex].alt}</p>`;
                pickedItem.innerHTML = `<img 
                src="${elements.newImagesArr[neededIndex].src}" 
                class="created-image">
                </img>
                <p class="image-text" >${elements.newImagesArr[neededIndex].alt}</p>`;
            } else if (!elements.nameCheckedInputExample.checked) {
                elements.exampleLookImageEl.innerHTML = `<img 
                src="${elements.newImagesArr[neededIndex].src}" 
                class="created-image">
                </img>`;
                pickedItem.innerHTML = `<img 
                src="${elements.newImagesArr[neededIndex].src}" 
                class="created-image">
                </img>`;
        }
        }

        const changeAltOkFunction = (event) => {
            event.preventDefault();
            elements.newImagesArr[neededIndex].alt = event.currentTarget.elements.alt.value;
            event.currentTarget.elements.alt.value = "";
            elements.altChangeFormEl.classList.toggle("isNotActive");
            elements.altChangeButtonEl.classList.toggle("isNotActive");
            elements.altInfo.textContent = `${elements.newImagesArr[neededIndex].alt.toUpperCase()}`;
            elements.exampleLookImageEl.innerHTML = `<img 
            src="${elements.newImagesArr[neededIndex].src}" 
            class="created-image">
            </img>`;
        }

        elements.srcChangeButtonEl.addEventListener("click", changeSrcFunction);
        elements.altChangeButtonEl.addEventListener("click", changeAltFunction);

        elements.srcChangeFormEl.addEventListener("submit", changeSrcOkFunction);
        elements.altChangeFormEl.addEventListener("submit", changeAltOkFunction);

        // Close Change Window 

        const closeChangeWindowFunction = () => {
            elements.newImagesArr.forEach((image) => image.classList.remove("pickedImage"));

            elements.srcChangeButtonEl.removeEventListener("click", changeSrcFunction);
            elements.altChangeButtonEl.removeEventListener("click", changeAltFunction);

            elements.srcChangeFormEl.removeEventListener("submit", changeSrcOkFunction);
            elements.altChangeFormEl.removeEventListener("submit", changeAltOkFunction);

            elements.deletePictureButtonEl.removeEventListener("click", deletePictureFunction);

            elements.backdropEl.classList.replace("isActive", "isNotActive");
            elements.changePictureWindowEl.classList.toggle("isNotActive");
            elements.closeChangeWindowButtonEl.removeEventListener("click", closeChangeWindowFunction);
        }

        elements.closeChangeWindowButtonEl.addEventListener("click", closeChangeWindowFunction);

        // Delete Picture 

        const deletePictureFunction = () => {
            const sureMessage = confirm(`Are you sure to delete picture number ${neededIndex + 1}?`);
            if (!sureMessage) {
                return
            } else {
                elements.newImagesArr.splice(neededIndex, 1);
                pickedItem.remove();
                closeChangeWindowFunction();
                alert(`Picture number ${neededIndex + 1} was deleted`);
            }
        }

        elements.deletePictureButtonEl.addEventListener("click", deletePictureFunction);

    },
    
}

const openCreateWindowFunction = () => {
    elements.createPictureWindowEl.classList.add("createContainerOpen");
    elements.backdropEl.classList.remove("isNotActive");
}

elements.openPictureCreaterButtonEl.addEventListener("click", openCreateWindowFunction);

elements.quantityInputEl.value = 1;
elements.quantitySpanEl.textContent = elements.quantityInputEl.value;

const watchQuantityFunction = () => {
    elements.quantitySpanEl.textContent = elements.quantityInputEl.value;
}

elements.quantityInputEl.addEventListener("input", watchQuantityFunction)

const closeCreateWindowFunction = () => {
    elements.createPictureWindowEl.classList.remove("createContainerOpen");
    elements.backdropEl.classList.add("isNotActive");
    elements.srcSpanEl.value = "";
    elements.altSpanEl.value = "";
    elements.quantityInputEl.value = 1;
    elements.quantitySpanEl.textContent = elements.quantityInputEl.value;
}

elements.closeCreateWindowButtonEl.addEventListener("click", closeCreateWindowFunction);

const createNewImageFunction = (event) => {
    event.preventDefault();
    elements.createPictureWindowEl.classList.remove("createContainerOpen");
    for (let i = 1; i <= event.currentTarget.elements.quantity.value; i += 1) {
        const newEl = document.createElement("li");
        newEl.classList.add("picture-item");
        newEl.innerHTML = `<img 
        src="${event.currentTarget.elements.src.value}" 
        alt="${event.currentTarget.elements.alt.value}" 
        class="created-image">
        </img>`;
        if (event.currentTarget.elements.imageName.checked) {
            const imageText = document.createElement("p");
            if (event.currentTarget.elements.alt.value === "") {
                imageText.textContent = "No name";
            } else {
                imageText.textContent = event.currentTarget.elements.alt.value;
            }
            imageText.classList.add("image-text");
            newEl.append(imageText);
            newEl.classList.add("picture-item-with-text");
        }
        elements.picturesListEl.prepend(newEl);
    }
    elements.srcSpanEl.value = "";
    elements.altSpanEl.value = "";
    elements.quantityInputEl.value = 1;
    elements.quantitySpanEl.textContent = elements.quantityInputEl.value;
    elements.backdropEl.classList.add("isNotActive");
}

elements.createNewImageFormEl.addEventListener("submit", createNewImageFunction);

const changePictureFunction = () => {
    elements.changePictureButtonItemEl.classList.toggle("isNotActive");
    elements.removeChangeModeButtonItemEl.classList.toggle("isNotActive");
    elements.createdPicturesEl = document.querySelectorAll(".created-image");
    elements.newImagesArr = Array.from(elements.createdPicturesEl);
    elements.newImagesArr.map((image) => image.classList.add("toPick"));
    elements.newImagesArr.forEach((image) => image.addEventListener("click", elements.openChangeModalFunction));
}

elements.changePictureButtonEl.addEventListener("click", changePictureFunction);

const removeChangeModeFunction = () => {
    elements.changePictureButtonItemEl.classList.toggle("isNotActive");
    elements.removeChangeModeButtonItemEl.classList.toggle("isNotActive");
    elements.newImagesArr.forEach((image) => image.classList.remove("toPick"));
    elements.newImagesArr.forEach((image) => image.removeEventListener("click", elements.openChangeModalFunction)); 
}

elements.removeChangeModeButtonEl.addEventListener("click", removeChangeModeFunction);

const deleteAllPicturesFunction = () => {
    elements.createdElementsEl = document.querySelectorAll(".picture-item");
    for (let i = 0; i <= elements.createdElementsEl.length - 6; i += 1) {
        elements.createdElementsEl[i].remove();
    }
    elements.createdElementsEl = [];
}

elements.deleteAllPicturesButtonEl.addEventListener("click", deleteAllPicturesFunction);