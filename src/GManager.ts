class GManager {
  public static stage: egret.DisplayObjectContainer; // 在main.ts中先将this 赋值给这个静态成员属性
  private static _inst: GManager; // 单例
  private scene: GScene;  // 场景

  public static get inst(): GManager {
    // 单例模式
    if (GManager._inst == null) GManager._inst = new GManager();
    return GManager._inst;
  }

  public init(): void {
    this.scene = new GScene(); // 创建舞台
    GManager.stage.addChild(this.scene)
    // this.scene.splaceList = 111
    // this.scene.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSceneTouchEnd, this);
    // this.scene.addEventListener(egret.TouchEvent.TOUCH_END, this.onSceneTouchEnd2, this);
  }

  // public onSceneTouchEnd(e: egret.TouchEvent){
  //   console.log(e)
  //   if (e.target instanceof Space) {
  //     console.log('点击到区域了',e.stageX,e.stageY)
  //   }
  // }

  // public onSceneTouchEnd2(e: egret.TouchEvent){
  //   console.log('结束了',e.stageX,e.stageY)
  // }
}