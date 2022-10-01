const editAuthor = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
// Находим форму в DOM
const formElement = document.querySelector('.popup__container');
// Находим поля формы в DOM
const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__subheader');

editAuthor.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});

nameInput.setAttribute('placeholder', `${profileName.textContent}`);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened');

}

formElement.addEventListener('submit', formSubmitHandler); 