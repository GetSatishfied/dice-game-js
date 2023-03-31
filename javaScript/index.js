var randomNumber1 = Math.floor(Math.random() * 6) + 1
document.getElementsByClassName("p1Dice")[0].setAttribute("src", `./css/Resources/gold-${randomNumber1}.png`)

var randomNumber2 = Math.floor(Math.random() * 6) + 1
document.getElementsByClassName("p2Dice")[0].setAttribute("src", `./css/Resources/silver-${randomNumber2}.png`)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
}