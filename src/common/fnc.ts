class Fnc {
  // 获取角度
  public static getSlideAngle(x:number,y:number): number {
    return Math.atan2(y,x) * 180 / Math.PI;
  }

  // 二组数组压成一维数组
  public static getOneArray(arr):any[]{
    let crr = []
      if(arr.length>0){
        for(let i = 0;i<arr.length;i++){
          for(let j = 0;j<arr[i].length;j++){
            if(crr.length === 0){
              crr.push(arr[i][j])
            }else{
              if(crr.indexOf(arr[i][j] === -1)){
                crr.push(arr[i][j])
              }
            }
          }
        }
      }
    return crr
  }
}