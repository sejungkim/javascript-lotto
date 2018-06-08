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

// Set lucky number
function setLuckyNumber(luckyNum, lotto = lottoInfo) {
  validateLuckyNum(luckyNum, lotto);
}

function validateLuckyNum(luckyNum, lotto) {
  if (!Array.isArray(luckyNum)) {
    throw `>> [!] 배열 형태의 당첨번호를 입력해주세요.`;
  }
  if (luckyNum.filter(val => val !== undefined).length !== lotto.length) {
    throw `>> [!] ${lotto.length}자리의 당첨번호를 입력해주세요.`;
  }
  if (!luckyNum.every(num => Number.isInteger(num))) {
    throw `>> [!] 숫자로 된 당첨번호를 입력해주세요.`;
  }
  if (!luckyNum.every(num => num >= lotto.minNum && num <= lotto.maxNum)) {
    throw `>> [!] ${lotto.minNum}과 ${lotto.maxNum}사이의 당첨번호를 입력해주세요.`;
  }
}

// Run
buyLottos(5000);
setLuckyNumber([1, 2, 3, 4, 5, 6]);