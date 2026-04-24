import {
  profileTitle,
  profileDescription,
  initialName,
  descriction,
  openCardFormButton,
  profile,
} from "./utils.js";

export default class Popup {
  constructor(selectorPopup) {
    this._Popup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  openModal() {
    this._Popup.classList.add(`popup_is-opened`);
    document.addEventListener("keydown", this._handleEscClose);
  }
  closemodal() {
    this._Popup.classList.remove(`popup_is-opened`);
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === `Escape`) {
      this.closemodal();
    }
  }
  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (
        evt.target.classList("popup_is-opened") ||
        evt.target.classList("popup__close")
      ) {
        this.closemodal();
      }
      this._popup.addEventListener("keyup", () => {
        _handleEscClose();
      });
    });
  }
}
