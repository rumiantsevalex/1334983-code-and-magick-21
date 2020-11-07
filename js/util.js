/* eslint-disable object-shorthand */
'use strict';

// Описываем функции, которые используются в проекте
(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  window.util = {
    getMaxElement: function (arr) {
      let maxElement = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    // аргумент shuffle для перемешивания sort()
    shuffle: function () {
      return Math.random() - 0.5;
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        evt.preventDefault();
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        evt.preventDefault();
        action();
      }
    }
  };
})();
