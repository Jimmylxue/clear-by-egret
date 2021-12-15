
interface Pos {
    row: number,
    col: number,
    color: number
}

class Face extends View {
    public _faceDisplay: egret.Bitmap;
    public _posData: Pos = { row: 0, col: 0, color: 0 }
    public hasChild: boolean
    constructor() {
        super();

    }
    public setHeader(random) {
        this._faceDisplay = new egret.Bitmap(RES.getRes(`${random}${random}_png`));
        this._faceDisplay.width = 80
        this._faceDisplay.height = 80
        this.hasChild = true
        this.addChild(this._faceDisplay)
    }
    public setPos(row: number, col: number) {
        // console.log(this)
        let random = Tools.getRandomIndex(1, 5)
        this._posData.row = row
        this._posData.col = col
        this._posData.color = random
        this._faceDisplay = new egret.Bitmap(RES.getRes(`${random}${random}_png`));
        this._faceDisplay.width = 80
        this._faceDisplay.height = 80
        this.hasChild = true
        this.addChild(this._faceDisplay)
    }
    public change() {
        console.log('chang!')
    }
    public slider(direction: number) {
        // if(!falg){
        //     this.alpha = 0
        // }
        // this.y += 28
        let tw = egret.Tween.get(this)
        switch (direction) {
            case 1:
                tw.to({ y: this.y - 78,alpha:1 }, 100)
                
                // this._posData.row -= 1
                // this.y -= 78
                break
            case 2:
                tw.to({ y: this.y + 78,alpha:1 }, 100)
                // this._posData.row += 1
                // this.y += 78
                break
            case 3:
                tw.to({ x: this.x - 78,alpha:1 }, 100)
                // this._posData.col -= 1
                // this.x -= 78
                break
            case 4:
                tw.to({ x: this.x + 78,alpha:1 }, 100)
                // this._posData.col += 1
                // this.x += 78
                break
        }
        setTimeout(() => {
            this.alpha = 1
        }, 350);
    }
    public doClear() {
        let random = this._posData.color
        let index = 0
        console.log('进入这里的', random, index)
        let timer = setInterval(() => {
            this._faceDisplay.texture = RES.getRes(`fxcolor${random}_${index}`)
            index++
            if (index > 6) {
                clearInterval(timer)
            }
        }, 50)
        SoundMgr.doPlaySound(2)
        this.hasChild = false
    }
    public doClear2() {
        this._faceDisplay.texture = RES.getRes(`_`) // 置空 给个不存在的路径就可以了
        this.hasChild = false
    }
    public render() {
        // 重新渲染头像的方法
        // this.alpha = 1
        let random = this._posData.color
        this.hasChild = true

        let faceAnimate = egret.Tween.get(this)
        // faceAnimate.to({ alpha: 0 }, 150)
        this._faceDisplay.texture = RES.getRes(`${random}${random}_png`)
        // faceAnimate.to({ alpha: 1 }, 1)

    }

    public renders(color){
        this._posData.color = color
        this._faceDisplay = new egret.Bitmap(RES.getRes(`${color}${color}_png`));
        this._faceDisplay.width = 80
        this._faceDisplay.height = 80
        this.hasChild = true
        this.addChild(this._faceDisplay)
    }

    public render2(num) {
        // 重新渲染头像的方法
        let random = this._posData.color
        this.hasChild = true

        let faceAnimate = egret.Tween.get(this)
        faceAnimate.to({ alpha: 0 }, 150)
        this._faceDisplay.texture = RES.getRes(`${random}${random}_png`)
        faceAnimate.to({ alpha: 1 }, 150)
        switch (num) {
            case 1:
                faceAnimate.to({ y: this.y - 78 }, 300)
                // this._posData.row -= 1
                // this.y -= 78
                break
            case 2:
                faceAnimate.to({ y: this.y + 78 }, 300)
                // this._posData.row += 1
                // this.y += 78
                break
            case 3:
                faceAnimate.to({ x: this.x - 78 }, 300)
                // this._posData.col -= 1
                // this.x -= 78
                break
            case 4:
                faceAnimate.to({ x: this.x + 78 }, 300)
                // this._posData.col += 1
                // this.x += 78
                break
        }

    }
    public randomRender() {
        // 随机渲染
        let random = Tools.getRandomIndex(1, 5)
        this._posData.color = random
        this.hasChild = true
        this._faceDisplay.texture = RES.getRes(`${random}${random}_png`)
    }
}