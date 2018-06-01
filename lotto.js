'use strict';

let lottoSetList = [];

function buyLottos(money) {
  const lottoPrice = 1000;

  checkMoneyValid(money, lottoPrice);

  // Number of lottos for money
  const numberOfLottos = getNumberOfLottos(money, lottoPrice);
  console.log(`>> 로또 ${numberOfLottos}개를 발행했습니다.`);

  // Create list of lottos
  lottoSetList = getLottoSetList(numberOfLottos);
  lottoSetList.forEach(lottoSet => console.log(lottoSet));
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

function getLottoSet() {
  const lottoNumRange = { min: 1, max: 45 };
  const lottoLength = 6;
  const lottoSet = [];

  while (lottoSet.length < lottoLength) {
    let lottoNumber = getRandomNumber(lottoNumRange.min, lottoNumRange.max);
    if (!lottoSet.includes(lottoNumber)) lottoSet.push(lottoNumber);
  }

  lottoSet.sort((num1, num2) => num1 - num2);

  return lottoSet;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function getLottoSetList(numberOfLottos) {
  const lottoSetList = [];
  while (lottoSetList.length < numberOfLottos) {
    lottoSetList.push(getLottoSet());
  }
  return lottoSetList;
}

// run
buyLottos(5000);