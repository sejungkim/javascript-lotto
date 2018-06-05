로또 생성기
===
## 1. 목표
* 로또 1장의 가격은 1000원이다.
* 돈을 넣으면 살 수 있는 만큼 로또를 구매할 수 있다. (buyLottos 함수)
* 각 로또 번호는 6개다. (1부터 45까지)
```javascript
> buyLottos(5000); 
> 로또 5개를 발행했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]

> setLuckyNumber([1, 2, 3, 4, 5, 6]);

> 당첨 통계
---------
3개 일치 (5000원)- 1개
4개 일치 (50000원)- 0개
5개 일치 (1500000원)- 0개
6개 일치 (2000000000원)- 0개
나의 수익률은 OO%입니다.
```

## 2. 코드 설계

#### 2.1. 로또를 구매하는 함수 @
```javascript
function buyLottos(money) {
  // 1. 입력받은 돈의 유효성을 검사한다. @
  // 2. 입력된 돈으로 살 수 있는 로또의 개수를 구한다. @
  // 3. 발행 가능한 로또 개수 메세지 출력한다. @
  // 4. 발행 가능한 로또 개수 만큼 로또 조합을 만든다. @
  // 5. 만든 로또 조합을 출력한다. @
}
```

#### 2.2. 입력받은 돈의 유효성을 검사하는 함수 @
```javascript
function validateMoney(money, lottoPrice) {
  // 1. 올바른 입력 검사 @
  // 2. 최소 금액 검사 @
}
```

#### 2.3. 구매 가능한 로또 개수 구하는 함수 @
```javascript
function getNumberOfLottos(money, lottoPrice) {
  // 1. 돈을 로또 가격으로 나눈 몫 @
  // 2. 몫을 정수로 만든다. @
  return numberOfLottos;
}
```

#### 2.4. 로또 조합 만드는 함수 @
```javascript
function getLottoSet() {
  // 1. 1에서 45사이의 숫자 중 랜덤 숫자를 만든다. @
  // 2. 이전에 만든 숫자와 중복이 되는지 확인한다. @
  // 3. 중복이면 1, 2를 다시 진행한다. @
  // 4. 중복이 아니라면 배열에 넣는다. @
  // 5. 위 과정을 숫자가 6개가 될 때까지 반복한다. @
  // 6. 만들어진 6개의 랜덤 숫자를 오름차순으로 정렬한다. @
  return lottoSet;
}
```

#### 2.5. 특정 범위의 랜덤 숫자 만드는 함수 @
```javascript
function getRandomNumber(min, max) {
  // 1. min과 max를 포함한 범위의 랜덤 숫자 1개를 만든다.
  return randomNumber;
}
```

#### 2.6. 입력 개수만큼 로또를 만드는 함수 @
```javascript
function getLottoSetList(numberOfLottos) {
  // 1. numberOfLottos 만큼 로또를 발행해서 하나의 리스트로 만든다.
  return lottoSetList;
}
```