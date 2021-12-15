class Bg extends View {
  private row: number = 7
  private col: number = 5
  constructor() {
    super()

    this.setSplaceList()
  }

  public setSplaceList() {
    let y = 78
    for (let i = 0; i < this.row; i++) {
      let x = 78
      let brr = []
      let crr = []
      for (let j = 0; j < this.col; j++) {
        /* space 存着 _spaceData， _spaceData里面存着 位置信息 是否含有子元素信息 */
        let space = new Space();
        space.data
        space.x += 78 * j
        space.y = y
        this.addChild(space)
      }
      y += 78
    }
    this.addChild(new Role())
    // setTimeout(() => {
    //   this.checkClean()
    // }, 1000);
  }
}