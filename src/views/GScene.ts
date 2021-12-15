class GScene extends View {
    private _back_bottom: egret.Bitmap;  //下面的背景图片
    private _back_top: egret.Bitmap;  //上面红色的底图-2021

    private bg: Bg

    private _scoreDisplay: egret.TextField; // 分数按钮
    private score: number = 0 // 得分

    private _spaceContainer: egret.DisplayObjectContainer;  //下面的消消乐区域
    private col: number = 5

    private dispatcher:CustomDispatcher = CustomDispatcher.disp

    constructor() {
        super()
        this._back_bottom = new egret.Bitmap(RES.getRes("back_bottom"));
        this.addChild(this._back_bottom);
        this._back_top = new egret.Bitmap(RES.getRes("back_top"));
        this._back_top.width = egret.MainContext.instance.stage.stageWidth;
        this._back_top.height = 500;
        this.addChild(this._back_top);

        this._spaceContainer = new egret.DisplayObjectContainer();
        this.addChild(this._spaceContainer);
        this._spaceContainer.x = egret.MainContext.instance.stage.stageWidth / 2 - (this.col * 78) / 2
        this._spaceContainer.y = egret.MainContext.instance.stage.stageHeight / 2 - 100
        this.bg = new Bg()
        this._spaceContainer.addChild(this.bg)

        this._scoreDisplay = new egret.TextField;
        this._scoreDisplay.text = `分数：${this.score}`
        this._scoreDisplay.x = egret.MainContext.instance.stage.stageWidth - this._scoreDisplay.width - 30
        this._scoreDisplay.y = 440
        this._scoreDisplay.textColor = 0xffffff;
        this.addChild(this._scoreDisplay);

        if(this.dispatcher){
            this.dispatcher.addEventListener(CustomDispatcher.SCORE, this.gainScore, this);
        }
    }

    private gainScore(){
        this.score+=10
        this._scoreDisplay.text = `分数：${this.score}`
        this._scoreDisplay.x = egret.MainContext.instance.stage.stageWidth - this._scoreDisplay.width - 30
    }

}

