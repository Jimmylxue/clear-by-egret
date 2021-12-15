此工程是egret的小游戏脚手架～

# 如何安装

##通过git

```
git clone https://git.woa.com/minGame/egret-base.git
```



# 项目目录结构

- base

  BaseView.ts（基类）

  Config.ts（配置相关）

  Platform.ts（平台相关，h5一般不用，qq小游戏和微信小游戏用的上）

- common

  HttpRequest.ts（网络请求）

  Log.ts（通用的Log类，用来控制控制台是否输出）

  Tools.ts（通用的工具类）

- model

  （存放每个游戏场景对应的数据内容）

- views

  Button.ts （通用的Button）

  Dialog.ts （通用的Dialog）

  GameMain.ts（游戏的主入口）

  LoadingUI.ts（首屏的加载页）

- Main.ts（工程入口）



