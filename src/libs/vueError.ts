import { moniter } from '@/index'
import { getLines } from '@u/tools'

export const VueMonitorPlugin = {
  install(app) {
    app.config.errorHandler = (e, vm) => {
      moniter.send({
        kind: 'stability', // 监控指标的大类
        type: 'error', // 小类型，这是一个错误
        errorType: 'vueError', // 资源加载错误
        message: e.message, // 报错信息
        tagName: vm.htmlType ?? '', // 错误定位
        stack: getLines(e.stack),
        className: vm.$el.className,
        id: vm.$el.id
      })
    }
  }
}
