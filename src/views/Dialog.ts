/**
 * 封装的通用对话框
*/
class Dialog extends egret.DisplayObjectContainer {
  private cover: egret.Shape;           //后面的大遮罩
  private mainWindow: egret.Bitmap;     //显示窗口的背景图
  public button1: Button;               //显示窗口的第一个button，从做向右数
  public button2: Button;               //显示窗口的第二个button，从做向右数
  public bt1Str: string;                //显示窗口的第一个button的文字内容
  public bt2Str: string;                //显示窗口的第二个button的文字内容
  private labelText: egret.TextField;   //中间显示的文字对象
  public content: string;               //中间显示的文字内容
  public static stage: egret.DisplayObjectContainer;    //父对象的舞台
  private ad: any;                                       //广告对象
  private adDisplayContainer: egret.DisplayObjectContainer;  //广告容器
  private adBitmap: egret.Bitmap;                            //广告贴图

  constructor() {
    super();
    this.width = egret.MainContext.instance.stage.stageWidth;
    this.height = egret.MainContext.instance.stage.stageHeight;
  }

  /**
   * Touch事件的回调，主要为了防止冒泡
  */
  private onTouchEvent(e: egret.TouchEvent): void {
    e.stopPropagation();
  }

  /**
   * 左边第一个button的点击回调
  */
  private onLeftButtonClick(e: egret.TouchEvent): void {
    this.dispatchEvent(new egret.Event('close'));
    e.stopPropagation();
    this.visible = false;
    this.close();
  }

  /**
   * 初始化渲染
  */
  private initMap(): void {
    this.cover = new egret.Shape();
    this.cover.graphics.beginFill(0x000000, 0.8);
    this.cover.graphics.drawRect(0, 0, this.width, this.height);
    this.cover.graphics.endFill();
    this.addChild(this.cover);
    this.cover.touchEnabled = true;
    //添加遮罩的touch事件
    this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);

    if (this.bt1Str) {
      this.mainWindow = Tools.createBitmapByName('dialog_bg_png');
      this.mainWindow.x = this.width / 2 - this.mainWindow.width / 2;
      this.mainWindow.y = this.height / 2 - this.mainWindow.height / 2;
      this.addChild(this.mainWindow);

      this.labelText = new egret.TextField();
      this.labelText.textAlign = egret.HorizontalAlign.CENTER;
      this.labelText.verticalAlign = egret.VerticalAlign.MIDDLE;
      this.labelText.textColor = 0x131327;
      this.labelText.width = this.mainWindow.width - 80;
      this.labelText.height = this.mainWindow.height;
      this.labelText.y = this.mainWindow.y;
      this.labelText.x = this.mainWindow.x + 40;
      this.labelText.lineSpacing = 8;
      this.addChild(this.labelText);
      this.labelText.text = this.content;
      this.labelText.y = this.labelText.y - 16;
      this.button1 = new Button('next_bg_png', this.bt1Str);
      this.addChild(this.button1);

      this.button1.y = this.mainWindow.y + this.mainWindow.height - this.button1.height - 30;
      this.button1.x = this.mainWindow.x + this.mainWindow.width / 2 - this.button1.width / 2;
      this.button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftButtonClick, this);
    }

    if (this.ad) {
      if (!this.adDisplayContainer) {
        this.adDisplayContainer = new egret.DisplayObjectContainer();
        this.adDisplayContainer.touchEnabled = true;

        this.adDisplayContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAdClick, this);
        this.addChild(this.adDisplayContainer);
      }
      if (!this.adBitmap) {
        this.adBitmap = new egret.Bitmap();
        this.adDisplayContainer.addChild(this.adBitmap);
        this.adBitmap.texture = RES.getRes(this.ad.adImage);
        let scaleX = this.width / this.adBitmap.width;
        this.adBitmap.width = this.width;
        this.adBitmap.height = this.adBitmap.height * scaleX;
      }
      this.adDisplayContainer.x = 0;
      this.adDisplayContainer.y = this.height - this.adBitmap.height;
    }
  }

  /**
   * 广告被点击回调
  */
  protected onAdClick(): void {
    window.location.assign(this.ad.url);
  }

  /**
   * 左边第一个button的点击回调
  */
  public static show(button1: string, button2: string, content: string, ad?: any): Dialog {
    let dialog = new Dialog();
    dialog.ad = ad;
    dialog.bt1Str = button1;
    dialog.bt2Str = button2;
    dialog.content = content;
    dialog.initMap();
    Dialog.stage.addChild(dialog);
    return dialog;
  }

  /**
   * 展示通关
  */
  public static showPass(): Dialog {
    //需要分享
    let ad = Tools.getAdByLevel();
    return Dialog.show('重新挑战', 'share', '恭喜打败希洛克，完成挑战！', ad);
  }

  /**
   * 关闭之后的处理
  */
  private close(): void {
    this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEvent, this);
    if (this.bt1Str) {
      this.button1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftButtonClick, this);
    }
    if (this.parent) this.parent.removeChild(this);
  }
}