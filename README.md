# 活码网址部署指南

## 项目结构

```
活码网址/
├── index.html      # 主页面
├── config.json     # 配置文件（修改此文件更新内容）
├── images/         # 图片文件夹
│   ├── qrcode.jpg  # 二维码图片
│   └── banner*.jpg # 其他展示图片
└── README.md       # 本文件
```

## 如何更新内容

### 方法一：直接替换图片
1. 将新的二维码图片命名为 `qrcode.jpg` 放入 `images/` 文件夹
2. 将新的展示图片命名为 `banner1.jpg`、`banner2.jpg` 等放入 `images/` 文件夹
3. 提交更改，页面自动更新

### 方法二：修改配置文件
编辑 `config.json`：
```json
{
    "title": "页面标题",
    "subtitle": "副标题",
    "qrLabel": "二维码标签文字",
    "qrCode": "images/qrcode.jpg",
    "images": [
        "images/banner1.jpg",
        "images/banner2.jpg"
    ],
    "footer": "底部文字"
}
```

## 免费服务器部署方案

### 方案一：GitHub Pages（推荐）

**优点**：稳定、免费、全球CDN、自定义域名

**步骤**：
1. 注册 GitHub 账号：https://github.com
2. 创建新仓库，名称设为 `username.github.io`（username替换为你的用户名）
3. 将本项目所有文件上传到仓库
4. 进入仓库 Settings → Pages → Source 选择 main 分支
5. 等待几分钟，访问 `https://username.github.io` 即可

**更新内容**：
- 网页端：直接在 GitHub 仓库页面编辑文件
- 本地端：修改文件后 `git push` 推送

### 方案二：Cloudflare Pages

**优点**：速度快、免费、支持自定义域名

**步骤**：
1. 注册 Cloudflare 账号：https://dash.cloudflare.com
2. 进入 Pages → Create a project
3. 连接 GitHub 仓库
4. 选择仓库，点击 Deploy
5. 等待部署完成，获得 `.pages.dev` 域名

### 方案三：Vercel

**优点**：部署快、免费、自动HTTPS

**步骤**：
1. 注册 Vercel 账号：https://vercel.com
2. Import Git Repository
3. 选择仓库，点击 Deploy
4. 等待部署完成，获得 `.vercel.app` 域名

## 自定义域名（可选）

如果需要自己的域名（如 `ma.yourdomain.com`）：

1. 购买域名（阿里云/腾讯云/Namecheap 等）
2. 在域名解析设置中添加 CNAME 记录：
   - 主机记录：`ma`
   - 记录值：`username.github.io`（或 Cloudflare/Vercel 提供的地址）
3. 在 GitHub Pages / Cloudflare / Vercel 设置中添加自定义域名

## 注意事项

- 图片建议使用 `.jpg` 或 `.png` 格式
- 图片文件名建议使用英文，避免中文
- 二维码图片建议尺寸 220x220 像素以上
- 配置文件中的路径区分大小写
