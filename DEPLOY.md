# =================================================
# 部署到 GitHub Pages —— 复制以下命令，逐条运行
# =================================================
# 打开终端（Win+R → 输入 cmd → 回车）
# 粘贴下面每一条，按回车执行

# 1. 创建 GitHub 仓库（需要先登录 GitHub）
#    打开 https://github.com/new
#    → 仓库名填: wxc_portfolio
#    → 选 Public
#    → 点 Create repository
#    （不要勾选任何初始化选项）

# 2. 连接本地仓库到 GitHub（把下面命令粘贴到终端运行）
cd /d D:\Desktop\wxc_portfolio
git remote add origin https://github.com/xingchengjun/wxc_portfolio.git
git branch -M main
git push -u origin main

# 3. 开启 GitHub Pages
#    打开 https://github.com/xingchengjun/wxc_portfolio/settings/pages
#    → Source 选 Deploy from a branch
#    → Branch 选 main / (root)
#    → 点 Save

# 4. 等待 1-2 分钟，访问：
#    https://xingchengjun.github.io/wxc_portfolio
