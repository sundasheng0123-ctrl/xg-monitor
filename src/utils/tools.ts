/**
 * 检测 URL 是否合法
 * @param {string} url
 * @returns {boolean}
 */
export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
