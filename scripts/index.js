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

const openProfile = document.querySelector(".profile__add-button");
const container = document.querySelector(".cards__list");
// declarar
const openModal = (modal) => {
  fillProfileForm();
  // divCard.classList.add(`popup_is-opened`);
  modal.classList.add("popup_is-opened");
};

const closeModal = (modal) => {
  modal.classList.remove(`popup_is-opened`);
};
function handleCardFormSubmit() {
  fillProfileForm();
  openModal(openCardButton);
}

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
openProfile.addEventListener("click", handleCardFormSubmit);
openCardButtonEdit.addEventListener("click", handleOpenEditModal);
closeCardButton.addEventListener("click", () => closeModal(divCard));
closeModalButton.addEventListener("click", () => closeModal(imagemodal));
profileForm.addEventListener("submit", handleProfileFormSubmit);

const handleLike = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
};
// const handlePreviewPicture = (data) => {
//   imageElement.src = data.link;
//   imageElement.alt = data.name;
//   imageCaption.textContent = data.name;
//   openModal(openCardButton);
//   const imageElement = openCardButton.querySelector(".popup__image");
// };

const getCardElement = (
  name = `sin titulo`,
  link = `./images/placeholder.jpg`,
) => {
  const cardElement = template.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = link;
  cardImage.alt = name;
  const like = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = name;

  cardImage.addEventListener("click", (evt) => {
    const data = evt.target;
    console.log(data);

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

const renderCard = (name, link, container) => {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
};

initialCards.forEach((card) => {
  console.log(card);

  renderCard(card.name, card.link, container);
});
