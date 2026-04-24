import Card from "./Cards.js";
import Popup from "./popup.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

export const profileForm = document.querySelector(".popup__form");
import {
  container,
  closeCardFormbutton,
  openCardButton,
  popupCaption,
  form,
  newtarge,
  imageClose,
  cardElement,
  divCard,
  imagemodal,
  modalImage,
  validProfile,
  profileTitle,
  profileDescription,
  initialName,
  descriction,
  closeModalButton,
  closeCardButton,
  openCardButtonEdit,
  addCardsForm,
  openCardFormButton,
  profile,
} from "./utils.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
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
  {
    name: " Lago de alaska",
    link: "https://images.unsplash.com/photo-1694537820343-d7c364b18593?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnbyUyMGFsYXNrYXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const template = document
  .querySelector("#template")
  .content.querySelector(".card");

const data = {
  input: ".popup__input",
  inactiveButtonClass: "popupbutton_disabled",
  inputErrorClass: "popupinput_type_error",
  errorClass: "popuperror_visible",
};

openCardButtonEdit.addEventListener("click", () => {
  popupEj.openModal(openCardButton);
});
closeCardButton.addEventListener("click", () => {
  popupEj.closemodal(openCardButton);
});
openCardFormButton.addEventListener("click", () => {
  popupEjemplo.openModal(newtarge);
});
closeCardFormbutton.addEventListener("click", () => {
  popupEjemplo.closemodal(newtarge);
});
imageClose.addEventListener("click", () => {
  image.closemodal(imagemodal);
});

const handleCardClick = (name, link) => {
  image.openModal(name, link);
};
const renderCard = (data, container) => {
  const card = new Card(data, ".template", handleCardClick);
  const cardNew = card._cardgeneration();
  document.querySelector(".cards__list").prepend(cardNew);
  console.log(cardNew);
};

const nuevSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list",
);
const popupEj = new Popup("#edit-popup");
const popupEjemplo = new Popup("#new-card-popup");

const image = new PopupWithImage("#image-modal", modalImage, popupCaption);
initialCards.forEach((card) => {
  renderCard(card, container);
});
const userInfo2 = new UserInfo({
  nameSelector: `profile__title`,
  workSelector: `profile__description`,
});
const profileFormValidator = new FormValidator(data, profileForm);
const cardFormValidator = new FormValidator(data, addCardsForm);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
