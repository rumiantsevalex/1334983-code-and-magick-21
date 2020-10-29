'use strict';

// Настраиваем открытие и закрытие окна настройки персонажа
(function () {
  let characterSetup = document.querySelector(`.setup`);
  window.characterSetup = characterSetup;
  let setupOpen = document.querySelector(`.setup-open`);
  let setupClose = document.querySelector(`.setup-close`);
  const SETUP_START_TOP = 233;
  const SETUP_START_LEFT = 656;

  let openSetup = function () {
    window.characterSetup.style.top = SETUP_START_TOP + `px`;
    window.characterSetup.style.left = SETUP_START_LEFT + `px`;
    characterSetup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, setupEscClose);
  };

  let closeSetup = function () {
    characterSetup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, setupEscClose);
  };

  let setupEscClose = function (evt) {
    window.util.isEscEvent(evt, closeSetup);
  };

  setupOpen.addEventListener(`click`, function () {
    openSetup();
  });

  setupClose.addEventListener(`click`, function () {
    closeSetup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEscEvent(evt, closeSetup);
  });
})();
