class View extends egret.DisplayObjectContainer {
    protected _data: any;
    protected _invalidateUpdateFlag: boolean =false;
    protected _disposed: boolean;
    /**
     * 是否在被移除的时候dispose
     */
    protected _removedAutoDispose: boolean = true;

    constructor() {
        super();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.Event.REMOVED, this.onRemoved, this);
    }
     
    public get data(): any {
        return this._data;
    }

    public set data(value: any) {
        if (this._data == value) return;
        this.swapDataChangedEventListener(this._data, value);
        this._data = value;
        this.onDataChanged();
    }

    invalidateUpdate(): void {
        if (this._invalidateUpdateFlag) return;
        egret.callLater(this.update, this);
        this._invalidateUpdateFlag = true;
    }

    update(): void {
        this._invalidateUpdateFlag = false;
    }

    dispose(): void {
        if (this._disposed) return;
        this.onDispose();
        this._disposed = true;
    }

    protected onTouchBegin(e: egret.TouchEvent): void {

    }

    protected onTouchEnd(e: egret.TouchEvent): void {

    }

    protected onTouchMove(e: egret.TouchEvent): void {

    }

    protected onRemoved(e: egret.Event): void {
        if (e.target != this) return;
        if (this._removedAutoDispose) this.dispose();
    }

    protected swapDataChangedEventListener(oldTarget: egret.EventDispatcher, newTarget: egret.EventDispatcher): void {
        if (oldTarget && oldTarget instanceof egret.EventDispatcher)
            oldTarget.removeEventListener(egret.Event.CHANGE, this.onDataChanged, this);
        if (newTarget && newTarget instanceof egret.EventDispatcher)
            newTarget.addEventListener(egret.Event.CHANGE, this.onDataChanged, this);
    }

    protected onDataChanged(): void {
        this.invalidateUpdate();
    }

    protected onDispose(): void {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.removeEventListener(egret.Event.REMOVED, this.onRemoved, this);
        this.data = null;
    }
}