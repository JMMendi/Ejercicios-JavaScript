let array = [];
for (let i = 0 ; i < 10 ; i++) {
    let random = Math.random()* 10;
    if (random >= 5) {
        array.push(Math.random() * 50);
    } else if (random < 5) {
        array.push(Math.random() * (-50));
    }
}

document.getElementsByClassName("p").value = array;
