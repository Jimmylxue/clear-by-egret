/**
 * 底下的小圆区域
 */

interface Position{
    row:number,
    col:number
}

class Space extends View {
    private _backDisplay: egret.Bitmap;
    private Post:Position;
    public _spaceData: SpaceData; // 每个位置存放一个位置信息

    public face:Face
    // private _lock: boolean;

    constructor() {
        super();
        this.touchEnabled = true; // 设置可点击

        this.width = this.height = 78;
        this._backDisplay = new egret.Bitmap(RES.getRes("space"));  // 未点击的状态
        this._backDisplay.width = this.width;
        this._backDisplay.height = this.height;
        this.addChild(this._backDisplay);

        this._backDisplay.touchEnabled = true
    }

    public setPos(row:number,col:number){
        this._spaceData = new SpaceData()
        this.face = new Face()
        this.face.width = 78
        this.face.height = 78

        let random = Tools.getRandomIndex(1,5)
        this.face.setHeader(random)
        // this.face.zIndex = 100
        this.addChild(this.face)
        this._spaceData.Postion({row,col,random})
        this._spaceData.hasChild = true
    }

    public slide(direction:number){
        this.face.zIndex = 100
        switch(direction){
            case 1:
                this.face.y-=78
                break
            case 2:
                this.face.y+=78
                break
            case 3:
                this.face.x-=28
                break
            case 4:
                this.face.x+=28
                break
        }
    }

    public render(){
        // 重新渲染头像的方法
        let random = this._spaceData.Post.random
        this._spaceData.hasChild = true
        
        let faceAnimate = egret.Tween.get(this.face)
        faceAnimate.to({alpha:0},150)
        this.face._faceDisplay.texture = RES.getRes(`${random}${random}_png`)
        faceAnimate.to({alpha:1},150)

    }

    public doClear(){
        let random = this._spaceData.Post.random
        let index = 0
        console.log('进入这里的',random,index)
        let timer = setInterval(()=>{
            this.face._faceDisplay.texture = RES.getRes(`fxcolor${random}_${index}`)
            index++
            if(index>6){
                clearInterval(timer)
            }
        },50)
        SoundMgr.doPlaySound(2)
        this._spaceData.hasChild = false
    }


    public doClear2(){
        this.face._faceDisplay.texture = RES.getRes(`_`) // 置空 给个不存在的路径就可以了
        this._spaceData.hasChild = false
    }

    public flex(random){
        this.face._faceDisplay.texture = RES.getRes(`${random}${random}_png`)
    }

    public randomRender(){
        // 随机渲染
        let random = Tools.getRandomIndex(1,5)
        this._spaceData.Post.random = random
        this._spaceData.hasChild = true
        this.face._faceDisplay.texture = RES.getRes(`${random}${random}_png`)
    }
}