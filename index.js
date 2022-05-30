function dicee() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    if (dice1 > dice2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else if (dice1 < dice2) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    } else if (dice1 === dice2) {
        document.querySelector("h1").textContent = "You are Match now, try again";
    }

    var imgVariable;
    if (dice1 === 1) {
        imgVariable = "./images/dice1.png";
    } else if (dice1 === 2) {
        imgVariable = "./images/dice2.png";
    } else if (dice1 === 3) {
        imgVariable = "./images/dice3.png";
    } else if (dice1 === 4) {
        imgVariable = "./images/dice4.png";
    } else if (dice1 === 5) {
        imgVariable = "./images/dice5.png";
    } else if (dice1 === 6) {
        imgVariable = "./images/dice6.png";
    }
    document.querySelector("img.img1").setAttribute("src", imgVariable);

    var imgVariable2;
    if (dice2 === 1) {
        imgVariable2 = "./images/dice1.png";
    } else if (dice2 === 2) {
        imgVariable2 = "./images/dice2.png";
    } else if (dice2 === 3) {
        imgVariable2 = "./images/dice3.png";
    } else if (dice2 === 4) {
        imgVariable2 = "./images/dice4.png";
    } else if (dice2 === 5) {
        imgVariable2 = "./images/dice5.png";
    } else if (dice2 === 6) {
        imgVariable2 = "./images/dice6.png";
    }
    document.querySelector("img.img2").setAttribute("src", imgVariable2);
}

dicee();