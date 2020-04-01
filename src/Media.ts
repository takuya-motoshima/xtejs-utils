import IDimensions from '~/interfaces/IDimensions';

export default class {

  /**
   * Get the dimensions of a media element
   *
   * @param  {HTMLImageElement|HTMLVideoElement|ImageData} media
   * @return {IDimensions}
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
}