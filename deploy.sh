#!/usr/bin/env bash
# 学习打卡页面部署脚本 —— 由 Reex06 运行
# 作用：把「只读的 index.html + 最新进度 data.js」提交并推送到 GitHub Pages
# 注意：本脚本只推送 index.html / data.js，绝不推送 edit.html（本地编辑页，含密码）
set -e

cd "$(dirname "$0")"

REPO_NAME="learning-checkin"
GIT_USER="Reex06"
GIT_EMAIL="xrchen06@163.com"
BRANCH="main"

echo "==> [1/4] 初始化 git 仓库"
if [ ! -d .git ]; then
  git init -q
fi

echo "==> [2/4] 提交文件（只提交 index.html / data.js，edit.html 已被 .gitignore 排除）"
git add index.html data.js README.md .nojekyll .gitignore
if git diff --cached --quiet 2>/dev/null; then
  echo "    没有新的改动需要提交（或已提交过）"
else
  git -c user.name="$GIT_USER" -c user.email="$GIT_EMAIL" commit -q -m "更新打卡进度" || true
fi
git branch -M "$BRANCH" 2>/dev/null || true

echo "==> [3/4] 推送（使用 git，HTTPS 凭据或已保存的 token）"
if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "https://github.com/$GIT_USER/$REPO_NAME.git"
fi
git push -u origin "$BRANCH"

echo ""
echo "==> [4/4] 完成！访客访问（需要已在 GitHub 开启 Pages）："
echo "     https://$GIT_USER.github.io/$REPO_NAME/"
echo ""
echo "     提示：如果还没开启 Pages，去"
echo "     https://github.com/$GIT_USER/$REPO_NAME/settings/pages"
echo "     选 Deploy from a branch -> $BRANCH -> / (root) -> Save"
