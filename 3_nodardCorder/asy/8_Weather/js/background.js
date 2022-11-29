const images = [
    "1920X1080-001.png",
    "1920X1080-002.png",
    "1920X1080-001.png",
    "1920X1080-001.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(./img/${chosenImage})`;