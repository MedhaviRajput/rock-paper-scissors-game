let user = 0;
let comp = 0;
const para = document.querySelector("#res");
const userscore = document.querySelector("#user");
const comscore = document.querySelector("#com");
const select = document.querySelectorAll(".sel");
const res = document.querySelector("#restart");
res.addEventListener("click", () => {
    user=0;
    comp=0;
    userscore.innerText = user;
    comscore.innerText = comp;
    para.innerText = "Play your move";

});
const draw = () => {
    para.innerText = "Game was Draw. Play again.";
    para.style.backgroundColor = "orange";

};
const userwin = (userchoice, comchoice) => {
    para.innerText = "You win." + " " + userchoice + " beats Computer " + comchoice;
    user++;
    userscore.innerText = user;
    para.style.backgroundColor = "green";
}
const comwin = (userchoice, comchoice) => {
    para.innerText = "You loss." + " " + comchoice + " beats your " + userchoice;
    comp++;
    comscore.innerText = comp;
    para.style.backgroundColor = "red";
}
const genComputer = () => {
    const choigen = Math.floor(Math.random() * 3);
    const choice = ["rock", "paper", "scissors"];
    console.log(choice[choigen]);
    return choice[choigen];
};
const Playgame = (userchoice) => {
    const comchoice = genComputer();
    if (comchoice === userchoice) {
        draw();
    }
    else if ((comchoice === "rock" && userchoice === "paper") || (comchoice === "paper" && userchoice === "scissors") || (comchoice === "scissors" && userchoice === "rock")) {
        userwin(userchoice, comchoice);
    }
    else {
        comwin(userchoice, comchoice);
    }
}
select.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        res.style.backgroundColor = "red";
        Playgame(userchoice);
        genComputer();
    });
});