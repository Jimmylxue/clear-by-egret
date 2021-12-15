/**
 * 封装的通用button
*/
class Button extends egret.Sprite {
  private buttonRes: string;        //button的背景res key
  private labelStr: string;         //button上要展示的文字
  private mainWin: egret.Bitmap;     //button的贴图对象
  private mainText: egret.TextField; //button上的文字对象

  constructor(res: string = 'next_bg_png', label: string = '') {
    super();
    this.buttonRes = res;
    this.labelStr = label;
    this.touchEnabled = true;

    this.init();
  }

  /**
   * 初始化button
  */
  private init(): void {
    this.mainWin = Tools.createBitmapByName(this.buttonRes);
    this.mainWin.height = 60;
    this.mainWin.width = 180;
    this.addChild(this.mainWin);

    let textField = new egret.TextField();
    textField.textAlign = egret.HorizontalAlign.CENTER;
    textField.verticalAlign = egret.VerticalAlign.MIDDLE;
    textField.textColor = 0xffffff;
    textField.text = this.labelStr;
    textField.size = 24;
    textField.width = this.mainWin.width - 40;
    textField.height = this.mainWin.height;
    textField.y = this.mainWin.y;
    textField.x = this.mainWin.x + 20;
    this.mainText = textField;
    this.addChild(this.mainText);
  }

  /**
   * 设置button的宽度
  */
  public setWidth(value: number): void {
    this.mainWin.width = value;
  }

  /**
   * 设置button的高度
  */
  public setHeight(value: number): void {
    this.mainWin.height = value;
  }

  /**
   * 设置button上文字的大小
  */
  public setFontSize(value: number): void {
    this.mainText.size = value;
  }
}