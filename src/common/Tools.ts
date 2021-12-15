/**
 * 工具类
*/
class Tools {
  /**
   * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
   */
  public static createBitmapByName(name: string) {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
  }

  /**
   * 根据环境不同，分别获取不同路径下的资源
   */
  public static async LoadResConfig(): Promise<void> {
    if (DEBUG) {
      await RES.loadConfig('resource/default.res.json', 'resource/');
    } else {
      //配置线上的资源地址
      await RES.loadConfig('https://game.gtimg.cn/images/dnf/m/skill/default.res.json', 'https://game.gtimg.cn/images/dnf/m/skill/');
    }
  }

  /**
   * 获取一个随机数
   */
  public static getRandomIndex(minN: number = 0, maxN: number = 50): number {
    if (maxN <= minN) return 0;

    return Math.ceil(Math.random() * (maxN-minN)) + minN;
  }

  /**
   * 关卡数字转成大写
   */
  public static Number2Text(value: number): string {
    let out = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    return out[value];
  }

  /**
   * 获取广告数组内容，（根据等级获取广告信息，也可以去掉等级直接返回，自定义）
  */
  public static getAdByLevel(): any {
    return Config.adLevel[0];
  }

  /**
   * 加载网络图片
   * item:{
   *  url:'xxx'//图片地址
   * xxx//自己附带的其他参数
   * }
  */
  public static loadImageByUrl(item, callback): void {
    try{
      RES.getResByUrl(item.url, (event) => {
        callback && callback({
          status: 1,
          event: event,
          item: item
        });
      })
    }catch(e) {
      Log.error(e);
      callback && callback({
        status: 0
      });
    }
  }

}