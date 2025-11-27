let nav = document.querySelector("#nav")
let navlink = document.querySelectorAll(".nav-link")
let imglogo = document.querySelector(".logo")
let icon = document.querySelectorAll(".icon-right")
// console.dir(imglogo);


window.addEventListener("scroll", () => {

    let scrolled = window.scrollY;
    
    if (scrolled > 0) {
        nav.classList.add("nav-custom2");
        imglogo.src = "http://127.0.0.1:5500/media/logored.png";

        navlink.forEach((link) => {
            link.style.color = "rgb(254,254,254)";
            link.addEventListener("mouseenter", () => {
                link.style.color = "rgb(254,254,254)"
            })
            link.addEventListener("mouseleave", () => {
                link.style.color = "rgb(10,10,10)";
            })
        })
        icon.forEach((icona) => {

            icona.style.color = "rgb(254,254,254)";
            icona.addEventListener("mouseenter", () => {
                icona.style.color = "rgb(10,10,10)"
            })
            icona.addEventListener("mouseleave", () => {
                icona.style.color = "rgb(254,254,254)";
            })
        })
    } else { 
        nav.classList.remove("nav-custom2");
        imglogo.src = "http://127.0.0.1:5500/media/logo.png";
        navlink.forEach((link) => {
            link.style.color = "rgb(10,10,10)";
            link.addEventListener("mouseenter", () => { link.style.color = "rgb(10,10,10)" })
            link.addEventListener("mouseleave", () => { link.style.color = "rgb(10,10,10)" })
        })
        icon.forEach((icona) => {
            icona.style.color = "rgb(10,10,10)";
            icona.addEventListener("mouseenter", () => { icona.style.color = "rgb(10,10,10)" })
            icona.addEventListener("mouseleave", () => { icona.style.color = "rgb(10,10,10)" })
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

let primoNumero = document.querySelector("#primoNumero")
let secondoNumero = document.querySelector("#secondoNumero")
let terzoNumero = document.querySelector("#terzoNumero")

// let counter = 0;
//     let interval = setInterval(() => {
//         if (counter < 1000) {
//             counter++
//             primoNumero.innerHTML = counter;
//         } else {
//             clearInterval(interval);

//         }
//     }, 1000) 
function createInterval(number, element, timing) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < number) {
            counter++
            element.innerHTML = counter;
        } else {
            clearInterval(interval);

        }
    }, timing)

}
// createInterval(1000, primoNumero, 10);
// createInterval(2000, secondoNumero, 5);
// createInterval(100, terzoNumero, 100);

let confirm= false
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && confirm == false) {
            createInterval(1000, primoNumero, 10);
            createInterval(2000, secondoNumero, 5);
            createInterval(100, terzoNumero, 100)
            confirm=true;
        }
    })

})
observer.observe(primoNumero)  

let cardWrapper= document.querySelector("#cardWrapper")
let productCards = [
    {
        image: "./media/running.png",
        text: "Running",
        link: "#running"
    },
     {
        image: "./media/giacche.jpg",
        text: "Giache",
        link: "#giacche"
    },
    {
        image: "./media/classic.jpg",
        text: "Classic",
        link: "#classic"
    },
    {
        image: "./media/outdoor.jpg",
        text: "Outdoor",
        link: "#outdoor"
    },
    {
        image: "./media/scarpe.jpg",
        text: "Scarpe",
        link: "#scarpe"
    },
    {
        image: "./media/sport.jpg",
        text: "Sport",
        link: "#sport"
    },


]

productCards.forEach((product)=>{
    let div = document.createElement("div");
    div.classList.add ("col-12","col-md-2", "p-0");
    div.innerHTML=`
            <div class="card">
            <img src="${product.image}" class="card-img-top" alt="...">
            <a href="${product.link}" class="text-card">${product.text}</a>
            </div>

    `
    cardWrapper.appendChild(div);
})

// let cardWrapper=document.querySelector("#cardWrapper")
// let productCards =[
//     {
//         image: "https"
//         title: "prodotto 1"
//         price: "150"
//         description:"lorem"
//     
//      {
//         image: "https"
//         title: "prodotto 2"
//         price: "150"
//         description:"lorem"
//     },
//      {
//         image: "https"
//         title: "prodotto 3"
//         price: "150"
//         description:"lorem"
//     },
// ]

// productCards.forEach((prodotto)=>{
//     let div = document.createElement("div");
//     div.classList.add ("col-12", "col-md-3");
//     div.innerHTML = `
    
//     `
//     cardWrapper.appendChild(div);
// })