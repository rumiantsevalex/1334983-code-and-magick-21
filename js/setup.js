'use strict';

// исходные данные персонажей для генерации
(function () {
  let WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  let WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

  let similarListElement = document.querySelector(`.setup-similar-list`);
  let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

  // создаем массив с рандомными персонажами
  let WIZARDS_AMOUNT = 4;
  let wizards = [];

  let generateWizards = function () {
    for (let i = 0; i < WIZARDS_AMOUNT; i++) {
      wizards[i] = {
        name: WIZARD_NAMES[[Math.floor(Math.random() * WIZARD_NAMES.length)]] + ` ` + WIZARD_SURNAMES[[Math.floor(Math.random() * WIZARD_SURNAMES.length)]],
        coatColor: window.COAT_COLORS[[Math.floor(Math.random() * window.COAT_COLORS.length)]],
        eyesColor: window.EYES_COLORS[[Math.floor(Math.random() * window.EYES_COLORS.length)]]
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
})();
