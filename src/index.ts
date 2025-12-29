import { defaultConfig, type ConfigType  } from '@u/config'
import { isValidUrl } from '@u/tools'
class Moniter {
  config: ConfigType = defaultConfig
  constructor(parameters) {
    
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
  }
}

export default Moniter
