class Model extends egret.EventDispatcher {
    public onPropertyChange(field, oldValue, value): void {

    }

    public refresh(): void {
        this.dispatchEvent(new egret.Event(egret.Event.CHANGE));
    }
}