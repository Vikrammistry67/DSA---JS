function randomColor() {

    let hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    };

    return color;
};


console.log(randomColor());


const bgColorChanger = () => {
    document.body.style.backgroundColor = randomColor();
};

let intervalId;
document.getElementById('start').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(bgColorChanger, 1);
    };
});


document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});
