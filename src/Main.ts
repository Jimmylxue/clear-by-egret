/**
 * 入口文件
*/
class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        GManager.stage = this; // 赋值主舞台
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        });

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        };

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        };

        this.runGame().catch(e => {
            Log.info(e);
        });
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        GManager.inst.init(); 
    }

    /**
     * 加载游戏资源
     */
    private async loadResource() {
        try {
            await RES.loadConfig('resource/default.res.json', 'resource/')
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);

            // await Tools.LoadResConfig(); // 脚手架配置
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    /**
     * 创建游戏场景
     */
    private createGameScene() {
        let gameMain: GameMain = new GameMain();
        this.addChild(gameMain);
    }
}