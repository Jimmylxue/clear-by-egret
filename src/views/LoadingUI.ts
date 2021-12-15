/**
 * 首屏Loading页面
*/
class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;

    private createView(): void {
        let textField = new egret.TextField();
        this.addChild(textField);
        textField.y = egret.MainContext.instance.stage.stageHeight/2-100;
        textField.width = egret.MainContext.instance.stage.stageWidth;
        textField.height = 100;
        textField.size = 40;
        textField.textAlign = "center";

        this.textField = textField;
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `Loading...${current}/${total}`;
    }
}
