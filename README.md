# typescript_blockchain

## ts에 js 패키지를 적용하는 두가지 방법

**js_ts.ts 와 js_tsPackage.js**

```
tsconfig.json  - ts 컴파일에 관한 설정

js_tsPackage.js
-> 일반적인 방식(코드 아래 주석처럼 .d.ts 파일을 따로 추가)
-> JSDOC을 사용하는 방식(프로젝트에서 js, ts를 많이 혼용할 때 코드처럼 작성)

js_ts.ts - js_tsPackage 패키지의 함수를 받아 사용
```

## 간단한 블록체인

```
index.ts

BlockShape를 implements하는 클래스 Block에서 static 매서드인 calculateHash를 통해 클래스 내에서 hash 값을 자체 생성.
이 hash 값을 활용하여 BlockChain 클래스에서 함수와 blocks 배열을 통해 클래스가 Block인 인스턴스들을 연결
```