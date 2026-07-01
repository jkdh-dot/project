@echo off
chcp 65001 >nul
title 科创企业人力财务风控审计系统

echo ================================================
echo   科创企业人力财务风控审计系统 - 一键启动
echo ================================================
echo.

:: 检查 Node.js 是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未检测到 Node.js，请先安装 Node.js
    echo 下载地址：https://nodejs.org/zh-cn/download/
    pause
    exit /b 1
)

echo [1/3] 检查 Node.js 版本...
node --version
echo.

echo [2/3] 安装项目依赖...
if not exist node_modules (
    echo 正在安装依赖，请稍候（首次安装可能需要几分钟）...
    npm install
    if %errorlevel% neq 0 (
        echo 错误：依赖安装失败
        pause
        exit /b 1
    )
) else (
    echo 依赖已安装，跳过此步骤
)
echo.

echo [3/3] 启动开发服务器...
echo.
echo 服务器启动后，请在浏览器中访问：
echo http://localhost:5173/audit-system/
echo.
echo 按 Ctrl+C 可停止服务器
echo ================================================
echo.

npm run dev
