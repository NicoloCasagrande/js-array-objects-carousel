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
let i = 0;
// creo l'aray in cui dovro inserire la stringa con gli src delle immagini
images.forEach(element => {
    const divCreation = document.createElement(`div`);
    divCreation.classList.add('slide');
    divCreation.innerHTML = `<img src="${element.image}" alt="">`;
    divCreation.setAttribute('divId',i);
    slider.append(divCreation);
    i++;
});

console.log(images);

// console.log(img);

// // creo i div in cui andro a inserire le immagini
// for (let i = 0; i < img.length; i++) {
//     const divCreation = document.createElement(`div`);
//     divCreation.classList.add('slide');
//     divCreation.innerHTML = `<img src="${img[i]}" alt="">`;
//     slider.append(divCreation);
// }

// seleziono il primo div e gli attribuisco la classe active
document.querySelector('.slide').classList.add('active');

let active = 0;

const up = document.getElementById('arrow-up');
const down = document.getElementById('arrow-down');

// creo un array contenente tutti i div con classe slide
var elements = document.querySelectorAll('.slide');

// con questa funzione, al click della freccia up rimuovo la classe active all'elemento attivo, creo un ciclo if per azzerare il contatore se siamo sull'ultima foto e poi applico la classe active al successivo elemento
up.addEventListener('click', nextSlide);

// con questa funzione, al click della freccia up rimuovo la classe active all'elemento attivo, creo un ciclo if per azzerare il contatore se siamo sull'ultima foto e poi applico la classe active al successivo elemento
down.addEventListener('click', prevSlide);

let autoplay = setInterval(nextSlide, 3000);

function nextSlide(){
    // images[active].classList.remove('active');
    const activeSlide = document.querySelector(`.active`);
    activeSlide.classList.remove('active');
    console.log(activeSlide);
    if(active === images.length - 1){
        active = 0;
    }else{
        active++;
    }
    
    const arrayImages = document.querySelectorAll('.slide');
    for (let i = 0; i < images.length; i++) {
        const checkImages = arrayImages[i];
        const checkImagesId = Number(checkImages.getAttribute('divId'));
        if(checkImagesId === active){
            checkImages.classList.add('active');
        }
    }
}

function prevSlide(){
    // images[active].classList.remove('active');
    const activeSlide = document.querySelector(`.active`);
    activeSlide.classList.remove('active');
    console.log(activeSlide);
    if(active===0){
        active = images.length - 1;
    }else{
        active--;
    }
    const arrayImages = document.querySelectorAll('.slide');
    for (let i = 0; i < images.length; i++) {
        const checkImages = arrayImages[i];
        const checkImagesId = Number(checkImages.getAttribute('divId'));
        if(checkImagesId === active){
            checkImages.classList.add('active');
        }
    }
}

slider.addEventListener('mouseenter', function(){
    clearInterval(autoplay);
});

slider.addEventListener('mouseleave', function(){
    autoplay = setInterval(nextSlide, 3000);
});