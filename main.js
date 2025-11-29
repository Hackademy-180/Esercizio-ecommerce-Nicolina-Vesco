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

// First section

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


// Second section

let carouselWrapper= document.querySelector("#carousel-wrapper")
let productCarousel= [
    {
        image: ["./media/img1carousel.jpg", "./media/img2carousel.jpg"],
        title: "Si parte",
        text: "Approfitta di uno scono extra di 10% con il codice EXTRA10",
        button:  `<button class="cta">
                   <span class="hover-underline-animation fw-bold"> Acquista ora </span>
                     <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30"
                        height="10" viewBox="0 0 46 16">
                        <path id="Path_10" data-name="Path 10"
                         d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        transform="translate(30)"></path>
                    </svg>
                  </button>`
    },
    {
        image: ["./media/img3carousel.jpg", "./media/img4carousel.jpg"],
        title:"",
        text:"",
        button: ""
    },
    {
        image: ["./media/img5carousel.jpg", "./media/img6carousel.jpg"],
        title:"",
        text:"",
        button:""
    },
]

productCarousel.forEach((element) => {
    let div=document.createElement("div");
    div.classList.add ("col-12", "col-md-4", "p-0");
    div.innerHTML= `
         <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active h-100" data-bs-interval="3000">
                                <img src="${element.image[0]}" class="d-block img-carousel " alt="...">
                                <div class="carousel-caption d-none d-md-flex flex-column align-items-start">
                                    <h2 class="fs-1 text-black bg-white">${element.title}</h2>
                                    <p class="text-start text-black bg-white">${element.text}</p>
                                    <!-- Button Open Source -->
                                     <!-- From Uiverse.io by alexmaracinaru -->
                                    ${element.button}
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="${element.image[1]}" class="d-block img-carousel" alt="...">
                                <div class="carousel-caption d-none d-md-flex flex-column align-items-start">
                                    <h2 class="fs-1 text-black bg-white">${element.title}</h2>
                                    <p class="text-start text-black bg-white">${element.text}</p>
                                   ${element.button}
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
    `
carouselWrapper.appendChild(div);
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