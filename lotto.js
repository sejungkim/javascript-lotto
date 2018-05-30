'use strict';

const lottoSetList = [];

function buyLottos(money) {
  const lottoPrice = 1000;

  checkMoneyValid(money, lottoPrice);

  const numberOfLottos = getNumberOfLottos(money, lottoPrice);
  console.log(`>> 로또 ${numberOfLottos}개를 발행했습니다.`);
}

function checkMoneyValid(money, lottoPrice) {
  if (!Number.isInteger(money)) {
    throw `>> [!] 잘못된 입력입니다.`;
  }
  if (money < lottoPrice) {
    throw `>> [!] ${lottoPrice}원 이상의 금액을 입력해주세요.`;
  }
}

function getNumberOfLottos(money, lottoPrice) {
  const numberOfLottos = Math.floor(money / lottoPrice);
  return numberOfLottos;
}

// run
buyLottos(5000);