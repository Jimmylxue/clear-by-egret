class SoundMgr {
  public static ENTRANCE: number = 1;
  public static CLEAN: number = 2;
  public static CLONE: number = 3;

  private static currentSound: number = -1;

  public static playSound(type: number): void {
      SoundMgr.doPlaySound(type);
  }

  public static doPlaySound(type: number): void {
      let sound;
      switch(type) {
          case 1:
              sound = RES.getRes("entance");
              break;
          case 2:
              sound = RES.getRes("clean");
              break;
          case 3:
              sound = RES.getRes("clone");
              break;
          default:
              break;
      }
      if (sound) {
          sound.play(0, 1);
      }
  }
}