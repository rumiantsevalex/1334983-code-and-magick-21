'use strict';

// окрашиваем в цвета мага
(function () {
  let COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  window.COAT_COLORS = COAT_COLORS;
  let EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  window.EYES_COLORS = EYES_COLORS;
  let FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  window.FIREBALL_COLORS = FIREBALL_COLORS;

  // Меняем цвет глаз
  const wizardEyes = document.querySelector(`.wizard-eyes`);

  let getRandomColor = function (color) {
    return color[[Math.floor(Math.random() * color.length)]];
  };

  wizardEyes.addEventListener(`click`, function () {
    wizardEyes.style.fill = getRandomColor(EYES_COLORS);
  });

  // Меняем цвет мантии
  let wizardCoat = document.querySelector(`.wizard-coat`);

  wizardCoat.addEventListener(`click`, function () {
    wizardCoat.style.fill = getRandomColor(COAT_COLORS);
  });

  // Меняем цвет фаербола
  let wizardFireball = document.querySelector(`.setup-fireball-wrap`);

  wizardFireball.addEventListener(`click`, function () {
    wizardFireball.style.backgroundColor = getRandomColor(FIREBALL_COLORS);
  });
})();
