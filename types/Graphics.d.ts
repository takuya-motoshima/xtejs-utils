/**
 * Graphic utility.
 */
import ICoordinate from '~/interfaces/ICoordinate';
import IRect from '~/interfaces/IRect';
import IDimensions from '~/interfaces/IDimensions';
export default class {
    /**
     * Returns the intrinsic dimensions of the media element
     *
     * @param  {HTMLImageElement|HTMLVideoElement|ImageData} media
     * @return {{ width: number, height: number }}
     */
    static getMediaDimensions(media: HTMLImageElement | HTMLVideoElement | ImageData): IDimensions;
    /**
     * Returns TRUE if the media element is loading a resource
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media
     * @return {boolean}
     */
    static isMediaLoaded(media: HTMLImageElement | HTMLVideoElement): boolean;
    /**
     * Returns dimensions without borders and padding
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media
     * @return {{ width: number, height: number }}
     */
    static getInnerDimensions(media: HTMLImageElement | HTMLVideoElement): IDimensions;
    /**
     * Wait for media element resource to load
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media
     * @return {Promise<Event>}
     */
    static awaitMediaLoaded(media: HTMLImageElement | HTMLVideoElement): Promise<Event>;
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
    static getRotatedRectCoordinates(x: number, y: number, width: number, height: number, degree?: number): ICoordinate[];
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
    private static getRotationCoordinate;
    /**
     * Returns the center coordinates
     *
     * @param  {ICoordinate[]} coordinates
     * @return {ICoordinate} coordinate Center coordinates
     */
    static getCenterCoordinate(...coordinates: ICoordinate[]): ICoordinate;
    /**
     * Returns the angle between two coordinates
     *
     * @param  {number} x1
     * @param  {number} y1
     * @param  {number} x2
     * @param  {number} y2
     * @return {number}
     */
    static getAngleBetweenCoordinates(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Returns the distance between two coordinates
     *
     * @param  {number} x1
     * @param  {number} y1
     * @param  {number} x2
     * @param  {number} y2
     * @return {number}
     */
    static getDistance(x1: number, y1: number, x2: number, y2: number): number;
    /**
     * Returns a bounding box that covers the container considering the "object-fit" css property
     *
     * @param  {HTMLElement}                       container
     * @param  {HTMLImageElement|HTMLVideoElement} media
     * @return {IRect}
     */
    static getOverlayRect(container: HTMLElement, media: HTMLImageElement | HTMLVideoElement): IRect;
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
    static getRenderedRect(media: HTMLImageElement | HTMLVideoElement): IRect;
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
    static drawPoint(canvas: HTMLCanvasElement, x: number, y: number, { radius, color }?: {
        radius?: number;
        color?: string;
    }): void;
    /**
     * Draw center point
     *
     * @param  {HTMLCanvasElement} canvas
     * @param  {ICoordinate[]} coordinates
     * @param  {number} options.radius
     * @param  {string} options.color
     * @return {void}
     */
    static drawCenterPoint(canvas: HTMLCanvasElement, coordinates: ICoordinate[], { radius, color }?: {
        radius?: number;
        color?: string;
    }): void;
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
    static drawRectangle(canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number, { degree, lineWidth, lineColor, shadowBlur, shadowColor }?: {
        degree?: number;
        lineWidth?: number;
        lineColor?: string;
        shadowBlur?: number;
        shadowColor?: string;
    }): void;
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
    static drawRectangleCorners(canvas: HTMLCanvasElement, x: number, y: number, width: number, height: number, { lineWidth, lineColor, shadowBlur, shadowColor }?: {
        lineWidth?: number;
        lineColor?: string;
        shadowBlur?: number;
        shadowColor?: string;
    }): void;
    /**
     * Clear canvas
     *
     * @return {void}
     */
    static clearCanvas(canvas: HTMLCanvasElement): void;
    /**
     * Flip horizontally
     *
     * @param {HTMLCanvasElement} canvas
     * @return {void}
     */
    static flipHorizontal(canvas: HTMLCanvasElement): void;
}
