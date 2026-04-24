import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(handleForm) {
    super(selectorPopup);
    this._handleForm = handleForm;
    this._submitForm = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }
  _getInputValues() {
    const formularioValue = [];
    this._inputList.array.forEach((input) => {
      formularioValue[input.name] = input.value;
    });
    return formularioValue;
  }
  setEventListeners() {
    super.setEventListeners();
    this._submitForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._closeEscapeModal(this._getInputValues);
    });
  }
  close() {
    super.closeModal();
    this._submitForm.reset();
  }
}
