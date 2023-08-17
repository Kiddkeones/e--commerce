//Funciones NavBar

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})




//Constantes Toggle Titles
const toggleDescription = document.querySelector(".title-description")
const toggleAdditionalInformation = document.querySelector(".title-additional-information")
const toggleReviews = document.querySelector(".title-reviews")

// Constantes contenido Texto
const contentDescriprion = document.querySelector(".text-description")
const contentAddiotionalInformation = document.querySelector(".text-additional-information")
const contentreviews = document.querySelector(".text-reviews")

//funciones toggle

toggleDescription.addEventListener("click", () =>{
    contentDescriprion.classList.toggle("hidden");
});

toggleAdditionalInformation.addEventListener("click", () =>{
    contentAddiotionalInformation.classList.toggle("hidden");
});

toggleReviews.addEventListener("click", () =>{
    contentreviews.classList.toggle("hidden");
});

