interface Position{
    row:number, // 行
    col:number, // 列
    random:number // 颜色
}

class SpaceData {
    public face

    public Post:Position;

    public hasChild:boolean = false

    public get airspace(): boolean {
        return this.face == null;
    }

    public Postion(obj){
        this.Post = obj
        this.hasChild = true
    }

}