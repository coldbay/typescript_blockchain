"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*만약 ts로 작성되지 않은 패키지를 import(allowJS 비활성화 상태)하게 되면 타입 정의 파일(.d.ts) 필요
.d.ts 파일 찾아보기 -> DefinitelyTyped 레포에서 확인  -> 콘솔에 npm i -D @types/
*/
const crypto = require("crypto");
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}
class BlockChain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    getBlocks() {
        return [...this.blocks]; // private한 blocks 배열을 리턴하는 것이 아닌 전개 연산자으로 blocks의 요소 내용만 같은 배열을 리턴
    }
}
const blockchain = new BlockChain();
blockchain.addBlock("first");
blockchain.addBlock("second");
blockchain.addBlock("third");
console.log(blockchain.getBlocks());
