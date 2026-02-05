//Element

const envelope = document.getElementById("envelope-container")
const letter = document.getElementById("letter-container")
const nobtn = document.querySelector(".no-btn");
const yesbtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title")
const catimg = document.getElementById("letter-cat")
const buttons = document.getElementById("letter-buttons")
const finaltext = document.getElementById("final-text")


//click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");  
    },50);
});


nobtn.addEventListener("mouseover", () =>{
    const min = 200;
    const max  = 200;
    const distance = Math.random() * (max-min) + min;
    const angle = Math.random () * Math.PI * 2;

    const moveX = Math.cos(angle) * distance ;
    const moveY = Math.sin(angle) * distance;

    nobtn.style.transition  = "transform 0.3 ease";
    nobtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
})

// Logic to yes no button to grow 

// let yesscale = 1;

// yesbtn.style.position = "relative";
// yesbtn.style.transformOrigin = "center center";
// yesbtn.style.transition = "transform 0.3s ease";


// nobtn.addEventListener("click", () =>{
//     yesscale += 2;

//     if (yesbtn.style.position !== "fixed"){
//             yesbtn.style.position ="fixed";
//             yesbtn.style.top = "50%";
//             yesbtn.style.left = "50%";
//             yesbtn.style.transform = `translate(-50%, -50%) scale(${yesscale})`;
//     }else{
//         yesbtn.style.transform = `translate(-50%, -50%) scale(${yesscale})`;
//     }
// });


// Yes is clicked

yesbtn.addEventListener("click", () =>{
    title.textContent = "Yipeeeee";
    catimg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display =  "none";

    finaltext.style.display = "block";  
});