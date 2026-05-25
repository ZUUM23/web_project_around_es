import {
  cardElement,
  modalImage,
  closeCardFormbutton,
  cardLike,
  deleteCard,
} from "./utils.js";

export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    deleteCards,
    handleLikeCards,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._idForIdentify = data._id;
    console.log(data);
    this._isLiked = data.isLiked;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCards = deleteCards;
    this.handleLikeCards = handleLikeCards;
  }
  _getTemplate() {
    const generationCards = document
      .querySelector("#template")
      .content.querySelector(".card")
      .cloneNode(true);

    return generationCards;
  }
  handleLikeCarsdactive(newIsLiked) {
    this._isLiked = newIsLiked;
    console.log("negro");

    this._like();
  }

  _like() {
    console.log(this._likeButton);
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
    console.log("this._like");
  }
  cardgeneration() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._setEventListeners();

    this._element.querySelector(".card__image").style.backgroundImage =
      `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;
    this._like();

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });

    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this.handleLikeCards(this._idForIdentify, this._isLiked, this);
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._deleteCards(this._idForIdentify, this._element);
      });
  }
}
