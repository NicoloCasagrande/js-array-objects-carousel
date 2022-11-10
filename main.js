"use strict";

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// seleziono il contenitore delle mie immagini
const slider = document.getElementById('image-container');
const blockImg = document.getElementById('sub-image-container');
slider.addEventListener('mouseenter', function(){
    clearInterval(autoplay);
});

slider.addEventListener('mouseleave', function(){
   autoplay = setInterval(nextSlide, 5000);
});

let i = 0;
// creo l'aray in cui dovro inserire la stringa con gli src delle immagini
images.forEach(element => {
    const divCreation = document.createElement(`div`);
    divCreation.classList.add('slide');
    divCreation.innerHTML = `<img src="${element.image}" alt="">`;
    divCreation.setAttribute('divId',i);
    const titleCreation = document.createElement('h3');
    titleCreation.innerHTML = element.title;
    const textCreation = document.createElement('p');
    textCreation.innerHTML = element.text;
    divCreation.append(titleCreation);
    divCreation.append(textCreation);
    slider.append(divCreation);
    i++;
});

i = 0;

images.forEach(element => {
    const divCreation = document.createElement(`div`);
    divCreation.classList.add('inactive-img');
    divCreation.innerHTML = `<img src="${element.image}" alt="">`;
    divCreation.setAttribute('divId',i);
    divCreation.addEventListener("click", onClickSlide);
    blockImg.append(divCreation);
    i++;
});

console.log(images);

// seleziono il primo div e gli attribuisco la classe active
document.querySelector('.slide').classList.add('active');
document.querySelector('.inactive-img').classList.add('active-img');

let active = 0;

const up = document.getElementById('arrow-up');
const down = document.getElementById('arrow-down');

// con questa funzione, al click della freccia up rimuovo la classe active all'elemento attivo, creo un ciclo if per azzerare il contatore se siamo sull'ultima foto e poi applico la classe active al successivo elemento
up.addEventListener('click', prevSlide);
up.addEventListener('click', function(){
    clearInterval(autoplay);
});

// con questa funzione, al click della freccia up rimuovo la classe active all'elemento attivo, creo un ciclo if per azzerare il contatore se siamo sull'ultima foto e poi applico la classe active al successivo elemento
down.addEventListener('click', nextSlide);
down.addEventListener('click', function(){
    clearInterval(autoplay);
});

let autoplay = setInterval(nextSlide, 5000);

function nextSlide(){
    // images[active].classList.remove('active');
    const activeSlide = document.querySelector(`.active`);
    const activeSubSlide = document.querySelector(`.active-img`);
    activeSlide.classList.remove('active');
    activeSubSlide.classList.remove('active-img');
    if(active === images.length - 1){
        active = 0;
    }else{
        active++;
    }
    slideSlide();
}

function prevSlide(){
    // images[active].classList.remove('active');
    const activeSlide = document.querySelector(`.active`);
    const activeSubSlide = document.querySelector(`.active-img`);
    activeSlide.classList.remove('active');
    activeSubSlide.classList.remove('active-img');
    if(active===0){
        active = images.length - 1;
    }else{
        active--;
    }
    slideSlide();
    
}

function onClickSlide(){
    const activatedSlide = this;
    console.log(activatedSlide);
    const activeSlide = document.querySelector('.slide.active');
    const activeSubSlide = document.querySelector('.inactive-img.active-img');
    console.log(activeSlide);
    activeSlide.classList.remove('active');
    activeSubSlide.classList.remove('active-img');
    const activatedSlideId = activatedSlide.getAttribute('divId');
    console.log(activatedSlideId);

    const arrayImages = document.querySelectorAll('.slide');
    const subArrayImages = document.querySelectorAll('.inactive-img');
    console.log(arrayImages[activatedSlideId]);
    arrayImages[activatedSlideId].classList.add('active');
    subArrayImages[activatedSlideId].classList.add('active-img');
    active = activatedSlideId;
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, 5000);
}

function slideSlide(){
    const arrayImages = document.querySelectorAll('.slide');
    const subArrayImages = document.querySelectorAll('.inactive-img');
    let index = 0;
    let trovato = false;
    while(trovato === false){
        const checkImages = arrayImages[index];
        const checkSubImages = subArrayImages[index];
        const checkImagesId = Number(checkImages.getAttribute('divId'));
        if(checkImagesId === active){
            checkImages.classList.add('active');
            checkSubImages.classList.add('active-img');
            trovato = true;
        }
        index++;
    }
}