class Role extends View {
  private row: number = 7
  private col: number = 5

  private _faceList: Array<Face> = []; // 铺平的存放的 space一维数组
  private _faceListRow = [] // 存放 space的二维数组
  private _faceListColumn = [] // 存放 space的二维数组 是上面那个的二维数组行列互换

  private _faceDataList = [] // 存放space坐标信息的二维数组

  private clearTime = 0 // 根据这个播放不同的消除后的音效

  private _handleList = []  // 需要消除的元素存放的数组

  private changeable: boolean = false  // 是否可以拖动交换位置的标志

  private touchSpace: Face // 暂存的Space 用于通过对比两次space的位置角度来判断拖动的方位
  private touchPosition: any = { x: 0, y: 0 } // 第一次触屏时的 x 和 y 用于和第二次触摸时的 x 和 y进行对比确定方位

  private dispatcher:CustomDispatcher = CustomDispatcher.disp

  constructor() {
    super()
    this.setRole()
  }

  public setRole() {
    let y = 78
    for (let i = 0; i < this.row; i++) {
      let brr = []
      let crr = []
      for (let j = 0; j < this.col; j++) {
        /* space 存着 _spaceData， _spaceData里面存着 位置信息 是否含有子元素信息 */
        let face = new Face();
        // 存下每个space区域的坐标位置
        face.x += 78 * j
        face.y = y
        face.setPos(i, j)
        this._faceList.push(face)
        this.addChild(face)
        face.touchEnabled = true
        face.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSceneTouchEnd, this);
        face.addEventListener(egret.TouchEvent.TOUCH_END, this.onSceneTouchEnd2, this);
        crr.push(face)
        brr.push(face._posData)
      }
      y += 78
      this._faceDataList.push(brr)
      this._faceListRow.push(crr)
    }
    this._faceListColumn = this._faceListRow[0].map((col, index) => {
      return this._faceListRow.map(row => {
        return row[index];
      })
    })
    setTimeout(() => {
      this.checkClean()
    }, 1000);
  }

  public checkClean(): boolean {
    /*
      处理的逻辑是分别一行一行的遍历 判断是否有行内相同元素大于等于3的元素
        再以列为单位，一列一列进行便利，判断是否列内有相同元素连着排着大于等于3的元素
        最终将行和列的元素一起挑出来 有相同的元素只要消除一次即可
      该方法会返回是一个是否可消除的布尔值
    */
    this._faceDataList = []
    for (let i = 0; i < this.row; i++) {
      let brr = []
      for (let j = 0; j < this.col; j++) {
        brr.push(this._faceList[(i * this.col) + j]._posData)
      }
      this._faceDataList.push(brr)
    }
    console.log('this.factDataList', this._faceDataList)
    let arr = []
    let handle = []
    let handle2 = []
    // crr 二维数组行列互换
    let crr = this._faceDataList[0].map((col, index) => {
      return this._faceDataList.map(row => {
        return row[index];
      })
    })

    // 以行为单位获取行相同数量>=3的face
    for (let i = 0; i < this._faceDataList.length; i++) {
      let row = []
      for (let j = 0; j < this._faceDataList[i].length; j++) {
        let one = this._faceDataList[i][j]
        if (row.length === 0) {
          row.push(one)
        } else if (row[row.length - 1].color === one.color) {
          // 颜色相同
          row.push(one)
          if (j === this._faceDataList[i].length - 1 && row.length >= 3) {
            handle.push(row)
            row = []
          }
        } else {
          // 颜色不同
          if (row.length < 3) {
            row = [one]
          } else {
            handle.push(row)
            row = [one]
          }
        }
      }
      arr.push(row)
    }

    // 以列为单位获取行相同数量>=3的face
    for (let i = 0; i < this._faceDataList[i].length; i++) {
      let col = []
      for (let j = 0; j < this._faceDataList.length; j++) {
        let one = crr[i][j]
        if (col.length === 0) {
          col.push(one)
        } else if (col[col.length - 1].color === one.color) {
          // 颜色相同
          col.push(one)
          if (j === crr[i].length - 1 && col.length >= 3) {
            handle2.push(col)
            col = []
          }
        } else {
          // 颜色不同
          if (col.length < 3) {
            col = [one]
          } else {
            handle2.push(col)
            col = [one]
          }
        }
      }
    }
    // 将行数组和列数组排成一个数组
    this._handleList = Fnc.getOneArray([...handle, ...handle2])
    let clearFlag = false
    this._faceList.forEach((face: Face) => {
      this._handleList.forEach((item) => {
        if (JSON.stringify(face._posData) === JSON.stringify(item)) {
          // 消除元素
          this.dispatcher.gainScore()
          face.doClear()
          clearFlag = true
        }
      })
    })

    if (clearFlag) {
      this.clearTime++
      this.changeable = false
      setTimeout(() => {
        this.fallDown()
      }, 500);
    } else {
      if (this.clearTime >= 2) {
        // 一次改动 消除大于等于2个部分  播放新音频
        SoundMgr.doPlaySound(3)
      }
      this.changeable = true
    }
    return clearFlag // 返回是否可以消除的状态
  }

  public fallDown() {
    /*
      1.通过遍历得到有发生消除的列有哪些
      2.通过一个算法 实现将 有变化的列的 元素下落到最后
    */
    console.log('开始处理下降', this._faceDataList)
    let changeCloumn = []
    let array = []
    // 以列为单位，获取有发生改变的列
    for (let i = 0; i < this._faceListColumn.length; i++) {
      for (let j = 0; j < this._faceListColumn[i].length; j++) {
        if (!this._faceListColumn[i][j].hasChild) {
          array.push(this._faceListColumn[i][j])
          changeCloumn.indexOf(this._faceListColumn[i][j]._posData.col) === -1 ? changeCloumn.push(this._faceListColumn[i][j]._posData.col) : ''
        }
      }
    }

    // 将元消除之后有空隙的位置填满
    this._faceListColumn.forEach((item, index) => {
      if (changeCloumn.indexOf(index) !== -1) {
        for (let i = item.length - 1; i >= 0; i--) {
          if (!item[i].hasChild) {
            // 需要交换
            if (i > 0) {
              let tIndex = null
              let temp = null
              for (let j = i - 1; j >= 0; j--) {
                tIndex = j
                if (item[tIndex].hasChild) {
                  temp = item[j]
                  break
                }
              }
              if (tIndex != null && temp) {
                item[i].hasChild = true
                item[i]._posData.color = item[tIndex]._posData.color
                item[i].render()
                item[tIndex].hasChild = false
                item[tIndex].doClear2()
              }
            }
          }
        }
      }
    })
    setTimeout(() => {
      // 执行恢复方法
      this.recoverSpace(changeCloumn)
    }, 200);
  }

  private recoverSpace(changeCloumn) {
    // 加上恢复的动画之后 将空的space填满
    let obj = {}
    let spaceCount = 0  // 空的space数量
    changeCloumn.map(item=>{
      let arr = []
      this._faceListColumn[item].forEach(items=>{
        if(!items.hasChild){
          spaceCount++
          let random = Tools.getRandomIndex(1, 5)
          arr.push(random)
        }
      })
      obj[item] = arr
    })


    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        for(let i = 0;i<obj[key].length;i++){
          let face = new Face()
          face.setHeader(obj[key][i])
          this.addChild(face)
          face.x = 78*Number(key)
          face.y = -78*i
          let count = 0
          face.alpha = 0
          let timer = setInterval(()=>{
            if(face.y>20){
              face.alpha = 1
            }
            face.y+=12
            count+=12
            if(count>=obj[key].length*78){
              clearInterval(timer)
              if(this.$children.indexOf(face)!==-1){
                this.removeChild(face)
              }
              this._faceListColumn[key][obj[key].length-i-1].renders(obj[key][i])
              spaceCount--
              if(spaceCount === 0){
                // space全部填满了 再次开始 清除检测
                setTimeout(() => {
                  this.checkClean()
                }, 100);
              }
            }
          },20)
        }
      }
    }
  }

  public onSceneTouchEnd(e: egret.TouchEvent) {
    this.touchPosition.x = e.stageX
    this.touchPosition.y = e.stageY
    this.touchSpace = e.target
  }

  public onSceneTouchEnd2(e: egret.TouchEvent) {
    /**
     * 根据两次触摸位置的角度 判断挪动的方向
     */
    this.clearTime = 0
    if (!this.changeable || !this.touchSpace.hasChild) {
      // 不可点的状态 和 空的space是不可以进行拖动操作的
      return
    }
    let dy = e.stageY - this.touchPosition.y
    let dx = e.stageX - this.touchPosition.x
    var angle = Fnc.getSlideAngle(dx, dy);
    let index = this._faceList.indexOf(this.touchSpace)
    let temp2: number = null
    let direction: number = null // 1：向上，2：向下，3：向左，4：向右
    if (angle >= -45 && angle < 45) {
      if (Math.abs(dx) < 40) {
        // 处理位移不能太小就拖动的bug
        return
      }
      temp2 = index + 1
      direction = 4
      this._faceList[index].slider(4)
      this._faceList[temp2].slider(3)
      console.log('向右')

    } else if (angle >= 45 && angle < 135) {
      console.log('下')
      if (Math.abs(dy) < 40) {
        return
      }
      direction = 2
      temp2 = index + 5
      this._faceList[index].slider(2)
      this._faceList[temp2].slider(1)
    } else if (angle >= -135 && angle < -45) {
      if (Math.abs(dy) < 40) {
        return
      }
      temp2 = index - 5
      direction = 1
      this._faceList[index].slider(1)
      this._faceList[temp2].slider(2)
      console.log('向上')
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      console.log('向左')
      if (Math.abs(dx) < 40) {
        return
      }
      temp2 = index - 1
      direction = 3
      this._faceList[index].slider(3)
      this._faceList[temp2].slider(4)
    }
    if (temp2) {

      let temp = this._faceList[index]._posData.color
      this._faceList[index]._posData.color = this._faceList[temp2]._posData.color
      this._faceList[temp2]._posData.color = temp
      setTimeout(() => {
        this._faceList[index].render() // 重新渲染页面
        this._faceList[temp2].render()
        this._faceList[index].alpha = 0
        this._faceList[temp2].alpha = 0
      }, 210);
      // // 防止在交换的和检查的清除的过程中又进行交叉替换 checkClean方法中会恢复继续可以替换
      this.changeable = false
      // // 交换位置之后重新检测
      setTimeout(() => {
        this._faceList[index].alpha = 1
        this._faceList[temp2].alpha = 1
        let testClean = this.checkClean()
        if (direction === 1) {
          // 1：向上，2：向下，3：向左，4：向右
          if(!testClean){
            this._faceList[index].slider(2)
          }else{
            this._faceList[index].y+=78
          }
          
          this._faceList[temp2].slider(1)
        } else if (direction === 2) {
          if(!testClean){
            this._faceList[index].slider(1)
          }else{  
            this._faceList[index].y-=78
          }
          
          this._faceList[temp2].slider(2)
        } else if (direction === 3) {
          if(!testClean){
            this._faceList[index].slider(4)
          }else{
            this._faceList[index].x+=78
          }
          
          this._faceList[temp2].slider(3)
        } else if (direction === 4) {
          if(!testClean){
            this._faceList[index].slider(3)
          }else{
            this._faceList[index].x-=78
          }
          this._faceList[temp2].slider(4)
        }
        
        if (!testClean) {
          // 如果不能消除 需要恢复原来的位置信息
          this._faceList[temp2]._posData.color = this._faceList[index]._posData.color
          this._faceList[index]._posData.color = temp
          this._faceList[index].render() // 重新渲染页面
          this._faceList[temp2].render()
        }
      }, 300);
    }
  }
}