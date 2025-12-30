import { Moniter } from '@/index'
import { getLines, getSelector } from '@u/tools'
export function observerJsError(instance: Moniter) {
  window.addEventListener('error', e => {
    const target = e.target as HTMLElement & { src?: string; href?: string }
    if (target && (target.src || target.href)) {
      instance.send({
        kind: 'stability', // 监控指标的大类
        type: 'error', // 小类型，这是一个错误
        errorType: 'resourceError', // 资源加载错误
        message: e.message, // 报错信息
        filename: target.src || target.href,
        tagName: target.tagName, // 错误定位
        selector: getSelector(target) // 选择器
      })
    } else {
      let log = {
        kind: 'stability', // 监控指标的大类
        type: 'error', // 小类型，这是一个错误
        errorType: 'jsError', // jsError
        message: e.message, // 报错信息
        filename: e.filename,
        position: `${e.lineno}:${e.colno}`, // 错误定位
        stack: getLines(e.error.stack),
        selector: getSelector(target)
      }
      instance.send(log)
    }
  })
}
