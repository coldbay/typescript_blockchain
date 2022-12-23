/*만약 ts로 작성되지 않은 패키지를 import(allowJS 비활성화 상태)하게 되면 타입 정의 파일(.d.ts) 필요
.d.ts 파일 찾아보기 -> DefinitelyTyped 레포에서 확인  -> 콘솔에 npm i -D @types/
*/
import * as crypto from "crypto"

interface BlockShape {
    hash: string //블록의 고유서명(prevHash, height, data 값으로 계산하여 생성)
    prevHash: string
    height: number
    data: string
}

class Block implements BlockShape {
    public hash: string
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data)
    }
    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex")
    }
}

class BlockChain {
    private blocks: Block[]
    constructor() {
        this.blocks = []
    }
    private getPrevHash() {
        if (this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash
    }
    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data)
        this.blocks.push(newBlock)
    }
    public getBlocks(){
        return [...this.blocks] // 전개 연산자
    }
}

const blockchain = new BlockChain()

blockchain.addBlock("first")
blockchain.addBlock("second")
blockchain.addBlock("third")

console.log(blockchain.getBlocks())