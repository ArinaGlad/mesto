const popupProfileOpenButton = document.querySelector(".profile__edit");
const popupAutor = document.querySelector(".popup-autor");
const popupMesto = document.querySelector(".popup-mesto");
const popupShadingList = document.querySelectorAll(".popup");
const switcherPopupList = document.querySelectorAll(".popup__close");
const formElementAutor = document.querySelector(".popup__form-autor");
const formElementMesto = document.querySelector(".popup__form-mesto");
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const placeInput = document.querySelector('input[name="place"]');
const linkInput = document.querySelector('input[name="link"]');
const profileName = document.querySelector(".profile__header");
const profileJob = document.querySelector(".profile__subheader");
const sectionElements = document.querySelector(".elements");
const buttonAdd = document.querySelector(".button");
const cardTemplate = document.querySelector("#card").content;
const popupImage = document.querySelector(".popup-figure-overlay");
const popupImageImg = document.querySelector(".popup__img");
const popupImageText = document.querySelector(".popup__figure-text");

// создание карточки

function createCard(cards) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  const cardElementImg = cardElement.querySelector(".elements__img");
  const buttonDelete = cardElement.querySelector(".elements__delete");
  const buttonLike = cardElement.querySelector(".like");
  const placeImg = cardElement.querySelector(".elements__img");
  cardElementImg.src = cards.link;
  cardElementImg.alt = cards.name;
  cardElement.querySelector(".elements__descr").textContent = cards.name;
  buttonLike.addEventListener("click", () => handleLikeClick(buttonLike));
  buttonDelete.addEventListener("click", () => removeCardItem(cardElement));
  placeImg.addEventListener("click", handleImgClick);
  return cardElement;
}

function renderCard(element) {
  sectionElements.prepend(element);
}

// построение карточек из массива

initialCards.forEach((item) => {
  renderCard(createCard(item));
});

// Открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closingByEscape);
}

// нажатие на кнопку редактирования данных автора

popupProfileOpenButton.addEventListener("click", () => {
  openPopup(popupAutor);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

// нажатие на кнопку добавления карточки

buttonAdd.addEventListener("click", () => {
  openPopup(popupMesto);
});

// закрытие попапа

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closingByEscape);
}

switcherPopupList.forEach((item) =>
  item.addEventListener("click", (event) => {
    closePopup(event.target.closest(".popup_opened"));
  })
);

popupShadingList.forEach((item) =>
  item.addEventListener("click", (event) => {
    closePopup(event.target);
  })
);

function closingByEscape(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//изменение данных автора

function submitProfileForm(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupAutor);
}

formElementAutor.addEventListener("submit", submitProfileForm);

//лайки

function handleLikeClick(item) {
  item.classList.toggle("like_active");
}

//добавление карточки

function addCard(event) {
  event.preventDefault();
  renderCard(
    createCard({
      name: placeInput.value,
      link: linkInput.value,
    })
  );
  closePopup(popupMesto);
  formElementMesto.reset();
  doInactiveButton(
    { inactiveButtonClass: "popup__button_inactive" },
    formElementMesto.querySelector(".popup__button")
  );
}

formElementMesto.addEventListener("submit", addCard);

// удаление карточки

function removeCardItem(item) {
  item.remove();
}

// открытие попапа с изображением

function handleImgClick(event) {
  openPopup(popupImage);
  popupImageImg.src = event.target.src;
  popupImageImg.alt =
    event.target.nextElementSibling.firstElementChild.textContent;
  popupImageText.textContent =
    event.target.nextElementSibling.firstElementChild.textContent;
}
