export default class FormValidator {
  constructor(data, formElement) {
    this._inputSelector = data.input;
    this._submitButtonSelector = ".popup__button";
    this._errorMessage = "popup__input_type_error";
    this._messageError = "popup__input-error_active";
    this._inactiveButtonClass = data.inactiveButtonClass;
    // this._inputErrorClass = data.inputErrorClass;
    // this._errorClass = data.errorClass;

    this._formElement = formElement;
  }

  _showInputError(element, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${element.id}-input-error`,
    );

    element.classList.add(this._errorMessage);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._messageError);
  }

  _hideInputError(element) {
    const errorElement = this._formElement.querySelector(
      `.${element.id}-input-error`,
    );

    element.classList.remove(this._errorMessage);
    errorElement.textContent = "";
    errorElement.classList.remove(this._messageError);
  }

  _checkInputValidity(element) {
    console.log(element.validity.valid);

    if (!element.validity.valid) {
      this._showInputError(element, element.validationMessage);
    } else {
      this._hideInputError(element);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((element) => !element.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector),
    );

    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector,
    );

    this._toggleButtonState();

    this._inputList.forEach((element) => {
      element.addEventListener("input", () => {
        this._checkInputValidity(element);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}
