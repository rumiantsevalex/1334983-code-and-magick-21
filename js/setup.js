'use strict';

let characterSetup = document.querySelector(`.setup`);

characterSetup.classList.remove(`hidden`);

let WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
let WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
let COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
let EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// создаем массив с рандомными персонажами
let wizards = [
  {
    name: WIZARD_NAMES[[Math.floor(Math.random() * WIZARD_NAMES.length)]] + ' ' + WIZARD_SURNAMES[[Math.floor(Math.random() * WIZARD_SURNAMES.length)]],
    coatColor: COAT_COLORS[[Math.floor(Math.random() * COAT_COLORS.length)]],
    eyesColor: EYES_COLORS[[Math.floor(Math.random() * EYES_COLORS.length)]]
  },
  {
    name: WIZARD_NAMES[[Math.floor(Math.random() * WIZARD_NAMES.length)]] + ' ' + WIZARD_SURNAMES[[Math.floor(Math.random() * WIZARD_SURNAMES.length)]],
    coatColor: COAT_COLORS[[Math.floor(Math.random() * COAT_COLORS.length)]],
    eyesColor: EYES_COLORS[[Math.floor(Math.random() * EYES_COLORS.length)]]
  },
  {
    name: WIZARD_NAMES[[Math.floor(Math.random() * WIZARD_NAMES.length)]] + ' ' + WIZARD_SURNAMES[[Math.floor(Math.random() * WIZARD_SURNAMES.length)]],
    coatColor: COAT_COLORS[[Math.floor(Math.random() * COAT_COLORS.length)]],
    eyesColor: EYES_COLORS[[Math.floor(Math.random() * EYES_COLORS.length)]]
  },
  {
    name: WIZARD_NAMES[[Math.floor(Math.random() * WIZARD_NAMES.length)]] + ' ' + WIZARD_SURNAMES[[Math.floor(Math.random() * WIZARD_SURNAMES.length)]],
    coatColor: COAT_COLORS[[Math.floor(Math.random() * COAT_COLORS.length)]],
    eyesColor: EYES_COLORS[[Math.floor(Math.random() * EYES_COLORS.length)]]
  },
];

// генерируем персонажа
let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// создаем фрагмент с персонажами
let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// открываем похожих персонажей
document.querySelector(`.setup-similar`).classList.remove('hidden');
