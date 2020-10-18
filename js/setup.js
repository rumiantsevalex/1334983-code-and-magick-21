'use strict';

// Настраиваем открытие и закрытие окна настройки персонажа
let characterSetup = document.querySelector(`.setup`);
let setupOpen = document.querySelector(`.setup-open`);
let setupClose = document.querySelector(`.setup-close`);

let setupEscClose = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    characterSetup.classList.add(`hidden`);
  }
};

let openSetup = function () {
  characterSetup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, setupEscClose);
};

let closeSetup = function () {
  characterSetup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, setupEscClose);
};

setupOpen.addEventListener(`click`, function () {
  openSetup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    openSetup();
  }
});

setupClose.addEventListener(`click`, function () {
  closeSetup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    closeSetup();
  }
});

// Валидируем форму
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

// исходные данные персонажей для генерации
let WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
let WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
let COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
let EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
let FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

// создаем массив с рандомными персонажами
let WIZARDS_AMOUNT = 4;
let wizards = [];

let generateWizards = function () {
  for (let i = 0; i < WIZARDS_AMOUNT; i++) {
    wizards[i] = {
      name: WIZARD_NAMES[[Math.floor(Math.random() * WIZARD_NAMES.length)]] + ` ` + WIZARD_SURNAMES[[Math.floor(Math.random() * WIZARD_SURNAMES.length)]],
      coatColor: COAT_COLORS[[Math.floor(Math.random() * COAT_COLORS.length)]],
      eyesColor: EYES_COLORS[[Math.floor(Math.random() * EYES_COLORS.length)]]
    };
  }
  return wizards;
};

generateWizards();

// генерируем персонажа
let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

// создаем фрагмент с персонажами
let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// открываем похожих персонажей
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

// Меняем цвет глаз
let wizardEyes = document.querySelector(`.wizard-eyes`);

wizardEyes.addEventListener(`click`, function () {
  wizardEyes.style.fill = EYES_COLORS[[Math.floor(Math.random() * EYES_COLORS.length)]];
});

// Меняем цвет мантии
let wizardCoat = document.querySelector(`.wizard-coat`);

wizardCoat.addEventListener(`click`, function () {
  wizardCoat.style.fill = COAT_COLORS[[Math.floor(Math.random() * COAT_COLORS.length)]];
});

// Меняем цвет фаербола
let wizardFireball = document.querySelector(`.setup-fireball-wrap`);

wizardFireball.addEventListener(`click`, function () {
  wizardFireball.style.backgroundColor = FIREBALL_COLORS[[Math.floor(Math.random() * FIREBALL_COLORS.length)]];
});
