/**
 * 封装的统一页面，一般用于打开新页面之前可能会有一些网络请求，或者做一些其他的异步耗时操作
*/
class BaseView extends egret.DisplayObjectContainer {

    private loadingContainer: egret.DisplayObjectContainer;    //加载框
    private loadingIcon: egret.Bitmap;

    private isLoading: boolean = false;   //是否弹出加载框
    private loadingTween: egret.Tween;    //加载动画

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    /**
     * 被添加到舞台
    */
    public onAddToStage(event: egret.Event) {
        //
    }

    /**
     * 视图销毁
    */
    public onDestory(): void {

    }

    protected showLoading(): void {
        if (this.isLoading) return;

        this.isLoading = true;

        if (!this.loadingContainer) {
            this.loadingContainer = new egret.DisplayObjectContainer();

            let bg: egret.Shape = new egret.Shape();
            bg.graphics.beginFill(0x000000, 0.8);
            bg.graphics.drawRect(0, 0, this.width, this.height);
            bg.graphics.endFill();
            bg.touchEnabled = true;
            this.loadingContainer.addChild(bg);
        }

        if (!this.loadingIcon) {
            let loadingIcon = Tools.createBitmapByName('loading_png');
            loadingIcon.x = this.width / 2;
            loadingIcon.y = this.height / 2;
            this.loadingContainer.addChild(loadingIcon);
            this.loadingIcon = loadingIcon;
        }
        //如果是圆形可能需要做动画，可以自定义处理 添加到this.loadingTween中
    }

    protected closeLoading(): void {
        if (!this.isLoading) return;

        //如果有loading动画，则去掉
        if (this.loadingTween) this.loadingTween .setPaused(true);

        this.loadingTween = null;
        egret.MainContext.instance.stage.removeChild(this.loadingContainer);
        this.isLoading = false;
    }
}