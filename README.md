# 插件库从0到1

## 1.工程初始化

## 2.编码规范

## 3.提交规范

## 4.打包工具

### 安装

```bash
npm install rollup --save-dev
```

### 创建配置文件

`echo module.exports = {} > rollup.config.js`

```js
// rollup.config.js
module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
};
```
