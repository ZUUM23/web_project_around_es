const cardElement = document.querySelector("#image-popup");
const cardsImage = cardElement.querySelector(".popup__image");
const deleteWindow = cardElement.querySelector(".popup__close");
const cardLike = document.querySelector(".card__like-button");
const deleteCard = document.querySelector(".card__delete-button");

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const generationCards = document
      .querySelector("#template")
      .content.querySelector(".card")
      .cloneNode(true);

    return generationCards;
  }
  _cardgeneration() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").style.backgroundImage =
      `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }

  _handleOpenPopup() {
    cardsImage.src = this._link;
    cardElement.classList.add("popup_is-opened");
  }
  _handleClosePopup() {
    cardsImage.src = "";
    cardElement.classList.remove("popup_is-opened");
  }
  _like() {
    console.log("this._like");

    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active");
  }

  _deleteCards() {
    this._element.remove();
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });

    deleteWindow.addEventListener("click", () => {
      this._handleClosePopup();
    });

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._like();
      });
    this._element;

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._deleteCards();
      });
  }
}
