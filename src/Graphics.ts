import ICoordinate from '~/interfaces/ICoordinate';
import IRect from '~/interfaces/IRect';

export default class {

  public static calculateRotatedRectCoordinates({ x, y, width, height, degree = 0 }: { x: number, y: number, width: number, height: number, degree?: number }): IRect {
    let topleft;
    let topright;
    let bottomright;
    let bottomleft;
    if (degree) {
      const cx = x + width / 2;
      const cy = y + height / 2;
      topleft = this.calculateRotationCoordinate({ x, y, cx, cy, degree });
      topright = this.calculateRotationCoordinate({ x: x + width, y, cx, cy, degree });
      bottomright = this.calculateRotationCoordinate({ x: x + width, y: y + height, cx, cy, degree });
      bottomleft = this.calculateRotationCoordinate({ x, y: y + height, cx, cy, degree });
    } else {
      topleft = { x, y };
      topright = { x: x + width, y };
      bottomright = { x: x + width, y: y + height };
      bottomleft = { x, y: y + height };
    }
    return { topleft, topright, bottomright, bottomleft };
  }

  private static calculateRotationCoordinate({ x, y, cx = 0, cy = 0, degree = 0 }: { x: number, y: number, cx?: number, cy?: number, degree?: number }): ICoordinate {
    const radian = degree * (Math.PI / 180);
    const sin = Math.sin(radian); 
    const cos = Math.cos(radian);
    return {
      x: cos * (x - cx) - sin * (y - cy) + cx,
      y: sin * (x - cx) + cos * (y - cy) + cy
    };
  }

  public static calculateCenterCoordinate(...points: ICoordinate[]): ICoordinate {
    const sum = points.reduce((sum, { x, y }) => {
      sum.x += x;
      sum.y += y;
      return sum;
    }, {x: 0, y: 0});
    sum.x /= points.length;
    sum.y /= points.length;
    return sum;
  }

  public static calculateAngleBetweenCoordinates(point1: ICoordinate, point2: ICoordinate): number {
    const radian = Math.atan2(point2.y - point1.y, point2.x - point1.x);
    const degree = radian * 180 / Math.PI;
    // const radian = Math.atan2(point2.x - point1.x, point2.y - point1.y);
    // let  degree = radian * 360 / (2 * Math.PI);
    // if (degree < 0) {
    //   degree += 360;
    // }
    return degree;
  }

  static calculateFitDimensions(
    {
      objectFit,
      intrinsicWidth,
      intrinsicHeight,
      intrinsicTop = 0,
      intrinsicLeft = 0,
      actualWidth,
      actualHeight
    }:
    {
      objectFit: 'contain'|'cover'|'fill'|'inherit'|'initial'|'none'|'scale-down'|'unset',
      intrinsicWidth: number,
      intrinsicHeight: number,
      intrinsicTop?: number,
      intrinsicLeft?: number,
      actualWidth: number,
      actualHeight: number
    }
  ): { top: number, left: number, width: number, height: number } {
    let top = intrinsicTop;
    let left = intrinsicLeft;
    let width = intrinsicWidth;
    let height = intrinsicHeight;
    if (objectFit === 'contain' || objectFit === 'cover' || objectFit === 'scale-down') {
      const horizontalRatio = intrinsicWidth / actualWidth;
      const verticalRatio = intrinsicHeight / actualHeight;
      const aspectRatio = objectFit === 'contain' || objectFit === 'scale-down'
        ? Math.min(horizontalRatio, verticalRatio)
        : Math.max(horizontalRatio, verticalRatio);
      const centerX = ( intrinsicWidth - actualWidth * aspectRatio ) / 2;
      const centerY = ( intrinsicHeight - actualHeight * aspectRatio ) / 2;
      top = intrinsicTop + centerY;
      left = intrinsicLeft + centerX;
      // top = (intrinsicHeight - height) / 2;
      // left = (intrinsicWidth - width) / 2;
      width = actualWidth * aspectRatio;
      height = actualHeight * aspectRatio;
    }
    return { top, left, width, height };
  }

  public static drawPoint(canvas: HTMLCanvasElement, { x, y, r = 3, color = 'aqua' }: { x: number, y: number, r?: number, color?: string }): void {
    const context = canvas.getContext('2d')!;
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  }

  public static drawCenterPoint(canvas: HTMLCanvasElement, { points, r = 3, color = 'aqua' }: { points: { x: number, y: number }[], r?: number, color?: string }): void {
    const { x, y } = this.calculateCenterCoordinate(...points);
    this.drawPoint(canvas, { x, y, r, color });
  }

  public static drawRect(canvas: HTMLCanvasElement, {
    x,
    y,
    width,
    height,
    degree = 0,
    lineWidth = 2,
    color = 'aqua'
  }: {
    x: number,
    y: number,
    width: number,
    height: number,
    degree?: number,
    lineWidth?: number,
    color?: string
  }): void {

    const { topleft, topright, bottomright, bottomleft } = this.calculateRotatedRectCoordinates({ x, y, width, height, degree });

    const context = canvas.getContext('2d')!;
    context.beginPath();
    context.moveTo(topleft.x, topleft.y);
    context.lineTo(topright.x, topright.y);
    context.lineTo(bottomright.x, bottomright.y);
    context.lineTo(bottomleft.x, bottomleft.y);
    context.closePath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.stroke();
  }

  public static flipHorizontal(canvas: HTMLCanvasElement): void {
    const context = canvas.getContext('2d')!;
    const imageData = context.getImageData(0,0, canvas.width, canvas.height);
    // Traverse every row and flip the pixels
    for (let i=0; i<imageData.height; i++) {
     // We only need to do half of every row since we're flipping the halves
      for (let j=0; j<imageData.width/2; j++) {
        const index = (i * 4) * imageData.width + (j * 4);
        const mirrorIndex = ((i + 1) * 4) * imageData.width - ((j + 1) * 4);
        for (let k=0; k<4; k++) {
          let temp = imageData.data[index + k];
          imageData.data[index + k] = imageData.data[mirrorIndex + k];
          imageData.data[mirrorIndex + k] = temp;
        }
      }
    }
    context.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
  }

  /**
   * Get the inherent width of an element
   * 
   * @param  {HTMLElement} element
   * @return {number}
   */
  public static getIntrinsicWidth(element: HTMLElement): number {
    const styles = getComputedStyle(element);
    return parseFloat(styles.width) - parseFloat(styles.paddingRight) - parseFloat(styles.borderRightWidth) - parseFloat(styles.paddingLeft) - parseFloat(styles.borderLeftWidth);
  }

  /**
   * Get the inherent height of an element
   * 
   * @param  {HTMLElement} element
   * @return {number}
   */
  public static getIntrinsicHeight(element: HTMLElement): number {
    const styles = getComputedStyle(element);
    return parseFloat(styles.height) - parseFloat(styles.paddingTop) - parseFloat(styles.borderTopWidth) - parseFloat(styles.paddingBottom) - parseFloat(styles.borderBottomWidth);
  }

  /**
   * Get the inherent top of an element
   * 
   * @param  {HTMLElement} element
   * @return {number}
   */
  public static getIntrinsicTop(element: HTMLElement): number {
    const styles = getComputedStyle(element);
    return parseFloat(styles.paddingTop) + parseFloat(styles.borderTopWidth) + parseFloat(styles.marginTop);
  }

  /**
   * Get the inherent left of an element
   * 
   * @param  {HTMLElement} element
   * @return {number}
   */
  public static getIntrinsicLeft(element: HTMLElement): number {
    const styles = getComputedStyle(element);
    return parseFloat(styles.paddingLeft) + parseFloat(styles.borderLeftWidth) + parseFloat(styles.marginLeft);
  }
}