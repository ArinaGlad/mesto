const editAuthor = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('input[name="name"]');
const jobInput = popup.querySelector('input[name="job"]');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__subheader');

editAuthor.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

function formClosure () {
        popup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', formClosure);

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 