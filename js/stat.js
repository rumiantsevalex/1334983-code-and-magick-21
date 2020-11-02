'use strict';

// описываем окно статистики в конце игры
(function () {
  let CLOUD_WIDTH = 420;
  let CLOUD_HEIGHT = 270;
  let CLOUD_X = 100;
  let CLOUD_Y = 10;
  let CLOUD_GAP = 10;
  let HEADER_X = 130;
  let HEADER_Y = 40;
  let HEADER_GAP = 15;
  let NAME_X = 150;
  let NAME_Y = 260;
  let BAR_WIDTH = 40;
  let BAR_MAX_HEIGHT = 150;
  let GAP = 20;
  let BAR_GAP = 50;
  let YOUR_BAR_COLOR = `rgba(255, 0, 0, 1)`;

  let renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, `rgba(0, 0, 0, 0.7)`);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

    ctx.fillStyle = `#000`;
    ctx.font = `16px PT Mono`;
    ctx.fillText(`Ура вы победили!`, HEADER_X, HEADER_Y);
    ctx.fillText(`Список результатов:`, HEADER_X, HEADER_Y + HEADER_GAP);

    let maxTime = window.util.getMaxElement(times);

    for (let i = 0; i < names.length; i++) {
      ctx.fillStyle = `#000`;
      ctx.fillText(names[i], NAME_X + (BAR_WIDTH + BAR_GAP) * i, NAME_Y);
      ctx.fillText(Math.round(times[i]), NAME_X + (BAR_WIDTH + BAR_GAP) * i, NAME_Y - ((BAR_MAX_HEIGHT * times[i]) / maxTime) - GAP * 1.5);

      if (names[i] === `Вы`) {
        ctx.fillStyle = YOUR_BAR_COLOR;
      } else {
        ctx.fillStyle = `hsl(` + 240 + `, ` + Math.floor(Math.random() * 101) + `%, ` + 50 + `%)`;
      }

      ctx.fillRect(NAME_X + (BAR_WIDTH + BAR_GAP) * i, NAME_Y - ((BAR_MAX_HEIGHT * times[i]) / maxTime) - GAP, BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime);
    }
  };
})();
