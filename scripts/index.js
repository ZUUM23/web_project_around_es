initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https: practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: " https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: " Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: " Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
initialCards.forEach(function (card) {
  console.log(card.name);
});

const openCardButtonEdit = document.querySelector(".profile__edit-button");
const divCard = document.querySelector(".popup");
const openCardButton = document.querySelector("#edit-popup");
const closeCardButton = openCardButton.querySelector(".popup__close-button");

const openModal = (modal) => {
  divCard.classList.add(`popup_is-opened`);
};

const closeModal = (modal) => {
  divCard.classList.remove(`popup_is-opened`);
};

openCardButtonEdit.addEventListener("click", openModal(openCardButton));
closeCardButton.addEventListener("click", closeModal(openCardButton));
