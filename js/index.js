document.addEventListener('DOMContentLoaded', () => {

      const editAuthor = document.querySelector('.profile__edit');
      const popupAutor = document.querySelector('.popup-autor');
      const popupMesto = document.querySelector('.popup-mesto');
      const closersPopup = document.querySelectorAll('.popup__close');
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


// открытие попапа редактирования данных автора

editAuthor.addEventListener('click', function() {
    popupAutor.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

// открытие попапа  сдобавление карточки

buttonAdd.addEventListener('click', function() {
    popupMesto.classList.add('popup_opened');
});

// закрытие попапа
function closePopup (item) {
  item.addEventListener('click', (event) => {
    event.target.closest('.popup_opened').classList.remove('popup_opened');
});
}

closersPopup.forEach(closePopup);

//изменение данных автора

function formSubmitHandler (event) {
    event.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popupAutor.classList.remove('popup_opened');
}

formElementAutor.addEventListener('submit', formSubmitHandler); 

//лайки

sectionElements.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('like')) {
        event.target.classList.toggle('like_active');
    }
});

//добавление карточки

function formAddCard (event) {
    event.preventDefault(); 

    let cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    cardElement.querySelector('.elements__img').src = linkInput.value;
    cardElement.querySelector('.elements__img').alt = placeInput.value;
    cardElement.querySelector('.elements__descr').textContent = placeInput.value;
    sectionElements.prepend(cardElement);
    popupMesto.classList.remove('popup_opened');
}

formElementMesto.addEventListener('submit', formAddCard);

// удаление карточки

sectionElements.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('elements__delete')) {
    event.target.parentElement.remove();
  }
});

// открытие попапа с изображением

sectionElements.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('elements__img')) {
    popupImage.classList.add('popup_opened');
    document.querySelector('.popup__img').src = event.target.src;
    document.querySelector('.popup__img').alt = event.target.nextElementSibling.firstElementChild.textContent;
    document.querySelector('.popup__figure-text').textContent = event.target.nextElementSibling.firstElementChild.textContent;
  }
});

// построение карточек на странице

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

initialCards.forEach(item => {
  let cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  cardElement.querySelector('.elements__img').src = `${item.link}`;
  cardElement.querySelector('.elements__img').alt = `${item.name}`;
  cardElement.querySelector('.elements__descr').textContent = `${item.name}`;
  sectionElements.append(cardElement);
});

});





