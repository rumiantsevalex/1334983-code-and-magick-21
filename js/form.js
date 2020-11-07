'use strict';

// Валидируем форму
(function () {
  let userNameInput = document.querySelector(`.setup-user-name`);
  let MIN_NAME_LENGTH = 2;
  let MAX_NAME_LENGTH = 25;

  userNameInput.addEventListener(`input`, function () {
    let valueLength = userNameInput.value.length;

    if (valueLength < MIN_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Осталось ` + (MIN_NAME_LENGTH - valueLength) + ` символов`);
    } else if (valueLength > MAX_NAME_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ` + (MIN_NAME_LENGTH - valueLength) + ` символов`);
    } else {
      userNameInput.setCustomValidity(``);
    }
  });

  const form = document.querySelector(`.setup-wizard-form`);
  form.addEventListener(`submit`, function (evt) {
    window.backend.save(new FormData(form), function () {
      window.characterSetup.classList.add(`hidden`);
    });
    evt.preventDefault();
  });
})();
