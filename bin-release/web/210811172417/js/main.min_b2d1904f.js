var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},__extends=function(t,e){function n(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},__assign=Object.assign||function(t){for(var e,n=1,i=arguments.length;i>n;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},__rest=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n},__decorate=function(t,e,n,i){var o,a=arguments.length,r=3>a?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(3>a?o(r):a>3?o(e,n,r):o(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},__param=function(t,e){return function(n,i){e(n,i,t)}},__metadata=function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0},__awaiter=function(t,e,n,i){function o(t){return t instanceof n?t:new n(function(e){e(t)})}return new(n||(n=Promise))(function(n,a){function r(t){try{c(i.next(t))}catch(e){a(e)}}function s(t){try{c(i["throw"](t))}catch(e){a(e)}}function c(t){t.done?n(t.value):o(t.value).then(r,s)}c((i=i.apply(t,e||[])).next())})},__generator=function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(r=2&n[0]?a["return"]:n[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,n[1])).done)return r;switch(a=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,a=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(r=c.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){c.label=n[1];break}if(6===n[0]&&c.label<r[1]){c.label=r[1],r=n;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(n);break}r[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(i){n=[6,i],a=0}finally{o=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,r,s,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__exportStar=function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||__createBinding(e,t,n)},__createBinding=Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]},__values=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},__read=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,a=n.call(t),r=[];try{for(;(void 0===e||e-->0)&&!(i=a.next()).done;)r.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(n=a["return"])&&n.call(a)}finally{if(o)throw o.error}}return r},__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__spreadArrays=function(){for(var t=0,e=0,n=arguments.length;n>e;e++)t+=arguments[e].length;for(var i=Array(t),o=0,e=0;n>e;e++)for(var a=arguments[e],r=0,s=a.length;s>r;r++,o++)i[o]=a[r];return i},__await=function(t){return this instanceof __await?(this.v=t,this):new __await(t)},__asyncGenerator=function(t,e,n){function i(t){u[t]&&(h[t]=function(e){return new Promise(function(n,i){l.push([t,e,n,i])>1||o(t,e)})})}function o(t,e){try{a(u[t](e))}catch(n){c(l[0][3],n)}}function a(t){t.value instanceof __await?Promise.resolve(t.value.v).then(r,s):c(l[0][2],t)}function r(t){o("next",t)}function s(t){o("throw",t)}function c(t,e){t(e),l.shift(),l.length&&o(l[0][0],l[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var h,u=n.apply(t,e||[]),l=[];return h={},i("next"),i("throw"),i("return"),h[Symbol.asyncIterator]=function(){return this},h},__asyncDelegator=function(t){function e(e,o){n[e]=t[e]?function(n){return(i=!i)?{value:__await(t[e](n)),done:"return"===e}:o?o(n):n}:o}var n,i;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n},__asyncValues=function(t){function e(e){i[e]=t[e]&&function(i){return new Promise(function(o,a){i=t[e](i),n(o,a,i.done,i.value)})}}function n(t,e,n,i){Promise.resolve(i).then(function(e){t({value:e,done:n})},e)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i,o=t[Symbol.asyncIterator];return o?o.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),i={},e("next"),e("throw"),e("return"),i[Symbol.asyncIterator]=function(){return this},i)},__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},__setModuleDefault=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t["default"]=e},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&__createBinding(e,t,n);return __setModuleDefault(e,t),e},__importDefault=function(t){return t&&t.__esModule?t:{"default":t}},__classPrivateFieldGet=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},__classPrivateFieldSet=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n},__reflect=function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n};!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(e){return t[e]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),n(0),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18);var i=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),GManager.stage=e,e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){Log.info(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),GManager.inst.init(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,Tools.LoadResConfig()];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),this.stage.removeChild(t),[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=new GameMain;this.addChild(t)},e}(egret.DisplayObjectContainer);window.Main=i,__reflect(i.prototype,"Main",[])},function(t,e){var n=function(){function t(){}return Object.defineProperty(t,"inst",{get:function(){return null==t._inst&&(t._inst=new t),t._inst},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.scene=new GScene,t.stage.addChild(this.scene),this.scene.splaceList=111},t}();window.GManager=n,__reflect(n.prototype,"GManager",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.isLoading=!1,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){},e.prototype.onDestory=function(){},e.prototype.showLoading=function(){if(!this.isLoading){if(this.isLoading=!0,!this.loadingContainer){this.loadingContainer=new egret.DisplayObjectContainer;var t=new egret.Shape;t.graphics.beginFill(0,.8),t.graphics.drawRect(0,0,this.width,this.height),t.graphics.endFill(),t.touchEnabled=!0,this.loadingContainer.addChild(t)}if(!this.loadingIcon){var e=Tools.createBitmapByName("loading_png");e.x=this.width/2,e.y=this.height/2,this.loadingContainer.addChild(e),this.loadingIcon=e}}},e.prototype.closeLoading=function(){this.isLoading&&(this.loadingTween&&this.loadingTween.setPaused(!0),this.loadingTween=null,egret.MainContext.instance.stage.removeChild(this.loadingContainer),this.isLoading=!1)},e}(egret.DisplayObjectContainer);window.BaseView=n,__reflect(n.prototype,"BaseView",[])},function(t,e){var n=function(){function t(){}return t.adLevel=[{level:0,adImage:"",url:"https://dnf.qq.com/cp/a20210618index/indexm.html"}],t}();window.Config=n,__reflect(n.prototype,"Config",[])},function(t,e){},function(t,e){var n=function(){function t(){this.baseUrl=""}return Object.defineProperty(t,"instance",{get:function(){return this.http||(this.http=new t),this.http},enumerable:!1,configurable:!0}),t.prototype.request=function(t){var e=this,n=t.method,i=void 0===n?egret.HttpMethod.GET:n,o=t.url,a=t.params,r=void 0===a?{}:a,s=t.headers,c=void 0===s?{}:s;/http(|s):\/\//.test(o)||(o=this.baseUrl+o);var h="",u={};u["Content-Type"]="application/x-www-form-urlencoded";for(var l in c)u[l]=c[l];if("application/json"===u["Content-Type"])h=JSON.stringify(r),h=h.replace(/\+/g,"%2B").replace(/\&/g,"%26");else{for(var l in r)h+=l+"="+(""+r[l]).replace(/\&/g,"%26")+"&";h=h.replace(/\+/g,"%2B"),h.length>0&&(h=h.substring(0,h.length-1)),i===egret.HttpMethod.GET&&(o+="?"+h)}return new Promise(function(t,n){function a(e,i){void 0===i&&(i=!0);var o;try{o=JSON.parse(r.response)}catch(a){o=r.response}i?t(o):n(o)}var r=new egret.HttpRequest;r.responseType=egret.HttpResponseType.TEXT,r.open(o,i);for(var s in u)r.setRequestHeader(s,u[s]);i===egret.HttpMethod.GET?r.send():r.send(h),r.addEventListener(egret.Event.COMPLETE,function(t){a(t)},e),r.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){a(t,!1)},e)})},t.prototype.setBaseUrl=function(t){this.baseUrl=t},t.prototype.get=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this.request({url:t,params:e,headers:n})},t.prototype.post=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this.request({url:t,method:egret.HttpMethod.POST,params:e,headers:n})},t}();window.HttpRequest=n,__reflect(n.prototype,"HttpRequest",[])},function(t,e){var n=function(){function t(){}return t.info=function(e){t.isOpen&&console.info(e)},t.error=function(e){t.isOpen&&console.error(e)},t.isOpen=!0,t}();window.Log=n,__reflect(n.prototype,"Log",[])},function(t,e){var n=function(){function t(){}return t.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},t.LoadResConfig=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[3,2];case 1:return t.sent(),[3,4];case 2:return[4,RES.loadConfig("https://game.gtimg.cn/images/dnf/m/skill/default.res.json","https://game.gtimg.cn/images/dnf/m/skill/")];case 3:t.sent(),t.label=4;case 4:return[2]}})})},t.getRandomIndex=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=50),t>=e?0:Math.ceil(Math.random()*(e-t))+t},t.Number2Text=function(t){var e=["零","一","二","三","四","五","六","七","八","九"];return e[t]},t.getAdByLevel=function(){return Config.adLevel[0]},t.loadImageByUrl=function(t,e){try{RES.getResByUrl(t.url,function(n){e&&e({status:1,event:n,item:t})})}catch(n){Log.error(n),e&&e({status:0})}},t}();window.Tools=n,__reflect(n.prototype,"Tools",[])},function(t,e){var n=function(){function t(){}return t.playSound=function(e){t.doPlaySound(e)},t.doPlaySound=function(t){var e;switch(t){case 1:e=RES.getRes("entance");break;case 2:e=RES.getRes("clean");break;case 3:e=RES.getRes("clone")}e&&e.play(0,1)},t.ENTRANCE=1,t.CLEAN=2,t.CLONE=3,t.currentSound=-1,t}();window.SoundMgr=n,__reflect(n.prototype,"SoundMgr",[])},function(t,e){var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.onPropertyChange=function(t,e,n){},e.prototype.refresh=function(){this.dispatchEvent(new egret.Event(egret.Event.CHANGE))},e}(egret.EventDispatcher);window.Model=n,__reflect(n.prototype,"Model",[])},function(t,e){var n=function(){function t(){this.hasChild=!1}return Object.defineProperty(t.prototype,"airspace",{get:function(){return null==this.face},enumerable:!1,configurable:!0}),t.prototype.Postion=function(t){this.Post=t,this.hasChild=!0},t}();window.SpaceData=n,__reflect(n.prototype,"SpaceData",[])},function(t,e){var n=function(t){function e(e,n){void 0===e&&(e="next_bg_png"),void 0===n&&(n="");var i=t.call(this)||this;return i.buttonRes=e,i.labelStr=n,i.touchEnabled=!0,i.init(),i}return __extends(e,t),e.prototype.init=function(){this.mainWin=Tools.createBitmapByName(this.buttonRes),this.mainWin.height=60,this.mainWin.width=180,this.addChild(this.mainWin);var t=new egret.TextField;t.textAlign=egret.HorizontalAlign.CENTER,t.verticalAlign=egret.VerticalAlign.MIDDLE,t.textColor=16777215,t.text=this.labelStr,t.size=24,t.width=this.mainWin.width-40,t.height=this.mainWin.height,t.y=this.mainWin.y,t.x=this.mainWin.x+20,this.mainText=t,this.addChild(this.mainText)},e.prototype.setWidth=function(t){this.mainWin.width=t},e.prototype.setHeight=function(t){this.mainWin.height=t},e.prototype.setFontSize=function(t){this.mainText.size=t},e}(egret.Sprite);window.Button=n,__reflect(n.prototype,"Button",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.width=egret.MainContext.instance.stage.stageWidth,e.height=egret.MainContext.instance.stage.stageHeight,e}return __extends(e,t),e.prototype.onTouchEvent=function(t){t.stopPropagation()},e.prototype.onLeftButtonClick=function(t){this.dispatchEvent(new egret.Event("close")),t.stopPropagation(),this.visible=!1,this.close()},e.prototype.initMap=function(){if(this.cover=new egret.Shape,this.cover.graphics.beginFill(0,.8),this.cover.graphics.drawRect(0,0,this.width,this.height),this.cover.graphics.endFill(),this.addChild(this.cover),this.cover.touchEnabled=!0,this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchEvent,this),this.bt1Str&&(this.mainWindow=Tools.createBitmapByName("dialog_bg_png"),this.mainWindow.x=this.width/2-this.mainWindow.width/2,this.mainWindow.y=this.height/2-this.mainWindow.height/2,this.addChild(this.mainWindow),this.labelText=new egret.TextField,this.labelText.textAlign=egret.HorizontalAlign.CENTER,this.labelText.verticalAlign=egret.VerticalAlign.MIDDLE,this.labelText.textColor=1250087,this.labelText.width=this.mainWindow.width-80,this.labelText.height=this.mainWindow.height,this.labelText.y=this.mainWindow.y,this.labelText.x=this.mainWindow.x+40,this.labelText.lineSpacing=8,this.addChild(this.labelText),this.labelText.text=this.content,this.labelText.y=this.labelText.y-16,this.button1=new Button("next_bg_png",this.bt1Str),this.addChild(this.button1),this.button1.y=this.mainWindow.y+this.mainWindow.height-this.button1.height-30,this.button1.x=this.mainWindow.x+this.mainWindow.width/2-this.button1.width/2,this.button1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onLeftButtonClick,this)),this.ad){if(this.adDisplayContainer||(this.adDisplayContainer=new egret.DisplayObjectContainer,this.adDisplayContainer.touchEnabled=!0,this.adDisplayContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onAdClick,this),this.addChild(this.adDisplayContainer)),!this.adBitmap){this.adBitmap=new egret.Bitmap,this.adDisplayContainer.addChild(this.adBitmap),this.adBitmap.texture=RES.getRes(this.ad.adImage);var t=this.width/this.adBitmap.width;this.adBitmap.width=this.width,this.adBitmap.height=this.adBitmap.height*t}this.adDisplayContainer.x=0,this.adDisplayContainer.y=this.height-this.adBitmap.height}},e.prototype.onAdClick=function(){window.location.assign(this.ad.url)},e.show=function(t,n,i,o){var a=new e;return a.ad=o,a.bt1Str=t,a.bt2Str=n,a.content=i,a.initMap(),e.stage.addChild(a),a},e.showPass=function(){var t=Tools.getAdByLevel();return e.show("重新挑战","share","恭喜打败希洛克，完成挑战！",t)},e.prototype.close=function(){this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchEvent,this),this.bt1Str&&this.button1.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onLeftButtonClick,this),this.parent&&this.parent.removeChild(this)},e}(egret.DisplayObjectContainer);window.Dialog=n,__reflect(n.prototype,"Dialog",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e._invalidateUpdateFlag=!1,e._removedAutoDispose=!0,e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,e.onTouchBegin,e),e.addEventListener(egret.TouchEvent.TOUCH_END,e.onTouchEnd,e),e.addEventListener(egret.TouchEvent.TOUCH_MOVE,e.onTouchMove,e),e.addEventListener(egret.Event.REMOVED,e.onRemoved,e),e}return __extends(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data!=t&&(this.swapDataChangedEventListener(this._data,t),this._data=t,this.onDataChanged())},enumerable:!1,configurable:!0}),e.prototype.invalidateUpdate=function(){this._invalidateUpdateFlag||(egret.callLater(this.update,this),this._invalidateUpdateFlag=!0)},e.prototype.update=function(){this._invalidateUpdateFlag=!1},e.prototype.dispose=function(){this._disposed||(this.onDispose(),this._disposed=!0)},e.prototype.onTouchBegin=function(t){},e.prototype.onTouchEnd=function(t){},e.prototype.onTouchMove=function(t){},e.prototype.onRemoved=function(t){t.target==this&&this._removedAutoDispose&&this.dispose()},e.prototype.swapDataChangedEventListener=function(t,e){t&&t instanceof egret.EventDispatcher&&t.removeEventListener(egret.Event.CHANGE,this.onDataChanged,this),e&&e instanceof egret.EventDispatcher&&e.addEventListener(egret.Event.CHANGE,this.onDataChanged,this)},e.prototype.onDataChanged=function(){this.invalidateUpdate()},e.prototype.onDispose=function(){this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this),this.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),this.removeEventListener(egret.Event.REMOVED,this.onRemoved,this),this.data=null},e}(egret.DisplayObjectContainer);window.View=n,__reflect(n.prototype,"View",[])},function(t,e){var n=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.setHeader=function(t){this._faceDisplay=new egret.Bitmap(RES.getRes(""+t+t+"_png")),this._faceDisplay.width=80,this._faceDisplay.height=80,this.hasChild=!0,this.addChild(this._faceDisplay)},e.prototype.change=function(){console.log("chang!")},e}(View);window.Face=n,__reflect(n.prototype,"Face",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.score=0,e._spaceList=[],e._spaceListRow=[],e._spaceListColumn=[],e._spaceDataList=[],e.columnList=[],e._handleList=[],e.changeable=!1,e.row=7,e.col=5,e.touchPosition={x:0,y:0},e._back_bottom=new egret.Bitmap(RES.getRes("back_bottom")),e.addChild(e._back_bottom),e._back_top=new egret.Bitmap(RES.getRes("back_top")),e._back_top.width=egret.MainContext.instance.stage.stageWidth,e._back_top.height=500,e.addChild(e._back_top),e._spaceContainer=new egret.DisplayObjectContainer,e.addChild(e._spaceContainer),e._spaceContainer.x=egret.MainContext.instance.stage.stageWidth/2-78*e.col/2,e._spaceContainer.y=egret.MainContext.instance.stage.stageHeight/2-100,e._scoreDisplay=new egret.TextField,e._scoreDisplay.text="分数："+e.score,e._scoreDisplay.x=egret.MainContext.instance.stage.stageWidth-e._scoreDisplay.width-30,e._scoreDisplay.y=440,e._scoreDisplay.textColor=16777215,e.addChild(e._scoreDisplay),e}return __extends(e,t),Object.defineProperty(e.prototype,"splaceList",{set:function(t){for(var e=this,n=78,i=0;i<this.row;i++){for(var o=[],a=[],r=0;r<this.col;r++){var s=new Space;s.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onSceneTouchEnd,this),s.addEventListener(egret.TouchEvent.TOUCH_END,this.onSceneTouchEnd2,this),s.setPos(i,r),s.data,s.x+=78*r,s.y=n,this._spaceContainer.addChild(s),this._spaceList.push(s),o.push(s._spaceData),a.push(s)}n+=78,this._spaceDataList.push(o),this._spaceListRow.push(a)}setTimeout(function(){e.checkClean()},1e3)},enumerable:!1,configurable:!0}),e.prototype.checkClean=function(){var t=this;console.log("开始检查是否有可消除");var e=[],n=[],i=[],o=this._spaceDataList[0].map(function(e,n){return t._spaceDataList.map(function(t){return t[n]})});this._spaceListColumn=this._spaceListRow[0].map(function(e,n){return t._spaceListRow.map(function(t){return t[n]})}),this.columnList=this._spaceListColumn;for(var a=0;a<this._spaceDataList.length;a++){for(var r=[],s=0;s<this._spaceDataList[a].length;s++){var c=this._spaceDataList[a][s];0===r.length?r.push(c):r[r.length-1].Post.random===c.Post.random?(r.push(c),s===this._spaceDataList[a].length-1&&r.length>=3&&(n.push(r),r=[])):r.length<3?r=[c]:(n.push(r),r=[c])}e.push(r)}for(var a=0;a<this._spaceDataList[a].length;a++)for(var h=[],s=0;s<this._spaceDataList.length;s++){var c=o[a][s];0===h.length?h.push(c):h[h.length-1].Post.random===c.Post.random?(h.push(c),s===o[a].length-1&&h.length>=3&&(i.push(h),h=[])):h.length<3?h=[c]:(i.push(h),h=[c])}this._handleList=this.getOneArray(__spreadArrays(n,i));var u=!1;return this._spaceList.forEach(function(e){t._handleList.forEach(function(n){JSON.stringify(e._spaceData)===JSON.stringify(n)&&(t.score+=10,t._scoreDisplay.text="分数："+t.score,t._scoreDisplay.x=egret.MainContext.instance.stage.stageWidth-t._scoreDisplay.width-30,e.doClear(),u=!0)})}),u?(this.changeable=!1,setTimeout(function(){t.fallDown()},500)):this.changeable=!0,u},e.prototype.fallDown=function(){console.log("开始处理下降",this._spaceDataList);for(var t=[],e=[],n=0;n<this._spaceListColumn.length;n++)for(var i=0;i<this._spaceListColumn[n].length;i++)this._spaceListColumn[n][i]._spaceData.hasChild||(e.push(this._spaceListColumn[n][i]),-1===t.indexOf(this._spaceListColumn[n][i]._spaceData.Post.col)?t.push(this._spaceListColumn[n][i]._spaceData.Post.col):"");this._spaceListColumn.forEach(function(e,n){if(-1!==t.indexOf(n))for(var i=e.length-1;i>=0;i--)if(!e[i]._spaceData.hasChild&&i>0){for(var o=null,a=null,r=i-1;r>=0;r--)if(o=r,e[o]._spaceData.hasChild){a=e[r];break}null!=o&&a&&(e[i]._spaceData.hasChild=!0,e[i]._spaceData.Post.random=e[o]._spaceData.Post.random,e[i].render(),e[o]._spaceData.hasChild=!1,e[o].doClear2())}}),this.recoverSpace()},e.prototype.recoverSpace=function(){var t=this;this._spaceList.forEach(function(t){t._spaceData.hasChild||t.randomRender()}),setTimeout(function(){console.log("再次检查清除"),t.checkClean()},500)},e.prototype.getOneArray=function(t){var e=[];if(t.length>0)for(var n=0;n<t.length;n++)for(var i=0;i<t[n].length;i++)0===e.length?e.push(t[n][i]):e.indexOf(-1===t[n][i])&&e.push(t[n][i]);return e},e.prototype.onSceneTouchEnd=function(t){this.touchPosition.x=t.stageX,this.touchPosition.y=t.stageY,this.touchSpace=t.target.parent},e.prototype.onSceneTouchEnd2=function(t){var e=this;if(this.changeable&&this.touchSpace._spaceData.hasChild){var n=t.stageY-this.touchPosition.y,i=t.stageX-this.touchPosition.x,o=this.GetSlideAngle(i,n),a=this._spaceList.indexOf(this.touchSpace),r=null,s=null;if(o>=-45&&45>o){if(r=a+1,s=4,Math.abs(i)<40)return;console.log("向右")}else if(o>=45&&135>o){if(console.log("下"),s=2,r=a+5,Math.abs(n)<40)return}else if(o>=-135&&-45>o){if(r=a-5,s=1,Math.abs(n)<40)return;console.log("向上")}else if((o>=135&&180>=o||o>=-180&&-135>o)&&(console.log("向左"),r=a-1,s=3,Math.abs(i)<40))return;if(r){var c=this._spaceList[a]._spaceData.Post.random;this._spaceList[a]._spaceData.Post.random=this._spaceList[r]._spaceData.Post.random,this._spaceList[r]._spaceData.Post.random=c,this._spaceList[a].render(),this._spaceList[r].render(),this.changeable=!1,setTimeout(function(){var t=e.checkClean();t||(e._spaceList[r]._spaceData.Post.random=e._spaceList[a]._spaceData.Post.random,e._spaceList[a]._spaceData.Post.random=c,e._spaceList[a].render(),e._spaceList[r].render())},300)}}},e.prototype.GetSlideAngle=function(t,e){return 180*Math.atan2(e,t)/Math.PI},e}(View);window.GScene=n,__reflect(n.prototype,"GScene",[])},function(t,e){var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.onAddToStage=function(){Log.info("开始加载游戏主逻辑页面")},e}(BaseView);window.GameMain=n,__reflect(n.prototype,"GameMain",[])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){var t=new egret.TextField;this.addChild(t),t.y=egret.MainContext.instance.stage.stageHeight/2-100,t.width=egret.MainContext.instance.stage.stageWidth,t.height=100,t.size=40,t.textAlign="center",this.textField=t},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);window.LoadingUI=n,__reflect(n.prototype,"LoadingUI",["RES.PromiseTaskReporter"])},function(t,e){var n=function(t){function e(){var e=t.call(this)||this;return e.touchEnabled=!0,e.width=e.height=78,e._backDisplay=new egret.Bitmap(RES.getRes("space")),e._backDisplay.width=e.width,e._backDisplay.height=e.height,e.addChild(e._backDisplay),e._backDisplay.touchEnabled=!0,e}return __extends(e,t),e.prototype.setPos=function(t,e){this._spaceData=new SpaceData,this.face=new Face,this.face.width=78,this.face.height=78;var n=Tools.getRandomIndex(1,5);this.face.setHeader(n),this.addChild(this.face),this._spaceData.Postion({row:t,col:e,random:n}),this._spaceData.hasChild=!0},e.prototype.slide=function(t){switch(console.log("direction",t),t){case 1:this.face.y-=78;break;case 2:this.face.y+=78;break;case 3:this.face.x-=78;break;case 4:this.face.x+=78}},e.prototype.render=function(){var t=this._spaceData.Post.random;this._spaceData.hasChild=!0,console.log(t);var e=egret.Tween.get(this.face);e.to({alpha:0},150),this.face._faceDisplay.texture=RES.getRes(""+t+t+"_png"),e.to({alpha:1},150)},e.prototype.doClear=function(){var t=this,e=this._spaceData.Post.random,n=0;console.log("进入这里的",e,n);var i=setInterval(function(){t.face._faceDisplay.texture=RES.getRes("fxcolor"+e+"_"+n),n++,n>6&&clearInterval(i)},50);SoundMgr.doPlaySound(2),this._spaceData.hasChild=!1},e.prototype.doClear2=function(){this.face._faceDisplay.texture=RES.getRes("_"),this._spaceData.hasChild=!1},e.prototype.flex=function(t){this.face._faceDisplay.texture=RES.getRes(""+t+t+"_png")},e.prototype.randomRender=function(){var t=Tools.getRandomIndex(1,5);this._spaceData.Post.random=t,this._spaceData.hasChild=!0,this.face._faceDisplay.texture=RES.getRes(""+t+t+"_png")},e}(View);window.Space=n,__reflect(n.prototype,"Space",[])}]);