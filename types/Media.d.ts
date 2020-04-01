import IDimensions from '~/interfaces/IDimensions';
export default class {
    /**
     * Get the dimensions of a media element
     *
     * @param  {HTMLImageElement|HTMLVideoElement|ImageData} media
     * @return {IDimensions}
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
     * Wait for media element resource to load
     *
     * @param  {HTMLImageElement|HTMLVideoElement} media
     * @return {Promise<Event>}
     */
    static awaitMediaLoaded(media: HTMLImageElement | HTMLVideoElement): Promise<Event>;
}
