'use strict';

// исходные данные персонажей для генерации
(function () {
  let WIZARDS_AMOUNT = 4;

  let similarListElement = document.querySelector(`.setup-similar-list`);
  window.similarListElement = similarListElement;
  let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);


  // генерируем персонажа
  let renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // обработчик успешной загрузки
  let successHandler = function (wizards) {
    let fragment = document.createDocumentFragment();
    wizards.sort(window.util.shuffle);

    for (let i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    window.similarListElement.appendChild(fragment);

    document.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  // обработчик ошибки
  let errorHandler = function (errorMessage) {
    let node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.backend.load(successHandler, errorHandler);
})();
