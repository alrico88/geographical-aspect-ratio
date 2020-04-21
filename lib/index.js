/**
 * @typedef {number[]} BBox
 */

class BBoxError extends Error {
  constructor(message) {
    super(message);
    this.name = "BBoxError";
    Error.captureStackTrace(this, BBoxError);
  }
}

/**
 * Gets absolute distances
 *
 * @param {number} itemB
 * @param {number} itemA
 * @returns {number}
 */
function getAbsoluteDistance(itemA, itemB) {
  return itemA > itemB ? itemA - itemB : itemB - itemA;
}

/**
 * AspectRatioCalculator class
 *
 * @class AspectRatioCalculator
 */
class AspectRatioCalculator {

  /**
   *Creates an instance of AspectRatioCalculator.
   * @param {BBox} bbox
   * @memberof AspectRatioCalculator
   */
  constructor(bbox) {

    /**
     * The input BBox
     * @type {BBox}
     */
    this.bbox = bbox;

    /**
     * BBox's aspect ratio
     * @type {number}
     */
    this.aspectRatio = AspectRatioCalculator.calculateAspectRatio(this.bbox);
  }

  /**
   * Calculates the aspect ratio of the BBox
   *
   * @private
   * @static
   * @param {BBox} bbox
   * @returns {number}
   * @memberof AspectRatioCalculator
   */
  static calculateAspectRatio(bbox) {
    if (bbox.length !== 4) {
      throw new BBoxError(`Invalid BBox length, should have 4 elements instead of ${bbox.length}`);
    }
    const [minX, minY, maxX, maxY] = bbox;
    const width = getAbsoluteDistance(maxX, minX);
    const height = getAbsoluteDistance(maxY, minY);
    return width / height;
  }

  /**
   * Gets height from width
   *
   * @param {number} width
   * @returns {number}
   * @memberof AspectRatioCalculator
   */
  getHeight(width) {
    return Math.round(width / this.aspectRatio);
  }

  /**
   * Gets height from height
   *
   * @param {number} height
   * @returns {number}
   * @memberof AspectRatioCalculator
   */
  getWidth(height) {
    return Math.round(height * this.aspectRatio);
  }
}

module.exports = AspectRatioCalculator;
module.exports.BBoxError = BBoxError;
