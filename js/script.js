const edit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');


edit.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});