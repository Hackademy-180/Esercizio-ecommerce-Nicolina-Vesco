// Navbar

let nav = document.querySelector("#nav");
let navLink = document.querySelectorAll(".nav-link");
let icon = document.querySelectorAll(".icon-right");
let imgLogo = document.querySelector(".logo");


window.addEventListener("scroll", ()=>{
    let scrolled=window.scrollY;
    if(scrolled>0){
        nav.classList.add("nav-custom2");
        imgLogo.src = "http://127.0.0.1:5500/media/logored.png";

        navLink.forEach((link)=>{
            link.style.color= "rgb(254,254,254)"
            link.addEventListener("mouseenter", ()=> {
            link.style.color="rgb(10,10,10)"})

            link.addEventListener("mouseleave",()=>{
                link.style.color="rgb(254,254,254)"
            })
        })
        icon.forEach((icona)=> {
            icona.style.color = "rgb(254,254,254)"
            icona.addEventListener("mouseenter",()=> {
                icona.style.color="rgb(10,10,10)"
            })

            icona.addEventListener("mouseleave", ()=> {
                icona.style.color="rgb(254,254,254)"
            })
        })

    }else{
        nav.classList.remove("nav-custom2");
        imgLogo.src= "http://127.0.0.1:5500/media/logo.png";

        navLink.forEach((link)=>{
            link.style.color="rgb(10,10,10)"
            link.addEventListener("mouseenter", ()=> {link.style.color="rgb(10,10,10)"})
            link.addEventListener("mouseleave",()=>{link.style.color="rgb(10,10,10)"})
        })
        icon.forEach((icona)=> {
            icona.style.color = "rgb(10,10,10)"
            icona.addEventListener("mouseenter",()=> {icona.style.color="rgb(10,10,10)"})

            icona.addEventListener("mouseleave", ()=> {icona.style.color="rgb(10,10,10)"})
        })

    }

})

let collapseCategorie=document.querySelector("#collapseCategorie");
let priceInput=document.querySelector("#priceInput");
let wordInput=document.querySelector("#wordInput");
let collapseTaglie=document.querySelector("#collapseTaglie");
let showCard=document.querySelector("#showCard");


fetch("./woman.json").then((response) => response.json()).then((info)=>{
    function setCategoryFilter(){
        let categories= info.map((filtro)=> filtro.category)
        let uniqueCategory=[];
        categories.forEach((categoria)=> {
            if(!uniqueCategory.includes(categoria)){
                uniqueCategory.push(categoria);
            }
        })
        let cardBody = collapseCategorie.querySelector(".card-body");
        uniqueCategory.forEach((categoria)=>{
            let div = document.createElement("div");
            div.classList.add("form-check");
            div.innerHTML=`<input class="form-check-input" type="radio" name="category" id="${categoria}"> 
                                    <label class="form-check-label" for="${categoria}">
                                        ${categoria}
                                    </label>`
            cardBody.appendChild(div);
        })
    }
    setCategoryFilter();

    function showCards(array){
        array.sort((a,b)=> b.price-a.price);
        showCard.innerHTML="";
        array.forEach((filtro)=> {
            let div=document.createElement("div");
            div.classList.add("col-12", "col-md-3");
            div.innerHTML=`<div class="card my-2 mb-5 mt-4 card-woman">
                                <img src=${filtro.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${filtro.name}</h5>
                                    <p class="card-text">${filtro.price}</p>
                                    <a href="#" class="btn btn-primary">Acquista</a>
                                </div>
                            </div>`
             showCard.appendChild(div);
        })

    }
    // showCards(info);

    let radios=document.querySelectorAll(".form-check-input");
    function filterByCategory(){
        let checked=Array.from(radios).find((button)=>button.checked);
        let categoria=checked.id;
        if(categoria != "all"){
            let filtered=info.filter((filtro)=>filtro.category == categoria);
            showCards(filtered);
        }else{
            showCards(info);
        }
    }
    filterByCategory();

     radios.forEach((button)=> {
        button.addEventListener("click", ()=>{
            filterByCategory();
        })
    })

    function setPriceInput(){
        let maxPrice=info[0].price;
        priceInput.max=maxPrice;
        priceInput.value=maxPrice;
        priceNumber.innerHTML=maxPrice;
        let infoReverse=info.reverse();
        let minPrice=infoReverse[0].price;
        priceInput.min=Math.ceil(+minPrice);
        minNumber.innerHTML=minPrice;
    }
    setPriceInput();

    priceInput.addEventListener("input", ()=> {
        priceNumber.innerHTML=priceInput.value;
        minNumber.innerHTML=priceInput.value;

        filterByPrice();
    })

    function filterByPrice(){
        let filtered= info.filter((annuncio)=> +annuncio.price <= +priceInput.value);
        showCards(filtered);
    }

    wordInput.addEventListener("input", ()=>{
        filterByWord();
    })

    function filterByWord(){
        let filtered=info.filter((annuncio)=>
        annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()))
        showCards(filtered);
    }
})