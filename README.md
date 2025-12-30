# Monitor

前端监控 SDK，用于捕获和上报前端错误及性能数据。

## 安装

```bash
npm install monitor
# 或
pnpm add monitor
```

## 快速开始

```javascript
import { moniter } from 'monitor'

moniter.init({
  url: 'https://your-report-server.com/api/report'
})
```

默认开启 JS 错误、资源加载错误、Promise 异常、HTTP 错误和性能监控。

## 配置项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| url | string | '' | 上报地址（必填） |
| jsError | boolean | true | JS 运行时错误 |
| resourceError | boolean | true | 资源加载错误 |
| promiseError | boolean | true | Promise 未处理异常 |
| httpError | boolean | true | HTTP 请求错误 |
| vueError | boolean | false | Vue 组件错误（需配合插件） |
| monitorTiming | boolean | true | 页面性能指标 |

## Vue 项目集成

Vue 内部错误需要使用插件捕获：

```javascript
// Vue 3
import { createApp } from 'vue'
import { moniter, VueMonitorPlugin } from 'monitor'

const app = createApp(App)
app.use(VueMonitorPlugin)

moniter.init({
  url: 'https://your-report-server.com/api/report',
  vueError: true
})
```

## 上报数据格式

```javascript
// JS 错误
{
  kind: 'stability',
  type: 'error',
  errorType: 'jsError',
  message: 'xxx is not defined',
  filename: 'https://example.com/app.js',
  position: '10:5',
  stack: '...',
  selector: 'div.container'
}

// 资源加载错误
{
  kind: 'stability',
  type: 'error',
  errorType: 'resourceError',
  filename: 'https://example.com/image.png',
  tagName: 'IMG',
  selector: 'img.avatar'
}

// Vue 错误
{
  kind: 'stability',
  type: 'error',
  errorType: 'vueError',
  message: 'Cannot read property...',
  stack: '...'
}
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式（监听文件变化）
pnpm dev

# 构建
pnpm build
```

## License

ISC
