const showInputError = (
  parameters,
  formElement,
  inputElement,
  errorMessage
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(parameters.inputErrorClass);
  errorElement.classList.add(parameters.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (parameters, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(parameters.inputErrorClass);
  errorElement.classList.remove(parameters.errorClass);
  errorElement.textContent = "";
};

const isValid = (parameters, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      parameters,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(parameters, formElement, inputElement);
  }
};

const setEventListeners = (parameters, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(parameters.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    parameters.submitButtonSelector
  );
  toggleButtonState(parameters, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(parameters, formElement, inputElement);
      toggleButtonState(parameters, inputList, buttonElement);
    });
  });
};

const enableValidation = (parameters) => {
  const formList = Array.from(
    document.querySelectorAll(parameters.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(parameters, formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const doInactiveButton = (parameters, buttonElement) => {
  buttonElement.classList.add(parameters.inactiveButtonClass);
  buttonElement.disabled = true;
};

const toggleButtonState = (parameters, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    doInactiveButton(parameters, buttonElement);
  } else {
    buttonElement.classList.remove(parameters.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__str",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__str_type_error",
  errorClass: "popup__str-error_active",
});
