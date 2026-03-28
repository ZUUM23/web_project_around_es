const showInputError = (element, errormensaje) => {
  const errorElement = document.querySelector(`.${element.id}-input-error`);
  errorElement.textContent = errormensaje;
  errorElement.classList.add("popup__input_type_error");
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (element) => {
  const errorElement = document.querySelector(`.${element.id}-input-error`);
  errorElement.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__input-error_active");
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
  });
});

form.addEventListener("input", () => {
  if (form.checkValidity()) {
    validProfile.disabled = false;
  } else {
    validProfile.disabled = true;
  }
});

inputs2.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
  });
});

forElement.addEventListener("input", () => {
  if (forElement.checkValidity()) {
    validButton.disabled = false;
  } else {
    validButton.disabled = true;
  }
});

const enableValidation = (configData) => {
  (showInputError, hideInputError);
};
