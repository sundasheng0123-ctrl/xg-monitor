import { defaultConfig, type ConfigType  } from '@u/config'
import { isValidUrl } from '@u/tools'
import { observerJsError } from '@l/jsError'
export { VueMonitorPlugin } from '@l/vueError'
import { observerTiming } from '@l/moniterTiming'
export class Moniter {
  config: ConfigType = defaultConfig
  constructor() {
    
  }
  init(config: ConfigType) {
    if (!config) throw new Error('config is required')
    this.config = { ...defaultConfig, ...config }
    this.initMonitor()
  }
  initMonitor() {
    const { url } = this.config
    if (!url) throw new Error('report url is required')
    if (!isValidUrl(url)) throw new Error('report url is invalid')
    if (this.config.jsError) {
      observerJsError(this)
    } else if (this.config.monitorTiming) {
      observerTiming(this)
    }
  }
  send(data) {
    console.log(data)
  }
}

export const moniter = new Moniter
