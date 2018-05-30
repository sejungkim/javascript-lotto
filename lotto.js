'use strict';

function buyLottos(money) {
  const numberOfLottos = getNumberOfLottos(money);
  console.log(numberOfLottos);
}

function getNumberOfLottos(money) {
  const lottoPrice = 1000;
  const numberOfLottos = Math.floor(money / lottoPrice);
  return numberOfLottos;
}

// run
buyLottos(1000);