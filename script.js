// console.log("Salut les ami(e)s");

// const year = 2020;

// const yearOfBirthday = 1997;

// const yearOfBirthday = window.prompt("Quelle est votre date de naissance");

// console.log(typeof yearOfBirthday);

// const age = year - yearOfBirthday

// console.log(age);

// document.querySelector("#age").textContent = "je connais ton age, tu as " + age + " ans";
// let isMenuActiv = false
document.querySelector("#btMenu").addEventListener("click",function(){
    console.log("click");
    // if (isMenuActiv == false) {
    //     console.log("off");
    //     document.querySelector("#NavMain").style.display = "block";
    //     isMenuActiv = true;
    // }
    // else {
    //     console.log("on");
    //     document.querySelector("#NavMain").style.display = "none";
    //     isMenuActiv = false;
    // }

    document.querySelector("#NavMain").classList.toggle("show")
})


   document.querySelector("#btSecret").addEventListener("click", function(){
        const codeSecret = "simplon";
        let secret = window.prompt("Quel est le mot de passe ?");
        while(secret !== codeSecret) {
        console.log("mauvais mot de passe")
        secret = window.prompt("Mauvais mot de pass. Try again !")
    }

    document.querySelector(".messageSecret-js").classList.toggle("show");

})

let modeNoir = false

document.querySelector("#switch").addEventListener("click", function(){
    console.log("click");
    document.querySelector("body").classList.toggle("darkMode");
    if(modeNoir == false){
        console.log("off");
        document.querySelector("#switchImg").src = "switchOn.png";
        modeNoir = true;
    }
    else{
        document.querySelector("#switchImg").src = "switchOff.png";
        modeNoir = false;
    }
})







