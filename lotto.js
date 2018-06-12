'use strict';

const lottoInfo = {
  'minNum': 1,
  'maxNum': 45,
  'length': 6,
  'price': 1000,
  'prizeList': [{
    'matchingCount': 3,
    'reward': 5000
  },
  {
    'matchingCount': 4,
    'reward': 50000
  },
  {
    'matchingCount': 5,
    'reward': 1500000
  },
  {
    'matchingCount': 6,
    'reward': 2000000000
  }]
};
const lottoList = [];

// Buy Lottos
function buyLottos(money, lotto = lottoInfo, lottoSetList = lottoList) {
  validateMoney(money, lotto.price);

  // Get number of lottos for money
  const numberOfLottos = getNumberOfLottos(money, lotto.price);
  console.log(`>> 로또 ${numberOfLottos}개를 발행했습니다.`);

  // Create list of lottos
  while (lottoSetList.length < numberOfLottos) {
    lottoSetList.push(getLottoSet(lotto));
  }

  // Print lotto list
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

// Set lucky number
function setLuckyNumber(luckyNum, lotto = lottoInfo, lottoSetList = lottoList) {
  validateLuckyNum(luckyNum, lotto);

  // Get result match with lucky number for all lottos
  const matchingResultList = lottoSetList.map(lottoSet =>
    getMatchingResult(luckyNum, lottoSet)
  );

  // Get winning statistic
  const winningStat = getWinningStatistic(matchingResultList, lotto.prizeList);
  showWinningStatistic(winningStat, lotto.prizeList);

  // Rate of return
  const rateOfReturn = getRateOfReturn(winningStat, lotto, lottoSetList);
  console.log(`>> 나의 수익률은 ${rateOfReturn}% 입니다.`);
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

function getMatchingResult(luckyNum, lottoSet) {
  const matchingNums = lottoSet.filter(num => luckyNum.includes(num));
  const matchingCount = matchingNums.length;

  return {
    lottoSet,
    matchingNums,
    matchingCount
  };
}

function getWinningStatistic(matchingResultList, prizeList) {
  // Make winning statistic object and initializing
  const winningStatistic = prizeList.reduce((winningStat, prizeInfo) => {
    winningStat[prizeInfo.matchingCount] = 0;
    return winningStat;
  }, {});

  // Count winning result
  matchingResultList.forEach(matchingResult => {
    if (matchingResult.matchingCount in winningStatistic) {
      winningStatistic[matchingResult.matchingCount]++;
    }
  });

  return winningStatistic;
}

function showWinningStatistic(winningStat, prizeList) {
  const resultMsg = prizeList.reduce((msg, prizeInfo) => {
    return msg += `${prizeInfo.matchingCount}개 일치 (${prizeInfo.reward}원) - `
      + `${winningStat[prizeInfo.matchingCount]}개\n`;
  }, '');

  console.log(`>> 당첨 통계`);
  console.log(`----------`);
  console.log(resultMsg);
}

function getRateOfReturn(winningStat, lotto, lottoSetList) {
  const moneySpent = lotto.price * lottoSetList.length;

  let profit = 0;
  for (let winType in winningStat) {
    if (winningStat[winType]) {
      let prizeMoney = lotto.prizeList.find(prize =>
        prize.matchingCount == winType
      ).reward;
      profit += winningStat[winType] * prizeMoney;
    }
  }

  const rateOfReturn = (profit - moneySpent) / moneySpent * 100;
  return rateOfReturn < 0 ? 0 : Math.floor(rateOfReturn);
}

// Run
buyLottos(5000);
setLuckyNumber([1, 2, 3, 4, 5, 6]);