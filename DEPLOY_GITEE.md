# ================================================
# 部署到 Gitee Pages —— 操作指南
# 用户名: wxc1904
# ================================================

# ─── Step 1：在 Gitee 上创建仓库 ───
# 打开 https://gitee.com/projects/new （先登录 gitee.com）
# 
# 仓库名称 → wxc_portfolio
# 介绍     → 个人数据分析作品集
# 是否开源 → Public（公开）
# 初始化仓库 → 不勾选
# 分支模型 → 单分支模型（只包含 master）
# 点 "创建"

# ─── Step 2：推送代码 ───
# Win+R → 输入 cmd → 回车
# 粘贴下面每一条，按回车执行：

cd /d D:\Desktop\wxc_portfolio
git remote add origin https://gitee.com/wxc1904/wxc_portfolio.git
git push -u origin master

# 会弹出登录窗口 → 输入 Gitee 账号密码登录

# ─── Step 3：开启 Pages ───
# 打开 https://gitee.com/wxc1904/wxc_portfolio/pages
# 部署分支: master
# 部署目录: /
# 强制 HTTPS: 勾选
# 点 "启动"
# 等 1-2 分钟

# ─── Step 4：访问 ───
# https://wxc1904.gitee.io/wxc_portfolio
