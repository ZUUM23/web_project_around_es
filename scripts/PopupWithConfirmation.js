import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);

    this._confirmationDelete = this._popup.querySelector(
      'button[type="submit"]',
    );
  }
  _setAction(action) {
    this._action = action;
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmationDelete.addEventListener("click", (evt) => {
      evt.preventDefault();

      this._action();
    });
  }
}
