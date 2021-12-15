class CustomDispatcher extends egret.EventDispatcher {
    public static SCORE: string = "score";

    private static dispatchDz:CustomDispatcher

    public gainScore():void {
        this.dispatchEventWith(CustomDispatcher.SCORE);
    }

    public static get disp():CustomDispatcher{
        // 单例模式
        if (CustomDispatcher.dispatchDz == null) CustomDispatcher.dispatchDz = new CustomDispatcher();
        return CustomDispatcher.dispatchDz
    }

}