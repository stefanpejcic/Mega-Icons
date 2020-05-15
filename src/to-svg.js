import icons from './icons';

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name, attrs = {}) {
  console.warn(
    'mega.toSvg() is deprecated. Please use mega.icons[name].toSvg() instead.',
  );

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!icons[name]) {
    throw new Error(
      `No icon matching '${
        name
      }'. See the complete list of icons at https://megaicons.com`,
    );
  }

  return icons[name].toSvg(attrs);
}

export default toSvg;
