
export interface ConfigType {
  url: string,
  jsError?: boolean
  resourceError?: boolean,
  promiseError?: boolean,
  httpError?: boolean,
  vueError?: boolean,
  consoleError?: boolean,
  scriptError?: boolean,
  staticError?: boolean,
  monitorTiming?: boolean
}

export const defaultConfig: ConfigType = {
  url: '',
  jsError: true,
  resourceError: true,
  promiseError: true,
  httpError: true,
  vueError: false,
  monitorTiming: true
  // consoleError: false,
  // scriptError: false,
  // staticError: false
}
