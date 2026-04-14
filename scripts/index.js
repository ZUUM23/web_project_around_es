import Card from "./Cards.js";
import FormValidator from "./FormValidator.js";

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
const openCardButtonEdit = document.querySelector(".profile__edit-button");
const divCard = document.querySelector(".popup");
const openCardButton = document.querySelector("#edit-popup");
const imagemodal = document.querySelector("#image-modal");
const profileForm = document.querySelector(".popup__form");
const closeCardButton = openCardButton.querySelector(".popup__close-button");
const closeModalButton = document.querySelector(".popup__close");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const initialName = document.querySelector(".popup__input_type_name");
const descriction = document.querySelector(".popup__input_type_description");
const newtarge = document.querySelector("#new-card-popup");
const closeCardFormbutton = newtarge.querySelector(".popup__close");
const profile = document.querySelector(".profile");
const openCardFormButton = profile.querySelector(".profile__add-button");

const container = document.querySelector(".cards__list");
const cardImage = document.querySelector(".card__image");

const addCardsForm = newtarge.querySelector(".popup__form");
const form = document.querySelector(".popup__form");
// const inputs = form.querySelectorAll(".popup__input");
const forElement = document.querySelector("#new-card-form");
// const inputs2 = forElement.querySelectorAll(".popup__input");
const validButton = forElement.querySelector(".popup__button");
const validProfile = document.querySelector(".popup__button");
const halfpage = document.querySelectorAll(".popup");
const modalImage = document.querySelector(".popup__image");
const data = {
  input: ".popup__input",
  inactiveButtonClass: "popupbutton_disabled",
  inputErrorClass: "popupinput_type_error",
  errorClass: "popuperror_visible",
};

// declarar
const openModal = (modal) => {
  fillProfileForm();
  modal.classList.add("popup_is-opened");
};

const closeModal = (modal) => {
  modal.classList.remove(`popup_is-opened`);
};

openCardFormButton.addEventListener("click", (evt) => {
  openModal(newtarge);
});

function fillProfileForm() {
  const currentName = profileTitle.textContent;
  const currentDescription = profileDescription.textContent;

  initialName.value = currentName;
  descriction.value = currentDescription;
  if (form.checkValidity()) {
    validProfile.disabled = false;
  } else {
    validProfile.disabled = true;
  }
}
function handleOpenEditModal() {
  fillProfileForm();
  openModal(openCardButton);
}

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  const newName = initialName.value;
  const newdescription = descriction.value;

  profileTitle.textContent = newName;
  profileDescription.textContent = newdescription;
  closeModal(openCardButton);
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const nameForm = document.querySelector(".popup__input_type_card-name");
  const linkForm = document.querySelector(".popup__input_type_url");

  renderCard(
    {
      name: nameForm.value,
      link: linkForm.value,
    },
    container,
  );

  closeModal(newtarge);
  addCardsForm.reset();
};

openCardButtonEdit.addEventListener("click", handleOpenEditModal);
closeCardButton.addEventListener("click", () => closeModal(divCard));
closeCardFormbutton.addEventListener("click", () => closeModal(newtarge));
addCardsForm.addEventListener("submit", handleCardFormSubmit);
closeModalButton.addEventListener("click", () => closeModal(imagemodal));
profileForm.addEventListener("submit", handleProfileFormSubmit);

window.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closeModal(imagemodal);
    closeModal(newtarge);
    closeModal(openCardButton);
  }
});

window.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeModal(imagemodal);
    closeModal(newtarge);
    closeModal(openCardButton);
    enableValidation(configData);
  }
});

const renderCard = (data, container) => {
  const card = new Card(data, ".template");
  const cardNew = card._cardgeneration();
  document.querySelector(".cards__list").append(cardNew);
  console.log(cardNew);
};

initialCards.forEach((card) => {
  renderCard(card, container);
});

const profileFormValidator = new FormValidator(data, profileForm);
const cardFormValidator = new FormValidator(data, addCardsForm);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
