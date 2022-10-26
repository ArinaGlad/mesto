const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
      const popupProfileOpenButton = document.querySelector('.profile__edit');
      const popupAutor = document.querySelector('.popup-autor');
      const popupMesto = document.querySelector('.popup-mesto');
      const popupShading = document.querySelectorAll('.popup');
      const switchesPopup = document.querySelectorAll('.popup__close');
      const formElementAutor = document.querySelector('.popup__form-autor');
      const formElementMesto = document.querySelector('.popup__form-mesto');
      const nameInput = document.querySelector('input[name="name"]');
      const jobInput = document.querySelector('input[name="job"]');
      const placeInput = document.querySelector('input[name="place"]');
      const linkInput = document.querySelector('input[name="link"]');
      const profileName = document.querySelector('.profile__header');
      const profileJob = document.querySelector('.profile__subheader');
      const sectionElements = document.querySelector('.elements');
      const buttonAdd = document.querySelector('.button');
      const cardTemplate = document.querySelector('#card').content;
      const popupImage = document.querySelector('.popup-figure-overlay');
      const popupImageImg = document.querySelector('.popup__img');
      const popupImageText = document.querySelector('.popup__figure-text');

// создание карточки

function createCard (name, link) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const cardElementImg = cardElement.querySelector('.elements__img');
  cardElementImg.src = link;
  cardElementImg.alt = name;
  cardElement.querySelector('.elements__descr').textContent = name;
  return cardElement;
}

function renderCard (element) {
  sectionElements.prepend(element);
}

// построение карточек из массива

initialCards.forEach(item => {
  renderCard(createCard(item.name, item.link));
});

// Открытие попапа
function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closingByEscape);
}

// нажатие на кнопку редактирования данных автора

popupProfileOpenButton.addEventListener('click', () => {
    openPopup(popupAutor);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

// нажатие на кнопку добавления карточки

buttonAdd.addEventListener('click', () => {
    openPopup(popupMesto);
});

// закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closingByEscape);
}

switchesPopup.forEach((item) =>
  item.addEventListener('click', (event) => {
    closePopup(event.target.closest('.popup_opened'));
}));


popupShading.forEach((item) =>
  item.addEventListener('click', (event) => {
    closePopup(event.target);
}));


function closingByEscape(event) {
  if (event.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//изменение данных автора

function submitProfileForm (event) {
    event.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupAutor);
}

formElementAutor.addEventListener('submit', submitProfileForm); 

//лайки

sectionElements.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('like')) {
        event.target.classList.toggle('like_active');
    }
});

//добавление карточки

function addCard (event) {
    event.preventDefault(); 
    renderCard(createCard(placeInput.value, linkInput.value));
    closePopup(popupMesto);
    linkInput.value = '';
    placeInput.value = '';
}

formElementMesto.addEventListener('submit', addCard);

// удаление карточки

sectionElements.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('elements__delete')) {
    event.target.parentElement.remove();
  }
});

// открытие попапа с изображением

sectionElements.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('elements__img')) {
    openPopup(popupImage);
    popupImageImg.src = event.target.src;
    popupImageImg.alt = event.target.nextElementSibling.firstElementChild.textContent;
    popupImageText.textContent = event.target.nextElementSibling.firstElementChild.textContent;
  }
});








