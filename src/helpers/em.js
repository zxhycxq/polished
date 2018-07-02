// @flow
import pixelsto from '../internalHelpers/_pxto'

/**
 * Convert a given pixel value to ems. The default base value is 16px, but can be modified to a provided base.
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

const em: (value: string | number, base?: string | number) => string = pixelsto(
  'em',
)
export default em
