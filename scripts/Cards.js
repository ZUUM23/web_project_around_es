import {
  cardElement,
  modalImage,
  closeCardFormbutton,
  cardLike,
  deleteCard,
} from "./utils.js";

export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
        console.log(this._handleCardClick);
        this._handleCardClick(this._name, this._link);
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
