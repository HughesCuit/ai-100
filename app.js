const devices = [
  {
    name: "GB200 Grace Blackwell",
    group: "enterprise",
    platform: "CUDA",
    memory: 372,
    bandwidth: 16000,
    ai: 40000,
    value: 20,
    score: 62,
    priceMin: 20000000,
    priceMax: 30000000,
    chip: "Grace Blackwell Superchip",
    availability: "企业服务器/整柜",
    note: "性能和容量都极端强，但采购、供电、部署都不是消费级。价格按 GB200/NVL72 机柜级方案估算。",
  },
  {
    name: "NVIDIA B200",
    group: "enterprise",
    platform: "CUDA",
    memory: 180,
    bandwidth: 8000,
    ai: 20000,
    value: 25,
    score: 64,
    priceMin: 330000,
    priceMax: 450000,
    chip: "Blackwell GPU",
    availability: "企业服务器",
    note: "HBM3E 带宽很强，适合训练和高吞吐推理。个人购买意义很低。",
  },
  {
    name: "NVIDIA H200 SXM",
    group: "enterprise",
    platform: "CUDA",
    memory: 141,
    bandwidth: 4800,
    ai: 3958,
    value: 32,
    score: 66,
    priceMin: 200000,
    priceMax: 350000,
    chip: "Hopper GPU",
    availability: "服务器/云",
    note: "141GB HBM3E 是大模型推理的甜点型企业卡之一。",
  },
  {
    name: "NVIDIA H100 SXM",
    group: "enterprise",
    platform: "CUDA",
    memory: 80,
    bandwidth: 3350,
    ai: 3958,
    value: 34,
    score: 65,
    priceMin: 180000,
    priceMax: 300000,
    chip: "Hopper GPU",
    availability: "服务器/云",
    note: "企业 AI 的基准卡。很强，但本地桌面采购和部署成本高。",
  },
  {
    name: "RTX PRO 6000 Blackwell",
    group: "workstation",
    platform: "CUDA",
    memory: 96,
    bandwidth: 1792,
    ai: 4000,
    value: 78,
    score: 88,
    priceMin: 58000,
    priceMax: 76000,
    chip: "Blackwell workstation GPU",
    availability: "工作站渠道",
    note: "96GB ECC GDDR7 让它成为本地大模型工作站的高端核心。",
  },
  {
    name: "Mac Studio M3 Ultra",
    group: "consumer",
    platform: "Metal",
    memory: 256,
    bandwidth: 819,
    ai: 420,
    value: 76,
    score: 84,
    priceMin: 33000,
    priceMax: 63000,
    chip: "M3 Ultra",
    availability: "Apple/渠道，超高内存配置需核库存",
    note: "容量非常强，噪音和功耗漂亮。缺点是带宽和 CUDA 生态不如高端 NVIDIA。",
  },
  {
    name: "GeForce RTX 5090",
    group: "consumer",
    platform: "CUDA",
    memory: 32,
    bandwidth: 1792,
    ai: 3352,
    value: 91,
    score: 87,
    priceMin: 16500,
    priceMax: 35000,
    chip: "Blackwell GB202",
    availability: "零售显卡/整机",
    note: "消费级本地 AI 的速度王。32GB 对 70B 以上模型仍会受限。",
  },
  {
    name: "NVIDIA DGX Spark",
    group: "consumer",
    platform: "CUDA",
    memory: 128,
    bandwidth: 273,
    ai: 1000,
    value: 70,
    score: 80,
    priceMin: 30000,
    priceMax: 50000,
    chip: "GB10 Grace Blackwell",
    availability: "NVIDIA/合作伙伴桌面设备",
    note: "能装较大模型，软件栈友好。带宽偏低，别把它当 RTX 5090 的速度替代品。",
  },
  {
    name: "Mac Studio M4 Max",
    group: "consumer",
    platform: "Metal",
    memory: 128,
    bandwidth: 546,
    ai: 300,
    value: 73,
    score: 78,
    priceMin: 16500,
    priceMax: 39000,
    chip: "M4 Max",
    availability: "Apple/渠道",
    note: "128GB 统一内存很适合 70B 量化和多任务开发，体验安静稳定。",
  },
  {
    name: "Ryzen AI Max+ 395 设备",
    group: "consumer",
    platform: "ROCm",
    memory: 128,
    bandwidth: 256,
    ai: 126,
    value: 67,
    score: 63,
    priceMin: 13000,
    priceMax: 27000,
    chip: "Strix Halo / Radeon 8060S",
    availability: "迷你主机/移动工作站",
    note: "容量很诱人，生态和模型兼容性要逐项确认。适合愿意折腾的本地 AI 玩家。",
  },
  {
    name: "GeForce RTX 5080",
    group: "consumer",
    platform: "CUDA",
    memory: 16,
    bandwidth: 960,
    ai: 1801,
    value: 68,
    score: 60,
    priceMin: 8300,
    priceMax: 10000,
    chip: "Blackwell GB203",
    availability: "零售显卡/整机",
    note: "速度不错，但 16GB 会让 LLM 上限很快撞墙。",
  },
  {
    name: "GeForce RTX 5070 Ti",
    group: "consumer",
    platform: "CUDA",
    memory: 16,
    bandwidth: 896,
    ai: 1406,
    value: 72,
    score: 58,
    priceMin: 7600,
    priceMax: 9000,
    chip: "Blackwell GB203",
    availability: "零售显卡/整机",
    note: "比 5080 慢一些，但 AI 入门到中阶的性价比更顺眼。",
  },
  {
    name: "Radeon PRO W7900",
    group: "workstation",
    platform: "ROCm",
    memory: 48,
    bandwidth: 864,
    ai: 122,
    value: 54,
    score: 56,
    priceMin: 22000,
    priceMax: 33000,
    chip: "RDNA 3 workstation GPU",
    availability: "工作站渠道",
    note: "48GB 容量有吸引力，但 AI 工具链兼容性不如 CUDA 省心。",
  },
  {
    name: "Mac mini M4 Pro",
    group: "consumer",
    platform: "Metal",
    memory: 48,
    bandwidth: 273,
    ai: 120,
    value: 74,
    score: 52,
    priceMin: 11000,
    priceMax: 19000,
    chip: "M4 Pro",
    availability: "Apple/渠道",
    note: "小、安静、能跑不少本地模型，是舒服的 AI 开发机。",
  },
  {
    name: "GeForce RTX 5060 Ti 16GB",
    group: "consumer",
    platform: "CUDA",
    memory: 16,
    bandwidth: 448,
    ai: 759,
    value: 78,
    score: 49,
    priceMin: 3600,
    priceMax: 4300,
    chip: "Blackwell GB206",
    availability: "零售显卡/整机",
    note: "只推荐 16GB 版。轻量 LLM 和图像生成入门比较合适。",
  },
  {
    name: "GeForce RTX 5070",
    group: "consumer",
    platform: "CUDA",
    memory: 12,
    bandwidth: 672,
    ai: 988,
    value: 60,
    score: 47,
    priceMin: 4500,
    priceMax: 5500,
    chip: "Blackwell GB205",
    availability: "零售显卡/整机",
    note: "12GB 对 AI 来说略尴尬，游戏顺手，AI 主力不优先。",
  },
  {
    name: "Intel Arc B580",
    group: "consumer",
    platform: "oneAPI",
    memory: 12,
    bandwidth: 456,
    ai: 48,
    value: 58,
    score: 38,
    priceMin: 2000,
    priceMax: 2300,
    chip: "Battlemage",
    availability: "零售显卡/整机",
    note: "12GB 入门卡，适合轻量模型和实验，软件生态仍要看具体工具。",
  },
  {
    name: "Mac mini M4",
    group: "consumer",
    platform: "Metal",
    memory: 32,
    bandwidth: 120,
    ai: 80,
    value: 69,
    score: 37,
    priceMin: 4500,
    priceMax: 11000,
    chip: "M4",
    availability: "Apple/渠道",
    note: "开发机很舒服，轻量推理够用。大模型和高吞吐不是它的任务。",
  },
  {
    name: "GeForce RTX 5060",
    group: "consumer",
    platform: "CUDA",
    memory: 8,
    bandwidth: 448,
    ai: 614,
    value: 44,
    score: 34,
    priceMin: 2500,
    priceMax: 3200,
    chip: "Blackwell GB206",
    availability: "零售显卡/整机",
    note: "8GB 作为 AI 主力太紧，只适合轻量模型或学习。",
  },
  {
    name: "GeForce RTX 5050",
    group: "consumer",
    platform: "CUDA",
    memory: 8,
    bandwidth: 320,
    ai: 421,
    value: 36,
    score: 28,
    priceMin: 2100,
    priceMax: 3000,
    chip: "Blackwell entry GPU",
    availability: "笔记本/入门整机",
    note: "能跑一些小模型，但不建议作为认真做本地 AI 的采购目标。",
  },
];

function addModelDevices(items) {
  devices.push(...items.map((item) => ({
    value: 55,
    score: 50,
    note: "型号级估算条目：规格按公开资料整理，国内价格按官方价、零售、渠道或服务器方案区间估算。",
    ...item,
  })));
}

addModelDevices([
  { name: "NVIDIA RTX PRO 5000 Blackwell", group: "workstation", platform: "CUDA", memory: 48, bandwidth: 1344, ai: 2000, value: 74, score: 78, priceMin: 32000, priceMax: 48000, chip: "Blackwell workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX PRO 4500 Blackwell", group: "workstation", platform: "CUDA", memory: 32, bandwidth: 896, ai: 1400, value: 70, score: 70, priceMin: 22000, priceMax: 34000, chip: "Blackwell workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX PRO 4000 Blackwell", group: "workstation", platform: "CUDA", memory: 24, bandwidth: 672, ai: 1100, value: 68, score: 64, priceMin: 15000, priceMax: 24000, chip: "Blackwell workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX PRO 4000 SFF Blackwell", group: "workstation", platform: "CUDA", memory: 24, bandwidth: 672, ai: 900, value: 66, score: 61, priceMin: 14000, priceMax: 23000, chip: "Blackwell low-profile workstation GPU", availability: "小型工作站渠道" },
  { name: "NVIDIA RTX PRO 3000 Blackwell", group: "workstation", platform: "CUDA", memory: 24, bandwidth: 504, ai: 750, value: 62, score: 56, priceMin: 9000, priceMax: 16000, chip: "Blackwell workstation GPU", availability: "移动/桌面工作站渠道" },
  { name: "NVIDIA RTX PRO 2000 Blackwell", group: "workstation", platform: "CUDA", memory: 16, bandwidth: 384, ai: 545, value: 58, score: 48, priceMin: 5500, priceMax: 9500, chip: "Blackwell workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX PRO 6000 Blackwell Server", group: "enterprise", platform: "CUDA", memory: 96, bandwidth: 1792, ai: 4000, value: 58, score: 76, priceMin: 70000, priceMax: 110000, chip: "Blackwell server GPU", availability: "服务器渠道" },

  { name: "NVIDIA RTX 6000 Ada", group: "workstation", platform: "CUDA", memory: 48, bandwidth: 960, ai: 1457, value: 68, score: 70, priceMin: 42000, priceMax: 65000, chip: "Ada workstation GPU", availability: "工作站/库存渠道" },
  { name: "NVIDIA RTX 5000 Ada", group: "workstation", platform: "CUDA", memory: 32, bandwidth: 576, ai: 682, value: 62, score: 59, priceMin: 23000, priceMax: 36000, chip: "Ada workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX 4500 Ada", group: "workstation", platform: "CUDA", memory: 24, bandwidth: 432, ai: 538, value: 58, score: 51, priceMin: 15000, priceMax: 24000, chip: "Ada workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX 4000 Ada", group: "workstation", platform: "CUDA", memory: 20, bandwidth: 360, ai: 306, value: 54, score: 44, priceMin: 8500, priceMax: 14000, chip: "Ada workstation GPU", availability: "工作站渠道" },
  { name: "NVIDIA RTX 4000 SFF Ada", group: "workstation", platform: "CUDA", memory: 20, bandwidth: 280, ai: 306, value: 52, score: 42, priceMin: 8000, priceMax: 13000, chip: "Ada SFF workstation GPU", availability: "小型工作站渠道" },
  { name: "NVIDIA RTX 3500 Ada Laptop", group: "workstation", platform: "CUDA", memory: 12, bandwidth: 336, ai: 242, value: 42, score: 35, priceMin: 18000, priceMax: 35000, chip: "Ada mobile workstation GPU", availability: "移动工作站整机" },
  { name: "NVIDIA RTX 2000 Ada", group: "workstation", platform: "CUDA", memory: 16, bandwidth: 224, ai: 191, value: 50, score: 38, priceMin: 4500, priceMax: 8000, chip: "Ada workstation GPU", availability: "工作站渠道" },

  { name: "NVIDIA RTX A6000", group: "workstation", platform: "CUDA", memory: 48, bandwidth: 768, ai: 312, value: 56, score: 58, priceMin: 26000, priceMax: 45000, chip: "Ampere workstation GPU", availability: "工作站/二手渠道" },
  { name: "NVIDIA RTX A5000", group: "workstation", platform: "CUDA", memory: 24, bandwidth: 768, ai: 222, value: 50, score: 50, priceMin: 12000, priceMax: 22000, chip: "Ampere workstation GPU", availability: "工作站/二手渠道" },
  { name: "NVIDIA RTX A4500", group: "workstation", platform: "CUDA", memory: 20, bandwidth: 640, ai: 182, value: 48, score: 46, priceMin: 8000, priceMax: 15000, chip: "Ampere workstation GPU", availability: "工作站/二手渠道" },
  { name: "NVIDIA RTX A4000", group: "workstation", platform: "CUDA", memory: 16, bandwidth: 448, ai: 154, value: 48, score: 42, priceMin: 4500, priceMax: 9000, chip: "Ampere workstation GPU", availability: "工作站/二手渠道" },
  { name: "NVIDIA A30", group: "enterprise", platform: "CUDA", memory: 24, bandwidth: 933, ai: 330, value: 38, score: 50, priceMin: 25000, priceMax: 50000, chip: "Ampere data center GPU", availability: "服务器渠道" },
  { name: "NVIDIA A40", group: "enterprise", platform: "CUDA", memory: 48, bandwidth: 696, ai: 300, value: 42, score: 56, priceMin: 35000, priceMax: 65000, chip: "Ampere data center GPU", availability: "服务器渠道" },
  { name: "NVIDIA L4", group: "enterprise", platform: "CUDA", memory: 24, bandwidth: 300, ai: 485, value: 48, score: 43, priceMin: 16000, priceMax: 28000, chip: "Ada inference GPU", availability: "服务器渠道" },
  { name: "NVIDIA L40S", group: "enterprise", platform: "CUDA", memory: 48, bandwidth: 864, ai: 1466, value: 50, score: 67, priceMin: 65000, priceMax: 110000, chip: "Ada data center GPU", availability: "服务器渠道" },
  { name: "NVIDIA L40", group: "enterprise", platform: "CUDA", memory: 48, bandwidth: 864, ai: 733, value: 46, score: 62, priceMin: 55000, priceMax: 95000, chip: "Ada data center GPU", availability: "服务器渠道" },

  { name: "GeForce RTX 4090 D", group: "consumer", platform: "CUDA", memory: 24, bandwidth: 1008, ai: 1321, value: 72, score: 66, priceMin: 16500, priceMax: 26000, chip: "Ada AD102 24GB", availability: "国内零售/整机" },
  { name: "GeForce RTX 4090", group: "consumer", platform: "CUDA", memory: 24, bandwidth: 1008, ai: 1321, value: 60, score: 64, priceMin: 18000, priceMax: 32000, chip: "Ada AD102 24GB", availability: "库存/二手/整机渠道" },
  { name: "GeForce RTX 4080 SUPER", group: "consumer", platform: "CUDA", memory: 16, bandwidth: 736, ai: 836, value: 58, score: 50, priceMin: 7200, priceMax: 10500, chip: "Ada AD103 16GB", availability: "库存/零售渠道" },
  { name: "GeForce RTX 4080", group: "consumer", platform: "CUDA", memory: 16, bandwidth: 717, ai: 780, value: 54, score: 48, priceMin: 6500, priceMax: 10000, chip: "Ada AD103 16GB", availability: "库存/二手渠道" },
  { name: "GeForce RTX 4070 Ti SUPER", group: "consumer", platform: "CUDA", memory: 16, bandwidth: 672, ai: 706, value: 62, score: 49, priceMin: 5600, priceMax: 7600, chip: "Ada 16GB", availability: "库存/零售渠道" },
  { name: "GeForce RTX 4070 Ti", group: "consumer", platform: "CUDA", memory: 12, bandwidth: 504, ai: 641, value: 48, score: 39, priceMin: 4500, priceMax: 6500, chip: "Ada 12GB", availability: "库存/二手渠道" },
  { name: "GeForce RTX 4070 SUPER", group: "consumer", platform: "CUDA", memory: 12, bandwidth: 504, ai: 568, value: 54, score: 39, priceMin: 4300, priceMax: 5700, chip: "Ada 12GB", availability: "库存/零售渠道" },
  { name: "GeForce RTX 4070", group: "consumer", platform: "CUDA", memory: 12, bandwidth: 504, ai: 466, value: 50, score: 37, priceMin: 3600, priceMax: 5000, chip: "Ada 12GB", availability: "库存/二手渠道" },
  { name: "GeForce RTX 4060 Ti 16GB", group: "consumer", platform: "CUDA", memory: 16, bandwidth: 288, ai: 353, value: 56, score: 39, priceMin: 3000, priceMax: 4200, chip: "Ada 16GB", availability: "零售/库存渠道" },
  { name: "GeForce RTX 3090", group: "consumer", platform: "CUDA", memory: 24, bandwidth: 936, ai: 142, value: 48, score: 50, priceMin: 5200, priceMax: 8500, chip: "Ampere 24GB", availability: "二手/库存渠道" },
  { name: "GeForce RTX 3090 Ti", group: "consumer", platform: "CUDA", memory: 24, bandwidth: 1008, ai: 160, value: 46, score: 51, priceMin: 6500, priceMax: 10000, chip: "Ampere 24GB", availability: "二手/库存渠道" },

  { name: "NVIDIA DGX Station GB300", group: "enterprise", platform: "CUDA", memory: 784, bandwidth: 20000, ai: 80000, value: 22, score: 98, priceMin: 3500000, priceMax: 5500000, chip: "Grace Blackwell Ultra desktop supercomputer", availability: "企业整机渠道" },
  { name: "NVIDIA DGX Station A100", group: "enterprise", platform: "CUDA", memory: 320, bandwidth: 8100, ai: 2500, value: 20, score: 82, priceMin: 600000, priceMax: 1200000, chip: "4x A100 workstation", availability: "库存/二手企业整机" },
  { name: "NVIDIA DGX H100", group: "enterprise", platform: "CUDA", memory: 640, bandwidth: 26800, ai: 32000, value: 20, score: 97, priceMin: 2200000, priceMax: 4200000, chip: "8x H100 SXM", availability: "企业整机渠道" },
  { name: "NVIDIA DGX B200", group: "enterprise", platform: "CUDA", memory: 1440, bandwidth: 64000, ai: 160000, value: 18, score: 100, priceMin: 5000000, priceMax: 9000000, chip: "8x B200 SXM", availability: "企业整机渠道" },
  { name: "NVIDIA DGX GB200 NVL72", group: "enterprise", platform: "CUDA", memory: 13400, bandwidth: 576000, ai: 2800000, value: 12, score: 100, priceMin: 20000000, priceMax: 50000000, chip: "NVL72 rack-scale system", availability: "企业机柜方案" },
  { name: "NVIDIA DGX GB300 NVL72", group: "enterprise", platform: "CUDA", memory: 20100, bandwidth: 800000, ai: 3600000, value: 10, score: 100, priceMin: 30000000, priceMax: 70000000, chip: "NVL72 rack-scale system", availability: "企业机柜方案" },
  { name: "NVIDIA HGX H100 8-GPU", group: "enterprise", platform: "CUDA", memory: 640, bandwidth: 26800, ai: 32000, value: 22, score: 96, priceMin: 1800000, priceMax: 3500000, chip: "8x H100 SXM platform", availability: "服务器方案" },
  { name: "NVIDIA HGX H200 8-GPU", group: "enterprise", platform: "CUDA", memory: 1128, bandwidth: 38400, ai: 32000, value: 22, score: 97, priceMin: 2500000, priceMax: 4800000, chip: "8x H200 SXM platform", availability: "服务器方案" },

  { name: "Radeon RX 9070 XT", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 640, ai: 120, value: 56, score: 45, priceMin: 4700, priceMax: 6600, chip: "RDNA 4 16GB", availability: "国内零售显卡" },
  { name: "Radeon RX 9070", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 640, ai: 100, value: 54, score: 43, priceMin: 4200, priceMax: 5600, chip: "RDNA 4 16GB", availability: "国内零售显卡" },
  { name: "Radeon RX 7900 XTX", group: "consumer", platform: "ROCm", memory: 24, bandwidth: 960, ai: 123, value: 57, score: 50, priceMin: 6200, priceMax: 9000, chip: "RDNA 3 24GB", availability: "国内零售/库存显卡" },
  { name: "Radeon RX 7900 XT", group: "consumer", platform: "ROCm", memory: 20, bandwidth: 800, ai: 103, value: 54, score: 46, priceMin: 4800, priceMax: 7000, chip: "RDNA 3 20GB", availability: "国内零售/库存显卡" },
  { name: "Radeon RX 7900 GRE", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 576, ai: 92, value: 54, score: 41, priceMin: 3600, priceMax: 5200, chip: "RDNA 3 16GB", availability: "国内零售/库存显卡" },
  { name: "Radeon RX 7800 XT", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 624, ai: 75, value: 52, score: 42, priceMin: 3300, priceMax: 4600, chip: "RDNA 3 16GB", availability: "国内零售显卡" },
  { name: "Radeon RX 7700 XT", group: "consumer", platform: "ROCm", memory: 12, bandwidth: 432, ai: 54, value: 42, score: 33, priceMin: 2600, priceMax: 3800, chip: "RDNA 3 12GB", availability: "国内零售显卡" },
  { name: "Radeon RX 7600 XT 16GB", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 288, ai: 43, value: 48, score: 35, priceMin: 2300, priceMax: 3200, chip: "RDNA 3 16GB", availability: "国内零售显卡" },
  { name: "Radeon RX 6950 XT", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 576, ai: 47, value: 40, score: 39, priceMin: 3200, priceMax: 5200, chip: "RDNA 2 16GB", availability: "库存/二手渠道" },
  { name: "Radeon RX 6900 XT", group: "consumer", platform: "ROCm", memory: 16, bandwidth: 512, ai: 46, value: 38, score: 37, priceMin: 2800, priceMax: 4500, chip: "RDNA 2 16GB", availability: "库存/二手渠道" },

  { name: "AMD Radeon AI PRO R9700", group: "workstation", platform: "ROCm", memory: 32, bandwidth: 640, ai: 1531, value: 64, score: 62, priceMin: 15000, priceMax: 26000, chip: "RDNA 4 workstation AI GPU", availability: "工作站渠道" },
  { name: "AMD Radeon PRO W7900", group: "workstation", platform: "ROCm", memory: 48, bandwidth: 864, ai: 122, value: 52, score: 55, priceMin: 22000, priceMax: 33000, chip: "RDNA 3 workstation GPU", availability: "工作站渠道" },
  { name: "AMD Radeon PRO W7800", group: "workstation", platform: "ROCm", memory: 32, bandwidth: 576, ai: 89, value: 50, score: 49, priceMin: 13000, priceMax: 22000, chip: "RDNA 3 workstation GPU", availability: "工作站渠道" },
  { name: "AMD Radeon PRO W7700", group: "workstation", platform: "ROCm", memory: 16, bandwidth: 288, ai: 56, value: 44, score: 36, priceMin: 6500, priceMax: 11000, chip: "RDNA 3 workstation GPU", availability: "工作站渠道" },
  { name: "AMD Radeon PRO W7600", group: "workstation", platform: "ROCm", memory: 8, bandwidth: 288, ai: 39, value: 32, score: 27, priceMin: 2800, priceMax: 5000, chip: "RDNA 3 workstation GPU", availability: "工作站渠道" },
  { name: "AMD Radeon PRO W6800", group: "workstation", platform: "ROCm", memory: 32, bandwidth: 512, ai: 36, value: 40, score: 44, priceMin: 9000, priceMax: 16000, chip: "RDNA 2 workstation GPU", availability: "库存/工作站渠道" },
  { name: "AMD Radeon PRO W6800X Duo", group: "workstation", platform: "ROCm", memory: 64, bandwidth: 1024, ai: 72, value: 32, score: 58, priceMin: 18000, priceMax: 36000, chip: "Dual RDNA 2 workstation module", availability: "Mac Pro/库存渠道" },

  { name: "AMD Instinct MI355X", group: "enterprise", platform: "ROCm", memory: 288, bandwidth: 8000, ai: 20000, value: 24, score: 92, priceMin: 300000, priceMax: 600000, chip: "CDNA data center GPU", availability: "服务器渠道" },
  { name: "AMD Instinct MI325X", group: "enterprise", platform: "ROCm", memory: 256, bandwidth: 6000, ai: 13100, value: 26, score: 88, priceMin: 250000, priceMax: 500000, chip: "CDNA data center GPU", availability: "服务器渠道" },
  { name: "AMD Instinct MI300X", group: "enterprise", platform: "ROCm", memory: 192, bandwidth: 5300, ai: 5200, value: 28, score: 84, priceMin: 180000, priceMax: 400000, chip: "CDNA 3 data center GPU", availability: "服务器渠道" },
  { name: "AMD Instinct MI300A", group: "enterprise", platform: "ROCm", memory: 128, bandwidth: 5300, ai: 5200, value: 24, score: 78, priceMin: 160000, priceMax: 350000, chip: "APU data center accelerator", availability: "HPC 服务器渠道" },
  { name: "AMD Instinct MI250X", group: "enterprise", platform: "ROCm", memory: 128, bandwidth: 3200, ai: 1500, value: 30, score: 70, priceMin: 70000, priceMax: 180000, chip: "CDNA 2 data center GPU", availability: "服务器/二手渠道" },
  { name: "AMD Instinct MI210", group: "enterprise", platform: "ROCm", memory: 64, bandwidth: 1600, ai: 700, value: 32, score: 60, priceMin: 35000, priceMax: 90000, chip: "CDNA 2 data center GPU", availability: "服务器/二手渠道" },
  { name: "AMD Instinct MI100", group: "enterprise", platform: "ROCm", memory: 32, bandwidth: 1200, ai: 370, value: 26, score: 50, priceMin: 20000, priceMax: 60000, chip: "CDNA data center GPU", availability: "二手服务器渠道" },
  { name: "AMD Instinct MI50", group: "enterprise", platform: "ROCm", memory: 32, bandwidth: 1024, ai: 120, value: 22, score: 44, priceMin: 8000, priceMax: 25000, chip: "Vega data center GPU", availability: "二手服务器渠道" },

  { name: "Ryzen AI Max+ 395 128GB Device", group: "consumer", platform: "ROCm", memory: 128, bandwidth: 256, ai: 126, value: 67, score: 63, priceMin: 13000, priceMax: 27000, chip: "Strix Halo / Radeon 8060S", availability: "迷你主机/移动工作站" },
  { name: "Ryzen AI Max 390 64GB Device", group: "consumer", platform: "ROCm", memory: 64, bandwidth: 256, ai: 100, value: 60, score: 54, priceMin: 9000, priceMax: 18000, chip: "Strix Halo / Radeon 8050S", availability: "迷你主机/移动工作站" },
  { name: "Framework Desktop Ryzen AI Max+ 395", group: "consumer", platform: "ROCm", memory: 128, bandwidth: 256, ai: 126, value: 66, score: 62, priceMin: 14000, priceMax: 26000, chip: "Strix Halo desktop", availability: "整机/准系统渠道" },
  { name: "GMK EVO-X2 Ryzen AI Max+ 395", group: "consumer", platform: "ROCm", memory: 128, bandwidth: 256, ai: 126, value: 64, score: 61, priceMin: 13000, priceMax: 25000, chip: "Strix Halo mini PC", availability: "迷你主机渠道" },
  { name: "HP ZBook Ultra G1a AI Max+ 395", group: "consumer", platform: "ROCm", memory: 128, bandwidth: 256, ai: 126, value: 58, score: 58, priceMin: 18000, priceMax: 36000, chip: "Strix Halo mobile workstation", availability: "移动工作站渠道" },

  { name: "Intel Arc B570 10GB", group: "consumer", platform: "oneAPI", memory: 10, bandwidth: 380, ai: 40, value: 44, score: 32, priceMin: 1600, priceMax: 2300, chip: "Battlemage consumer GPU", availability: "国内零售显卡" },
  { name: "Intel Arc A770 16GB", group: "consumer", platform: "oneAPI", memory: 16, bandwidth: 560, ai: 34, value: 42, score: 39, priceMin: 1800, priceMax: 3000, chip: "Alchemist consumer GPU", availability: "库存/零售显卡" },
  { name: "Intel Arc Pro B60 24GB", group: "workstation", platform: "oneAPI", memory: 24, bandwidth: 456, ai: 197, value: 54, score: 48, priceMin: 4500, priceMax: 8500, chip: "Battlemage workstation GPU", availability: "工作站渠道" },
  { name: "Intel Arc Pro B50 16GB", group: "workstation", platform: "oneAPI", memory: 16, bandwidth: 224, ai: 170, value: 48, score: 37, priceMin: 2800, priceMax: 5500, chip: "Battlemage workstation GPU", availability: "工作站渠道" },
  { name: "Intel Data Center GPU Max 1550", group: "enterprise", platform: "oneAPI", memory: 128, bandwidth: 3277, ai: 840, value: 24, score: 70, priceMin: 60000, priceMax: 160000, chip: "Ponte Vecchio data center GPU", availability: "服务器/二手渠道" },
  { name: "Intel Data Center GPU Max 1100", group: "enterprise", platform: "oneAPI", memory: 48, bandwidth: 1229, ai: 300, value: 24, score: 54, priceMin: 25000, priceMax: 80000, chip: "Ponte Vecchio data center GPU", availability: "服务器渠道" },
  { name: "Intel Gaudi 3", group: "enterprise", platform: "oneAPI", memory: 128, bandwidth: 3670, ai: 1835, value: 28, score: 76, priceMin: 120000, priceMax: 280000, chip: "AI accelerator", availability: "服务器渠道" },
  { name: "Intel Gaudi 2", group: "enterprise", platform: "oneAPI", memory: 96, bandwidth: 2450, ai: 865, value: 24, score: 66, priceMin: 60000, priceMax: 180000, chip: "AI accelerator", availability: "服务器渠道" },
]);

const modelTiers = [7, 14, 32, 70, 120, 200, 400, 650, 1000, 2000];
const denseModelTiers = [7, 14, 32, 70, 120, 200, 400, 650];
const contextLabels = [
  { key: "ctx0", label: "0 上下文", k: 0, factor: 1 },
  { key: "ctx128", label: "128k", k: 128, factor: 0.55 },
  { key: "ctx256", label: "256k", k: 256, factor: 0.36 },
  { key: "ctx1000", label: "1M", k: 1000, factor: 0.11 },
];

function usableMemoryRatio(item) {
  if (item.group === "enterprise") return 0.85;
  if (item.platform === "Metal") return 0.66;
  if (item.name.includes("DGX Spark")) return 0.72;
  if (item.name.includes("Ryzen")) return 0.62;
  if (item.group === "workstation") return 0.82;
  return 0.78;
}

function isDiscreteGpu(item) {
  return item.platform !== "Metal" && !item.name.includes("DGX") && !item.name.includes("HGX") && !item.name.includes("Ryzen AI") && !item.name.includes("Gaudi");
}

function isUnifiedMemoryDevice(item) {
  return item.platform === "Metal" || item.name.includes("DGX Spark") || item.name.includes("Ryzen AI");
}

function systemMemoryPoolGB(item) {
  if (item.group === "enterprise") return 512;
  if (item.group === "workstation") return 256;
  return 128;
}

function offloadEffectiveBandwidth(item) {
  if (item.group === "enterprise") return 80;
  if (item.group === "workstation") return 56;
  return 40;
}

function softwareEfficiency(item) {
  if (item.group === "enterprise") return 0.56;
  if (item.platform === "CUDA" && item.group === "workstation") return 0.52;
  if (item.platform === "CUDA") return 0.62;
  if (item.platform === "Metal") return 0.38;
  if (item.platform === "ROCm") return 0.34;
  return 0.28;
}

function pickModelTier(rawMax) {
  return denseModelTiers.reduce((best, tier) => (tier <= rawMax ? tier : best), 7);
}

function moeActiveB(totalB) {
  if (totalB <= 32) return Math.max(7, totalB * 0.35);
  if (totalB <= 120) return Math.max(14, totalB * 0.25);
  if (totalB <= 400) return Math.max(22, totalB * 0.18);
  if (totalB <= 1000) return Math.max(32, totalB * 0.12);
  return Math.max(64, totalB * 0.08);
}

function pickMoeTier(rawMax) {
  return modelTiers.reduce((best, tier) => (tier <= rawMax ? tier : best), 7);
}

function estimateCapability(item) {
  const usableGB = item.memory * usableMemoryRatio(item);
  const gbPerB = 0.62;
  const rawMax = usableGB / gbPerB;
  const exactMaxB = Math.max(1, Math.floor(rawMax));
  const modelMaxB = pickModelTier(rawMax);
  const moeRawMax = isDiscreteGpu(item) ? (usableGB + systemMemoryPoolGB(item) * 0.55) / gbPerB : rawMax;
  const moeExactMaxB = Math.max(1, Math.floor(moeRawMax));
  const moeModelMaxB = pickMoeTier(moeRawMax);
  const modelGB = modelMaxB * gbPerB;
  const baseMid = Math.max(0.4, (item.bandwidth / modelGB) * softwareEfficiency(item));
  const kvPer128kGB = modelMaxB * 0.12;
  const surplusGB = Math.max(0, usableGB - modelGB);

  const tps = {};
  contextLabels.forEach((ctx) => {
    if (ctx.k === 0) {
      tps[ctx.key] = { low: baseMid * 0.75, high: baseMid * 1.35 };
      return;
    }
    const neededGB = kvPer128kGB * (ctx.k / 128);
    if (surplusGB < neededGB) {
      tps[ctx.key] = null;
      return;
    }
    const mid = baseMid * ctx.factor;
    tps[ctx.key] = { low: mid * 0.68, high: mid * 1.22 };
  });

  return {
    usableGB,
    denseModelMaxExactB: exactMaxB,
    moeModelMaxExactB: moeExactMaxB,
    modelMaxB,
    moeModelMaxB,
    baselineModelB: modelMaxB,
    speedScore: Math.round(baseMid),
    tps,
  };
}

devices.forEach((item) => Object.assign(item, estimateCapability(item)));

function estimateTpsForModel(item, modelB) {
  if (item.denseModelMaxExactB < modelB) return 0;
  const modelGB = modelB * 0.62;
  return Math.max(0.4, (item.bandwidth / modelGB) * softwareEfficiency(item));
}

function normalizedActiveB(totalB, activeB) {
  if (!activeB || activeB <= 0) return moeActiveB(totalB);
  return Math.max(1, Math.min(Number(activeB), Number(totalB)));
}

function offloadInfo(item, modelB, arch = "dense") {
  if (arch !== "moe" || !isDiscreteGpu(item)) {
    return { overflowGB: 0, gpuResidentGB: modelB * 0.62, weightGB: modelB * 0.62 };
  }
  const weightGB = modelB * 0.62;
  const gpuBudgetGB = item.memory * usableMemoryRatio(item);
  const overflowGB = Math.max(0, weightGB - gpuBudgetGB);
  return {
    overflowGB,
    gpuResidentGB: Math.min(weightGB, gpuBudgetGB),
    weightGB,
  };
}

function suggestedOffloadGB(item, modelB, arch = "dense", activeB = null) {
  if (arch !== "moe" || !isDiscreteGpu(item)) return 0;
  const weightGB = modelB * 0.62;
  const gpuBudgetGB = item.memory * usableMemoryRatio(item);
  const active = normalizedActiveB(modelB, activeB);
  const targetKvGB = active * 0.12;
  const minOffload = Math.max(0, weightGB - gpuBudgetGB);
  const roomOffload = Math.max(0, weightGB + targetKvGB - gpuBudgetGB);
  return Math.min(weightGB, Math.ceil(Math.max(minOffload, roomOffload)));
}

function effectiveOffloadInfo(item, modelB, arch = "dense", activeB = null, requestedOffloadGB = null) {
  const base = offloadInfo(item, modelB, arch);
  if (arch !== "moe" || !isDiscreteGpu(item)) return base;
  const requested = requestedOffloadGB === null || requestedOffloadGB === undefined || requestedOffloadGB === ""
    ? suggestedOffloadGB(item, modelB, arch, activeB)
    : Number(requestedOffloadGB);
  const offloadGB = Math.max(base.overflowGB, Math.min(base.weightGB, requested || 0));
  return {
    ...base,
    overflowGB: offloadGB,
    gpuResidentGB: Math.max(0, base.weightGB - offloadGB),
    suggestedGB: suggestedOffloadGB(item, modelB, arch, activeB),
  };
}

function offloadPenalty(item, modelB, arch = "dense", activeB = null, requestedOffloadGB = null) {
  const info = effectiveOffloadInfo(item, modelB, arch, activeB, requestedOffloadGB);
  if (!info.overflowGB) return 1;
  const active = normalizedActiveB(modelB, activeB);
  const activeWeightGB = active * 0.62;
  const offloadRatio = Math.min(1, info.overflowGB / info.weightGB);
  const offloadedActiveGB = activeWeightGB * offloadRatio;
  const gpuSeconds = activeWeightGB / Math.max(1, item.bandwidth);
  const offloadSeconds = offloadedActiveGB / offloadEffectiveBandwidth(item);
  return gpuSeconds / Math.max(gpuSeconds + offloadSeconds, 0.0001);
}

function estimateTpsForSelection(item, modelB, arch = "dense", activeB = null, requestedOffloadGB = null) {
  if (arch === "moe") {
    if (item.moeModelMaxExactB < modelB) return 0;
    const effectiveActiveB = normalizedActiveB(modelB, activeB);
    const activeGB = effectiveActiveB * 0.62;
    const base = Math.max(0.4, (item.bandwidth / activeGB) * softwareEfficiency(item) * 0.72);
    return base * offloadPenalty(item, modelB, arch, activeB, requestedOffloadGB);
  }
  return estimateTpsForModel(item, modelB);
}

function estimateTpsRangeForModel(item, modelB, arch = "dense", activeB = null) {
  const mid = estimateTpsForSelection(item, modelB, arch, activeB);
  if (!mid) return null;
  return { low: mid * 0.75, high: mid * 1.35 };
}

const groupLabels = {
  consumer: "消费/桌面",
  workstation: "工作站",
  enterprise: "企业参考",
};

const max = {
  memory: Math.max(...devices.map((item) => item.memory)),
  bandwidth: Math.max(...devices.map((item) => item.bandwidth)),
  ai: Math.max(...devices.map((item) => item.ai)),
  model: Math.max(...devices.map((item) => item.denseModelMaxExactB)),
  speed: Math.max(...devices.map((item) => item.speedScore)),
  value: 100,
};

const priceFloor = 2000;
const priceCeil = 100000;
const logFloor = Math.log10(priceFloor);
const logCeil = Math.log10(priceCeil);

const state = {
  search: "",
  tier: "all",
  platform: "all",
  sort: "score",
  priceMin: priceFloor,
  priceMax: Infinity,
  arch: "dense",
  modelMin: 0,
  activeB: 0,
  speedMin: 0,
};

const ladder = document.querySelector("#ladder");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const tierFilter = document.querySelector("#tierFilter");
const platformFilter = document.querySelector("#platformFilter");
const sortSelect = document.querySelector("#sortSelect");
const resetFilters = document.querySelector("#resetFilters");
const modelFilter = document.querySelector("#modelFilter");
const archFilter = document.querySelector("#archFilter");
const activeFilter = document.querySelector("#activeFilter");
const speedFilter = document.querySelector("#speedFilter");
const priceMinRange = document.querySelector("#priceMinRange");
const priceMaxRange = document.querySelector("#priceMaxRange");
const priceRangeText = document.querySelector("#priceRangeText");
const dialog = document.querySelector("#deviceDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogContent = document.querySelector("#dialogContent");
let activeDialogDevice = null;

function modelOptionsFor(item) {
  const arch = dialogContent.querySelector("#dialogArchSelect")?.value || state.arch;
  return modelTiers.filter((tier) => tier <= modelCapacity(item, arch));
}

function formatBandwidth(value) {
  return value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}TB/s` : `${value}GB/s`;
}

function formatAi(value) {
  return value >= 1000 ? `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k TOPS` : `${value} TOPS`;
}

function formatPrice(value) {
  if (!Number.isFinite(value)) return "￥10万+";
  if (value >= 10000000) return `￥${Math.round(value / 10000)}万`;
  if (value >= 10000) {
    const wan = value / 10000;
    return `￥${wan >= 10 ? Math.round(wan) : wan.toFixed(1)}万`;
  }
  return `￥${Math.round(value).toLocaleString("zh-CN")}`;
}

function formatPriceRange(item) {
  return `${formatPrice(item.priceMin)}-${formatPrice(item.priceMax)}`;
}

function formatTps(range) {
  if (!range) return "不建议";
  const low = range.low < 10 ? range.low.toFixed(1) : Math.round(range.low);
  const high = range.high < 10 ? range.high.toFixed(1) : Math.round(range.high);
  return `${low}-${high} tok/s`;
}

function formatOffload(item, modelB, arch = state.arch, activeB = state.activeB, requestedOffloadGB = null) {
  const info = effectiveOffloadInfo(item, modelB, arch, activeB, requestedOffloadGB);
  if (!info.overflowGB) return "显存内";
  return `溢出 ${Math.round(info.overflowGB)}GB`;
}

function modelCapacity(item, arch = state.arch) {
  return arch === "moe" ? item.moeModelMaxExactB : item.denseModelMaxExactB;
}

function modelLabel(modelB, arch = state.arch, activeB = null) {
  if (arch === "moe") return `${modelB}B MoE / active ${Math.round(normalizedActiveB(modelB, activeB))}B`;
  return `${modelB}B Dense`;
}

function sliderToPrice(value, openEnded = false) {
  const ratio = Number(value) / 1000;
  if (openEnded && ratio >= 1) return Infinity;
  return Math.round(10 ** (logFloor + ratio * (logCeil - logFloor)));
}

function priceToSlider(value) {
  if (!Number.isFinite(value)) return 1000;
  const ratio = (Math.log10(value) - logFloor) / (logCeil - logFloor);
  return Math.round(Math.min(1000, Math.max(0, ratio * 1000)));
}

function width(value, key) {
  return `${Math.max(4, Math.round((value / max[key]) * 100))}%`;
}

function filteredDevices() {
  return devices
    .filter((item) => {
      const haystack = `${item.name} ${item.chip} ${item.platform}`.toLowerCase();
      const matchesSearch = haystack.includes(state.search.toLowerCase());
      const matchesTier = state.tier === "all" || item.group === state.tier;
      const matchesPlatform = state.platform === "all" || item.platform === state.platform;
      const matchesPrice = item.priceMax >= state.priceMin && item.priceMin <= state.priceMax;
      const matchesModel = modelCapacity(item) >= state.modelMin;
      const speedBasis = state.modelMin > 0 ? estimateTpsForSelection(item, state.modelMin, state.arch, state.activeB) : item.speedScore;
      const matchesSpeed = speedBasis >= state.speedMin;
      return matchesSearch && matchesTier && matchesPlatform && matchesPrice && matchesModel && matchesSpeed;
    })
    .sort((a, b) => {
      if (state.sort === "priceMinAsc") return a.priceMin - b.priceMin;
      if (state.sort === "modelMaxB") return modelCapacity(b) - modelCapacity(a);
      if (state.sort === "speedScore") {
        const modelB = state.modelMin > 0 ? state.modelMin : null;
        const aSpeed = modelB ? estimateTpsForSelection(a, modelB, state.arch, state.activeB) : a.speedScore;
        const bSpeed = modelB ? estimateTpsForSelection(b, modelB, state.arch, state.activeB) : b.speedScore;
        return bSpeed - aSpeed;
      }
      return b[state.sort] - a[state.sort];
    });
}

function metric(label, key, value, display) {
  return `
    <div class="metric">
      <span>${label}</span>
      <span class="track"><span class="fill ${key}" style="width:${width(value, key)}"></span></span>
      <strong>${display}</strong>
    </div>
  `;
}

function renderLadder() {
  const list = filteredDevices();
  resultCount.textContent = `${list.length} 款设备`;
  ladder.innerHTML = list
    .map((item, index) => {
      const rank = index + 1;
      const activeModelB = state.modelMin > 0 ? state.modelMin : item.baselineModelB;
      const activeSpeed = state.modelMin > 0 ? estimateTpsForSelection(item, activeModelB, state.arch, state.activeB) : item.speedScore;
      const activeRange = state.modelMin > 0 ? estimateTpsRangeForModel(item, activeModelB, state.arch, state.activeB) : item.tps.ctx0;
      const capacity = modelCapacity(item);
      const activeModelLabel = state.modelMin > 0 ? `${modelLabel(activeModelB, state.arch, state.activeB)} 估算` : `${capacity}B ${state.arch === "moe" ? "MoE" : "Dense"} Q4`;
      const offloadLabel = state.arch === "moe" && state.modelMin > 0 ? ` · ${formatOffload(item, activeModelB, state.arch)}` : "";
      return `
        <article class="device-card">
          <div class="rank">#${rank}</div>
          <div>
            <div class="device-title">
              <h3>${item.name}</h3>
              <span class="tag ${item.group}">${groupLabels[item.group]}</span>
              <span class="tag">${item.platform}</span>
            </div>
            <p>${item.chip} · ${item.availability}</p>
            <span class="price-line">国内参考价 ${formatPriceRange(item)}</span>
            <span class="model-line">可承载约 ${capacity}B ${state.arch === "moe" ? "MoE" : "Dense"} Q4 · ${activeModelLabel}${offloadLabel} ${formatTps(activeRange)}</span>
          </div>
          <div class="metrics">
            ${metric("容量", "memory", item.memory, `${item.memory}GB`)}
            ${metric("带宽", "bandwidth", item.bandwidth, formatBandwidth(item.bandwidth))}
            ${metric("算力", "ai", item.ai, formatAi(item.ai))}
            ${metric("模型", "model", capacity, `${capacity}B`)}
            ${metric("速度", "speed", activeSpeed, `${Math.round(activeSpeed)} tps`)}
            ${metric("购买", "value", item.value, `${item.value}/100`)}
          </div>
          <button class="details-btn" type="button" data-device="${item.name}" aria-label="查看 ${item.name} 详情">›</button>
        </article>
      `;
    })
    .join("");
}

function renderChart(target, key, formatter, className = "") {
  const rows = [...devices]
    .sort((a, b) => b[key] - a[key])
    .slice(0, 10);

  document.querySelector(target).innerHTML = rows
    .map((item) => `
      <div class="bar-row">
        <strong>${item.name}</strong>
        <span class="bar-track"><span class="bar-fill ${className}" style="width:${width(item[key], key)}"></span></span>
        <span>${formatter(item[key])}</span>
      </div>
    `)
    .join("");
}

function renderPriceFilter() {
  priceRangeText.textContent = `${formatPrice(state.priceMin)} 到 ${formatPrice(state.priceMax)}`;
}

function tpsForModelAndContext(item, modelB, ctx, arch = "dense", activeB = null, requestedOffloadGB = null) {
  if (modelCapacity(item, arch) < modelB) return null;
  const usableGB = item.memory * usableMemoryRatio(item);
  const modelGB = modelB * 0.62;
  const offload = effectiveOffloadInfo(item, modelB, arch, activeB, requestedOffloadGB);
  const gpuWeightGB = arch === "moe" && isDiscreteGpu(item) ? offload.gpuResidentGB : modelGB;
  const surplusGB = Math.max(0, usableGB - gpuWeightGB);
  if (ctx.k > 0) {
    const kvBasisB = arch === "moe" ? normalizedActiveB(modelB, activeB) : modelB;
    const kvNeededGB = kvBasisB * 0.12 * (ctx.k / 128);
    if (surplusGB < kvNeededGB) return null;
  }
  const mid = estimateTpsForSelection(item, modelB, arch, activeB, requestedOffloadGB) * ctx.factor;
  return { low: mid * 0.68, high: mid * 1.22 };
}

function maxContextK(item, modelB, arch = "dense", activeB = null, requestedOffloadGB = null) {
  if (modelCapacity(item, arch) < modelB) return 0;
  const usableGB = item.memory * usableMemoryRatio(item);
  const modelGB = modelB * 0.62;
  const offload = effectiveOffloadInfo(item, modelB, arch, activeB, requestedOffloadGB);
  const gpuWeightGB = arch === "moe" && isDiscreteGpu(item) ? offload.gpuResidentGB : modelGB;
  const surplusGB = Math.max(0, usableGB - gpuWeightGB);
  const kvBasisB = arch === "moe" ? normalizedActiveB(modelB, activeB) : modelB;
  if (kvBasisB <= 0) return 0;
  return Math.max(0, Math.floor((surplusGB / (kvBasisB * 0.12)) * 128));
}

function contextRowsFor(item, modelB, arch = "dense", activeB = null, requestedOffloadGB = null) {
  const maxK = maxContextK(item, modelB, arch, activeB, requestedOffloadGB);
  const rows = [{ key: "ctx0", label: "0 上下文", k: 0, factor: 1 }];
  contextLabels.slice(1).forEach((ctx) => {
    if (ctx.k <= maxK) rows.push(ctx);
  });
  if (maxK > 0 && !rows.some((ctx) => ctx.k === maxK)) {
    const previous = rows[rows.length - 1];
    if (maxK > previous.k) {
      rows.push({
        key: `ctx${maxK}`,
        label: `最大 ${maxK}k`,
        k: maxK,
        factor: Math.max(0.04, 1 / (1 + maxK / 160)),
      });
    }
  }
  return { maxK, rows };
}

function clampDialogModelInput(item, arch) {
  const input = dialogContent.querySelector("#dialogModelInput");
  if (!input) return 0;
  const maxModel = modelCapacity(item, arch);
  if (input.value === "") {
    input.max = maxModel;
    return 0;
  }
  const value = Math.max(1, Math.min(Number(input.value), maxModel));
  input.value = value;
  input.max = maxModel;
  return value;
}

function renderDialogTps(item) {
  const table = dialogContent.querySelector("#dialogTpsTable");
  const label = dialogContent.querySelector("#dialogModelLabel");
  const arch = dialogContent.querySelector("#dialogArchSelect")?.value || "dense";
  const modelB = clampDialogModelInput(item, arch);
  const activeInput = dialogContent.querySelector("#dialogActiveInput");
  const offloadInput = dialogContent.querySelector("#dialogOffloadInput");
  const activeB = arch === "moe" ? Number(activeInput?.value || 0) : 0;
  const suggested = suggestedOffloadGB(item, modelB, arch, activeB);
  const requestedOffload = offloadInput?.value === "" ? suggested : Number(offloadInput?.value || 0);
  if (!table || !label) return;
  if (!modelB) {
    label.textContent = "请输入总参数量 B。";
    table.innerHTML = "";
    return;
  }
  if (activeInput) {
    activeInput.disabled = arch !== "moe";
    activeInput.placeholder = arch === "moe" ? `自动 ${Math.round(moeActiveB(modelB))}` : "Dense 不适用";
    activeInput.max = modelB;
  }
  if (offloadInput) {
    const maxOffload = Math.ceil(modelB * 0.62);
    offloadInput.disabled = arch !== "moe" || !isDiscreteGpu(item);
    offloadInput.max = maxOffload;
    offloadInput.placeholder = arch === "moe" && isDiscreteGpu(item) ? `建议 ${suggested}GB` : "无需卸载";
  }
  const info = effectiveOffloadInfo(item, modelB, arch, activeB, requestedOffload);
  const offloadText = info.overflowGB
    ? `权重约 ${Math.round(info.weightGB)}GB，卸载约 ${Math.round(info.overflowGB)}GB，建议 ${Math.round(info.suggestedGB || info.overflowGB)}GB，按 PCIe/系统内存有效带宽折算。`
    : "权重估算可放在显存/统一内存内。";
  const context = contextRowsFor(item, modelB, arch, activeB, requestedOffload);
  label.textContent = `当前按 ${modelLabel(modelB, arch, activeB)} Q4 估算；最大上下文约 ${context.maxK}k。${offloadText}`;
  table.innerHTML = context.rows.map((ctx) => `
    <div class="tps-cell">
      <span>${ctx.label}</span>
      <strong>${formatTps(tpsForModelAndContext(item, modelB, ctx, arch, activeB, requestedOffload))}</strong>
    </div>
  `).join("");
}

function openDevice(name) {
  const item = devices.find((device) => device.name === name);
  if (!item) return;
  activeDialogDevice = item;
  const initialArch = state.arch;
  const initialModel = state.modelMin > 0 && state.modelMin <= modelCapacity(item, initialArch) ? state.modelMin : (initialArch === "moe" ? item.moeModelMaxB : item.baselineModelB);
  const initialActive = initialArch === "moe" ? state.activeB : 0;

  dialogContent.innerHTML = `
    <div class="dialog-body">
      <p class="section-kicker">${groupLabels[item.group]} · ${item.platform}</p>
      <h3>${item.name}</h3>
      <p class="spec-sub">${item.chip} · ${item.availability}</p>
      <div class="spec-grid">
        <div class="spec"><strong>${item.memory}GB</strong><span class="spec-sub">显存/统一内存</span></div>
        <div class="spec"><strong>${formatBandwidth(item.bandwidth)}</strong><span class="spec-sub">内存带宽</span></div>
        <div class="spec"><strong>${item.denseModelMaxExactB}B / ${item.moeModelMaxExactB}B</strong><span class="spec-sub">Dense / MoE 估算上限</span></div>
        <div class="spec"><strong>${formatPriceRange(item)}</strong><span class="spec-sub">国内参考价</span></div>
      </div>
      <div class="metrics">
        ${metric("综合", "value", item.score, `${item.score}/100`)}
        ${metric("容量", "memory", item.memory, `${item.memory}GB`)}
        ${metric("带宽", "bandwidth", item.bandwidth, formatBandwidth(item.bandwidth))}
        ${metric("算力", "ai", item.ai, formatAi(item.ai))}
        ${metric("模型", "model", item.modelMaxB, `${item.modelMaxB}B`)}
      </div>
      <div class="dialog-control">
        <label>
          <span>模型架构</span>
          <select id="dialogArchSelect">
            <option value="dense" ${initialArch === "dense" ? "selected" : ""}>Dense</option>
            <option value="moe" ${initialArch === "moe" ? "selected" : ""}>MoE</option>
          </select>
        </label>
        <label>
          <span>总参数量 B</span>
          <input id="dialogModelInput" type="number" min="1" max="${modelCapacity(item, initialArch)}" step="1" inputmode="numeric" value="${initialModel}">
        </label>
        <label>
          <span>MoE 激活 B</span>
          <input id="dialogActiveInput" type="number" min="1" max="${initialModel}" step="1" inputmode="numeric" value="${initialActive || ""}" placeholder="自动">
        </label>
        <label>
          <span>卸载 GB</span>
          <input id="dialogOffloadInput" type="number" min="0" step="1" inputmode="numeric" value="" placeholder="自动建议">
        </label>
        <p id="dialogModelLabel"></p>
      </div>
      <div id="dialogTpsTable" class="tps-table"></div>
      <p class="dialog-note">${item.note}</p>
    </div>
  `;
  dialog.showModal();
  renderDialogTps(item);
}

function render() {
  renderPriceFilter();
  renderLadder();
  renderChart("#memoryChart", "memory", (value) => `${value}GB`);
  renderChart("#bandwidthChart", "bandwidth", formatBandwidth, "bandwidth-fill");
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderLadder();
});

tierFilter.addEventListener("change", (event) => {
  state.tier = event.target.value;
  renderLadder();
});

platformFilter.addEventListener("change", (event) => {
  state.platform = event.target.value;
  renderLadder();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderLadder();
});

modelFilter.addEventListener("change", (event) => {
  state.modelMin = Math.max(0, Math.round(Number(event.target.value || 0)));
  modelFilter.value = state.modelMin || "";
  renderLadder();
});

modelFilter.addEventListener("input", (event) => {
  state.modelMin = Math.max(0, Math.round(Number(event.target.value || 0)));
  renderLadder();
});

archFilter.addEventListener("change", (event) => {
  state.arch = event.target.value;
  renderLadder();
});

activeFilter.addEventListener("change", (event) => {
  state.activeB = Math.max(0, Math.round(Number(event.target.value || 0)));
  activeFilter.value = state.activeB || "";
  renderLadder();
});

activeFilter.addEventListener("input", (event) => {
  state.activeB = Math.max(0, Math.round(Number(event.target.value || 0)));
  renderLadder();
});

speedFilter.addEventListener("change", (event) => {
  state.speedMin = Number(event.target.value);
  renderLadder();
});

function syncPriceFromSliders(changed) {
  let minValue = Number(priceMinRange.value);
  let maxValue = Number(priceMaxRange.value);
  if (minValue > maxValue - 20) {
    if (changed === "min") {
      minValue = maxValue - 20;
      priceMinRange.value = minValue;
    } else {
      maxValue = minValue + 20;
      priceMaxRange.value = maxValue;
    }
  }
  state.priceMin = sliderToPrice(minValue);
  state.priceMax = sliderToPrice(maxValue, true);
  render();
}

priceMinRange.addEventListener("input", () => syncPriceFromSliders("min"));
priceMaxRange.addEventListener("input", () => syncPriceFromSliders("max"));

resetFilters.addEventListener("click", () => {
  state.search = "";
  state.tier = "all";
  state.platform = "all";
  state.sort = "score";
  state.priceMin = priceFloor;
  state.priceMax = Infinity;
  state.arch = "dense";
  state.modelMin = 0;
  state.activeB = 0;
  state.speedMin = 0;
  searchInput.value = "";
  tierFilter.value = "all";
  platformFilter.value = "all";
  sortSelect.value = "score";
  archFilter.value = "dense";
  modelFilter.value = "";
  activeFilter.value = "";
  speedFilter.value = "0";
  priceMinRange.value = priceToSlider(priceFloor);
  priceMaxRange.value = priceToSlider(Infinity);
  render();
});

ladder.addEventListener("click", (event) => {
  const button = event.target.closest("[data-device]");
  if (button) openDevice(button.dataset.device);
});

dialogContent.addEventListener("change", (event) => {
  if (!activeDialogDevice) return;
  if (event.target.id === "dialogArchSelect") {
    const input = dialogContent.querySelector("#dialogModelInput");
    if (input) input.max = modelCapacity(activeDialogDevice, event.target.value);
    renderDialogTps(activeDialogDevice);
  }
  if (event.target.id === "dialogModelInput" || event.target.id === "dialogActiveInput" || event.target.id === "dialogOffloadInput") {
    renderDialogTps(activeDialogDevice);
  }
});

dialogContent.addEventListener("input", (event) => {
  if (!activeDialogDevice) return;
  if (event.target.id === "dialogModelInput" || event.target.id === "dialogActiveInput" || event.target.id === "dialogOffloadInput") {
    renderDialogTps(activeDialogDevice);
  }
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

render();
