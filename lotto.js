'use strict';

const lottoInfo = {
  'minNum': 1,
  'maxNum': 45,
  'length': 6,
  'price': 1000
};
const lottoList = [];

// Buy Lottos
function buyLottos(money, lotto = lottoInfo, lottoSetList = lottoList) {
  validateMoney(money, lotto.price);

  // Get number of lottos for money
  const numberOfLottos = getNumberOfLottos(money, lotto.price);
  console.log(`>> 로또 ${numberOfLottos}개를 발행했습니다.`);

  // Create list of lottos
  lottoSetList = getLottoSetList(numberOfLottos, lotto);
  lottoSetList.forEach(lottoSet => console.log(lottoSet));
}

function validateMoney(money, minAmount) {
  if (!Number.isInteger(money)) {
    throw `>> [!] 잘못된 입력입니다.`;
  }
  if (money < minAmount) {
    throw `>> [!] ${minAmount}원 이상의 금액을 입력해주세요.`;
  }
}

function getNumberOfLottos(money, lottoPrice) {
  return Math.floor(money / lottoPrice);
}

function getLottoSet(lotto) {
  const lottoSet = [];
  while (lottoSet.length < lotto.length) {
    let lottoNumber = getRandomNumber(lotto.minNum, lotto.maxNum);
    if (!lottoSet.includes(lottoNumber)) lottoSet.push(lottoNumber);
  }

  lottoSet.sort((num1, num2) => num1 - num2);

  return lottoSet;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function getLottoSetList(numberOfLottos, lotto) {
  const lottoSetList = [];
  while (lottoSetList.length < numberOfLottos) {
    lottoSetList.push(getLottoSet(lotto));
  }
  return lottoSetList;
}

// run
buyLottos(5000);