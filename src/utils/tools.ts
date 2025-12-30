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

export function getLines(stack: string) {
  return stack.split('\n').slice(1).map(item => item.replace(/^\s+at\s+/g, '')).join('^')
}

type PathElement = Element | Document | Window

export function getSelectors(path: PathElement[]) {
  return path
    .reverse()
    .filter((element): element is Element => {
      return element !== document && element !== window && element instanceof Element
    })
    .map(element => {
      if (element.id) {
        return `${element.tagName.toLowerCase()}#${element.id}`
      } else if (element.className && typeof element.className === 'string') {
        return `${element.tagName.toLowerCase()}.${element.className}`
      } else {
        return element.tagName.toLowerCase()
      }
    })
    .join(' ')
}

export function getSelector(pathOrElement: PathElement[] | Element) {
  if (Array.isArray(pathOrElement)) {
    return getSelectors(pathOrElement)
  } else {
    return getSelectors([pathOrElement])
  }
}

