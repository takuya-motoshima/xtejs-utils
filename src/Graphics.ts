/**
 * Graphic utility.
 */
import ICoordinate from '~/interfaces/ICoordinate';
import IRect from '~/interfaces/IRect';
import IDimensions from '~/interfaces/IDimensions';
import Color from '~/Color';

export default class {

  /**
   * Returns the intrinsic dimensions of the media element
   *
   * @param  {HTMLImageElement|HTMLVideoElement|ImageData} media
   * @return {{ width: number, height: number }}
   */
  public static getMediaDimensions(media: HTMLImageElement|HTMLVideoElement|ImageData): IDimensions {
    if (media instanceof HTMLImageElement) {
      return {
        width: media.naturalWidth,
        height: media.naturalHeight
      };
    } else if (media instanceof HTMLVideoElement) {
      return {
        width: media.videoWidth,
        height: media.videoHeight
      };
    } else {
      return {
        width: media.width,
        height: media.height
      };
    }
  }

  /**
   * Returns TRUE if the media element is loading a resource
   * 
   * @param  {HTMLImageElement|HTMLVideoElement} media
   * @return {boolean}
   */
  public static isMediaLoaded(media: HTMLImageElement|HTMLVideoElement): boolean {
    if (media instanceof HTMLImageElement) {
      return media.complete;
    } else if (media instanceof HTMLVideoElement) {
      return media.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
    } else {
      throw new Error('Invalid argument element');
    }
  }

  /**
   * Returns dimensions without borders and padding
   *
   * @param  {HTMLImageElement|HTMLVideoElement} media
   * @return {{ width: number, height: number }}
   */
  public static getInnerDimensions(media: HTMLImageElement|HTMLVideoElement): IDimensions {
    const style = getComputedStyle(media);
    const width = media.clientWidth - ( parseFloat(style.getPropertyValue('padding-left')) + parseFloat(style.getPropertyValue('padding-right')));
    const height = media.clientHeight - ( parseFloat(style.getPropertyValue('padding-top')) + parseFloat(style.getPropertyValue('padding-bottom')));
    return { width, height }
  }

  /**
   * Wait for media element resource to load
   * 
   * @param  {HTMLImageElement|HTMLVideoElement} media
   * @return {Promise<Event>}
   */
  public static awaitMediaLoaded(media: HTMLImageElement|HTMLVideoElement): Promise<Event> {
    return new Promise((resolve, reject) => {
      media.addEventListener('load', (event: Event) => {
        if (!event.currentTarget) {
          return;
        }
        resolve(event)
      }, { once: true });
      media.addEventListener('error', (event: Event) => {
        if (!event.currentTarget) {
          return
        }
        reject(event)
      }, { once: true });
    })
  }

  /**
   * Returns the coordinates of the rotated rectangle
   * 
   * @param  {number} x
   * @param  {number} y
   * @param  {number} width
   * @param  {number} height
   * @param  {number} degree
   * @return {ICoordinate[]}
   */
  public static getRotatedRectCoordinates(x: number, y: number, width: number, height: number, degree: number = 0): ICoordinate[] {
    let corner1;// Upper left corner
    let corner2;// Upper right corner
    let corner3;// Lower right corner
    let corner4;// Lower left corner
    if (degree !== 0) {
      const x2 = x + width / 2;
      const y2 = y + height / 2;
      corner1 = this.getRotationCoordinate(x, y, x2, y2, degree);
      corner2 = this.getRotationCoordinate(x + width, y, x2, y2, degree);
      corner3 = this.getRotationCoordinate(x + width, y + height, x2, y2, degree);
      corner4 = this.getRotationCoordinate(x, y + height, x2, y2, degree);
    } else {
      corner1 = { x, y };
      corner2 = { x: x + width, y };
      corner3 = { x: x + width, y: y + height };
      corner4 = { x, y: y + height };
    }
    return [ corner1, corner2, corner3, corner4 ];
  }

  /**
   * Returns rotated coordinates
   * 
   * @param  {number} x1
   * @param  {number} y2
   * @param  {number} x2
   * @param  {number} y2
   * @param  {number} degree
   * @return {ICoordinate} coordinate Coordinate after rotation
   */
  private static getRotationCoordinate(x1: number, y1: number, x2: number, y2: number, degree: number): ICoordinate {
    const radian = degree * (Math.PI / 180);
    const sin = Math.sin(radian); 
    const cos = Math.cos(radian);
    return {
      x: cos * (x1 - x2) - sin * (y1 - y2) + x2,
      y: sin * (x1 - x2) + cos * (y1 - y2) + y2
    };
  }

  /**
   * Returns the center coordinates
   * 
   * @param  {ICoordinate[]} coordinates
   * @return {ICoordinate} coordinate Center coordinates
   */
  public static getCenterCoordinate(...coordinates: ICoordinate[]): ICoordinate {
    const coordinate = coordinates.reduce((coordinate, { x, y }) => {
      coordinate.x += x;
      coordinate.y += y;
      return coordinate;
    }, {x: 0, y: 0});
    coordinate.x /= coordinates.length;
    coordinate.y /= coordinates.length;
    return coordinate;
  }

  /**
   * Returns the angle between two coordinates
   * 
   * @param  {number} x1
   * @param  {number} y1
   * @param  {number} x2
   * @param  {number} y2
   * @return {number}
   */
  public static getAngleBetweenCoordinates(x1: number, y1: number, x2: number, y2: number): number {
    const radian = Math.atan2(y2 - y1, x2 - x1);
    const degree = radian * 180 / Math.PI;
    // const radian = Math.atan2(x2 - x1, y2 - y1);
    // let  degree = radian * 360 / (2 * Math.PI);
    // if (degree < 0) {
    //   degree += 360;
    // }
    return degree;
  }

  /**
   * Returns the distance between two coordinates
   * 
   * @param  {number} x1
   * @param  {number} y1
   * @param  {number} x2
   * @param  {number} y2
   * @return {number}
   */
  public static getDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  /**
   * Returns a bounding box that covers the container considering the "object-fit" css property
   * 
   * @param  {HTMLElement}                       container
   * @param  {HTMLImageElement|HTMLVideoElement} media
   * @return {IRect}
   */
  public static getOverlayRect(container: HTMLElement, media: HTMLImageElement|HTMLVideoElement): IRect {
    const {
      width: intrinsicWidth,
      height: intrinsicHeight
    } = this.getMediaDimensions(media);
    const objectFit = getComputedStyle(media).getPropertyValue('object-fit');
    const visibleStyle = getComputedStyle(container);
    const visibleWidth =
      parseFloat(visibleStyle.getPropertyValue('width')) -
      parseFloat(visibleStyle.getPropertyValue('padding-right')) -
      parseFloat(visibleStyle.getPropertyValue('border-right-width')) -
      parseFloat(visibleStyle.getPropertyValue('padding-left')) -
      parseFloat(visibleStyle.getPropertyValue('border-left-width'));
    const visibleHeight =
      parseFloat(visibleStyle.getPropertyValue('height')) -
      parseFloat(visibleStyle.getPropertyValue('padding-top')) -
      parseFloat(visibleStyle.getPropertyValue('border-top-width')) -
      parseFloat(visibleStyle.getPropertyValue('padding-bottom')) -
      parseFloat(visibleStyle.getPropertyValue('border-bottom-width'));
    const visibleTop =
      parseFloat(visibleStyle.getPropertyValue('padding-top')) +
      parseFloat(visibleStyle.getPropertyValue('border-top-width')) +
      parseFloat(visibleStyle.getPropertyValue('margin-top'));
    const visibleLeft =
      parseFloat(visibleStyle.getPropertyValue('padding-left')) +
      parseFloat(visibleStyle.getPropertyValue('border-left-width')) +
      parseFloat(visibleStyle.getPropertyValue('margin-left'));

    if (/^(contain|cover|scale-down)$/.test(objectFit)) {
      const horizontalRatio = visibleWidth / intrinsicWidth;
      const verticalRatio = visibleHeight / intrinsicHeight;
      const ratio = /^(contain|scale-down)$/.test(objectFit) 
        ? Math.min(horizontalRatio, verticalRatio)
        : Math.max(horizontalRatio, verticalRatio);
      const cx = ( visibleWidth - intrinsicWidth * ratio ) / 2;
      const cy = ( visibleHeight - intrinsicHeight * ratio ) / 2;
      return {
        x: visibleLeft + cx,
        y: visibleTop + cy,
        width: intrinsicWidth * ratio,
        height: intrinsicHeight * ratio
      };
    } else {
      return {
        x: visibleLeft,
        y: visibleTop,
        width: visibleWidth,
        height: visibleHeight
      };
    }
  }

  /**
   * Returns the display dimensions and position of the media element
   * 
   * @param  {HTMLImageElement|HTMLVideoElement} media
   * @return {IRect} rect Display size and position of media element
   *          x                 : The horizontal position of the left-top point where the sourceFrame should be cut,
   *          y                 : The vertical position of the left-top point where the sourceFrame should be cut,
   *          width             : How much horizontal space of the sourceFrame should be cut,
   *          height            : How much vertical space of the sourceFrame should be cut,
   *          destinationX      : The percentage of the horizontal position of the left-top point on the printFrame where the image will be printed, relative to the printFrame width,
   *          destinationY      : The percentage of the vertical position of the left-top point on the printFrame where the image will be printed, relative to the printFrame height,
   *          destinationWidth  : The percentage of the printFrame width on which the image will be printed, relative to the printFrame width,
   *          destinationHeight : The percentage of the printFrame height on which the image will be printed, relative to the printFrame height.
   */
  public static getRenderedRect(media: HTMLImageElement|HTMLVideoElement): IRect {
    const objectFit = getComputedStyle(media).getPropertyValue('object-fit');
    const position = getComputedStyle(media).getPropertyValue('object-position').split(' ');
    const {
      width: intrinsicWidth,
      height: intrinsicHeight
    } = this.getMediaDimensions(media);
    const intrinsicRatio = intrinsicWidth / intrinsicHeight;
    const visibleWidth = media.clientWidth;
    const visibleHeight = media.clientHeight;
    const visibleRatio = visibleWidth / visibleHeight;
    const horizontalPercentage = parseInt(position[0]) / 100;
    const verticalPercentage = parseInt(position[1]) / 100;
    let width = 0;
    let height = 0;
    let x = 0;
    let y = 0;
    let destinationWidth = 1;
    let destinationHeight = 1;
    let destinationX = 0;
    let destinationY = 0;
    if (objectFit === 'none') {
      width = visibleWidth;
      height = visibleHeight;
      x = (intrinsicWidth - visibleWidth) * horizontalPercentage;
      y = (intrinsicHeight - visibleHeight) * verticalPercentage;
    } else if (objectFit === 'contain' || objectFit === 'scale-down') {
      // TODO: handle the 'scale-down' appropriately, once its meaning will be clear
      width = intrinsicWidth;
      height = intrinsicHeight;
      if (intrinsicRatio > visibleRatio) {
        destinationHeight = (intrinsicHeight / visibleHeight) / (intrinsicWidth / visibleWidth);
        destinationY = (1 - destinationHeight) * verticalPercentage;
      } else {
        destinationWidth = (intrinsicWidth / visibleWidth) / (intrinsicHeight / visibleHeight);
        destinationX = (1 - destinationWidth) * horizontalPercentage;
      }
    } else if (objectFit === 'cover') {
      if (intrinsicRatio > visibleRatio) {
        width = intrinsicHeight * visibleRatio;
        height = intrinsicHeight;
        x = (intrinsicWidth - width) * horizontalPercentage;
      } else {
        width = intrinsicWidth;
        height = intrinsicWidth / visibleRatio;
        y = (intrinsicHeight - height) * verticalPercentage;
      }
    } else if (objectFit === 'fill') {
      width = intrinsicWidth;
      height = intrinsicHeight;
    } else {
      console.error(`Unexpected object-fit attribute with value ${objectFit} relative to`);
    }
    return {
      x,
      y,
      width,
      height,
      destinationX,
      destinationY,
      destinationWidth,
      destinationHeight
    };
  }

  /**
   * Draw points
   * 
   * @param  {HTMLCanvasElement} canvas
   * @param  {number} x
   * @param  {number} y
   * @param  {number} options.radius
   * @param  {string} options.color
   * @return {void}
   */
  public static drawPoint(canvas: HTMLCanvasElement, x: number, y: number, { radius = 3, color = Color.accessibleBlue }: { radius?: number, color?: string } = {}): void {
    const context = canvas.getContext('2d')!;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  }

  /**
   * Draw center point
   * 
   * @param  {HTMLCanvasElement} canvas
   * @param  {ICoordinate[]} coordinates
   * @param  {number} options.radius
   * @param  {string} options.color
   * @return {void}
   */
  public static drawCenterPoint(canvas: HTMLCanvasElement, coordinates: ICoordinate[], { radius = 3, color = Color.accessibleBlue }: { radius?: number, color?: string } = {}): void {
    const { x, y } = this.getCenterCoordinate(...coordinates);
    this.drawPoint(canvas, x, y, { radius, color });
  }

  /**
   * Draw rectangle
   * 
   * @param  {HTMLCanvasElement} canvas
   * @param  {number} x
   * @param  {number} y
   * @param  {number} width
   * @param  {number} height
   * @param  {number} options.degree
   * @param  {number} options.lineWidth
   * @param  {string} options.lineColor
   * @param  {number} options.shadowBlur
   * @param  {string} options.shadowColor
   * @return {void}
   */
  public static drawRectangle(
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    width: number,
    height: number,
    {
      degree = 0,
      lineWidth = 2,
      lineColor = Color.accessibleBlue,
      shadowBlur = 0,
      shadowColor = Color.accessibleBlue
    }: {
      degree?: number,
      lineWidth?: number,
      lineColor?: string,
      shadowBlur?: number,
      shadowColor?: string
    } = {}
  ): void {
    const corners = this.getRotatedRectCoordinates(x, y, width, height, degree);
    const context = canvas.getContext('2d')!;
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    if (shadowBlur) {
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = shadowBlur;
      context.shadowColor = shadowColor;
    }
    context.beginPath();
    context.moveTo(corners[0].x, corners[0].y);
    context.lineTo(corners[1].x, corners[1].y);
    context.lineTo(corners[2].x, corners[2].y);
    context.lineTo(corners[3].x, corners[3].y);
    context.closePath();
    context.stroke();
  }

  /**
   * Draw rectangle corners
   * 
   * @param  {HTMLCanvasElement} canvas
   * @param  {number} x
   * @param  {number} y
   * @param  {number} width
   * @param  {number} height
   * @param  {number} options.lineWidth
   * @param  {string} options.lineColor
   * @param  {number} options.shadowBlur
   * @param  {string} options.shadowColor
   * @return {void}
   */
  public static drawRectangleCorners(
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
    width: number,
    height: number,
    {
      lineWidth = 2,
      lineColor = Color.accessibleBlue,
      shadowBlur = 0,
      shadowColor = Color.accessibleBlue
    }: {
      lineWidth?: number,
      lineColor?: string,
      shadowBlur?: number,
      shadowColor?: string
    } = {}
  ): void {
    const context = canvas.getContext('2d')!;
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    if (shadowBlur) {
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = shadowBlur;
      context.shadowColor = shadowColor;
    }
    const corner = Math.min(width, height) / 4;
    context.beginPath();
    context.moveTo(x, y + corner);
    context.lineTo(x, y);
    context.lineTo(x + corner, y);
    context.moveTo(x + width - corner, y);
    context.lineTo(x + width, y);
    context.lineTo(x + width , y + corner);
    context.moveTo(x, y + height - corner);
    context.lineTo(x, y + height);
    context.lineTo(x + corner, y + height);
    context.moveTo(x + width - corner, y + height);
    context.lineTo(x + width, y + height);
    context.lineTo(x + width, y + height - corner);
    context.stroke();
  }

  /**
   * Clear canvas
   * 
   * @return {void}
   */
  public static clearCanvas(canvas: HTMLCanvasElement): void {
    const context = canvas.getContext('2d')!;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  /**
   * Flip horizontally
   * 
   * @param {HTMLCanvasElement} canvas
   * @return {void}
   */
  public static flipHorizontal(canvas: HTMLCanvasElement): void {
    const context = canvas.getContext('2d')!;
    const data = context.getImageData(0,0, canvas.width, canvas.height);
    // Traverse every row and flip the pixels
    for (let i=0; i<data.height; i++) {
     // We only need to do half of every row since we're flipping the halves
      for (let j=0; j<data.width/2; j++) {
        const index = (i * 4) * data.width + (j * 4);
        const mirrorIndex = ((i + 1) * 4) * data.width - ((j + 1) * 4);
        for (let k=0; k<4; k++) {
          let temp = data.data[index + k];
          data.data[index + k] = data.data[mirrorIndex + k];
          data.data[mirrorIndex + k] = temp;
        }
      }
    }
    context.putImageData(data, 0, 0, 0, 0, data.width, data.height);
  }
}