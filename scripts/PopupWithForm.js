import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(selectorPopup, handleForm) {
    super(selectorPopup);
    this._handleForm = handleForm;

    this._form = this._popup.querySelector("form");
    this._submitForm = this._form;
  }
  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".popup__input");
    const formularioValue = [];
    this._inputList.forEach((input) => {
      formularioValue[input.name] = input.value;
    });
    return formularioValue;
  }
  setEventListeners() {
    super.setEventListeners();
    // console.log("se esta dectetando los click de los eventos");
    this._form.addEventListener("submit", (evt) => {
      // console.log("se esta enviando");
      evt.preventDefault();
      this._handleForm(this._getInputValues());
    });
  }
  close() {
    super.closeModal();
    this._submitForm.reset();
  }
}
