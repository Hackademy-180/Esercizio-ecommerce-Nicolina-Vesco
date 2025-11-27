let nav = document.querySelector("#nav")
let navlink = document.querySelectorAll(".nav-link")
let imglogo = document.querySelector(".logo")
let icon = document.querySelectorAll(".icon-right")
console.dir(imglogo);


window.addEventListener("scroll", () => {

    let scrolled = window.scrollY;
    if (scrolled > 0) {
        nav.classList.add("nav-custom2");
        imglogo.src = "http://127.0.0.1:5500/media/logored.png";

        navlink.forEach((link) => {
            link.style.color ="rgb(254,254,254)";
            link.addEventListener("mouseenter", () => {
                link.style.color ="rgb(254,254,254)"
            })
            link.addEventListener("mouseleave", () => {
                link.style.color ="rgb(10,10,10)";
            })
        })
         icon.forEach((icona) => {
            
            icona.style.color ="rgb(254,254,254)";
            icona.addEventListener("mouseenter", () => {
                icona.style.color ="rgb(10,10,10)"
            })
            icona.addEventListener("mouseleave", () => {
                icona.style.color ="rgb(254,254,254)";
            })
        })
    } else {
        nav.classList.remove("nav-custom2");
        imglogo.src = "http://127.0.0.1:5500/media/logo.png";
        navlink.forEach((link) => {
            link.style.color = "rgb(10,10,10)";
            link.addEventListener("mouseenter", () => { link.style.color = "rgb(254,254,254)" })
            link.addEventListener("mouseleave", () => { link.style.color = "rgb(10,10,10)" })
        })
        icon.forEach((icona) => {
            icona.style.color = "rgb(10,10,10)";
            icona.addEventListener("mouseenter", () => { icon.style.color = "rgb(254,254,254)" })
            icona.addEventListener("mouseleave", () => { icon.style.color = "rgb(10,10,10)" })
        })
    }

})


// nav.classList.add("nav-custom2");
// changeNavbar("nav-custom", "logo", "rgb(254,254,254)", "rgb(196,0,0)");
// }else{
// nav.classList.remove("nav-custom2");
// changeNavbar( "logored", "rgb(133,133,133)", "rgb(196,0,0)");
// }})

// function changeNavbar(logo, color1, color2){
// logo.src= `https://127.0.0.1:5500/index.html/media/${logo}.png`;
// link.style.color=color1
// link.addEventListener("mouseenter", ()=>{ link.style.color=color2 })
// link.addEventListener("mouseleave", ()=>{ link.style.color= color1
//  })

// }
