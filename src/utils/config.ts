
export interface ConfigType {
  url: string,
  jsError?: boolean
  resourceError?: boolean,
  promiseError?: boolean,
  ajaxError?: boolean,
  vueError?: boolean,
  consoleError?: boolean,
  scriptError?: boolean,
  staticError?: boolean
}

export const defaultConfig: ConfigType = {
  url: '',
  jsError: false,
  resourceError: false,
  promiseError: false,
  ajaxError: false,
  vueError: false,
  consoleError: false,
  scriptError: false,
  staticError: false
}
