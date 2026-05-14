import {
  profileTitle,
  profileDescription,
  initialName,
  descriction,
  openCardFormButton,
  profile,
} from "./utils.js";

export default class Popup {
  constructor(selectorPopup, form) {
    this._form = form;
    this._popup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  openModal() {
    this._popup.classList.add(`popup_is-opened`);
    document.addEventListener("keydown", this._handleEscClose);
  }
  closeModal() {
    this._popup.classList.remove(`popup_is-opened`);
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === `Escape`) {
      this.closeModal();
    }
  }
  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup_is-opened") ||
        evt.target.classList.contains("popup__close")
      ) {
        this.closeModal();
      }
      // this._popup.addEventListener("click", () => {
      //   this._handleEscClose();
      // });
    });
  }
}
