// =============================================================
// 学习打卡数据文件
// 此文件由「打卡页面」的【导出数据】按钮生成，提交到 GitHub 仓库后，
// 其他人（访客）访问线上页面时读到的是这里的数据。
// 结构：大模块 modules[] → 每个模块下的 items[] 小模块
// =============================================================
window.CHECKIN_DATA = {
  "version": "2026-11-01",
  "updatedAt": "2026-11-01",
  "modules": [
    {
      "id": "ds-algo",
      "name": "数据结构与算法",
      "items": [
        { "id": "hash",         "name": "哈希",         "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "two-pointer",  "name": "双指针",       "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "sliding-window","name": "滑动窗口",    "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "substring",    "name": "子串",         "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "array",        "name": "普通数组",     "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "matrix",       "name": "矩阵",         "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "linked-list",  "name": "链表",         "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "binary-tree",  "name": "二叉树",       "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "graph",        "name": "图论",         "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "backtracking", "name": "回溯",         "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "binary-search","name": "二分查找",     "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "stack",        "name": "栈",           "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "heap",         "name": "堆",           "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "greedy",       "name": "贪心算法",     "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "dp",           "name": "动态规划",     "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "dp-multi",     "name": "多维动态规划", "status": "plan",      "progress": 0,   "planTime": "", "doneTime": "" },
        { "id": "hot100",       "name": "LeetCode Hot 100", "status": "plan",  "progress": 0,   "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "buildroot",
      "name": "buildroot",
      "items": [
        { "id": "buildroot-main", "name": "buildroot 构建系统", "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "arm-os",
      "name": "ARM 架构 + 操作系统",
      "items": [
        { "id": "arm-os-main", "name": "ARM 架构与操作系统基础", "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "ota",
      "name": "OTA 升级",
      "items": [
        { "id": "ota-main", "name": "OTA 升级方案", "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "qemu",
      "name": "QEMU 使用 + 内核 Uboot 裁剪",
      "items": [
        { "id": "qemu-main", "name": "QEMU + 内核/Uboot 裁剪", "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "linux-driver",
      "name": "Linux 驱动大全",
      "items": [
        { "id": "drv-sync",      "name": "1-2 同步与互斥（7节）",        "status": "plan", "progress": 0, "planTime": "7节",  "doneTime": "" },
        { "id": "drv-lcd",       "name": "1-3 LCD驱动 基于IMX6ULL（19节）", "status": "plan", "progress": 0, "planTime": "19节", "doneTime": "" },
        { "id": "drv-i2c",       "name": "1-4 I2C子系统 基于IMX6ULL（15节）", "status": "plan", "progress": 0, "planTime": "15节", "doneTime": "" },
        { "id": "drv-input",     "name": "1-5 Input子系统 基于IMX6ULL（18节）", "status": "plan", "progress": 0, "planTime": "18节", "doneTime": "" },
        { "id": "drv-pinctrl",   "name": "1-6 Pinctrl子系统 基于IMX6ULL（10节）", "status": "plan", "progress": 0, "planTime": "10节", "doneTime": "" },
        { "id": "drv-gpio",      "name": "1-7 GPIO子系统 基于IMX6ULL（11节）", "status": "plan", "progress": 0, "planTime": "11节", "doneTime": "" },
        { "id": "drv-interrupt", "name": "1-8 Interrupt子系统 基于IMX6ULL（19节）", "status": "plan", "progress": 0, "planTime": "19节", "doneTime": "" },
        { "id": "drv-uart",      "name": "1-9 UART串口子系统 基于IMX6ULL（21节）", "status": "plan", "progress": 0, "planTime": "21节", "doneTime": "" },
        { "id": "drv-pcie",      "name": "1-10 PCI和PCIe子系统（16节）", "status": "plan", "progress": 0, "planTime": "16节", "doneTime": "" },
        { "id": "drv-spi",       "name": "1-11 SPI子系统（29节）",       "status": "plan", "progress": 0, "planTime": "29节", "doneTime": "" },
        { "id": "drv-v4l2",      "name": "1-13 V4L2摄像头驱动（37节）",   "status": "plan", "progress": 0, "planTime": "37节", "doneTime": "" }
      ]
    },
    {
      "id": "toolchain",
      "name": "GCC + Makefile + CMake + GDB",
      "items": [
        { "id": "tool-gcc",    "name": "GCC 编译工具链",  "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "tool-make",   "name": "Makefile",        "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "tool-cmake",  "name": "CMake",           "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "tool-gdb",    "name": "GDB 调试",        "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "bagu-wen-1",
      "name": "八股第一部分（C、C++、STL与容器、操作系统）",
      "items": [
        { "id": "bw1-c",    "name": "C 语言",          "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw1-cpp",  "name": "C++",             "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw1-stl",  "name": "STL 与容器",      "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw1-os",   "name": "操作系统",        "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "bagu-wen-2",
      "name": "八股第二部分（计算机网络、STM32、FreeRTOS、通讯协议）",
      "items": [
        { "id": "bw2-net",    "name": "计算机网络",   "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw2-stm32",  "name": "STM32",        "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw2-freertos","name": "FreeRTOS",    "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw2-proto",  "name": "通讯协议",     "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "bagu-wen-3",
      "name": "八股第三部分（Linux应用、驱动、Bootloader、Rootfs）",
      "items": [
        { "id": "bw3-app",  "name": "Linux 应用",   "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw3-drv",  "name": "Linux 驱动",   "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw3-boot", "name": "Bootloader",   "status": "plan", "progress": 0, "planTime": "", "doneTime": "" },
        { "id": "bw3-root", "name": "Rootfs",       "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    },
    {
      "id": "extra",
      "name": "其他补充（未涉及待补的内容）",
      "items": [
        { "id": "extra-1", "name": "（待补充）", "status": "plan", "progress": 0, "planTime": "", "doneTime": "" }
      ]
    }
  ]
};
