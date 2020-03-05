export default class {
  
  public static isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent);
  }

  public static isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  public static isMobile(): boolean {
    return this.isAndroid() || this.isIOS();
  }
}
