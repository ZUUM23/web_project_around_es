import Card from "./Cards.js";
import Popup from "./popup.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Api from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
export const profileForm = document.querySelector(".popup__form");
import {
  container,
  closeCardFormbutton,
  openCardButton,
  popupCaption,
  form,
  changePhoto,
  newtarge,
  profileImage,
  imageClose,
  cardElement,
  divCard,
  imagemodal,
  deleteCard,
  modalImage,
  cambiarFoto,
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

console.log("hola mnndo");
const template = document
  .querySelector("#template")
  .content.querySelector(".card");

const data = {
  input: ".popup__input",
  inactiveButtonClass: "popupbutton_disabled",
  inputErrorClass: "popupinput_type_error",
  errorClass: "popuperror_visible",
};
const userInfo2 = new UserInfo({
  nameSelector: `.profile__title`,
  workSelector: `.profile__description`,
  avatarSelector: `.profile__image`,
});
const handleCardClick = (name, link) => {
  image.openModal(name, link);
};

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "b5941826-d91b-40a9-a09f-703968f12f07",
    "Content-Type": "application/json",
  },
});
const handleLikeClick = (cardId, isLiked, card) => {
  console.log("mundo");

  if (isLiked === false) {
    api.removeLike(cardId, isLiked).then((res) => {
      console.log("false");
      card.handleLikeCarsdactive(false);
    });
  } else {
    api.likeCardApi(cardId, isLiked).then((res) => {
      console.log("tru");
      card.handleLikeCarsdactive(true);
    });
  }
};
const deleteCards = (cardId, CardElement) => {
  confirmationOfDelete._setAction(() => {
    api.deleteCardsApi(cardId).then(() => {
      CardElement.remove();
      confirmationOfDelete.closeModal();
    });
  });
  confirmationOfDelete.openModal();
};
let cardSection;
api.getInitialCards().then((res) => {
  cardSection = new Section(`.cards__list`, {
    items: res,
    renderer: (item) => {
      const initialCard = new Card(
        item,
        "#template",
        handleCardClick,
        deleteCards,
        handleLikeClick,
      );
      return initialCard.cardgeneration();
    },
  });
  console.log("datos de tarjeta", res);
  cardSection.containerItem();
});

api.getUserInfo().then((userData) => {
  console.log("Datos del usuario:", userData);
});

//espacio
openCardButtonEdit.addEventListener("click", () => {
  const profileEditUser = userInfo2.getUserInfo();
  const nameInput = document.querySelector('#edit-popup input[name="name"]');
  const workInput = document.querySelector(
    '#edit-popup input[name="description"]',
  );
  nameInput.value = profileEditUser.name;
  workInput.value = profileEditUser.workUser;
  profilePopup.openModal(openCardButton);
});

openCardFormButton.addEventListener("click", () => {
  addNewCardPage.openModal(newtarge);
  // popupEjemplo.openModal(newtarge);
});

imageClose.addEventListener("click", () => {
  image.closeModal(imagemodal);
});
const addNewCardPage = new PopupWithForm("#new-card-popup", (formData) => {
  addNewCardPage.buttomLoading(true);
  api
    .addSendLetter({
      name: formData["place-name"],
      link: formData["link"],
    })
    .then((item) => {
      const newCard = new Card(
        item,
        "#template",
        handleCardClick,
        deleteCards,
        handleLikeClick,
      );
      cardSection.addItem(newCard.cardgeneration());
      addNewCardPage.closeModal();
    })
    .finally(() => {
      addNewCardPage.buttomLoading(false);
    });
});
const profilePopup = new PopupWithForm("#edit-popup", (data) => {
  profilePopup.buttomLoading(true);
  api
    .profileUpdateUser({
      name: data["name"],
      about: data["description"],
    })
    .then((userData) => {
      userInfo2.setUserInfo(
        { name: data.name, workUser: data.description },
        userData,
      );
    });
  api
    .profileUpdateUser({ name: data["name"], about: data["description"] })
    .finally(() => {
      profilePopup.buttomLoading(false);
    });
  profilePopup.closeModal();
});

changePhoto.addEventListener("click", () => {
  addFhotoProfile.openModal(cambiarFoto);
});

const addFhotoProfile = new PopupWithForm(
  "#cambiar_foto",

  (datos) => {
    addFhotoProfile.buttomLoading(true);
    api
      .updateProfilePicture({ avatar: datos["avatar"] })
      .then((userData) => {
        profileImage.src = userData.avatar;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        addFhotoProfile.buttomLoading(true);
      });
    addFhotoProfile.closeModal();
  },
);
const confirmationOfDelete = new PopupWithConfirmation("#confirmation__delete");

const image = new PopupWithImage("#image-modal", modalImage, popupCaption);

const profileFormValidator = new FormValidator(data, profileForm);
const cardFormValidator = new FormValidator(data, addCardsForm);
addNewCardPage.setEventListeners();
confirmationOfDelete.setEventListeners();
profilePopup.setEventListeners();

addFhotoProfile.setEventListeners();
image.setEventListeners();
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
