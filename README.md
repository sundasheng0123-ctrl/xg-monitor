# Monitor

前端监控 SDK，用于捕获和上报前端错误。

## 安装

```bash
npm install monitor
# 或
pnpm add monitor
```

## 使用

```javascript
import Monitor from 'monitor'

const monitor = new Monitor()

monitor.init({
  url: 'https://your-report-server.com/api/report',
  jsError: true,
  resourceError: true,
  promiseError: true
})
```

## 配置项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| url | string | '' | 上报地址（必填） |
| jsError | boolean | false | 捕获 JS 运行时错误 |
| resourceError | boolean | false | 捕获资源加载错误 |
| promiseError | boolean | false | 捕获 Promise 未处理异常 |
| ajaxError | boolean | false | 捕获 Ajax 请求错误 |
| vueError | boolean | false | 捕获 Vue 错误 |
| consoleError | boolean | false | 捕获 console.error |
| scriptError | boolean | false | 捕获跨域脚本错误 |
| staticError | boolean | false | 捕获静态资源错误 |

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build
```

## License

ISC
