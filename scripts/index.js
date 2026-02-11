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
const profileForm = document.querySelector(".popup__form");
const closeCardButton = openCardButton.querySelector(".popup__close-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const initialName = document.querySelector(".popup__input_type_name");
const descriction = document.querySelector(".popup__input_type_description");

const openProfile = document.querySelector(".profile__add-button");

const container = document.querySelector(".cards__list");
// declarar
const openModal = (modal) => {
  fillProfileForm();
  divCard.classList.add(`popup_is-opened`);
};

const closeModal = (modal) => {
  divCard.classList.remove(`popup_is-opened`);
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
closeCardButton.addEventListener("click", closeModal);
profileForm.addEventListener("submit", handleProfileFormSubmit);

const handleLike = (evt) => {
  evt.target.classList.toggle("card__like-button_is-active");
};

const getCardElement = (
  name = `sin titulo`,
  link = `./images/placeholder.jpg`,
) => {
  const cardElement = template.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const like = document.querySelector(".card__like-button");
  cardImage.src = link;
  cardImage.alt = name;

  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = name;

  like.addEventListener("click", handleLike);
  console.log(cardElement);

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
