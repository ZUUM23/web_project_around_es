initialCards = [
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
const addCardsForm = newtarge.querySelector(".popup__form");
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

const handleLike = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
};

//   imageElement.src = data.link;
//   imageElement.alt = data.name;
//   imageCaption.textContent = data.name;
//   openModal(openCardButton);
//   const imageElement = openCardButton.querySelector(".popup__image");
// };

const getCardElement = (data) => {
  const cardElement = template.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  const like = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;
  console.log(cardTitle);

  cardImage.addEventListener("click", (evt) => {
    const data = evt.target;

    const modalImage = document.querySelector(".popup__image");
    const modalCaption = document.querySelector(".popup__caption");
    const popupClose = document.querySelector(".popup__close");
    modalImage.src = data.src;
    modalImage.alt = data.alt;
    modalCaption.textContent = data.alt;
    openModal(imagemodal);
  });

  like.addEventListener("click", handleLike);
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  return cardElement;
};

const renderCard = (data, container) => {
  const cardElement = getCardElement(data);
  container.prepend(cardElement);
};

initialCards.forEach((card) => {
  renderCard(card, container);
});
