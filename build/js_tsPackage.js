"use strict";
//프로젝트에서 js,ts를 모두 사용할때 js에서 ts의 보호장치를 ts로 변환없이 사용방법(JSDoc) <- allowJs=true 필요
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.init = void 0;
/**
 * initialize the program
 * @param {object} config
 * @param {string} config.url
 * @returns object
 */
function init(config) {
    return config;
}
exports.init = init;
/**
 *
 * @param {number} code
 * @returns number
 */
function exit(code) {
    return code + 1;
}
exports.exit = exit;
/*패키지는 자바스크립트로 작성 -> js형식 패키지 모듈을 ts에 적용할때 .d.ts(타입 정의 문서) 필수
declaration file (타입 정의 문서)- 자바스크립트 코드(패키지)의 타입 형태을 타입스크립트에 설명

ex)myPackage.d.ts

interface Config{
    url: string
}

declare module "myPackage"{   //call signature로 함수 관련 타입들 설명
    function init(config: Config): Config
    function exit(code:number): number
}
*/ 
