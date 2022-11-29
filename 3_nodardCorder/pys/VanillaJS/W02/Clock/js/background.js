const images = [
    "1.jpg", "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id='bgImg';
document.body.appendChild(bgImage);
