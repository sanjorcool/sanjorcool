# @sanjorcool/cli

一个用于从远程Git仓库初始化项目模板的CLI程序。

## 安装

您可以使用 `npx` 在不需要全局安装的情况下安装和使用CLI程序：

```sh
npx @sanjorcool/cli init
```

## 功能

- **init**: 从远程Git仓库初始化项目模板。

## 使用方法

### 初始化项目

要从远程Git仓库模板初始化一个新项目，请使用以下命令：

```sh
npx @sanjorcool/cli init
```

CLI程序将提示您选择一个模板。目前只有一个名为 "default" 的模板可用，它会从 "https://github.com/sanjorcool/sanjorcool.git" 克隆仓库。模板将被克隆到当前工作目录。

## 贡献

欢迎贡献！如果您遇到任何问题或对改进有建议，请随时在GitHub仓库上开启一个issue或创建一个pull request。

## 许可证

本项目基于 [MIT许可证](LICENSE)。
