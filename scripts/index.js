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
  profileImage,
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

// const initialCards = [
//   {
//     name: "Valle de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: " https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
//   },
//   {
//     name: " Montañas Calvas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
//   },
//   {
//     name: "Parque Nacional de la Vanoise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
//   },
//   {
//     name: " Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
//   },
//   {
//     name: " Lago de alaska",
//     link: "https://images.unsplash.com/photo-1694537820343-d7c364b18593?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFnbyUyMGFsYXNrYXxlbnwwfHwwfHx8MA%3D%3D",
//   },
// ];
console.log("res");
const template = document
  .querySelector("#template")
  .content.querySelector(".card");

const data = {
  input: ".popup__input",
  inactiveButtonClass: "popupbutton_disabled",
  inputErrorClass: "popupinput_type_error",
  errorClass: "popuperror_visible",
};

//espacio

fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
  method: "GET",
  headers: {
    authorization: "b5941826-d91b-40a9-a09f-703968f12f07",
    "Content-Type": "application/json",
  },
})
  .then((result) => {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Error: ${result.status}`);
  })
  .then((dataUser) => {
    console.log("datos de usuario ", dataUser);
    profileTitle.textContent = dataUser.name;
    profileDescription.textContent = dataUser.about;
    profileImage.src = dataUser.avatar;
  })
  .catch((error) => {
    console.log("error", error);
  });

fetch("https://around-api.es.tripleten-services.com/v1/cards", {
  // method: "GET",
  headers: {
    authorization: "b5941826-d91b-40a9-a09f-703968f12f07",
  },
})
  .then((resultado) => {
    if (resultado.ok) {
      return resultado.json();
    }
    return Promise.reject(`err: ${resultado.status}`);
  })
  .then((cardNewApi) => {
    console.log(cardNewApi[0]);
    const cardOfSection = new Section(
      {
        items: cardNewApi,
        renderer: renderCard,
      },
      `.cards__list`,
    );
    cardOfSection.containerItem();
  })
  .catch((err) => {
    console.log(`no pusistes bien la nueva tarjeta:`, err);
    return err;
  });

//espacio
openCardButtonEdit.addEventListener("click", () => {
  const profileEditUser = userInfo2.getUserInfo();
  const nameInput = document.querySelector('#edit-popup input[name="name"]');
  const workInput = document.querySelector(
    '#edit-popup input[name="description"]',
  );
  nameInput.value = profileEditUser.name;
  console.log("Datos obtenidos:", profileEditUser);
  workInput.value = profileEditUser.workUser;
  editProfilePopup.openModal(openCardButton);
});

openCardFormButton.addEventListener("click", () => {
  addNewCardPage.openModal(newtarge);
  // popupEjemplo.openModal(newtarge);
});

imageClose.addEventListener("click", () => {
  image.closeModal(imagemodal);
});

const handleCardClick = (name, link) => {
  image.openModal(name, link);
};
const renderCard = (data, container) => {
  const card = new Card(data, "#template", handleCardClick);
  const cardNew = card._cardgeneration();
  document.querySelector(".cards__list").prepend(cardNew);
  console.log(cardNew);
  return cardNew;
};

// const nuevSection = new Section(
//   { items: initialCards, renderer: renderCard },
//   ".cards__list",
// );
// const popupEj = new Popup("#edit-popup");
// const popupEjemplo = new Popup("#new-card-popup");
const addNewCardPage = new PopupWithForm("#new-card-popup", (formData) => {
  const newCar = renderCard({
    name: formData["place-name"],
    link: formData["link"],
  });

  addNewCardPage.closeModal();
});
const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
  console.log("se esta ejecutando");
  userInfo2.setUserInfo({
    name: data.name,
    workUser: data.description,
  });
  editProfilePopup.closeModal();
});
const image = new PopupWithImage("#image-modal", modalImage, popupCaption);
// initialCards.forEach((card) => {
//   renderCard(card, container);
// });
const userInfo2 = new UserInfo({
  nameSelector: `.profile__title`,
  workSelector: `.profile__description`,
});
const profileFormValidator = new FormValidator(data, profileForm);
const cardFormValidator = new FormValidator(data, addCardsForm);
editProfilePopup.setEventListeners();
addNewCardPage.setEventListeners();
image.setEventListeners();
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
