///////////////// 1 /////////////////
const el6 = document.getElementById("el6");
el6.addEventListener('click', (e) => changeColor(e.target))

const el7 = document.querySelector("#el7");
el7.addEventListener('click', (e) => changeColor(e.target));

function changeColor(element) {
    if (element) {
        element.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        element.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
}

///////////////// 2 /////////////////
const firstImage = document.querySelector(".image");
const images = [firstImage];

document.getElementById("addButton").addEventListener("click", () => {
    const image = document.createElement("img");
    image.src = "images/los_santos.jpg"
    image.alt = "Фото Лос Сантос"
    image.style.maxWidth = "50%";
    firstImage.parentElement.appendChild(image);
    images.push(image);
});

document.getElementById("increaseButton").addEventListener("click", () => {
    const lastImage = images[images.length - 1];
    lastImage.width *= 1.1;
    lastImage.height *= 1.1;
})

document.getElementById("decreaseButton").addEventListener("click", () => {
    const lastImage = images[images.length - 1];
    console.log(images)
    lastImage.width *= 0.9;
    lastImage.height *= 0.9;
});

document.getElementById("deleteButton").addEventListener("click", () => {
    let lastImage = images.pop();
    lastImage.parentElement.removeChild(lastImage);
});

