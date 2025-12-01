
// let showBtn = document.querySelector("#showBtn")
// let accordionWrapper = document.querySelector("#accordionWrapper")



let categoryWrapper = document.querySelector("#categoryWrapper")
let cardsJson = document.querySelector("#cardsJson")


fetch("./annunci.json").then((response) => response.json()).then((data) => {


    // let isVisible = false
    // showBtn.addEventListener("click", () => {
    // if (!isVisible){
    //     accordionWrapper.style.display ="block";
    //     isVisible = true;
    //     showBtn.innerHTML = 'Nascondi filtri'
    // }else {
    // accordionWrapper.style.display="none"
    // isVisible=false
    // showBtn.innerHTML ='Mostra filtri'
    // }
    // });

    function setCategoryFilter() {
        let categories = data.map((annuncio) => annuncio.category)
        let uniqueCategory = [];
        categories.forEach((categoria) => {
            if (!uniqueCategory.includes(categoria)) {
                uniqueCategory.push(categoria);
            }

        })
        uniqueCategory.forEach((categoria) => {
            let div = document.createElement("div");
            div.classList.add("form-check");
            div.innerHTML = `<input class="form-check-input" type="radio" name="category" id="${categoria}"> 
                                    <label class="form-check-label" for="${categoria}">
                                        ${categoria}
                                    </label>`
            categoryWrapper.appendChild(div)
        })
        
    }
    setCategoryFilter();

    function showCards(array) {
        array.sort((a,b)=> a.price - b.price);
        cardsJson.innerHTML=""
        array.forEach((annuncio)=> {
            let div= document.createElement("div");
            div.classList.add("col-md-4")
            div.innerHTML =`
             <div class="card my-2">
                                <img src=${annuncio.image} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${annuncio.name}</h5>
                                    <p class="card-text">${annuncio.price}</p>
                                    <a href="#" class="btn btn-primary">Acquista</a>
                                </div>
                </div>
            `
            cardsJson.appendChild(div);
        })
    }

    // showCards(data);

    let radios= document.querySelectorAll(".form-check-input")
    function filterByCategory() {
        let checked = Array.from(radios).find((button)=> button.checked);
        let categoria =checked.id;
        if(categoria != "all"){
            let filtered = data.filter((annuncio)=> annuncio.category == categoria)
            showCards(filtered);
        }else{
            showCards(data);
        }
                
    }
    filterByCategory()

    // fuori dalla funzione la radios torna node list
    radios.forEach((button)=> {
        button.addEventListener("click", ()=>{
            filterByCategory();
        })
    })


}) 

