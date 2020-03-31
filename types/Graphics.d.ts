import Coordinate from '~/interfaces/Coordinate';
import Rect from '~/interfaces/Rect';
export default class {
    static calculateRotatedRectCoordinates({ x, y, width, height, degree }: {
        x: number;
        y: number;
        width: number;
        height: number;
        degree?: number;
    }): Rect;
    private static calculateRotationCoordinate;
    static calculateCenterCoordinate(...points: Coordinate[]): Coordinate;
    static calculateAngleBetweenCoordinates(point1: Coordinate, point2: Coordinate): number;
    static calculateFitDimensions({ objectFit, intrinsicWidth, intrinsicHeight, intrinsicTop, intrinsicLeft, actualWidth, actualHeight }: {
        objectFit: 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'scale-down' | 'unset';
        intrinsicWidth: number;
        intrinsicHeight: number;
        intrinsicTop?: number;
        intrinsicLeft?: number;
        actualWidth: number;
        actualHeight: number;
    }): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    static drawPoint(canvas: HTMLCanvasElement, { x, y, r, color }: {
        x: number;
        y: number;
        r?: number;
        color?: string;
    }): void;
    static drawCenterPoint(canvas: HTMLCanvasElement, { points, r, color }: {
        points: {
            x: number;
            y: number;
        }[];
        r?: number;
        color?: string;
    }): void;
    static drawRect(canvas: HTMLCanvasElement, { x, y, width, height, degree, lineWidth, color }: {
        x: number;
        y: number;
        width: number;
        height: number;
        degree?: number;
        lineWidth?: number;
        color?: string;
    }): void;
    static flipHorizontal(canvas: HTMLCanvasElement): void;
    /**
     * Get the inherent width of an element
     *
     * @param  {HTMLElement} element
     * @return {number}
     */
    static getIntrinsicWidth(element: HTMLElement): number;
    /**
     * Get the inherent height of an element
     *
     * @param  {HTMLElement} element
     * @return {number}
     */
    static getIntrinsicHeight(element: HTMLElement): number;
    /**
     * Get the inherent top of an element
     *
     * @param  {HTMLElement} element
     * @return {number}
     */
    static getIntrinsicTop(element: HTMLElement): number;
    /**
     * Get the inherent left of an element
     *
     * @param  {HTMLElement} element
     * @return {number}
     */
    static getIntrinsicLeft(element: HTMLElement): number;
}
