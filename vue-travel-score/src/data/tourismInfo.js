export const tourismData = {
  '敦煌': {
    attractions: [
      { name: '莫高窟', type: '人文景观', rating: 4.9, description: '世界文化遗产，千佛洞壁画艺术瑰宝', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mogao%20Caves%20Dunhuang%20ancient%20Buddhist%20caves%20with%20murals&image_size=square' },
      { name: '鸣沙山月牙泉', type: '自然景观', rating: 4.8, description: '沙漠奇观，沙泉共生的独特美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mingsha%20Sand%20Dunes%20and%20Crescent%20Lake%20Dunhuang%20desert&image_size=square' },
      { name: '阳关', type: '人文景观', rating: 4.5, description: '丝绸之路重要关隘，西出阳关无故人', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yangguan%20Pass%20ancient%20silk%20road%20gateway%20in%20Dunhuang&image_size=square' },
      { name: '玉门关', type: '人文景观', rating: 4.6, description: '汉长城重要关隘，春风不度玉门关', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yumenguan%20Pass%20ancient%20Great%20Wall%20pass%20in%20Dunhuang&image_size=square' }
    ],
    festivals: [
      { name: '敦煌文化旅游节', time: '9月', description: '展示敦煌文化艺术，有大型文艺演出' },
      { name: '飞天文化节', time: '5月', description: '以飞天艺术为主题的文化盛会' },
      { name: '骆驼节', time: '10月', description: '沙漠骆驼文化展示活动' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：驴肉黄面、羊肉泡馍、敦煌酿皮子',
      '交通指南：敦煌有机场，可直飞兰州、西安等城市',
      '住宿推荐：敦煌市区酒店或鸣沙山附近民宿',
      '注意事项：莫高窟需提前预约，沙漠地区注意防晒'
    ],
    itineraries: [
      { day: 1, title: '莫高窟深度游', activities: ['上午参观莫高窟', '中午品尝驴肉黄面', '下午游览数字展示中心'] },
      { day: 2, title: '鸣沙山月牙泉', activities: ['上午鸣沙山骑骆驼', '下午月牙泉拍照', '晚上观看沙漠日落'] },
      { day: 3, title: '丝绸之路之旅', activities: ['上午游览阳关', '下午参观玉门关', '晚上体验沙漠星空'] }
    ]
  },
  '瓜州': {
    attractions: [
      { name: '榆林窟', type: '人文景观', rating: 4.7, description: '莫高窟的姊妹窟，壁画艺术精美', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yulin%20Caves%20ancient%20Buddhist%20caves%20in%20Guazhou&image_size=square' },
      { name: '锁阳城', type: '人文景观', rating: 4.5, description: '唐代古城遗址，丝绸之路重镇', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Suoyang%20City%20ancient%20Tang%20Dynasty%20city%20ruins&image_size=square' },
      { name: '东千佛洞', type: '人文景观', rating: 4.4, description: '西夏时期壁画艺术，色彩鲜艳', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=East%20Thousand%20Buddha%20Caves%20Xixia%20murals&image_size=square' },
      { name: '双塔湖', type: '自然景观', rating: 4.3, description: '沙漠中的绿洲湖泊，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shuangta%20Lake%20oasis%20in%20desert%20landscape&image_size=square' }
    ],
    festivals: [
      { name: '蜜瓜节', time: '7月', description: '瓜州蜜瓜丰收节，品尝各种美味蜜瓜' },
      { name: '玄奘文化节', time: '9月', description: '纪念玄奘西行，展示丝路文化' },
      { name: '戈壁挑战赛', time: '5月', description: '戈壁徒步挑战赛，体验沙漠探险' }
    ],
    travelTips: [
      '建议游玩天数：2天',
      '必尝美食：瓜州蜜瓜、手抓羊肉、烤包子',
      '交通指南：可从敦煌乘车前往，约1.5小时车程',
      '住宿推荐：瓜州县城或榆林窟附近',
      '注意事项：戈壁地区温差大，注意保暖'
    ],
    itineraries: [
      { day: 1, title: '石窟艺术之旅', activities: ['上午参观榆林窟', '中午品尝当地美食', '下午游览东千佛洞'] },
      { day: 2, title: '古城遗址游', activities: ['上午游览锁阳城', '下午双塔湖观光', '返回敦煌'] }
    ]
  },
  '张掖': {
    attractions: [
      { name: '七彩丹霞', type: '自然景观', rating: 4.9, description: '世界地质公园，色彩斑斓的丹霞地貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangye%20Danxia%20Colorful%20Landform%20Geological%20Park&image_size=square' },
      { name: '冰沟丹霞', type: '自然景观', rating: 4.7, description: '造型奇特的丹霞地貌，壮观震撼', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Binggou%20Danxia%20spectacular%20red%20rock%20formations&image_size=square' },
      { name: '马蹄寺', type: '人文景观', rating: 4.5, description: '千年石窟群，藏传佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mati%20Temple%20ancient%20Buddhist%20caves%20in%20Zhangye&image_size=square' },
      { name: '大佛寺', type: '人文景观', rating: 4.4, description: '亚洲最大的室内卧佛', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Great%20Buddha%20Temple%20largest%20indoor%20reclining%20Buddha&image_size=square' }
    ],
    festivals: [
      { name: '丹霞文化旅游节', time: '8月', description: '展示丹霞地貌奇观，有摄影大赛' },
      { name: '祁连山草原文化节', time: '7月', description: '草原盛会，展示民族风情' },
      { name: '美食节', time: '9月', description: '品尝张掖特色美食' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：张掖牛肉小饭、臊面、搓鱼面',
      '交通指南：张掖有高铁站，交通便利',
      '住宿推荐：张掖市区或丹霞景区附近',
      '注意事项：丹霞景区日落时分最美'
    ],
    itineraries: [
      { day: 1, title: '七彩丹霞游', activities: ['上午游览七彩丹霞', '中午品尝张掖美食', '下午冰沟丹霞'] },
      { day: 2, title: '文化之旅', activities: ['上午参观马蹄寺', '下午大佛寺', '晚上观看丹霞夜景'] }
    ]
  },
  '西宁': {
    attractions: [
      { name: '塔尔寺', type: '人文景观', rating: 4.8, description: '藏传佛教格鲁派六大寺院之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ta%20er%20Monastery%20Tibetan%20Buddhist%20monastery%20in%20Xining&image_size=square' },
      { name: '青海湖', type: '自然景观', rating: 4.9, description: '中国最大的内陆湖，湖光山色美不胜收', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qinghai%20Lake%20beautiful%20blue%20lake%20in%20Qinghai&image_size=square' },
      { name: '东关清真大寺', type: '人文景观', rating: 4.5, description: '西北最大的清真寺之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dongguan%20Great%20Mosque%20Islamic%20architecture%20in%20Xining&image_size=square' },
      { name: '日月山', type: '自然景观', rating: 4.4, description: '青藏高原门户，文成公主进藏途经地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Riyue%20Mountain%20Qinghai%20Tibetan%20Plateau%20gateway&image_size=square' }
    ],
    festivals: [
      { name: '郁金香节', time: '5月', description: '西宁植物园郁金香盛开' },
      { name: '塔尔寺酥油花灯节', time: '正月十五', description: '塔尔寺传统节日，酥油花展览' },
      { name: '青海湖国际自行车赛', time: '7月', description: '国际自行车赛事，环湖骑行' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：手抓羊肉、尕面片、酿皮',
      '交通指南：西宁有机场和高铁站',
      '住宿推荐：西宁市区或青海湖附近',
      '注意事项：海拔较高，注意高原反应'
    ],
    itineraries: [
      { day: 1, title: '西宁市区游', activities: ['上午塔尔寺', '中午品尝手抓羊肉', '下午东关清真大寺'] },
      { day: 2, title: '青海湖之旅', activities: ['上午前往青海湖', '环湖游览', '晚上看湖景日落'] }
    ]
  },
  '银川': {
    attractions: [
      { name: '西夏王陵', type: '人文景观', rating: 4.7, description: '西夏王朝皇家陵园，东方金字塔', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Western%20Xia%20Tombs%20ancient%20imperial%20mausoleums%20in%20Yinchuan&image_size=square' },
      { name: '沙湖', type: '自然景观', rating: 4.6, description: '沙水相依的独特景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sand%20Lake%20sand%20and%20water%20scenic%20spot%20in%20Ningxia&image_size=square' },
      { name: '镇北堡西部影城', type: '特色体验', rating: 4.8, description: '中国电影从这里走向世界', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhenbeibu%20Western%20Film%20Studio%20movie%20sets&image_size=square' },
      { name: '贺兰山岩画', type: '人文景观', rating: 4.5, description: '古代游牧民族的艺术画廊', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Helan%20Mountain%20Rock%20Paintings%20ancient%20art&image_size=square' }
    ],
    festivals: [
      { name: '宁夏国际文化旅游节', time: '9月', description: '展示宁夏旅游资源和文化' },
      { name: '黄河文化节', time: '5月', description: '弘扬黄河文化' },
      { name: '葡萄酒节', time: '10月', description: '贺兰山东麓葡萄酒品鉴' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：手抓羊肉、羊杂碎、酿皮子',
      '交通指南：银川有机场和高铁站',
      '住宿推荐：银川市区或沙湖附近',
      '注意事项：西部影城游玩需半天时间'
    ],
    itineraries: [
      { day: 1, title: '影视文化之旅', activities: ['上午西部影城', '中午品尝宁夏美食', '下午贺兰山岩画'] },
      { day: 2, title: '西夏文化之旅', activities: ['上午西夏王陵', '下午沙湖', '晚上银川夜景'] }
    ]
  },
  '大同': {
    attractions: [
      { name: '云冈石窟', type: '人文景观', rating: 4.9, description: '世界文化遗产，北魏佛教艺术巅峰之作', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yungang%20Grottoes%20ancient%20Buddhist%20caves%20in%20Datong&image_size=square' },
      { name: '华严寺', type: '人文景观', rating: 4.7, description: '辽金佛教寺院，大雄宝殿宏伟', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huayan%20Temple%20Liao%20Dynasty%20Buddhist%20temple&image_size=square' },
      { name: '古城墙', type: '人文景观', rating: 4.5, description: '明代古城墙，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Datong%20ancient%20city%20wall%20Ming%20Dynasty&image_size=square' },
      { name: '恒山', type: '自然景观', rating: 4.6, description: '北岳恒山，道教名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hengshan%20Mountain%20Northern%20Sacred%20Mountain&image_size=square' }
    ],
    festivals: [
      { name: '云冈文化节', time: '8月', description: '展示云冈石窟文化艺术' },
      { name: '华严寺祈福法会', time: '正月十五', description: '传统祈福活动' },
      { name: '恒山登山节', time: '9月', description: '登山健身活动' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：刀削面、羊杂粉汤、黄米凉糕',
      '交通指南：大同有机场和高铁站',
      '住宿推荐：大同古城内或云冈石窟附近',
      '注意事项：石窟参观需请讲解员'
    ],
    itineraries: [
      { day: 1, title: '云冈石窟游', activities: ['上午云冈石窟', '中午品尝刀削面', '下午华严寺'] },
      { day: 2, title: '恒山之旅', activities: ['上午攀登恒山', '下午古城墙', '晚上逛古城'] }
    ]
  },
  '洛阳': {
    attractions: [
      { name: '龙门石窟', type: '人文景观', rating: 4.9, description: '世界文化遗产，中国四大石窟之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Longmen%20Grottoes%20ancient%20Buddhist%20caves%20in%20Luoyang&image_size=square' },
      { name: '白马寺', type: '人文景观', rating: 4.7, description: '中国第一座官办寺院', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=White%20Horse%20Temple%20first%20Buddhist%20temple%20in%20China&image_size=square' },
      { name: '牡丹园', type: '自然景观', rating: 4.6, description: '国花园，牡丹花城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Peony%20Garden%20beautiful%20peony%20flowers%20in%20Luoyang&image_size=square' },
      { name: '老君山', type: '自然景观', rating: 4.8, description: '道教名山，云海仙境', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Laojun%20Mountain%20Taoist%20sacred%20mountain%20cloud%20sea&image_size=square' }
    ],
    festivals: [
      { name: '牡丹花会', time: '4月', description: '中国最大的牡丹盛会' },
      { name: '龙门文化节', time: '9月', description: '展示龙门石窟文化' },
      { name: '河洛文化节', time: '10月', description: '弘扬河洛文化' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：水席、牡丹燕菜、牛肉汤',
      '交通指南：洛阳有机场和高铁站',
      '住宿推荐：洛阳市区或老君山附近',
      '注意事项：牡丹花期在4月，老君山冬季雪景最美'
    ],
    itineraries: [
      { day: 1, title: '石窟寺院游', activities: ['上午龙门石窟', '中午品尝水席', '下午白马寺'] },
      { day: 2, title: '老君山之旅', activities: ['上午前往老君山', '登山观云海', '晚上看日落'] }
    ]
  },
  '开封': {
    attractions: [
      { name: '清明上河园', type: '特色体验', rating: 4.7, description: '再现北宋东京汴梁繁华景象', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qingming%20River%20Park%20ancient%20Song%20Dynasty%20theme%20park&image_size=square' },
      { name: '开封府', type: '人文景观', rating: 4.6, description: '北宋都城官署，包拯办公地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kaifeng%20Government%20ancient%20government%20office&image_size=square' },
      { name: '大相国寺', type: '人文景观', rating: 4.5, description: '北宋皇家寺院，鲁智深出家地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Daxiangguo%20Temple%20ancient%20Buddhist%20temple%20in%20Kaifeng&image_size=square' },
      { name: '龙亭', type: '人文景观', rating: 4.4, description: '北宋皇宫遗址，俯瞰开封城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dragon%20Pavilion%20ancient%20imperial%20palace%20site&image_size=square' }
    ],
    festivals: [
      { name: '菊花文化节', time: '10月', description: '中国开封菊花展，品种繁多' },
      { name: '清明文化节', time: '4月', description: '纪念清明节，展示传统习俗' },
      { name: '大宋文化节', time: '11月', description: '展示北宋文化' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：灌汤包、桶子鸡、花生糕',
      '交通指南：开封有高铁站，距郑州30分钟',
      '住宿推荐：开封市区或清明上河园附近',
      '注意事项：清明上河园夜景非常漂亮'
    ],
    itineraries: [
      { day: 1, title: '北宋文化游', activities: ['上午清明上河园', '中午品尝灌汤包', '下午开封府'] },
      { day: 2, title: '寺院古迹游', activities: ['上午大相国寺', '下午龙亭', '晚上清明上河园夜游'] }
    ]
  },
  '黄山': {
    attractions: [
      { name: '黄山', type: '自然景观', rating: 4.9, description: '天下第一奇山，世界双遗产', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huangshan%20Mountain%20beautiful%20pine%20trees%20and%20rocks&image_size=square' },
      { name: '西递宏村', type: '人文景观', rating: 4.8, description: '世界文化遗产，徽派建筑典范', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xidi%20Hongcun%20ancient%20Huizhou%20villages&image_size=square' },
      { name: '屯溪老街', type: '人文景观', rating: 4.5, description: '宋代老街，徽州文化缩影', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tunxi%20Old%20Street%20traditional%20Chinese%20street&image_size=square' },
      { name: '翡翠谷', type: '自然景观', rating: 4.6, description: '五彩池群，情人谷', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Emerald%20Valley%20colorful%20pools%20in%20Huangshan&image_size=square' }
    ],
    festivals: [
      { name: '黄山国际旅游节', time: '10月', description: '展示黄山旅游资源' },
      { name: '油菜花节', time: '3月', description: '皖南油菜花盛开' },
      { name: '红叶节', time: '11月', description: '黄山红叶满山' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：臭鳜鱼、毛豆腐、黄山烧饼',
      '交通指南：黄山有机场和高铁站',
      '住宿推荐：黄山山上酒店或山下民宿',
      '注意事项：黄山需提前预约，山上住宿紧张'
    ],
    itineraries: [
      { day: 1, title: '宏村西递游', activities: ['上午宏村', '中午品尝徽菜', '下午西递'] },
      { day: 2, title: '黄山登山', activities: ['上午登山黄山', '游览各大景点', '晚上住山上'] },
      { day: 3, title: '日出下山', activities: ['早起看日出', '下山游览翡翠谷', '晚上屯溪老街'] }
    ]
  },
  '张家界': {
    attractions: [
      { name: '张家界国家森林公园', type: '自然景观', rating: 4.9, description: '世界自然遗产，石英砂岩峰林地貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangjiajie%20National%20Park%20sandstone%20pillars%20landscape&image_size=square' },
      { name: '天门山', type: '自然景观', rating: 4.8, description: '世界最高天然穿山溶洞', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tianmen%20Mountain%20natural%20arch%20in%20Zhangjiajie&image_size=square' },
      { name: '黄龙洞', type: '自然景观', rating: 4.6, description: '地下龙宫，溶洞奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huanglong%20Cave%20underground%20cave%20with%20stalactites&image_size=square' },
      { name: '宝峰湖', type: '自然景观', rating: 4.5, description: '高峡平湖，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baofeng%20Lake%20beautiful%20lake%20in%20Zhangjiajie&image_size=square' }
    ],
    festivals: [
      { name: '国际森林保护节', time: '9月', description: '展示张家界自然风光' },
      { name: '民俗文化节', time: '5月', description: '土家族苗族民俗展示' },
      { name: '冰雪节', time: '12月', description: '冬季冰雪旅游' }
    ],
    travelTips: [
      '建议游玩天数：3-5天',
      '必尝美食：三下锅、岩耳炖鸡、葛根粉',
      '交通指南：张家界有机场和高铁站',
      '住宿推荐：张家界市区或景区附近',
      '注意事项：森林公园需游玩2-3天'
    ],
    itineraries: [
      { day: 1, title: '森林公园游', activities: ['上午进入森林公园', '游览金鞭溪', '下午袁家界'] },
      { day: 2, title: '天门山之旅', activities: ['上午天门山', '下午玻璃栈道', '晚上观看魅力湘西'] },
      { day: 3, title: '溶洞湖泊游', activities: ['上午黄龙洞', '下午宝峰湖', '返程'] }
    ]
  },
  '桂林': {
    attractions: [
      { name: '漓江', type: '自然景观', rating: 4.9, description: '山水甲天下，百里画廊', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Li%20River%20Guilin%20karst%20mountains%20and%20river&image_size=square' },
      { name: '阳朔西街', type: '特色体验', rating: 4.7, description: '洋人街，中西文化交融', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yangshuo%20West%20Street%20colorful%20tourist%20street&image_size=square' },
      { name: '象山公园', type: '自然景观', rating: 4.6, description: '桂林城徽，象鼻山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Elephant%20Trunk%20Hill%20Guilin%20city%20symbol&image_size=square' },
      { name: '遇龙河', type: '自然景观', rating: 4.8, description: '小漓江，竹筏漂流', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yulong%20River%20bamboo%20rafting%20in%20Yangshuo&image_size=square' }
    ],
    festivals: [
      { name: '山水文化旅游节', time: '10月', description: '展示桂林山水文化' },
      { name: '渔火节', time: '12月', description: '阳朔渔火表演' },
      { name: '油菜花节', time: '3月', description: '遇龙河油菜花' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：桂林米粉、啤酒鱼、荔浦芋头等',
      '交通指南：桂林有机场和高铁站',
      '住宿推荐：桂林市区或阳朔',
      '注意事项：漓江游船需提前预约'
    ],
    itineraries: [
      { day: 1, title: '桂林市区游', activities: ['上午象山公园', '中午品尝米粉', '下午两江四湖'] },
      { day: 2, title: '漓江漂流', activities: ['上午漓江竹筏', '下午阳朔西街', '晚上阳朔夜景'] },
      { day: 3, title: '遇龙河之旅', activities: ['上午遇龙河漂流', '下午十里画廊', '返程'] }
    ]
  },
  '丽江': {
    attractions: [
      { name: '丽江古城', type: '人文景观', rating: 4.9, description: '世界文化遗产，小桥流水人家', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lijiang%20Old%20Town%20traditional%20Chinese%20town%20with%20canals&image_size=square' },
      { name: '玉龙雪山', type: '自然景观', rating: 4.8, description: '北半球最南的雪山，冰川奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jade%20Dragon%20Snow%20Mountain%20glacier%20in%20Yunnan&image_size=square' },
      { name: '束河古镇', type: '人文景观', rating: 4.6, description: '比丽江古城更宁静的古镇', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shuhe%20ancient%20town%20peaceful%20village%20near%20Lijiang&image_size=square' },
      { name: '蓝月谷', type: '自然景观', rating: 4.7, description: '蓝色月亮般的山谷湖泊', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Blue%20Moon%20Valley%20blue%20lakes%20in%20Yunnan&image_size=square' }
    ],
    festivals: [
      { name: '三朵节', time: '二月初八', description: '纳西族传统节日，祭祀三朵神' },
      { name: '火把节', time: '六月二十四', description: '彝族盛大节日，火把狂欢' },
      { name: '东巴文化节', time: '10月', description: '展示东巴文化和纳西风情' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：腊排骨、土鸡米线、粑粑',
      '交通指南：丽江有机场',
      '住宿推荐：丽江古城内或束河古镇',
      '注意事项：玉龙雪山海拔高，注意高原反应'
    ],
    itineraries: [
      { day: 1, title: '古城漫步', activities: ['上午丽江古城', '中午品尝腊排骨', '下午木府'] },
      { day: 2, title: '玉龙雪山', activities: ['上午玉龙雪山', '下午蓝月谷', '晚上古城夜景'] },
      { day: 3, title: '束河古镇', activities: ['上午束河古镇', '下午白沙古镇', '返程'] }
    ]
  },
  '大理': {
    attractions: [
      { name: '洱海', type: '自然景观', rating: 4.8, description: '高原明珠，环湖风光秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Erhai%20Lake%20beautiful%20lake%20in%20Dali%20Yunnan&image_size=square' },
      { name: '大理古城', type: '人文景观', rating: 4.7, description: '千年古城，文献名邦', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dali%20Old%20Town%20ancient%20city%20walls&image_size=square' },
      { name: '苍山', type: '自然景观', rating: 4.6, description: '积雪苍山，十八溪', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cangshan%20Mountains%20snow%20peaks%20near%20Dali&image_size=square' },
      { name: '喜洲古镇', type: '人文景观', rating: 4.5, description: '白族民居，扎染之乡', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xizhou%20ancient%20town%20Bai%20ethnic%20architecture&image_size=square' }
    ],
    festivals: [
      { name: '三月街', time: '农历三月十五', description: '白族盛大节日，物资交流盛会' },
      { name: '绕三灵', time: '农历四月二十三日', description: '白族传统节日，歌舞狂欢' },
      { name: '火把节', time: '六月二十四', description: '白族火把节，庆祝丰收' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：白族三道茶、酸辣鱼、饵块',
      '交通指南：大理有机场和高铁站',
      '住宿推荐：洱海畔或大理古城',
      '注意事项：洱海骑行是必体验项目'
    ],
    itineraries: [
      { day: 1, title: '古城之旅', activities: ['上午大理古城', '中午品尝三道茶', '下午崇圣寺三塔'] },
      { day: 2, title: '洱海环湖', activities: ['上午环海西路', '下午喜洲古镇', '晚上双廊古镇'] },
      { day: 3, title: '苍山之旅', activities: ['上午苍山索道', '下午苍山徒步', '返程'] }
    ]
  },
  '香格里拉': {
    attractions: [
      { name: '普达措国家公园', type: '自然景观', rating: 4.8, description: '高原森林湖泊，自然风光绝美', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pudacuo%20National%20Park%20plateau%20lakes%20and%20forest&image_size=square' },
      { name: '独克宗古城', type: '人文景观', rating: 4.6, description: '月光之城，藏式古城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dukezong%20Old%20Town%20Tibetan%20ancient%20city&image_size=square' },
      { name: '松赞林寺', type: '人文景观', rating: 4.7, description: '小布达拉宫，藏传佛教寺院', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Songzanlin%20Monastery%20Tibetan%20Buddhist%20monastery&image_size=square' },
      { name: '纳帕海', type: '自然景观', rating: 4.5, description: '高原湖泊，季节性湿地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Napa%20Lake%20plateau%20wetland%20in%20Shangri%20La&image_size=square' }
    ],
    festivals: [
      { name: '赛马节', time: '农历五月初五', description: '藏族传统赛马盛会' },
      { name: '藏历新年', time: '藏历正月', description: '藏族最盛大的节日' },
      { name: '格桑花节', time: '7月', description: '格桑花海盛开季节' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：牦牛肉火锅、酥油茶、青稞饼',
      '交通指南：香格里拉有机场，可从丽江乘车前往',
      '住宿推荐：独克宗古城内',
      '注意事项：海拔较高，注意高原反应'
    ],
    itineraries: [
      { day: 1, title: '普达措之旅', activities: ['上午普达措国家公园', '中午品尝牦牛肉', '下午纳帕海'] },
      { day: 2, title: '古城寺院游', activities: ['上午松赞林寺', '下午独克宗古城', '晚上藏式歌舞'] }
    ]
  },
  '芒市': {
    attractions: [
      { name: '勐焕大金塔', type: '人文景观', rating: 4.8, description: '亚洲第一空心佛塔，金光闪闪的塔身与蓝天白云相映成趣', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Meng%20Huan%20Golden%20Pagoda%20in%20Mangshi%20Yunnan%20with%20golden%20pagoda%20under%20blue%20sky&image_size=square' },
      { name: '银塔', type: '人文景观', rating: 4.7, description: '纯白色的佛塔，与金塔相映，适合拍照打卡', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Silver%20Pagoda%20white%20Buddhist%20temple%20in%20Mangshi%20Yunnan&image_size=square' },
      { name: '树包塔', type: '自然奇观', rating: 4.5, description: '百年榕树包裹着古塔，形成独特的自然人文景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20pagoda%20encased%20by%20banyan%20tree%20natural%20wonder%20in%20Yunnan&image_size=square' },
      { name: '孔雀谷', type: '自然景观', rating: 4.6, description: '孔雀之乡，可以近距离观赏孔雀开屏', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peacock%20valley%20with%20beautiful%20peacocks%20in%20Yunnan&image_size=square' }
    ],
    festivals: [
      { name: '泼水节', time: '4月13-15日', description: '傣族最盛大的节日，全城狂欢泼水祝福' },
      { name: '目瑙纵歌节', time: '正月十五', description: '景颇族传统节日，万人共舞的壮观场面' },
      { name: '傣族新年', time: '4月', description: '傣历新年，有放孔明灯、赛龙舟等活动' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：泡鲁达、撒撇、酸笋鸡',
      '交通指南：芒市有机场，可直飞昆明、成都等城市',
      '住宿推荐：芒市城区酒店性价比高，推荐金塔附近',
      '注意事项：尊重少数民族习俗，泼水节期间准备好防水装备'
    ],
    itineraries: [
      { day: 1, title: '金塔银塔一日游', activities: ['上午参观勐焕大金塔', '中午品尝当地美食', '下午游览银塔', '晚上逛芒市夜市'] },
      { day: 2, title: '边境风情游', activities: ['上午游览树包塔', '下午前往孔雀谷', '傍晚体验傣族泼水活动'] }
    ]
  },
  '天水': {
    attractions: [
      { name: '麦积山石窟', type: '人文景观', rating: 4.9, description: '中国四大石窟之一，悬崖上的千年艺术瑰宝', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Maiji%20Shan%20Grottoes%20ancient%20Buddhist%20caves%20on%20cliff%20in%20Gansu&image_size=square' },
      { name: '伏羲庙', type: '人文景观', rating: 4.6, description: '纪念伏羲的庙宇，中国最早的祭祀伏羲的场所', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fuxi%20Temple%20traditional%20Chinese%20ancient%20temple%20in%20Tianshui&image_size=square' },
      { name: '仙人崖', type: '自然景观', rating: 4.5, description: '山水相依的自然奇观，道教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xianren%20Cliff%20scenic%20mountain%20landscape%20in%20Tianshui%20Gansu&image_size=square' },
      { name: '南郭寺', type: '人文景观', rating: 4.4, description: '千年古刹，杜甫曾在此居住', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nanguo%20Temple%20ancient%20Buddhist%20temple%20with%20ancient%20trees&image_size=square' }
    ],
    festivals: [
      { name: '伏羲文化旅游节', time: '6月', description: '纪念人文始祖伏羲的盛大活动，有祭祀大典和文艺表演' },
      { name: '天水灯会', time: '正月十五', description: '传统灯会，各种造型的花灯精彩纷呈' },
      { name: '苹果花节', time: '4月', description: '春天万亩苹果花盛开，美不胜收' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：天水呱呱、天水浆水面、天水火锅',
      '交通指南：天水有机场和高铁站，交通便利',
      '住宿推荐：麦积区或秦州区，方便出行',
      '注意事项：石窟参观需提前预约，夏季避暑胜地'
    ],
    itineraries: [
      { day: 1, title: '石窟艺术之旅', activities: ['上午参观麦积山石窟', '中午品尝天水特色小吃', '下午游览仙人崖'] },
      { day: 2, title: '伏羲文化之旅', activities: ['上午参观伏羲庙', '下午游览南郭寺', '晚上观看天水夜景'] }
    ]
  },
  '徐州': {
    attractions: [
      { name: '云龙湖', type: '自然景观', rating: 4.7, description: '国家5A级景区，湖光山色美不胜收', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yunlong%20Lake%20scenic%20area%20with%20beautiful%20lake%20and%20mountains&image_size=square' },
      { name: '汉文化景区', type: '人文景观', rating: 4.6, description: '汇集汉代三绝：汉墓、汉俑、汉画像石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Han%20Dynasty%20cultural%20site%20ancient%20Chinese%20museum&image_size=square' },
      { name: '龟山汉墓', type: '人文景观', rating: 4.5, description: '西汉楚王墓，千年地下宫殿', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guishan%20Han%20Tomb%20ancient%20underground%20palace%20in%20Xuzhou&image_size=square' },
      { name: '户部山古民居', type: '人文景观', rating: 4.4, description: '明清古建筑群，感受老徐州韵味', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20residential%20buildings%20Ming%20Qing%20dynasty%20in%20Xuzhou&image_size=square' }
    ],
    festivals: [
      { name: '汉文化旅游节', time: '10月', description: '弘扬汉文化，有汉服表演、汉式婚礼等活动' },
      { name: '云龙山庙会', time: '农历二月十九', description: '传统庙会，热闹非凡' },
      { name: '伏羊节', time: '7月', description: '徐州特色美食节，吃羊肉喝羊汤' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：地锅鸡、羊肉汤、煎饼果子',
      '交通指南：徐州是交通枢纽，高铁四通八达',
      '住宿推荐：云龙湖附近或市中心',
      '注意事项：伏羊节期间游客较多，提前预订'
    ],
    itineraries: [
      { day: 1, title: '汉文化深度游', activities: ['上午参观汉文化景区', '中午品尝地锅鸡', '下午游览龟山汉墓'] },
      { day: 2, title: '山水休闲游', activities: ['上午云龙湖漫步', '下午游览户部山古民居', '晚上逛徐州夜市'] }
    ]
  },
  '榕江': {
    attractions: [
      { name: '三宝侗寨', type: '人文景观', rating: 4.8, description: '侗族风情浓郁，世界最大的侗族鼓楼', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sanbao%20Dong%20Village%20traditional%20Dong%20ethnic%20village%20with%20drum%20tower&image_size=square' },
      { name: '村超足球场', type: '特色体验', rating: 4.7, description: '因"村超"火遍全网的乡村足球场', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=village%20football%20field%20in%20Rongjiang%20Guizhou%20with%20spectators&image_size=square' },
      { name: '大利侗寨', type: '人文景观', rating: 4.6, description: '保存完好的侗族古村落', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dali%20Dong%20Village%20ancient%20traditional%20village%20in%20Guizhou&image_size=square' },
      { name: '月亮山', type: '自然景观', rating: 4.5, description: '原始森林，自然风光壮丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Moon%20Mountain%20primitive%20forest%20landscape%20in%20Guizhou&image_size=square' }
    ],
    festivals: [
      { name: '侗族大歌节', time: '10月', description: '侗族传统节日，万人合唱侗族大歌' },
      { name: '村超联赛', time: '周末', description: '乡村足球联赛，场场爆满' },
      { name: '侗族萨玛节', time: '正月', description: '侗族最隆重的祭祀节日' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：牛瘪火锅、酸汤鱼、糯米饭',
      '交通指南：榕江有高铁站，可直达贵阳',
      '住宿推荐：侗寨民宿体验侗族生活',
      '注意事项：村超比赛周末举行，提前到达占位置'
    ],
    itineraries: [
      { day: 1, title: '村超体验之旅', activities: ['上午游览三宝侗寨', '中午品尝侗族美食', '下午观看村超比赛'] },
      { day: 2, title: '侗族文化游', activities: ['上午参观大利侗寨', '下午体验侗族大歌', '晚上参加侗族篝火晚会'] }
    ]
  },
  '本溪': {
    attractions: [
      { name: '本溪水洞', type: '自然景观', rating: 4.8, description: '世界最长的地下暗河溶洞，晶莹剔透', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Benxi%20Water%20Cave%20underground%20river%20cave%20with%20stalactites&image_size=square' },
      { name: '关门山', type: '自然景观', rating: 4.7, description: '秋季红叶满山，中国枫叶之都核心景区', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guanmen%20Mountain%20autumn%20red%20maple%20leaves%20in%20Benxi&image_size=square' },
      { name: '五女山', type: '人文景观', rating: 4.5, description: '高句丽王城遗址，世界文化遗产', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wunu%20Mountain%20ancient%20Koguryo%20kingdom%20ruins%20in%20Liaoning&image_size=square' },
      { name: '大石湖', type: '自然景观', rating: 4.4, description: '五湖四瀑，景色秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dashihu%20Lake%20waterfalls%20scenic%20area%20in%20Liaoning&image_size=square' }
    ],
    festivals: [
      { name: '枫叶节', time: '10月', description: '秋季枫叶节，红叶满山美不胜收' },
      { name: '满族风情节', time: '8月', description: '展示满族传统文化和民俗' },
      { name: '冰雪节', time: '12月', description: '冬季冰雪旅游盛会' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：满族八大碗、烤冷面、羊汤',
      '交通指南：本溪有高铁站，距沈阳1小时车程',
      '住宿推荐：本溪市或景区附近民宿',
      '注意事项：秋季赏枫需提前预订，人多拥挤'
    ],
    itineraries: [
      { day: 1, title: '水洞奇观之旅', activities: ['上午游览本溪水洞', '中午品尝满族美食', '下午参观五女山'] },
      { day: 2, title: '红叶赏景之旅', activities: ['上午关门山赏枫', '下午游览大石湖', '晚上体验满族风情'] }
    ]
  },
  '丽水': {
    attractions: [
      { name: '仙都', type: '自然景观', rating: 4.8, description: '国家5A级景区，风光如诗如画', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiandu%20scenic%20area%20beautiful%20mountains%20and%20rivers%20in%20Zhejiang&image_size=square' },
      { name: '古堰画乡', type: '人文景观', rating: 4.7, description: '千年古堰，江南水乡韵味', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guyan%20Huaxiang%20ancient%20canal%20and%20painting%20village%20in%20Lishui&image_size=square' },
      { name: '云和梯田', type: '自然景观', rating: 4.6, description: '中国最美梯田之一，四季景色各异', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yunhe%20Terraced%20Fields%20beautiful%20rice%20terraces%20in%20Zhejiang&image_size=square' },
      { name: '遂昌金矿', type: '特色体验', rating: 4.5, description: '中国唯一活着的金矿，可以下井体验', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Suichang%20Gold%20Mine%20underground%20mining%20experience%20in%20Zhejiang&image_size=square' }
    ],
    festivals: [
      { name: '中国摄影艺术节', time: '11月', description: '摄影爱好者的盛会，展示丽水美景' },
      { name: '开犁节', time: '6月', description: '云和梯田传统节日，祈祷丰收' },
      { name: '畲族三月三', time: '农历三月三', description: '畲族传统节日，山歌对唱' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：缙云烧饼、丽水山粉饺、遂昌烤薯',
      '交通指南：丽水有机场，高铁可直达',
      '住宿推荐：景区附近民宿或丽水市区',
      '注意事项：摄影最佳季节为春秋两季'
    ],
    itineraries: [
      { day: 1, title: '仙都风光游', activities: ['上午游览仙都景区', '中午品尝缙云烧饼', '下午拍摄鼎湖峰'] },
      { day: 2, title: '古堰画乡游', activities: ['上午古堰画乡漫步', '下午体验瓯江帆船', '晚上入住画乡民宿'] },
      { day: 3, title: '梯田摄影之旅', activities: ['早起拍摄云和梯田日出', '上午游览梯田景区', '下午前往遂昌金矿'] }
    ]
  },
  '衢州': {
    attractions: [
      { name: '江郎山', type: '自然景观', rating: 4.7, description: '世界自然遗产，三爿石奇特壮观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jianglang%20Mountain%20three%20stone%20peaks%20world%20heritage%20in%20Zhejiang&image_size=square' },
      { name: '衢州古城', type: '人文景观', rating: 4.6, description: '千年古城，南孔圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Quzhou%20ancient%20city%20traditional%20Chinese%20city%20wall&image_size=square' },
      { name: '龙游石窟', type: '人文景观', rating: 4.5, description: '千古之谜，巨大的地下石窟群', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Longyou%20Caves%20ancient%20underground%20cave%20complex%20mystery&image_size=square' },
      { name: '廿八都', type: '人文景观', rating: 4.4, description: '古镇风貌，三省交界的文化重镇', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nianbadu%20ancient%20town%20in%20Quzhou%20Zhejiang&image_size=square' }
    ],
    festivals: [
      { name: '南孔文化节', time: '9月', description: '纪念孔子，弘扬儒家文化' },
      { name: '开化油菜花节', time: '3月', description: '万亩油菜花盛开，金色花海' },
      { name: '衢州美食节', time: '10月', description: '品尝衢州特色美食' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：衢州鸭头、兔头、烤饼、三头一掌',
      '交通指南：衢州有高铁站，交通便利',
      '住宿推荐：衢州古城内或江郎山附近',
      '注意事项：衢州美食偏辣，不喜辣提前告知'
    ],
    itineraries: [
      { day: 1, title: '古城文化游', activities: ['上午游览衢州古城', '中午品尝三头一掌', '下午参观南孔庙'] },
      { day: 2, title: '江郎山之旅', activities: ['上午攀登江郎山', '下午游览廿八都古镇'] }
    ]
  },
  '潮州': {
    attractions: [
      { name: '广济桥', type: '人文景观', rating: 4.8, description: '中国四大古桥之一，独特的浮桥结构', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guangji%20Bridge%20ancient%20Chinese%20bridge%20in%20Chaozhou&image_size=square' },
      { name: '潮州古城', type: '人文景观', rating: 4.7, description: '千年古城，保留完整的骑楼街', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chaozhou%20ancient%20city%20traditional%20teochew%20architecture&image_size=square' },
      { name: '开元寺', type: '人文景观', rating: 4.6, description: '唐代古刹，潮汕地区重要的佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kaiyuan%20Temple%20Tang%20Dynasty%20Buddhist%20temple%20in%20Chaozhou&image_size=square' },
      { name: '韩文公祠', type: '人文景观', rating: 4.5, description: '纪念韩愈的祠堂，依山傍水', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Han%20Wengong%20Shrine%20traditional%20Chinese%20memorial%20temple&image_size=square' }
    ],
    festivals: [
      { name: '潮州大锣鼓', time: '春节', description: '传统民俗表演，锣鼓喧天热闹非凡' },
      { name: '英歌舞', time: '春节', description: '潮汕传统舞蹈，气势磅礴' },
      { name: '青龙庙会', time: '正月', description: '大型民俗活动，祈求平安' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：潮州牛肉火锅、肠粉、蚝烙、腐乳鸡翅',
      '交通指南：潮州有高铁站，距汕头30分钟车程',
      '住宿推荐：古城内民宿体验潮汕生活',
      '注意事项：美食众多，建议少食多餐'
    ],
    itineraries: [
      { day: 1, title: '古城美食游', activities: ['上午游览广济桥', '中午品尝潮州美食', '下午逛古城骑楼街'] },
      { day: 2, title: '文化之旅', activities: ['上午参观开元寺', '下午游览韩文公祠', '晚上看潮州夜景'] }
    ]
  },
  '喀什': {
    attractions: [
      { name: '喀什古城', type: '人文景观', rating: 4.9, description: '千年古城，民族风情浓郁', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kashgar%20Old%20City%20traditional%20Uyghur%20architecture%20in%20Xinjiang&image_size=square' },
      { name: '艾提尕尔清真寺', type: '人文景观', rating: 4.7, description: '新疆最大的清真寺，建筑宏伟', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Id%20Kah%20Mosque%20grand%20Islamic%20architecture%20in%20Kashgar&image_size=square' },
      { name: '香妃园', type: '人文景观', rating: 4.5, description: '纪念香妃的园林，景色优美', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiangfei%20Garden%20beautiful%20traditional%20garden%20in%20Kashgar&image_size=square' },
      { name: '大巴扎', type: '特色体验', rating: 4.6, description: '中亚最大的巴扎，购物天堂', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kashgar%20Grand%20Bazaar%20colorful%20market%20in%20Xinjiang&image_size=square' }
    ],
    festivals: [
      { name: '古尔邦节', time: '伊斯兰历12月10日', description: '维吾尔族最重要的节日，宰牲庆祝' },
      { name: '肉孜节', time: '伊斯兰历10月1日', description: '开斋节，庆祝斋戒结束' },
      { name: '喀什噶尔国际旅游文化节', time: '6月', description: '展示喀什文化和旅游资源' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：烤包子、手抓饭、烤羊肉串、馕坑肉',
      '交通指南：喀什有机场，可直飞乌鲁木齐',
      '住宿推荐：古城内民宿体验民族风情',
      '注意事项：尊重少数民族习俗，清真寺参观需注意着装'
    ],
    itineraries: [
      { day: 1, title: '古城风情游', activities: ['上午游览喀什古城', '中午品尝维吾尔美食', '下午参观艾提尕尔清真寺'] },
      { day: 2, title: '巴扎购物游', activities: ['上午逛大巴扎', '下午游览香妃园', '晚上观看民族歌舞'] }
    ]
  },
  '伊犁': {
    attractions: [
      { name: '那拉提草原', type: '自然景观', rating: 4.9, description: '空中草原，夏季花海美不胜收', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nalati%20Grassland%20beautiful%20alpine%20meadow%20with%20flowers%20in%20Xinjiang&image_size=square' },
      { name: '赛里木湖', type: '自然景观', rating: 4.8, description: '大西洋最后一滴眼泪，湖水湛蓝', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sayram%20Lake%20crystal%20clear%20blue%20lake%20in%20Xinjiang&image_size=square' },
      { name: '薰衣草庄园', type: '自然景观', rating: 4.7, description: '中国薰衣草之乡，紫色花海', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lavender%20field%20purple%20flowers%20in%20Ili%20Xinjiang&image_size=square' },
      { name: '喀拉峻草原', type: '自然景观', rating: 4.6, description: '世界自然遗产，立体草原奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kalajun%20Grassland%20world%20heritage%20grassland%20in%20Xinjiang&image_size=square' }
    ],
    festivals: [
      { name: '薰衣草节', time: '6月', description: '薰衣草盛开季节，浪漫花海节' },
      { name: '天马节', time: '7月', description: '昭苏草原赛马大会，万马奔腾' },
      { name: '哈萨克族阿肯弹唱会', time: '夏季', description: '哈萨克族传统民歌演唱盛会' }
    ],
    travelTips: [
      '建议游玩天数：3-5天',
      '必尝美食：马肉纳仁、哈萨克族奶茶、手抓肉',
      '交通指南：伊犁有机场，建议自驾或包车',
      '住宿推荐：草原毡房体验或伊宁市区酒店',
      '注意事项：夏季是最佳旅游季节，草原温差大'
    ],
    itineraries: [
      { day: 1, title: '赛里木湖之旅', activities: ['上午前往赛里木湖', '环湖游览拍照', '晚上入住湖边酒店'] },
      { day: 2, title: '薰衣草之旅', activities: ['上午参观薰衣草庄园', '下午前往伊宁', '晚上品尝伊犁美食'] },
      { day: 3, title: '草原之旅', activities: ['上午那拉提草原', '下午骑马体验', '晚上入住草原毡房'] }
    ]
  },
  '普洱': {
    attractions: [
      { name: '普洱茶马古城', type: '人文景观', rating: 4.6, description: '茶马古道起点，感受茶文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pu%20er%20Tea%20Horse%20Ancient%20City%20traditional%20Chinese%20tea%20culture&image_size=square' },
      { name: '太阳河森林公园', type: '自然景观', rating: 4.7, description: '原始森林，动植物资源丰富', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sun%20River%20Forest%20Park%20tropical%20rainforest%20in%20Yunnan&image_size=square' },
      { name: '景迈山古茶园', type: '特色体验', rating: 4.8, description: '千年古茶园，世界文化遗产', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingmai%20Mountain%20ancient%20tea%20garden%20world%20heritage&image_size=square' },
      { name: '糯干古寨', type: '人文景观', rating: 4.5, description: '布朗族古村落，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nuogan%20Ancient%20Village%20traditional%20ethnic%20village%20in%20Yunnan&image_size=square' }
    ],
    festivals: [
      { name: '普洱茶节', time: '4月', description: '茶叶交易会，品茗论茶' },
      { name: '泼水节', time: '4月', description: '傣族传统节日，泼水祈福' },
      { name: '景迈山茶文化节', time: '11月', description: '展示古茶文化和民族风情' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：普洱茶宴、酸笋鸡、烤茶',
      '交通指南：普洱有机场，建议自驾',
      '住宿推荐：景迈山民宿体验茶园生活',
      '注意事项：普洱茶文化体验需提前预约'
    ],
    itineraries: [
      { day: 1, title: '茶文化之旅', activities: ['上午参观茶马古城', '中午品尝普洱茶宴', '下午体验制茶工艺'] },
      { day: 2, title: '森林之旅', activities: ['上午太阳河森林公园', '下午参观野象谷', '晚上入住森林酒店'] },
      { day: 3, title: '古茶园之旅', activities: ['上午景迈山古茶园', '下午糯干古寨', '晚上体验篝火晚会'] }
    ]
  },
  '铜仁': {
    attractions: [
      { name: '梵净山', type: '自然景观', rating: 4.9, description: '世界自然遗产，佛教名山，红云金顶壮观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fanjingshan%20Mountain%20world%20heritage%20Buddhist%20mountain%20in%20Guizhou&image_size=square' },
      { name: '苗王城', type: '人文景观', rating: 4.5, description: '苗族古城堡，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Miao%20King%20City%20ancient%20Miao%20castle%20in%20Guizhou&image_size=square' },
      { name: '锦江画廊', type: '自然景观', rating: 4.4, description: '美丽的江景，两岸风光秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinjiang%20River%20scenic%20gallery%20in%20Tongren%20Guizhou&image_size=square' },
      { name: '寨沙侗寨', type: '人文景观', rating: 4.5, description: '侗族风情，田园风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhaisha%20Dong%20Village%20traditional%20Dong%20village%20in%20Guizhou&image_size=square' }
    ],
    festivals: [
      { name: '梵净山文化旅游节', time: '9月', description: '展示梵净山文化和旅游资源' },
      { name: '苗族四月八', time: '农历四月初八', description: '苗族传统节日，纪念祖先' },
      { name: '侗族大歌节', time: '10月', description: '侗族传统歌唱节日' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：江口米豆腐、社饭、酸汤鱼',
      '交通指南：铜仁有机场和高铁站',
      '住宿推荐：梵净山脚下民宿或铜仁市区',
      '注意事项：梵净山需提前预约门票'
    ],
    itineraries: [
      { day: 1, title: '梵净山之旅', activities: ['上午登山梵净山', '中午山上简餐', '下午游览红云金顶'] },
      { day: 2, title: '民族文化游', activities: ['上午参观苗王城', '下午游览寨沙侗寨', '晚上体验侗族合拢宴'] }
    ]
  },
  '湘西': {
    attractions: [
      { name: '凤凰古城', type: '人文景观', rating: 4.8, description: '沈从文笔下的边城，沱江泛舟美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fenghuang%20Ancient%20City%20beautiful%20town%20on%20Tuojiang%20River&image_size=square' },
      { name: '张家界天门山', type: '自然景观', rating: 4.8, description: '世界最高的天然穿山溶洞', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tianmen%20Mountain%20natural%20arch%20in%20Zhangjiajie%20Hunan&image_size=square' },
      { name: '芙蓉镇', type: '人文景观', rating: 4.6, description: '挂在瀑布上的千年古镇', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Furong%20Town%20ancient%20town%20with%20waterfall%20in%20Hunan&image_size=square' },
      { name: '德夯苗寨', type: '人文景观', rating: 4.5, description: '苗族风情，峡谷风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dehang%20Miao%20Village%20traditional%20Miao%20village%20in%20Hunan&image_size=square' }
    ],
    festivals: [
      { name: '凤凰古城文化节', time: '10月', description: '展示湘西文化和民俗' },
      { name: '苗族赶秋节', time: '立秋', description: '苗族传统节日，庆祝丰收' },
      { name: '土家族摆手舞节', time: '农历正月', description: '土家族传统舞蹈节日' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：血粑鸭、酸汤鱼、腊肉、米豆腐',
      '交通指南：凤凰古城有高铁站，张家界有机场',
      '住宿推荐：凤凰古城江边民宿体验',
      '注意事项：凤凰古城夜游景色最美'
    ],
    itineraries: [
      { day: 1, title: '凤凰古城游', activities: ['上午漫步古城', '中午品尝湘西美食', '下午沱江泛舟'] },
      { day: 2, title: '古镇之旅', activities: ['上午游览芙蓉镇', '下午参观德夯苗寨', '晚上体验篝火晚会'] },
      { day: 3, title: '张家界之旅', activities: ['上午天门山', '下午玻璃栈道', '晚上观看魅力湘西演出'] }
    ]
  },
  '襄阳': {
    attractions: [
      { name: '古隆中', type: '人文景观', rating: 4.6, description: '诸葛亮隐居地，三国文化发源地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Gulongzhong%20Zhuge%20Liang%20ancient%20residence%20in%20Xiangyang&image_size=square' },
      { name: '襄阳古城', type: '人文景观', rating: 4.7, description: '千年古城墙，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiangyang%20ancient%20city%20wall%20traditional%20Chinese%20fortress&image_size=square' },
      { name: '唐城影视基地', type: '特色体验', rating: 4.5, description: '仿唐建筑，多部影视剧取景地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tang%20City%20film%20studio%20ancient%20Tang%20Dynasty%20architecture&image_size=square' },
      { name: '鹿门山', type: '自然景观', rating: 4.4, description: '孟浩然隐居地，山水风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lumen%20Mountain%20beautiful%20scenic%20spot%20in%20Hubei&image_size=square' }
    ],
    festivals: [
      { name: '诸葛亮文化旅游节', time: '9月', description: '纪念诸葛亮，弘扬三国文化' },
      { name: '汉城文化节', time: '10月', description: '展示汉代文化和民俗' },
      { name: '牛肉面节', time: '3月', description: '襄阳特色美食节' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：襄阳牛肉面、大头菜、锅巴饭',
      '交通指南：襄阳有机场和高铁站',
      '住宿推荐：古城附近或市区酒店',
      '注意事项：唐城夜景非常漂亮'
    ],
    itineraries: [
      { day: 1, title: '三国文化之旅', activities: ['上午游览古隆中', '中午品尝牛肉面', '下午参观襄阳古城'] },
      { day: 2, title: '影视文化之旅', activities: ['上午唐城影视基地', '下午鹿门山', '晚上唐城夜游'] }
    ]
  },
  '泉州': {
    attractions: [
      { name: '开元寺', type: '人文景观', rating: 4.7, description: '千年古刹，东西双塔是泉州地标', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kaiyuan%20Temple%20ancient%20Buddhist%20temple%20with%20twin%20pagodas&image_size=square' },
      { name: '西街', type: '人文景观', rating: 4.6, description: '千年古街，保留完整的闽南风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=West%20Street%20traditional%20Minnan%20street%20in%20Quanzhou&image_size=square' },
      { name: '清净寺', type: '人文景观', rating: 4.5, description: '中国现存最古老的伊斯兰教清真寺', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qingjing%20Mosque%20ancient%20Islamic%20mosque%20in%20China&image_size=square' },
      { name: '洛阳桥', type: '人文景观', rating: 4.6, description: '中国四大古桥之一，跨海石桥', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Luoyang%20Bridge%20ancient%20sea%20bridge%20in%20Quanzhou&image_size=square' }
    ],
    festivals: [
      { name: '海上丝绸之路文化节', time: '11月', description: '展示海丝文化和多元宗教' },
      { name: '蟳埔女文化节', time: '3月', description: '展示蟳埔女独特的头饰文化' },
      { name: '南音大会唱', time: '春节', description: '闽南传统音乐盛会' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：面线糊、肉粽、土笋冻、姜母鸭',
      '交通指南：泉州有机场和高铁站',
      '住宿推荐：西街附近或晋江市区',
      '注意事项：西街美食众多，建议晚上游览'
    ],
    itineraries: [
      { day: 1, title: '海丝文化之旅', activities: ['上午参观开元寺', '中午品尝闽南美食', '下午游览西街'] },
      { day: 2, title: '宗教文化之旅', activities: ['上午清净寺', '下午洛阳桥', '晚上体验闽南茶文化'] }
    ]
  },
  '延边': {
    attractions: [
      { name: '长白山', type: '自然景观', rating: 4.9, description: '东北第一高峰，天池壮丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Changbai%20Mountain%20beautiful%20volcanic%20lake%20in%20Jilin&image_size=square' },
      { name: '延边博物馆', type: '人文景观', rating: 4.5, description: '展示朝鲜族历史和文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yanbian%20Museum%20Korean%20ethnic%20culture%20exhibition&image_size=square' },
      { name: '防川景区', type: '特色体验', rating: 4.6, description: '一眼望三国，中俄朝边境', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fangchuan%20Scenic%20Area%20China%20Russia%20North%20Korea%20border&image_size=square' },
      { name: '朝鲜族民俗园', type: '人文景观', rating: 4.5, description: '体验朝鲜族传统生活', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Korean%20Ethnic%20Village%20traditional%20Korean%20culture%20in%20Jilin&image_size=square' }
    ],
    festivals: [
      { name: '朝鲜族民俗文化旅游节', time: '8月', description: '展示朝鲜族文化和民俗' },
      { name: '长白山冰雪节', time: '12月', description: '冬季冰雪旅游盛会' },
      { name: '延边苹果梨节', time: '9月', description: '特色水果节' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：冷面、烤肉、石锅拌饭、辣白菜',
      '交通指南：延边有机场，长白山有机场',
      '住宿推荐：延吉市区或长白山脚下',
      '注意事项：冬季长白山寒冷，注意保暖'
    ],
    itineraries: [
      { day: 1, title: '长白山之旅', activities: ['上午登山长白山', '中午品尝朝鲜族美食', '下午游览天池'] },
      { day: 2, title: '边境文化之旅', activities: ['上午防川景区', '下午朝鲜族民俗园', '晚上观看朝鲜族歌舞'] }
    ]
  },
  '肇庆': {
    attractions: [
      { name: '七星岩', type: '自然景观', rating: 4.7, description: '喀斯特地貌，湖光山色美不胜收', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Seven%20Star%20Crags%20karst%20landscape%20with%20lake%20in%20Zhaoqing&image_size=square' },
      { name: '鼎湖山', type: '自然景观', rating: 4.6, description: '岭南四大名山之一，负离子含量高', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dinghu%20Mountain%20beautiful%20forest%20in%20Guangdong&image_size=square' },
      { name: '端州古城墙', type: '人文景观', rating: 4.5, description: '宋代古城墙，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Duanzhou%20ancient%20city%20wall%20Song%20Dynasty%20in%20Guangdong&image_size=square' },
      { name: '梅庵', type: '人文景观', rating: 4.4, description: '千年古刹，六祖慧能曾在此插梅', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mei%20An%20ancient%20Buddhist%20temple%20in%20Zhaoqing&image_size=square' }
    ],
    festivals: [
      { name: '肇庆国际旅游文化节', time: '11月', description: '展示肇庆旅游资源' },
      { name: '裹蒸粽节', time: '端午节', description: '肇庆特色美食节' },
      { name: '星湖荷花节', time: '6月', description: '星湖荷花盛开，美不胜收' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：肇庆裹蒸粽、鼎湖上素、西江河鲜',
      '交通指南：肇庆有高铁站，距广州1小时车程',
      '住宿推荐：星湖附近酒店',
      '注意事项：鼎湖山夏季避暑好去处'
    ],
    itineraries: [
      { day: 1, title: '星湖之旅', activities: ['上午游览七星岩', '中午品尝裹蒸粽', '下午泛舟星湖'] },
      { day: 2, title: '鼎湖山之旅', activities: ['上午攀登鼎湖山', '下午参观庆云寺', '晚上体验肇庆夜景'] }
    ]
  },
  '赣州': {
    attractions: [
      { name: '赣州古城墙', type: '人文景观', rating: 4.6, description: '宋城墙保存最完整的城市', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ganzhou%20ancient%20city%20wall%20Song%20Dynasty%20in%20Jiangxi&image_size=square' },
      { name: '郁孤台', type: '人文景观', rating: 4.5, description: '辛弃疾曾在此登高望远', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yugu%20Terrace%20ancient%20Chinese%20terrace%20in%20Ganzhou&image_size=square' },
      { name: '通天岩', type: '人文景观', rating: 4.5, description: '江南第一石窟，唐宋摩崖造像', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tongtian%20Rock%20ancient%20Buddhist%20carvings%20in%20Jiangxi&image_size=square' },
      { name: '瑞金革命旧址', type: '人文景观', rating: 4.6, description: '红色旅游圣地，共和国摇篮', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ruijin%20revolutionary%20sites%20red%20tourism%20in%20Jiangxi&image_size=square' }
    ],
    festivals: [
      { name: '客家文化节', time: '10月', description: '展示客家文化和民俗' },
      { name: '赣州脐橙节', time: '11月', description: '赣南脐橙丰收季节' },
      { name: '龙舟赛', time: '端午节', description: '章江上龙舟竞渡' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：赣南小炒鱼、酿豆腐、芋子包',
      '交通指南：赣州有机场和高铁站',
      '住宿推荐：赣州古城附近或瑞金',
      '注意事项：客家文化体验需深入乡村'
    ],
    itineraries: [
      { day: 1, title: '宋城文化之旅', activities: ['上午游览赣州古城墙', '中午品尝客家美食', '下午参观郁孤台'] },
      { day: 2, title: '红色文化之旅', activities: ['上午瑞金革命旧址', '下午通天岩', '晚上体验客家围屋'] }
    ]
  },
  '威海': {
    attractions: [
      { name: '刘公岛', type: '人文景观', rating: 4.7, description: '甲午战争纪念地，爱国主义教育基地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liugong%20Island%20historical%20island%20in%20Weihai%20Shandong&image_size=square' },
      { name: '威海国际海水浴场', type: '自然景观', rating: 4.6, description: '中国最干净的海水浴场之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Weihai%20international%20beach%20clean%20sea%20and%20sand&image_size=square' },
      { name: '成山头', type: '自然景观', rating: 4.5, description: '中国大陆海岸线最东端', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chengshantou%20easternmost%20point%20of%20Chinese%20mainland%20coast&image_size=square' },
      { name: '环翠楼', type: '人文景观', rating: 4.4, description: '威海地标，登高望远', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huancui%20Tower%20traditional%20Chinese%20tower%20in%20Weihai&image_size=square' }
    ],
    festivals: [
      { name: '威海国际海洋节', time: '7月', description: '海洋文化盛会' },
      { name: '中韩文化交流节', time: '9月', description: '中韩文化交流活动' },
      { name: '樱花节', time: '4月', description: '威海公园樱花盛开' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：海鲜、鲅鱼饺子、海菜包子',
      '交通指南：威海有机场和高铁站',
      '住宿推荐：海滨酒店或市区',
      '注意事项：夏季是最佳旅游季节'
    ],
    itineraries: [
      { day: 1, title: '海岛之旅', activities: ['上午游览刘公岛', '中午品尝海鲜', '下午国际海水浴场'] },
      { day: 2, title: '海岸线之旅', activities: ['上午成山头看日出', '下午环翠楼', '晚上海鲜大排档'] }
    ]
  },
  '丹东': {
    attractions: [
      { name: '鸭绿江断桥', type: '人文景观', rating: 4.6, description: '抗美援朝战争见证，断桥景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yalu%20River%20broken%20bridge%20war%20memorial%20in%20Dandong&image_size=square' },
      { name: '虎山长城', type: '人文景观', rating: 4.5, description: '明长城东起点，长城入海处', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hushan%20Great%20Wall%20eastern%20starting%20point%20of%20Great%20Wall&image_size=square' },
      { name: '凤凰山', type: '自然景观', rating: 4.6, description: '辽东名山，景色秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fenghuang%20Mountain%20beautiful%20scenic%20mountain%20in%20Liaoning&image_size=square' },
      { name: '大鹿岛', type: '自然景观', rating: 4.4, description: '海岛风光，海鲜丰富', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dalu%20Island%20beautiful%20island%20in%20Dandong%20Liaoning&image_size=square' }
    ],
    festivals: [
      { name: '鸭绿江国际旅游节', time: '9月', description: '展示边境旅游资源' },
      { name: '温泉文化节', time: '10月', description: '丹东温泉资源丰富' },
      { name: '杜鹃花节', time: '5月', description: '凤凰山杜鹃花盛开' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：丹东草莓、海鲜、朝鲜冷面',
      '交通指南：丹东有机场和高铁站，距沈阳2小时车程',
      '住宿推荐：鸭绿江边酒店或温泉度假村',
      '注意事项：可办理朝鲜一日游'
    ],
    itineraries: [
      { day: 1, title: '边境之旅', activities: ['上午游览鸭绿江断桥', '中午品尝朝鲜美食', '下午虎山长城'] },
      { day: 2, title: '山水之旅', activities: ['上午凤凰山', '下午大鹿岛', '晚上温泉体验'] }
    ]
  },
  '延安': {
    attractions: [
      { name: '延安革命纪念馆', type: '人文景观', rating: 4.7, description: '展示中国革命历史的重要纪念馆', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yan%27an%20Revolutionary%20Memorial%20Museum%20red%20tourism&image_size=square' },
      { name: '枣园革命旧址', type: '人文景观', rating: 4.6, description: '中共中央曾在此办公', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zaoyuan%20Revolutionary%20Site%20cave%20dwellings%20in%20Yan%27an&image_size=square' },
      { name: '宝塔山', type: '自然景观', rating: 4.5, description: '延安标志性建筑，俯瞰延安城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baota%20Mountain%20pagoda%20in%20Yan%27an%20Shaanxi&image_size=square' },
      { name: '壶口瀑布', type: '自然景观', rating: 4.8, description: '黄河上的壮观瀑布', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hukou%20Waterfall%20Yellow%20River%20spectacular%20waterfall&image_size=square' }
    ],
    festivals: [
      { name: '延安过大年', time: '春节', description: '陕北民俗文化展示' },
      { name: '公祭黄帝陵', time: '清明节', description: '中华民族祭祀黄帝的盛典' },
      { name: '秧歌节', time: '正月', description: '陕北秧歌表演' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：延安小米粥、洋芋擦擦、油糕',
      '交通指南：延安有机场和高铁站',
      '住宿推荐：延安市区或壶口瀑布附近',
      '注意事项：壶口瀑布最佳观赏季节为秋季'
    ],
    itineraries: [
      { day: 1, title: '革命圣地游', activities: ['上午延安革命纪念馆', '中午品尝陕北美食', '下午枣园革命旧址'] },
      { day: 2, title: '壶口瀑布', activities: ['上午前往壶口瀑布', '下午游览瀑布', '返回延安'] }
    ]
  },
  '榆林': {
    attractions: [
      { name: '镇北台', type: '人文景观', rating: 4.6, description: '万里长城第一台', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhenbeitai%20Great%20Wall%20first%20watchtower%20in%20Yulin&image_size=square' },
      { name: '红石峡', type: '自然景观', rating: 4.5, description: '峡谷奇观，摩崖石刻', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hongshi%20Canyon%20red%20rock%20gorge%20in%20Yulin&image_size=square' },
      { name: '统万城', type: '人文景观', rating: 4.4, description: '匈奴古城遗址，白城子', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tongwan%20City%20ancient%20Xiongnu%20city%20ruins&image_size=square' },
      { name: '白云山', type: '自然景观', rating: 4.5, description: '道教名山，黄河边上的仙境', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baiyun%20Mountain%20Taoist%20mountain%20near%20Yellow%20River&image_size=square' }
    ],
    festivals: [
      { name: '榆林国际煤炭博览会', time: '9月', description: '展示榆林煤炭产业' },
      { name: '白云山庙会', time: '四月初八', description: '道教祈福盛会' },
      { name: '陕北民歌节', time: '8月', description: '陕北民歌演唱大赛' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：拼三鲜、榆林豆腐、羊杂碎',
      '交通指南：榆林有机场',
      '住宿推荐：榆林市区或白云山附近',
      '注意事项：统万城需包车前往'
    ],
    itineraries: [
      { day: 1, title: '长城之旅', activities: ['上午镇北台', '中午品尝榆林美食', '下午红石峡'] },
      { day: 2, title: '古城遗址游', activities: ['上午统万城', '下午白云山', '返程'] }
    ]
  },
  '宝鸡': {
    attractions: [
      { name: '法门寺', type: '人文景观', rating: 4.7, description: '佛教圣地，佛指舍利存放地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Famen%20Temple%20Buddhist%20temple%20with%20relics%20in%20Baoji&image_size=square' },
      { name: '太白山', type: '自然景观', rating: 4.8, description: '秦岭主峰，高山风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taibai%20Mountain%20Qinling%20main%20peak%20alpine%20scenery&image_size=square' },
      { name: '炎帝陵', type: '人文景观', rating: 4.5, description: '炎帝故里，中华始祖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yan%20Emperor%20Mausoleum%20ancient%20Chinese%20ancestor%20tomb&image_size=square' },
      { name: '青铜博物馆', type: '人文景观', rating: 4.4, description: '展示商周青铜器', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bronze%20Museum%20ancient%20Chinese%20bronze%20artifacts&image_size=square' }
    ],
    festivals: [
      { name: '法门寺文化节', time: '5月', description: '佛教文化盛会' },
      { name: '太白山登山节', time: '9月', description: '登山健身活动' },
      { name: '炎帝文化节', time: '10月', description: '纪念炎帝的文化活动' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：臊子面、擀面皮、豆花泡馍',
      '交通指南：宝鸡有高铁站',
      '住宿推荐：宝鸡市区或太白山附近',
      '注意事项：太白山海拔高，注意保暖'
    ],
    itineraries: [
      { day: 1, title: '佛教文化游', activities: ['上午法门寺', '中午品尝臊子面', '下午青铜博物馆'] },
      { day: 2, title: '太白山之旅', activities: ['上午太白山', '下午游览景点', '返程'] }
    ]
  },
  '格尔木': {
    attractions: [
      { name: '昆仑山', type: '自然景观', rating: 4.8, description: '万山之祖，道教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kunlun%20Mountains%20sacred%20mountains%20in%20Qinghai&image_size=square' },
      { name: '察尔汗盐湖', type: '自然景观', rating: 4.7, description: '中国最大的盐湖，盐花奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qarhan%20Salt%20Lake%20colorful%20salt%20crystals&image_size=square' },
      { name: '玉珠峰', type: '自然景观', rating: 4.6, description: '昆仑山东段最高峰', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yuzhu%20Peak%20Kunlun%20Mountain%20peak&image_size=square' },
      { name: '昆仑圣境', type: '人文景观', rating: 4.4, description: '道教文化景区', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kunlun%20Sacred%20Land%20Taoist%20cultural%20site&image_size=square' }
    ],
    festivals: [
      { name: '昆仑山文化旅游节', time: '8月', description: '展示昆仑文化' },
      { name: '盐湖文化节', time: '7月', description: '盐湖景观展示' },
      { name: '高原汽车拉力赛', time: '9月', description: '高原越野赛事' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：手抓羊肉、烤饼、酸奶',
      '交通指南：格尔木有机场，可从西宁乘车前往',
      '住宿推荐：格尔木市区',
      '注意事项：海拔较高，注意高原反应'
    ],
    itineraries: [
      { day: 1, title: '盐湖之旅', activities: ['上午察尔汗盐湖', '中午品尝青海美食', '下午盐湖周边'] },
      { day: 2, title: '昆仑山之旅', activities: ['上午昆仑山', '下午玉珠峰', '返程'] }
    ]
  },
  '阿克苏': {
    attractions: [
      { name: '天山神木园', type: '自然景观', rating: 4.6, description: '千年古木，自然奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tianshan%20Sacred%20Wood%20Garden%20ancient%20trees%20in%20Aksu&image_size=square' },
      { name: '克孜尔千佛洞', type: '人文景观', rating: 4.7, description: '龟兹佛教艺术宝库', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kizil%20Thousand%20Buddha%20Caves%20ancient%20Buddhist%20art&image_size=square' },
      { name: '托木尔大峡谷', type: '自然景观', rating: 4.8, description: '世界最大的峡谷之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tomur%20Grand%20Canyon%20spectacular%20red%20rock%20canyon&image_size=square' },
      { name: '刀郎部落', type: '人文景观', rating: 4.5, description: '维吾尔族刀郎文化展示', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Do%20Lang%20Tribe%20Uyghur%20cultural%20village&image_size=square' }
    ],
    festivals: [
      { name: '苹果文化节', time: '10月', description: '阿克苏苹果丰收节' },
      { name: '龟兹文化旅游节', time: '9月', description: '展示龟兹文化' },
      { name: '胡杨节', time: '10月', description: '胡杨林观赏节' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：烤包子、手抓饭、苹果',
      '交通指南：阿克苏有机场，可从乌鲁木齐直飞',
      '住宿推荐：阿克苏市区',
      '注意事项：大峡谷需自驾或包车'
    ],
    itineraries: [
      { day: 1, title: '峡谷之旅', activities: ['上午托木尔大峡谷', '中午品尝维吾尔美食', '下午刀郎部落'] },
      { day: 2, title: '石窟文化游', activities: ['上午克孜尔千佛洞', '下午天山神木园', '返程'] }
    ]
  },
  '吐鲁番': {
    attractions: [
      { name: '火焰山', type: '自然景观', rating: 4.6, description: '中国最热的地方，西游记取景地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Flame%20Mountain%20hot%20red%20mountains%20in%20Turpan&image_size=square' },
      { name: '葡萄沟', type: '特色体验', rating: 4.7, description: '葡萄之乡，清凉避暑', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Grape%20Valley%20vineyards%20in%20Turpan%20Xinjiang&image_size=square' },
      { name: '交河故城', type: '人文景观', rating: 4.5, description: '世界上最大最古老的生土城市', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiaohe%20Ancient%20City%20ancient%20earth%20city%20ruins&image_size=square' },
      { name: '坎儿井', type: '人文景观', rating: 4.4, description: '地下水利工程奇迹', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Karez%20underground%20canal%20system%20in%20Turpan&image_size=square' }
    ],
    festivals: [
      { name: '葡萄节', time: '8月', description: '葡萄丰收节，品尝各种葡萄' },
      { name: '开斋节', time: '伊斯兰历10月', description: '穆斯林盛大节日' },
      { name: '古尔邦节', time: '伊斯兰历12月', description: '宰牲节' }
    ],
    travelTips: [
      '建议游玩天数：2天',
      '必尝美食：葡萄、烤包子、手抓饭',
      '交通指南：吐鲁番有机场，距乌鲁木齐1小时车程',
      '住宿推荐：吐鲁番市区或葡萄沟',
      '注意事项：夏季炎热，注意防暑降温'
    ],
    itineraries: [
      { day: 1, title: '火焰山葡萄沟', activities: ['上午火焰山', '中午葡萄沟', '下午品尝葡萄'] },
      { day: 2, title: '古城遗址游', activities: ['上午交河故城', '下午坎儿井', '返程'] }
    ]
  },
  '赤峰': {
    attractions: [
      { name: '阿斯哈图石林', type: '自然景观', rating: 4.7, description: '世界地质公园，奇特的岩石景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ashatu%20Stone%20Forest%20unique%20rock%20formations%20in%20Chifeng&image_size=square' },
      { name: '乌兰布统草原', type: '自然景观', rating: 4.8, description: '草原风光，影视拍摄基地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wulanbutong%20Grassland%20beautiful%20grassland%20in%20Inner%20Mongolia&image_size=square' },
      { name: '贡格尔草原', type: '自然景观', rating: 4.6, description: '辽阔草原，自然风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Gongger%20Grassland%20vast%20grassland%20landscape&image_size=square' },
      { name: '热水温泉', type: '特色体验', rating: 4.5, description: '天然温泉，养生度假', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hot%20Spring%20spa%20resort%20in%20Chifeng&image_size=square' }
    ],
    festivals: [
      { name: '草原文化节', time: '7月', description: '草原盛会，那达慕大会' },
      { name: '红山文化节', time: '8月', description: '展示红山文化' },
      { name: '冰雪节', time: '12月', description: '冬季冰雪旅游' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：手把肉、烤全羊、奶茶',
      '交通指南：赤峰有机场',
      '住宿推荐：草原度假村或赤峰市区',
      '注意事项：草原温差大，注意保暖'
    ],
    itineraries: [
      { day: 1, title: '石林之旅', activities: ['上午阿斯哈图石林', '中午品尝草原美食', '下午贡格尔草原'] },
      { day: 2, title: '草原之旅', activities: ['上午乌兰布统草原', '下午骑马', '晚上篝火晚会'] }
    ]
  },
  '秦皇岛': {
    attractions: [
      { name: '山海关', type: '人文景观', rating: 4.7, description: '天下第一关，长城起点', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanhaiguan%20Great%20Wall%20first%20pass%20Qinhuangdao&image_size=square' },
      { name: '北戴河', type: '自然景观', rating: 4.6, description: '海滨度假胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beidaihe%20seaside%20resort%20Qinhuangdao&image_size=square' },
      { name: '老龙头', type: '人文景观', rating: 4.5, description: '长城入海处', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Old%20Dragon%20Head%20Great%20Wall%20meets%20sea&image_size=square' },
      { name: '鸽子窝公园', type: '自然景观', rating: 4.4, description: '观赏日出的好地方', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dove%20Nest%20Park%20sunrise%20viewpoint%20seaside&image_size=square' }
    ],
    festivals: [
      { name: '海洋文化节', time: '7月', description: '海洋主题活动' },
      { name: '长城文化节', time: '9月', description: '长城文化展示' },
      { name: '沙滩音乐节', time: '8月', description: '海边音乐盛会' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：海鲜、烤鱿鱼、煎饼果子',
      '交通指南：秦皇岛有高铁站',
      '住宿推荐：北戴河海滨酒店',
      '注意事项：夏季是旅游旺季'
    ],
    itineraries: [
      { day: 1, title: '长城之旅', activities: ['上午山海关', '中午品尝海鲜', '下午老龙头'] },
      { day: 2, title: '海滨之旅', activities: ['上午鸽子窝看日出', '下午北戴河', '晚上海边漫步'] }
    ]
  },
  '邯郸': {
    attractions: [
      { name: '丛台公园', type: '人文景观', rating: 4.5, description: '战国时期赵武灵王阅兵台', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Congtai%20Park%20ancient%20Zhao%20Dynasty%20platform&image_size=square' },
      { name: '响堂山石窟', type: '人文景观', rating: 4.6, description: '北齐佛教石窟艺术', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiangtangshan%20Grottoes%20Northern%20Qi%20Buddhist%20caves&image_size=square' },
      { name: '广府古城', type: '人文景观', rating: 4.5, description: '北方水城，古城墙保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guangfu%20Ancient%20City%20water%20town%20in%20Hebei&image_size=square' },
      { name: '娲皇宫', type: '人文景观', rating: 4.6, description: '女娲补天传说地，摩崖刻经', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nuwa%20Palace%20ancient%20Chinese%20legend%20site&image_size=square' }
    ],
    festivals: [
      { name: '太极拳文化节', time: '10月', description: '太极拳发源地，太极拳表演' },
      { name: '邯郸成语文化节', time: '9月', description: '展示邯郸成语典故' },
      { name: '丛台庙会', time: '正月', description: '传统庙会活动' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：永年酥鱼、驴肉灌肠、锅贴',
      '交通指南：邯郸有机场和高铁站',
      '住宿推荐：邯郸市区或广府古城',
      '注意事项：广府古城可以体验太极拳'
    ],
    itineraries: [
      { day: 1, title: '古城之旅', activities: ['上午丛台公园', '中午品尝邯郸美食', '下午广府古城'] },
      { day: 2, title: '石窟文化游', activities: ['上午响堂山石窟', '下午娲皇宫', '返程'] }
    ]
  },
  '景德镇': {
    attractions: [
      { name: '古窑民俗博览区', type: '人文景观', rating: 4.7, description: '展示陶瓷文化，古窑再现', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingdezhen%20Ancient%20Kiln%20ceramic%20museum&image_size=square' },
      { name: '御窑厂', type: '人文景观', rating: 4.6, description: '明清皇家瓷厂遗址', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Imperial%20Kiln%20ancient%20ceramic%20factory%20site&image_size=square' },
      { name: '瑶里古镇', type: '人文景观', rating: 4.5, description: '陶瓷古镇，山水秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yaoli%20ancient%20town%20ceramic%20village%20in%20Jiangxi&image_size=square' },
      { name: '浮梁古县衙', type: '人文景观', rating: 4.4, description: '保存完好的清代县衙', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fuliang%20ancient%20county%20government%20building&image_size=square' }
    ],
    festivals: [
      { name: '国际陶瓷博览会', time: '10月', description: '世界陶瓷盛会' },
      { name: '陶瓷文化节', time: '5月', description: '展示陶瓷艺术' },
      { name: '茶文化节', time: '4月', description: '浮梁茶文化展示' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：冷粉、饺子粑、碱水粑',
      '交通指南：景德镇有机场和高铁站',
      '住宿推荐：景德镇市区或瑶里古镇',
      '注意事项：可以体验陶瓷制作'
    ],
    itineraries: [
      { day: 1, title: '陶瓷文化游', activities: ['上午古窑博览区', '中午品尝景德镇美食', '下午御窑厂'] },
      { day: 2, title: '古镇之旅', activities: ['上午瑶里古镇', '下午浮梁古县衙', '返程'] }
    ]
  },
  '上饶': {
    attractions: [
      { name: '三清山', type: '自然景观', rating: 4.8, description: '世界自然遗产，道教名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sanqing%20Mountain%20beautiful%20mountains%20in%20Jiangxi&image_size=square' },
      { name: '婺源', type: '人文景观', rating: 4.7, description: '中国最美乡村，油菜花之乡', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuyuan%20beautiful%20villages%20in%20Jiangxi&image_size=square' },
      { name: '江湾', type: '人文景观', rating: 4.5, description: '婺源文化古村', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiangwan%20ancient%20village%20in%20Wuyuan&image_size=square' },
      { name: '龟峰', type: '自然景观', rating: 4.6, description: '丹霞地貌，形态奇特', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guifeng%20Mountain%20danxia%20landform%20in%20Jiangxi&image_size=square' }
    ],
    festivals: [
      { name: '油菜花节', time: '3月', description: '婺源油菜花盛开' },
      { name: '三清山登山节', time: '9月', description: '登山健身活动' },
      { name: '茶文化节', time: '4月', description: '上饶茶文化展示' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：清蒸荷包红鲤鱼、婺源汽糕、灯盏粿',
      '交通指南：上饶有高铁站',
      '住宿推荐：婺源民宿或三清山附近',
      '注意事项：油菜花花期在3-4月'
    ],
    itineraries: [
      { day: 1, title: '婺源之旅', activities: ['上午江湾', '中午品尝婺源美食', '下午李坑'] },
      { day: 2, title: '三清山之旅', activities: ['上午三清山', '登山游览', '晚上住山上'] },
      { day: 3, title: '龟峰之旅', activities: ['上午龟峰', '下午返程'] }
    ]
  },
  '乐山': {
    attractions: [
      { name: '乐山大佛', type: '人文景观', rating: 4.8, description: '世界最大的石刻弥勒佛坐像', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Leshan%20Giant%20Buddha%20largest%20stone%20Buddha%20statue&image_size=square' },
      { name: '峨眉山', type: '自然景观', rating: 4.9, description: '佛教名山，世界双遗产', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Emei%20Mountain%20Buddhist%20sacred%20mountain&image_size=square' },
      { name: '东方佛都', type: '人文景观', rating: 4.5, description: '展示佛教文化艺术', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Oriental%20Buddha%20Park%20Buddhist%20art%20exhibition&image_size=square' },
      { name: '嘉定坊', type: '人文景观', rating: 4.4, description: '古街风貌，美食街区', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiading%20Old%20Street%20traditional%20Chinese%20street&image_size=square' }
    ],
    festivals: [
      { name: '峨眉山普贤文化节', time: '4月', description: '佛教文化盛会' },
      { name: '乐山旅游文化节', time: '9月', description: '展示乐山旅游资源' },
      { name: '美食节', time: '10月', description: '品尝乐山美食' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：钵钵鸡、豆腐脑、甜皮鸭',
      '交通指南：乐山有高铁站',
      '住宿推荐：乐山市区或峨眉山',
      '注意事项：峨眉山需游玩1-2天'
    ],
    itineraries: [
      { day: 1, title: '大佛之旅', activities: ['上午乐山大佛', '中午品尝钵钵鸡', '下午东方佛都'] },
      { day: 2, title: '峨眉山之旅', activities: ['上午峨眉山', '登山游览', '晚上住山上'] }
    ]
  },
  '自贡': {
    attractions: [
      { name: '自贡恐龙博物馆', type: '特色体验', rating: 4.7, description: '世界三大恐龙博物馆之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zigong%20Dinosaur%20Museum%20fossil%20exhibition&image_size=square' },
      { name: '自贡灯会', type: '特色体验', rating: 4.8, description: '天下第一灯，大型灯会', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zigong%20Lantern%20Festival%20colorful%20lanterns&image_size=square' },
      { name: '盐业历史博物馆', type: '人文景观', rating: 4.5, description: '展示自贡盐业历史', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Salt%20History%20Museum%20ancient%20salt%20industry&image_size=square' },
      { name: '仙市古镇', type: '人文景观', rating: 4.4, description: '千年古镇，盐业重镇', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xianshi%20ancient%20town%20salt%20village&image_size=square' }
    ],
    festivals: [
      { name: '自贡国际恐龙灯会', time: '1-2月', description: '世界最大的灯会' },
      { name: '盐文化节', time: '9月', description: '展示盐文化' },
      { name: '美食节', time: '10月', description: '品尝自贡美食' }
    ],
    travelTips: [
      '建议游玩天数：2天',
      '必尝美食：冷吃兔、盐帮菜、火边子牛肉',
      '交通指南：自贡有高铁站',
      '住宿推荐：自贡市区',
      '注意事项：灯会在春节期间举办'
    ],
    itineraries: [
      { day: 1, title: '恐龙之旅', activities: ['上午恐龙博物馆', '中午品尝盐帮菜', '下午盐业博物馆'] },
      { day: 2, title: '古镇灯会', activities: ['上午仙市古镇', '下午市区游览', '晚上看灯会'] }
    ]
  },
  '红河': {
    attractions: [
      { name: '元阳梯田', type: '自然景观', rating: 4.9, description: '世界文化遗产，梯田奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yuanyang%20Terraced%20Fields%20rice%20terraces%20in%20Yunnan&image_size=square' },
      { name: '建水古城', type: '人文景观', rating: 4.6, description: '千年古城，文庙闻名', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jianshui%20ancient%20city%20traditional%20town%20in%20Yunnan&image_size=square' },
      { name: '朱家花园', type: '人文景观', rating: 4.5, description: '清代私家园林，建筑精美', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhu%20Family%20Garden%20traditional%20Chinese%20garden&image_size=square' },
      { name: '双龙桥', type: '人文景观', rating: 4.4, description: '十七孔桥，古桥奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Double%20Dragon%20Bridge%20ancient%20stone%20bridge&image_size=square' }
    ],
    festivals: [
      { name: '哈尼族十月年', time: '农历十月', description: '哈尼族最盛大的节日' },
      { name: '米线节', time: '农历正月', description: '建水特色节日' },
      { name: '火把节', time: '六月二十四', description: '彝族火把节' }
    ],
    travelTips: [
      '建议游玩天数：3-4天',
      '必尝美食：建水烧豆腐、过桥米线、酸汤鸡',
      '交通指南：可从昆明乘车前往',
      '住宿推荐：元阳梯田景区或建水古城',
      '注意事项：梯田最佳观赏季节为冬季'
    ],
    itineraries: [
      { day: 1, title: '梯田之旅', activities: ['上午元阳梯田', '拍摄梯田日出', '下午游览多依树'] },
      { day: 2, title: '古城之旅', activities: ['上午建水古城', '中午品尝烧豆腐', '下午朱家花园'] }
    ]
  },
  '延边': {
    attractions: [
      { name: '长白山', type: '自然景观', rating: 4.9, description: '东北第一高峰，天池壮丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Changbai%20Mountain%20beautiful%20volcanic%20lake%20in%20Jilin&image_size=square' },
      { name: '延边博物馆', type: '人文景观', rating: 4.5, description: '展示朝鲜族历史和文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yanbian%20Museum%20Korean%20ethnic%20culture%20exhibition&image_size=square' },
      { name: '防川景区', type: '特色体验', rating: 4.6, description: '一眼望三国，中俄朝边境', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fangchuan%20Scenic%20Area%20China%20Russia%20North%20Korea%20border&image_size=square' },
      { name: '朝鲜族民俗园', type: '人文景观', rating: 4.5, description: '体验朝鲜族传统生活', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Korean%20Ethnic%20Village%20traditional%20Korean%20culture%20in%20Jilin&image_size=square' }
    ],
    festivals: [
      { name: '朝鲜族民俗文化旅游节', time: '8月', description: '展示朝鲜族文化和民俗' },
      { name: '长白山冰雪节', time: '12月', description: '冬季冰雪旅游盛会' },
      { name: '延边苹果梨节', time: '9月', description: '特色水果节' }
    ],
    travelTips: [
      '建议游玩天数：2-3天',
      '必尝美食：冷面、烤肉、石锅拌饭、辣白菜',
      '交通指南：延边有机场，长白山有机场',
      '住宿推荐：延吉市区或长白山脚下',
      '注意事项：冬季长白山寒冷，注意保暖'
    ],
    itineraries: [
      { day: 1, title: '长白山之旅', activities: ['上午登山长白山', '中午品尝朝鲜族美食', '下午游览天池'] },
      { day: 2, title: '边境文化之旅', activities: ['上午防川景区', '下午朝鲜族民俗园', '晚上观看朝鲜族歌舞'] }
    ]
  },
  '三明': {
    attractions: [
      { name: '泰宁丹霞', type: '自然景观', rating: 4.7, description: '世界自然遗产，丹霞地貌奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taining%20Danxia%20world%20heritage%20red%20rock%20landscape&image_size=square' },
      { name: '大金湖', type: '自然景观', rating: 4.6, description: '丹霞地貌与湖泊完美结合', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dajin%20Lake%20beautiful%20lake%20in%20Sanming%20Fujian&image_size=square' },
      { name: '玉华洞', type: '自然景观', rating: 4.5, description: '福建最大的溶洞，洞内奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yuhua%20Cave%20beautiful%20underground%20cave%20in%20Fujian&image_size=square' },
      { name: '建宁金铙山', type: '自然景观', rating: 4.4, description: '福建第二高峰，高山草甸', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jianning%20Jin%27ao%20Mountain%20high%20altitude%20grassland&image_size=square' }
    ],
    festivals: [
      { name: '三明客家文化节', time: '10月', description: '展示客家文化和民俗' },
      { name: '泰宁丹霞旅游节', time: '9月', description: '展示丹霞地貌景观' },
      { name: '小吃文化节', time: '12月', description: '品尝三明特色小吃' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：沙县小吃、永安粿条、泥鳅粉干', '交通指南：三明有高铁站', '住宿推荐：泰宁景区或三明市区', '注意事项：丹霞地貌夏季避暑好去处'],
    itineraries: [
      { day: 1, title: '丹霞之旅', activities: ['上午泰宁丹霞', '中午品尝沙县小吃', '下午大金湖'] },
      { day: 2, title: '溶洞之旅', activities: ['上午玉华洞', '下午金铙山', '返程'] }
    ]
  },
  '抚州': {
    attractions: [
      { name: '文昌里', type: '人文景观', rating: 4.6, description: '千年历史文化街区', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wenchangli%20ancient%20street%20in%20Fuzhou%20Jiangxi&image_size=square' },
      { name: '大觉山', type: '自然景观', rating: 4.5, description: '山水风光秀丽，漂流胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dajue%20Mountain%20beautiful%20scenic%20spot%20in%20Jiangxi&image_size=square' },
      { name: '王安石纪念馆', type: '人文景观', rating: 4.4, description: '纪念北宋文学家王安石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wang%20Anshi%20Memorial%20traditional%20Chinese%20museum&image_size=square' },
      { name: '汤显祖纪念馆', type: '人文景观', rating: 4.5, description: '纪念戏剧家汤显祖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tang%20Xianzu%20Memorial%20theater%20museum%20in%20Jiangxi&image_size=square' }
    ],
    festivals: [
      { name: '汤显祖戏剧节', time: '10月', description: '纪念汤显祖，戏剧表演' },
      { name: '文昌里文化节', time: '5月', description: '展示文昌里历史文化' },
      { name: '温泉节', time: '12月', description: '抚州温泉资源丰富' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：抚州泡粉、牛杂、东乡羊肉', '交通指南：抚州有高铁站', '住宿推荐：文昌里附近或市区', '注意事项：大觉山漂流夏季最佳'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午文昌里', '中午品尝抚州美食', '下午王安石纪念馆'] },
      { day: 2, title: '山水之旅', activities: ['上午大觉山', '下午汤显祖纪念馆', '返程'] }
    ]
  },
  '梅州': {
    attractions: [
      { name: '雁南飞茶田', type: '特色体验', rating: 4.6, description: '茶园风光，茶文化体验', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yannanfei%20Tea%20Plantation%20beautiful%20tea%20garden&image_size=square' },
      { name: '客家围龙屋', type: '人文景观', rating: 4.5, description: '客家传统建筑，世界文化遗产', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hakka%20Round%20House%20traditional%20Chinese%20architecture&image_size=square' },
      { name: '叶剑英纪念园', type: '人文景观', rating: 4.5, description: '纪念叶剑英元帅', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ye%20Jianying%20Memorial%20Park%20red%20tourism&image_size=square' },
      { name: '灵光寺', type: '人文景观', rating: 4.4, description: '千年古刹，佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lingguang%20Temple%20ancient%20Buddhist%20temple%20in%20Guangdong&image_size=square' }
    ],
    festivals: [
      { name: '客家文化节', time: '10月', description: '世界客都文化盛会' },
      { name: '梅州柚子节', time: '11月', description: '沙田柚丰收季节' },
      { name: '山歌节', time: '3月', description: '客家山歌对唱' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：客家酿豆腐、盐焗鸡、梅菜扣肉', '交通指南：梅州有机场和高铁站', '住宿推荐：梅州城区或雁南飞', '注意事项：客家围龙屋值得参观'],
    itineraries: [
      { day: 1, title: '茶文化之旅', activities: ['上午雁南飞茶田', '中午品尝客家美食', '下午围龙屋'] },
      { day: 2, title: '文化之旅', activities: ['上午叶剑英纪念园', '下午灵光寺', '返程'] }
    ]
  },
  '北海': {
    attractions: [
      { name: '银滩', type: '自然景观', rating: 4.7, description: '天下第一滩，细沙如银', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beihai%20Silver%20Beach%20white%20sand%20beach%20in%20Guangxi&image_size=square' },
      { name: '涠洲岛', type: '自然景观', rating: 4.8, description: '火山岛，自然风光独特', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Weizhou%20Island%20volcanic%20island%20in%20Guangxi&image_size=square' },
      { name: '老街', type: '人文景观', rating: 4.5, description: '百年老街，骑楼建筑', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beihai%20Old%20Street%20traditional%20Chinese%20architecture&image_size=square' },
      { name: '海底世界', type: '特色体验', rating: 4.4, description: '海洋生物展示', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beihai%20Underwater%20World%20aquarium&image_size=square' }
    ],
    festivals: [
      { name: '北海国际珍珠节', time: '10月', description: '展示南珠文化' },
      { name: '涠洲岛火山文化节', time: '9月', description: '展示火山岛文化' },
      { name: '海鲜美食节', time: '7月', description: '品尝北部湾海鲜' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：海鲜、沙虫、虾饼', '交通指南：北海有机场和高铁站', '住宿推荐：银滩附近或涠洲岛', '注意事项：涠洲岛需乘船前往'],
    itineraries: [
      { day: 1, title: '银滩之旅', activities: ['上午银滩游玩', '中午品尝海鲜', '下午老街'] },
      { day: 2, title: '涠洲岛之旅', activities: ['上午乘船前往涠洲岛', '环岛游览', '晚上住岛上'] },
      { day: 3, title: '涠洲岛深度游', activities: ['上午火山公园', '下午贝壳沙滩', '返程'] }
    ]
  },
  '玉溪': {
    attractions: [
      { name: '抚仙湖', type: '自然景观', rating: 4.7, description: '中国最大的深水淡水湖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fuxian%20Lake%20beautiful%20deep%20lake%20in%20Yunnan&image_size=square' },
      { name: '聂耳音乐广场', type: '人文景观', rating: 4.4, description: '纪念聂耳的音乐主题广场', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nie%20Er%20Music%20Square%20memorial%20park%20in%20Yuxi&image_size=square' },
      { name: '秀山公园', type: '自然景观', rating: 4.5, description: '秀山美景，古寺众多', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiushan%20Park%20beautiful%20mountain%20park%20in%20Yunnan&image_size=square' },
      { name: '汇龙生态园', type: '特色体验', rating: 4.3, description: '生态农业观光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huilong%20Eco%20Park%20agriculture%20tourism&image_size=square' }
    ],
    festivals: [
      { name: '聂耳文化节', time: '5月', description: '纪念聂耳，音乐盛会' },
      { name: '抚仙湖旅游节', time: '9月', description: '展示抚仙湖风光' },
      { name: '米线节', time: '农历二月', description: '玉溪特色节日' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：玉溪米线、豆末糖、酸角糕', '交通指南：玉溪有高铁站，距昆明1小时车程', '住宿推荐：抚仙湖附近或玉溪市区', '注意事项：抚仙湖水质清澈，适合游泳'],
    itineraries: [
      { day: 1, title: '抚仙湖之旅', activities: ['上午抚仙湖', '中午品尝米线', '下午湖边游玩'] },
      { day: 2, title: '城市之旅', activities: ['上午秀山公园', '下午聂耳广场', '返程'] }
    ]
  },
  '保山': {
    attractions: [
      { name: '腾冲热海', type: '特色体验', rating: 4.6, description: '温泉胜地，地热景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tengchong%20Hot%20Sea%20hot%20springs%20in%20Yunnan&image_size=square' },
      { name: '和顺古镇', type: '人文景观', rating: 4.7, description: '侨乡古镇，文化底蕴深厚', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Heshun%20ancient%20town%20overseas%20Chinese%20village&image_size=square' },
      { name: '火山公园', type: '自然景观', rating: 4.5, description: '火山群，地质奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tengchong%20Volcano%20Park%20geological%20wonder&image_size=square' },
      { name: '北海湿地', type: '自然景观', rating: 4.4, description: '高原湿地，候鸟栖息地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beihai%20Wetland%20plateau%20wetland%20in%20Yunnan&image_size=square' }
    ],
    festivals: [
      { name: '腾冲文化旅游节', time: '9月', description: '展示腾冲旅游资源' },
      { name: '温泉文化节', time: '11月', description: '温泉体验活动' },
      { name: '荷花节', time: '7月', description: '北海湿地荷花盛开' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：大救驾、饵丝、酸汤鸡', '交通指南：保山有机场，腾冲有机场', '住宿推荐：和顺古镇或腾冲市区', '注意事项：温泉泡浴注意时间'],
    itineraries: [
      { day: 1, title: '古镇之旅', activities: ['上午和顺古镇', '中午品尝大救驾', '下午古镇游览'] },
      { day: 2, title: '温泉之旅', activities: ['上午热海温泉', '下午火山公园', '晚上温泉体验'] },
      { day: 3, title: '湿地之旅', activities: ['上午北海湿地', '返程'] }
    ]
  },
  '凯里': {
    attractions: [
      { name: '西江千户苗寨', type: '人文景观', rating: 4.8, description: '世界最大的苗族聚居村寨', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xijiang%20Thousand%20Households%20Miao%20Village%20traditional%20village&image_size=square' },
      { name: '郎德上寨', type: '人文景观', rating: 4.5, description: '苗族风情浓郁，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Langde%20Upper%20Village%20traditional%20Miao%20village&image_size=square' },
      { name: '杉木河', type: '自然景观', rating: 4.6, description: '漂流胜地，河水清澈', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanmu%20River%20rafting%20in%20Guizhou&image_size=square' },
      { name: '香炉山', type: '自然景观', rating: 4.4, description: '苗族圣山，自然风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xianglu%20Mountain%20Miao%20sacred%20mountain&image_size=square' }
    ],
    festivals: [
      { name: '苗族芦笙节', time: '农历九月', description: '苗族传统节日，芦笙歌舞' },
      { name: '苗年', time: '农历十月', description: '苗族新年，盛大节日' },
      { name: '凯里国际芦笙节', time: '10月', description: '国际芦笙文化盛会' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：酸汤鱼、苗家腊肉、糯米饭', '交通指南：凯里有高铁站', '住宿推荐：西江千户苗寨或凯里市区', '注意事项：苗寨夜景非常漂亮'],
    itineraries: [
      { day: 1, title: '苗寨之旅', activities: ['上午西江千户苗寨', '中午品尝酸汤鱼', '下午苗寨游览'] },
      { day: 2, title: '山水之旅', activities: ['上午杉木河漂流', '下午郎德上寨', '晚上苗寨夜景'] }
    ]
  },
  '芜湖': {
    attractions: [
      { name: '方特欢乐世界', type: '特色体验', rating: 4.7, description: '大型主题乐园，欢乐无限', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fantawild%20Theme%20Park%20amusement%20park%20in%20Wuhu&image_size=square' },
      { name: '镜湖', type: '自然景观', rating: 4.4, description: '芜湖市心湖，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinghu%20Lake%20beautiful%20lake%20in%20Wuhu&image_size=square' },
      { name: '鸠兹古镇', type: '人文景观', rating: 4.5, description: '徽派建筑，古风古韵', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiuzi%20ancient%20town%20Huizhou%20architecture&image_size=square' },
      { name: '天门山', type: '自然景观', rating: 4.4, description: '两山对峙如门，长江穿流', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tianmen%20Mountain%20Yangtze%20River%20scenery&image_size=square' }
    ],
    festivals: [
      { name: '方特欢乐节', time: '7月', description: '主题乐园狂欢活动' },
      { name: '芜湖美食节', time: '10月', description: '品尝芜湖特色美食' },
      { name: '菊花展', time: '11月', description: '镜湖菊花盛开' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：芜湖小笼包、虾子面、傻子瓜子', '交通指南：芜湖有高铁站', '住宿推荐：方特附近或市区', '注意事项：方特需游玩一天'],
    itineraries: [
      { day: 1, title: '方特之旅', activities: ['上午方特欢乐世界', '中午园内用餐', '下午继续游玩'] },
      { day: 2, title: '城市之旅', activities: ['上午镜湖', '中午品尝小笼包', '下午鸠兹古镇'] }
    ]
  },
  '安庆': {
    attractions: [
      { name: '天柱山', type: '自然景观', rating: 4.7, description: '世界地质公园，雄奇壮观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tianzhu%20Mountain%20spectacular%20mountains%20in%20Anhui&image_size=square' },
      { name: '迎江寺', type: '人文景观', rating: 4.5, description: '千年古刹，振风塔闻名', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yingjiang%20Temple%20ancient%20Buddhist%20temple%20with%20pagoda&image_size=square' },
      { name: '黄梅戏艺术中心', type: '人文景观', rating: 4.4, description: '黄梅戏表演场地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huangmei%20Opera%20Art%20Center%20theater&image_size=square' },
      { name: '菱湖公园', type: '自然景观', rating: 4.3, description: '城市公园，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Linghu%20Park%20beautiful%20city%20park&image_size=square' }
    ],
    festivals: [
      { name: '黄梅戏艺术节', time: '11月', description: '黄梅戏表演盛会' },
      { name: '天柱山登山节', time: '9月', description: '登山健身活动' },
      { name: '龙舟赛', time: '端午节', description: '长江龙舟竞渡' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：安庆馄饨、鸡汤泡炒米、毛豆腐', '交通指南：安庆有机场和高铁站', '住宿推荐：安庆市区或天柱山附近', '注意事项：天柱山需游玩1-2天'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午天柱山', '登山游览', '晚上住山上'] },
      { day: 2, title: '文化之旅', activities: ['上午迎江寺', '中午品尝安庆美食', '下午黄梅戏艺术中心'] }
    ]
  },
  '九江': {
    attractions: [
      { name: '庐山', type: '自然景观', rating: 4.9, description: '世界文化景观，山水甲天下', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lushan%20Mountain%20beautiful%20scenic%20spot%20in%20Jiangxi&image_size=square' },
      { name: '鄱阳湖', type: '自然景观', rating: 4.6, description: '中国最大淡水湖，候鸟天堂', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Poyang%20Lake%20largest%20freshwater%20lake%20in%20China&image_size=square' },
      { name: '浔阳楼', type: '人文景观', rating: 4.5, description: '江南名楼，《水浒传》故事发生地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xunyang%20Tower%20famous%20Chinese%20tower%20in%20Jiujiang&image_size=square' },
      { name: '石钟山', type: '人文景观', rating: 4.4, description: '苏轼《石钟山记》描写地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shizhong%20Mountain%20historic%20mountain%20in%20Jiangxi&image_size=square' }
    ],
    festivals: [
      { name: '庐山国际文化旅游节', time: '10月', description: '展示庐山文化' },
      { name: '鄱阳湖候鸟节', time: '12月', description: '观赏候鸟' },
      { name: '龙舟赛', time: '端午节', description: '长江龙舟比赛' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：庐山三石、九江茶饼、炒粉', '交通指南：九江有机场和高铁站', '住宿推荐：庐山山上酒店或九江市区', '注意事项：庐山云雾多，注意保暖'],
    itineraries: [
      { day: 1, title: '庐山之旅', activities: ['上午登山庐山', '游览景点', '晚上住山上'] },
      { day: 2, title: '庐山深度游', activities: ['上午含鄱口看日出', '下午五老峰', '晚上看夜景'] },
      { day: 3, title: '鄱阳湖之旅', activities: ['上午鄱阳湖', '下午浔阳楼', '返程'] }
    ]
  },
  '绵阳': {
    attractions: [
      { name: '越王楼', type: '人文景观', rating: 4.5, description: '唐代名楼，气势恢宏', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yuewang%20Tower%20ancient%20Chinese%20tower%20in%20Mianyang&image_size=square' },
      { name: '李白纪念馆', type: '人文景观', rating: 4.6, description: '纪念诗仙李白', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Li%20Bai%20Memorial%20traditional%20Chinese%20museum&image_size=square' },
      { name: '富乐山', type: '自然景观', rating: 4.4, description: '三国文化名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fule%20Mountain%20beautiful%20scenic%20spot%20in%20Sichuan&image_size=square' },
      { name: '科技馆', type: '特色体验', rating: 4.5, description: '中国科技城展示中心', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mianyang%20Science%20and%20Technology%20Museum&image_size=square' }
    ],
    festivals: [
      { name: '李白文化节', time: '10月', description: '纪念李白，诗歌盛会' },
      { name: '绵阳科技节', time: '5月', description: '展示科技成就' },
      { name: '灯会', time: '春节', description: '绵阳灯会，彩灯展览' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：绵阳米粉、冷沾沾、江油肥肠', '交通指南：绵阳有机场和高铁站', '住宿推荐：绵阳市区', '注意事项：科技馆适合亲子游'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午李白纪念馆', '中午品尝米粉', '下午越王楼'] },
      { day: 2, title: '科技之旅', activities: ['上午科技馆', '下午富乐山', '返程'] }
    ]
  },
  '宜宾': {
    attractions: [
      { name: '蜀南竹海', type: '自然景观', rating: 4.7, description: '中国最美的十大森林之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Southern%20Sichuan%20Bamboo%20Sea%20beautiful%20forest&image_size=square' },
      { name: '五粮液酒厂', type: '特色体验', rating: 4.5, description: '酒文化体验，参观酒厂', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuliangye%20Distillery%20Chinese%20liquor%20factory&image_size=square' },
      { name: '李庄古镇', type: '人文景观', rating: 4.6, description: '抗战文化古镇，梁思成林徽因故居', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lizhuang%20ancient%20town%20historic%20village%20in%20Sichuan&image_size=square' },
      { name: '流杯池', type: '人文景观', rating: 4.4, description: '黄庭坚书法遗迹', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liubei%20Pool%20ancient%20Chinese%20calligraphy%20site&image_size=square' }
    ],
    festivals: [
      { name: '中国白酒文化节', time: '12月', description: '白酒文化盛会' },
      { name: '蜀南竹海旅游节', time: '9月', description: '展示竹海风光' },
      { name: '李庄文化节', time: '4月', description: '展示李庄古镇文化' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：宜宾燃面、李庄白肉、芽菜', '交通指南：宜宾有机场和高铁站', '住宿推荐：竹海景区或宜宾市区', '注意事项：竹海夏季避暑好去处'],
    itineraries: [
      { day: 1, title: '竹海之旅', activities: ['上午蜀南竹海', '中午品尝竹荪美食', '下午竹海游览'] },
      { day: 2, title: '文化之旅', activities: ['上午李庄古镇', '下午五粮液酒厂', '返程'] }
    ]
  },
  '遵义': {
    attractions: [
      { name: '遵义会议会址', type: '人文景观', rating: 4.7, description: '红色旅游圣地，重要历史会议地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zunyi%20Meeting%20Site%20red%20tourism%20in%20Guizhou&image_size=square' },
      { name: '赤水丹霞', type: '自然景观', rating: 4.8, description: '世界自然遗产，丹霞奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chishui%20Danxia%20red%20rock%20landscape%20in%20Guizhou&image_size=square' },
      { name: '娄山关', type: '人文景观', rating: 4.5, description: '红军战斗遗址，雄关漫道', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Loushanguan%20Pass%20red%20tourism%20historic%20site&image_size=square' },
      { name: '茅台镇', type: '特色体验', rating: 4.6, description: '中国酒都，茅台酒产地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Maotai%20Town%20Chinese%20liquor%20capital&image_size=square' }
    ],
    festivals: [
      { name: '遵义红色文化旅游节', time: '10月', description: '展示红色文化' },
      { name: '中国国际名酒博览会', time: '3月', description: '酒类展览' },
      { name: '娄山关文化节', time: '9月', description: '纪念红军战斗' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：遵义羊肉粉、豆花面、乌江鱼', '交通指南：遵义有机场和高铁站', '住宿推荐：遵义市区或茅台镇', '注意事项：赤水丹霞需自驾或包车'],
    itineraries: [
      { day: 1, title: '红色之旅', activities: ['上午遵义会议会址', '中午品尝羊肉粉', '下午娄山关'] },
      { day: 2, title: '酒文化之旅', activities: ['上午茅台镇', '下午赤水丹霞', '返程'] }
    ]
  },
  '荆州': {
    attractions: [
      { name: '荆州古城', type: '人文景观', rating: 4.6, description: '千年古城墙，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingzhou%20ancient%20city%20wall%20traditional%20Chinese%20fortress&image_size=square' },
      { name: '荆州博物馆', type: '人文景观', rating: 4.5, description: '展示楚文化，文物丰富', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingzhou%20Museum%20Chu%20culture%20exhibition&image_size=square' },
      { name: '关帝庙', type: '人文景观', rating: 4.4, description: '纪念关羽，三国文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guan%20Di%20Temple%20Three%20Kingdoms%20culture&image_size=square' },
      { name: '张居正故居', type: '人文景观', rating: 4.3, description: '明代首辅张居正故居', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhang%20Juzheng%20Former%20Residence%20historic%20house&image_size=square' }
    ],
    festivals: [
      { name: '荆州关公文化节', time: '9月', description: '纪念关公，三国文化盛会' },
      { name: '楚文化节', time: '5月', description: '展示楚文化' },
      { name: '龙舟赛', time: '端午节', description: '荆江龙舟竞渡' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：荆州鱼糕、千张扣肉、锅块', '交通指南：荆州有高铁站', '住宿推荐：荆州古城附近', '注意事项：古城墙可以徒步游览'],
    itineraries: [
      { day: 1, title: '古城之旅', activities: ['上午荆州古城', '中午品尝鱼糕', '下午荆州博物馆'] },
      { day: 2, title: '文化之旅', activities: ['上午关帝庙', '下午张居正故居', '返程'] }
    ]
  },
  '连云港': {
    attractions: [
      { name: '花果山', type: '特色体验', rating: 4.6, description: '孙悟空故乡，神话名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huaguo%20Mountain%20Monkey%20King%20mythology%20site&image_size=square' },
      { name: '连岛', type: '自然景观', rating: 4.5, description: '海滨度假胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lian%20Island%20beautiful%20seaside%20resort&image_size=square' },
      { name: '海上云台山', type: '自然景观', rating: 4.4, description: '山海奇观，云海日出', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sea%20Cloud%20Mountain%20beautiful%20coastal%20mountain&image_size=square' },
      { name: '渔湾', type: '自然景观', rating: 4.4, description: '山水风光，瀑布众多', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yuwan%20beautiful%20waterfall%20scenic%20spot&image_size=square' }
    ],
    festivals: [
      { name: '连云港之夏', time: '7月', description: '海滨旅游盛会' },
      { name: '花果山文化节', time: '10月', description: '神话文化展示' },
      { name: '海鲜美食节', time: '8月', description: '品尝海鲜' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：海鲜、灌云豆丹、板浦凉粉', '交通指南：连云港有机场和高铁站', '住宿推荐：连岛附近或市区', '注意事项：花果山需游玩一天'],
    itineraries: [
      { day: 1, title: '花果山之旅', activities: ['上午花果山', '中午品尝海鲜', '下午继续游玩'] },
      { day: 2, title: '海滨之旅', activities: ['上午连岛', '下午海上云台山', '返程'] }
    ]
  },
  '烟台': {
    attractions: [
      { name: '蓬莱阁', type: '人文景观', rating: 4.7, description: '八仙过海传说地，人间仙境', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Penglai%20Pavilion%20fairy%20tale%20site%20in%20Yantai&image_size=square' },
      { name: '养马岛', type: '自然景观', rating: 4.6, description: '海岛风光，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yangma%20Island%20beautiful%20island%20in%20Yantai&image_size=square' },
      { name: '烟台山', type: '人文景观', rating: 4.5, description: '烟台地标，历史建筑', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yantai%20Mountain%20historic%20site%20in%20Shandong&image_size=square' },
      { name: '张裕酒文化博物馆', type: '特色体验', rating: 4.5, description: '葡萄酒文化体验', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Changyu%20Wine%20Museum%20wine%20culture%20exhibition&image_size=square' }
    ],
    festivals: [
      { name: '烟台国际葡萄酒节', time: '9月', description: '葡萄酒文化盛会' },
      { name: '蓬莱八仙文化节', time: '8月', description: '八仙传说文化展示' },
      { name: '海鲜美食节', time: '7月', description: '品尝烟台海鲜' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：海鲜、烟台苹果、张裕葡萄酒', '交通指南：烟台有机场和高铁站', '住宿推荐：养马岛附近或烟台市区', '注意事项：蓬莱阁需游玩半天'],
    itineraries: [
      { day: 1, title: '仙境之旅', activities: ['上午蓬莱阁', '中午品尝海鲜', '下午养马岛'] },
      { day: 2, title: '酒文化之旅', activities: ['上午张裕酒文化博物馆', '下午烟台山', '返程'] }
    ]
  },
  '日照': {
    attractions: [
      { name: '万平口', type: '自然景观', rating: 4.6, description: '海滨公园，沙滩美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wanpingkou%20beautiful%20beach%20in%20Rizhao&image_size=square' },
      { name: '日照海滨国家森林公园', type: '自然景观', rating: 4.5, description: '森林与海滩完美结合', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Rizhao%20Coastal%20Forest%20Park%20beach%20and%20forest&image_size=square' },
      { name: '五莲山', type: '自然景观', rating: 4.4, description: '山水风光，佛教名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wulian%20Mountain%20beautiful%20scenic%20spot%20in%20Shandong&image_size=square' },
      { name: '竹洞天', type: '特色体验', rating: 4.3, description: '北方最大的竹林', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bamboo%20Paradise%20bamboo%20forest%20in%20Rizhao&image_size=square' }
    ],
    festivals: [
      { name: '日照海洋文化节', time: '7月', description: '海洋主题活动' },
      { name: '日照绿茶文化节', time: '5月', description: '展示日照绿茶' },
      { name: '海鲜美食节', time: '8月', description: '品尝日照海鲜' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：海鲜、日照绿茶、煎饼', '交通指南：日照有高铁站', '住宿推荐：海滨酒店', '注意事项：夏季是旅游旺季'],
    itineraries: [
      { day: 1, title: '海滨之旅', activities: ['上午万平口', '中午品尝海鲜', '下午森林公园'] },
      { day: 2, title: '山水之旅', activities: ['上午五莲山', '下午竹洞天', '返程'] }
    ]
  },
  '呼伦贝尔': {
    attractions: [
      { name: '呼伦贝尔大草原', type: '自然景观', rating: 4.9, description: '世界最美草原，广袤无垠', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hulunbuir%20Grassland%20beautiful%20grassland%20in%20Inner%20Mongolia&image_size=square' },
      { name: '呼伦湖', type: '自然景观', rating: 4.6, description: '中国第五大湖，草原明珠', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hulun%20Lake%20beautiful%20lake%20in%20Inner%20Mongolia&image_size=square' },
      { name: '额尔古纳湿地', type: '自然景观', rating: 4.7, description: '亚洲最大湿地，候鸟天堂', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ergun%20Wetland%20largest%20wetland%20in%20Asia&image_size=square' },
      { name: '满洲里', type: '人文景观', rating: 4.5, description: '边境城市，俄罗斯风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Manzhouli%20border%20city%20Russian%20style&image_size=square' }
    ],
    festivals: [
      { name: '那达慕大会', time: '7月', description: '草原盛会，赛马摔跤' },
      { name: '冰雪节', time: '12月', description: '冬季冰雪旅游' },
      { name: '草原文化节', time: '8月', description: '展示草原文化' }
    ],
    travelTips: ['建议游玩天数：3-5天', '必尝美食：手把肉、烤全羊、奶茶', '交通指南：呼伦贝尔有机场，建议自驾或包车', '住宿推荐：草原度假村或满洲里', '注意事项：草原温差大，注意保暖'],
    itineraries: [
      { day: 1, title: '草原之旅', activities: ['上午草原风光', '中午品尝手把肉', '下午骑马'] },
      { day: 2, title: '湿地之旅', activities: ['上午额尔古纳湿地', '下午呼伦湖', '晚上篝火晚会'] },
      { day: 3, title: '边境之旅', activities: ['上午满洲里', '下午国门景区', '返程'] }
    ]
  },
  '舟山': {
    attractions: [
      { name: '普陀山', type: '人文景观', rating: 4.8, description: '佛教名山，观音道场', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Putuo%20Mountain%20Buddhist%20sacred%20mountain&image_size=square' },
      { name: '朱家尖', type: '自然景观', rating: 4.6, description: '沙雕艺术故乡，沙滩美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhujiajian%20beautiful%20beach%20in%20Zhoushan&image_size=square' },
      { name: '桃花岛', type: '特色体验', rating: 4.5, description: '金庸笔下的桃花岛', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taohua%20Island%20beautiful%20island%20in%20Zhejiang&image_size=square' },
      { name: '嵊泗列岛', type: '自然景观', rating: 4.5, description: '海岛风光，海鲜丰富', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shengsi%20Islands%20beautiful%20islands%20in%20Zhejiang&image_size=square' }
    ],
    festivals: [
      { name: '普陀山南海观音文化节', time: '11月', description: '佛教文化盛会' },
      { name: '舟山海鲜美食节', time: '9月', description: '品尝海鲜' },
      { name: '沙雕节', time: '7月', description: '朱家尖沙雕艺术展' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：海鲜、观音饼、海鲜面', '交通指南：舟山有机场，需乘船前往各岛', '住宿推荐：普陀山或朱家尖', '注意事项：普陀山需提前预约'],
    itineraries: [
      { day: 1, title: '普陀山之旅', activities: ['上午乘船前往普陀山', '游览普陀山', '晚上住岛上'] },
      { day: 2, title: '朱家尖之旅', activities: ['上午朱家尖', '下午沙雕艺术', '晚上海鲜大餐'] },
      { day: 3, title: '海岛之旅', activities: ['上午桃花岛', '下午返程'] }
    ]
  },
  '台州': {
    attractions: [
      { name: '天台山', type: '自然景观', rating: 4.7, description: '佛教名山，天台宗发源地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tiantai%20Mountain%20Buddhist%20sacred%20mountain&image_size=square' },
      { name: '神仙居', type: '自然景观', rating: 4.8, description: '世界地质公园，奇峰怪石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shenxianju%20beautiful%20scenic%20spot%20in%20Zhejiang&image_size=square' },
      { name: '长屿硐天', type: '人文景观', rating: 4.5, description: '人工开凿的石窟奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Changyu%20Cave%20man%20made%20cave%20wonder&image_size=square' },
      { name: '紫阳古街', type: '人文景观', rating: 4.4, description: '千年古街，临海古城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ziyang%20Old%20Street%20traditional%20Chinese%20street&image_size=square' }
    ],
    festivals: [
      { name: '天台山旅游节', time: '10月', description: '展示天台山文化' },
      { name: '神仙居文化节', time: '9月', description: '展示神仙居风光' },
      { name: '杨梅节', time: '6月', description: '仙居杨梅丰收节' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：台州小吃、姜汤面、麦虾', '交通指南：台州有高铁站', '住宿推荐：天台或仙居', '注意事项：神仙居需游玩一天'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午天台山', '中午品尝台州美食', '下午继续游览'] },
      { day: 2, title: '奇观之旅', activities: ['上午神仙居', '下午长屿硐天', '返程'] }
    ]
  },
  '温州': {
    attractions: [
      { name: '雁荡山', type: '自然景观', rating: 4.8, description: '世界地质公园，奇峰怪石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yandang%20Mountain%20beautiful%20mountains%20in%20Zhejiang&image_size=square' },
      { name: '楠溪江', type: '自然景观', rating: 4.6, description: '山水风光，田园美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nanxi%20River%20beautiful%20river%20in%20Wenzhou&image_size=square' },
      { name: '江心屿', type: '人文景观', rating: 4.5, description: '江中孤岛，双塔对峙', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiangxin%20Island%20beautiful%20island%20in%20Wenzhou&image_size=square' },
      { name: '泰顺廊桥', type: '人文景观', rating: 4.5, description: '世界文化遗产，古桥奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taishun%20Covered%20Bridges%20ancient%20Chinese%20bridges&image_size=square' }
    ],
    festivals: [
      { name: '雁荡山旅游节', time: '10月', description: '展示雁荡山风光' },
      { name: '楠溪江文化节', time: '9月', description: '展示楠溪江文化' },
      { name: '温州美食节', time: '11月', description: '品尝温州美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：温州炒粉干、鱼圆、糯米饭', '交通指南：温州有机场和高铁站', '住宿推荐：雁荡山附近或温州市区', '注意事项：雁荡山夜景非常漂亮'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午雁荡山', '中午品尝温州美食', '下午继续游览'] },
      { day: 2, title: '山水之旅', activities: ['上午楠溪江', '下午江心屿', '返程'] }
    ]
  },
  '珠海': {
    attractions: [
      { name: '情侣路', type: '自然景观', rating: 4.6, description: '浪漫海滨大道，情侣漫步胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhuhai%20Lovers%20Road%20romantic%20coastal%20avenue&image_size=square' },
      { name: '长隆海洋王国', type: '特色体验', rating: 4.8, description: '大型海洋主题乐园', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chimelong%20Ocean%20Park%20aquatic%20theme%20park&image_size=square' },
      { name: '圆明新园', type: '人文景观', rating: 4.5, description: '仿圆明园建造的主题公园', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=New%20Old%20Summer%20Palace%20theme%20park%20in%20Zhuhai&image_size=square' },
      { name: '外伶仃岛', type: '自然景观', rating: 4.5, description: '海岛风光，文天祥名句出处', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wailingding%20Island%20beautiful%20island%20in%20Zhuhai&image_size=square' }
    ],
    festivals: [
      { name: '珠海国际航展', time: '11月', description: '世界三大航展之一' },
      { name: '长隆海洋王国主题活动', time: '全年', description: '海洋主题活动' },
      { name: '沙滩音乐节', time: '7月', description: '海边音乐盛会' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：海鲜、横琴蚝、虾饺', '交通指南：珠海有机场，可乘港珠澳大桥前往澳门', '住宿推荐：情侣路附近酒店', '注意事项：长隆需游玩一天'],
    itineraries: [
      { day: 1, title: '长隆之旅', activities: ['上午长隆海洋王国', '中午园内用餐', '下午继续游玩'] },
      { day: 2, title: '城市之旅', activities: ['上午情侣路', '中午品尝海鲜', '下午圆明新园'] }
    ]
  },
  '柳州': {
    attractions: [
      { name: '柳侯公园', type: '人文景观', rating: 4.5, description: '纪念柳宗元的公园', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liuhou%20Park%20beautiful%20city%20park%20in%20Liuzhou&image_size=square' },
      { name: '龙潭公园', type: '自然景观', rating: 4.6, description: '山水风光，少数民族风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Longtan%20Park%20beautiful%20scenic%20spot%20in%20Guangxi&image_size=square' },
      { name: '百里柳江', type: '自然景观', rating: 4.5, description: '柳江两岸风光，夜景美丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baili%20Liujiang%20beautiful%20river%20in%20Liuzhou&image_size=square' },
      { name: '程阳风雨桥', type: '人文景观', rating: 4.6, description: '世界文化遗产，侗族建筑', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chengyang%20Wind%20and%20Rain%20Bridge%20traditional%20Dong%20bridge&image_size=square' }
    ],
    festivals: [
      { name: '柳州国际水上狂欢节', time: '10月', description: '水上活动盛会' },
      { name: '螺蛳粉美食节', time: '9月', description: '品尝螺蛳粉' },
      { name: '侗族大歌节', time: '11月', description: '侗族传统歌唱节日' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：螺蛳粉、柳州酸、鸭脚煲', '交通指南：柳州有机场和高铁站', '住宿推荐：柳江附近酒店', '注意事项：程阳风雨桥需包车前往'],
    itineraries: [
      { day: 1, title: '城市之旅', activities: ['上午柳侯公园', '中午品尝螺蛳粉', '下午龙潭公园'] },
      { day: 2, title: '山水之旅', activities: ['上午程阳风雨桥', '下午百里柳江', '晚上看夜景'] }
    ]
  },
  '绍兴': {
    attractions: [
      { name: '鲁迅故里', type: '人文景观', rating: 4.7, description: '鲁迅故居，课本中的场景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lu%20Xun%20Former%20Residence%20cultural%20site%20in%20Shaoxing&image_size=square' },
      { name: '沈园', type: '人文景观', rating: 4.6, description: '宋代园林，陆游唐琬爱情故事', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shen%20Garden%20ancient%20Chinese%20garden%20in%20Shaoxing&image_size=square' },
      { name: '东湖', type: '自然景观', rating: 4.5, description: '山水风光，悬崖峭壁', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=East%20Lake%20beautiful%20lake%20in%20Shaoxing&image_size=square' },
      { name: '兰亭', type: '人文景观', rating: 4.5, description: '王羲之书法圣地，曲水流觞', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lanting%20traditional%20Chinese%20calligraphy%20site&image_size=square' }
    ],
    festivals: [
      { name: '鲁迅文化节', time: '10月', description: '纪念鲁迅，文化盛会' },
      { name: '黄酒节', time: '11月', description: '绍兴黄酒文化展示' },
      { name: '书法节', time: '4月', description: '兰亭书法节' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：绍兴黄酒、茴香豆、绍兴臭豆腐', '交通指南：绍兴有高铁站，距杭州30分钟', '住宿推荐：鲁迅故里附近', '注意事项：绍兴是水乡，可体验乌篷船'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午鲁迅故里', '中午品尝绍兴美食', '下午沈园'] },
      { day: 2, title: '山水之旅', activities: ['上午东湖', '下午兰亭', '返程'] }
    ]
  },
  '嘉兴': {
    attractions: [
      { name: '南湖', type: '自然景观', rating: 4.6, description: '红色旅游圣地，中共一大召开地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=South%20Lake%20red%20tourism%20in%20Jiaxing&image_size=square' },
      { name: '乌镇', type: '人文景观', rating: 4.8, description: '江南水乡古镇，世界互联网大会举办地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuzhen%20beautiful%20water%20town%20in%20Zhejiang&image_size=square' },
      { name: '西塘', type: '人文景观', rating: 4.7, description: '千年古镇，小桥流水', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xitang%20ancient%20water%20town%20in%20Zhejiang&image_size=square' },
      { name: '盐官古镇', type: '人文景观', rating: 4.4, description: '观潮胜地，海宁潮', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yanguan%20ancient%20town%20tide%20viewing%20in%20Zhejiang&image_size=square' }
    ],
    festivals: [
      { name: '中国乌镇戏剧节', time: '10月', description: '国际戏剧盛会' },
      { name: '南湖文化节', time: '9月', description: '展示南湖文化' },
      { name: '海宁观潮节', time: '9月', description: '观看海宁潮' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：嘉兴粽子、南湖菱、酱鸭', '交通指南：嘉兴有高铁站，距上海1小时', '住宿推荐：乌镇或西塘民宿', '注意事项：乌镇夜游景色最美'],
    itineraries: [
      { day: 1, title: '古镇之旅', activities: ['上午乌镇', '中午品尝乌镇美食', '下午古镇游览'] },
      { day: 2, title: '南湖之旅', activities: ['上午南湖', '下午西塘', '返程'] }
    ]
  },
  '湖州': {
    attractions: [
      { name: '南浔古镇', type: '人文景观', rating: 4.7, description: '江南古镇，富商故里', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nanxun%20ancient%20town%20beautiful%20water%20town&image_size=square' },
      { name: '太湖', type: '自然景观', rating: 4.5, description: '太湖风光，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taihu%20Lake%20beautiful%20lake%20in%20Zhejiang&image_size=square' },
      { name: '莫干山', type: '自然景观', rating: 4.7, description: '避暑胜地，名人别墅', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Moganshan%20beautiful%20mountain%20resort&image_size=square' },
      { name: '安吉竹海', type: '自然景观', rating: 4.6, description: '中国大竹海，电影《卧虎藏龙》取景地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Anji%20Bamboo%20Forest%20beautiful%20bamboo%20scenery&image_size=square' }
    ],
    festivals: [
      { name: '南浔古镇文化节', time: '10月', description: '展示古镇文化' },
      { name: '莫干山登山节', time: '9月', description: '登山健身活动' },
      { name: '安吉白茶节', time: '4月', description: '展示安吉白茶' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：湖州粽子、千张包、太湖蟹', '交通指南：湖州有高铁站', '住宿推荐：南浔古镇或莫干山', '注意事项：莫干山夏季避暑好去处'],
    itineraries: [
      { day: 1, title: '古镇之旅', activities: ['上午南浔古镇', '中午品尝湖州美食', '下午古镇游览'] },
      { day: 2, title: '山水之旅', activities: ['上午莫干山', '下午安吉竹海', '返程'] }
    ]
  },
  '呼和浩特': {
    attractions: [
      { name: '大召寺', type: '人文景观', rating: 4.5, description: '藏传佛教寺院，明清建筑', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dazhao%20Temple%20Tibetan%20Buddhist%20temple%20in%20Hohhot&image_size=square' },
      { name: '昭君博物院', type: '人文景观', rating: 4.6, description: '纪念王昭君，汉匈和亲历史', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wang%20Zhaojun%20Memorial%20historical%20museum&image_size=square' },
      { name: '塞上老街', type: '人文景观', rating: 4.4, description: '明清老街，民族风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Saishang%20Old%20Street%20traditional%20Chinese%20street&image_size=square' },
      { name: '希拉穆仁草原', type: '自然景观', rating: 4.6, description: '草原风光，骑马体验', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xilamuren%20Grassland%20beautiful%20grassland%20in%20Inner%20Mongolia&image_size=square' }
    ],
    festivals: [
      { name: '昭君文化节', time: '7月', description: '纪念王昭君，文化盛会' },
      { name: '那达慕大会', time: '8月', description: '草原盛会，赛马摔跤' },
      { name: '冰雪节', time: '12月', description: '冬季冰雪旅游' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：手把肉、烤全羊、奶茶', '交通指南：呼和浩特有机场和高铁站', '住宿推荐：市区或草原度假村', '注意事项：草原温差大，注意保暖'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午大召寺', '中午品尝蒙古美食', '下午昭君博物院'] },
      { day: 2, title: '草原之旅', activities: ['上午希拉穆仁草原', '下午骑马', '晚上篝火晚会'] }
    ]
  },
  '包头': {
    attractions: [
      { name: '五当召', type: '人文景观', rating: 4.6, description: '藏传佛教寺院，内蒙古最大寺院', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wudangzhao%20Temple%20large%20Buddhist%20monastery%20in%20Baotou&image_size=square' },
      { name: '南海湿地', type: '自然景观', rating: 4.5, description: '湿地风光，候鸟栖息地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nanhai%20Wetland%20beautiful%20wetland%20in%20Baotou&image_size=square' },
      { name: '赛汗塔拉草原', type: '自然景观', rating: 4.4, description: '城市中的草原', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Saihantala%20Grassland%20urban%20grassland%20in%20Baotou&image_size=square' },
      { name: '梅力更', type: '自然景观', rating: 4.4, description: '山水风光，瀑布众多', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Meiligeng%20beautiful%20waterfall%20scenic%20spot&image_size=square' }
    ],
    festivals: [
      { name: '包头草原文化节', time: '8月', description: '草原文化展示' },
      { name: '那达慕大会', time: '7月', description: '蒙古族传统盛会' },
      { name: '冰雪节', time: '12月', description: '冬季冰雪活动' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：手把肉、烤全羊、奶茶', '交通指南：包头有机场和高铁站', '住宿推荐：包头市区', '注意事项：草原夏季最佳'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午五当召', '中午品尝蒙古美食', '下午南海湿地'] },
      { day: 2, title: '草原之旅', activities: ['上午赛汗塔拉草原', '下午梅力更', '返程'] }
    ]
  },
  '鄂尔多斯': {
    attractions: [
      { name: '成吉思汗陵', type: '人文景观', rating: 4.7, description: '成吉思汗祭祀地，蒙古族圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Genghis%20Khan%20Mausoleum%20Mongolian%20sacred%20site&image_size=square' },
      { name: '响沙湾', type: '特色体验', rating: 4.6, description: '沙漠旅游胜地，沙丘唱歌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiangsha%20Bay%20singing%20sand%20dunes%20in%20Inner%20Mongolia&image_size=square' },
      { name: '鄂尔多斯草原', type: '自然景观', rating: 4.5, description: '草原风光，民俗体验', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ordos%20Grassland%20beautiful%20grassland%20in%20Inner%20Mongolia&image_size=square' },
      { name: '康巴什新区', type: '人文景观', rating: 4.4, description: '现代化新城，建筑艺术', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kangbashi%20New%20District%20modern%20city%20in%20Ordos&image_size=square' }
    ],
    festivals: [
      { name: '成吉思汗旅游文化节', time: '8月', description: '纪念成吉思汗，文化盛会' },
      { name: '那达慕大会', time: '7月', description: '蒙古族传统盛会' },
      { name: '沙漠文化节', time: '6月', description: '沙漠旅游活动' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：手把肉、烤全羊、奶茶', '交通指南：鄂尔多斯有机场', '住宿推荐：康巴什新区或草原度假村', '注意事项：沙漠地区注意防晒'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午成吉思汗陵', '中午品尝蒙古美食', '下午康巴什新区'] },
      { day: 2, title: '沙漠之旅', activities: ['上午响沙湾', '下午鄂尔多斯草原', '返程'] }
    ]
  },
  '晋中': {
    attractions: [
      { name: '平遥古城', type: '人文景观', rating: 4.8, description: '世界文化遗产，保存最完整的古城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pingyao%20ancient%20city%20world%20heritage%20in%20Shanxi&image_size=square' },
      { name: '乔家大院', type: '人文景观', rating: 4.6, description: '晋商大院，建筑艺术', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qiao%20Family%20Courtyard%20traditional%20Chinese%20architecture&image_size=square' },
      { name: '王家大院', type: '人文景观', rating: 4.5, description: '中国民间故宫，规模宏大', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wang%20Family%20Courtyard%20large%20traditional%20courtyard&image_size=square' },
      { name: '绵山', type: '自然景观', rating: 4.6, description: '道教名山，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mian%20Mountain%20beautiful%20mountain%20in%20Shanxi&image_size=square' }
    ],
    festivals: [
      { name: '平遥国际摄影大展', time: '9月', description: '国际摄影盛会' },
      { name: '晋商文化节', time: '10月', description: '展示晋商文化' },
      { name: '绵山文化节', time: '8月', description: '展示绵山风光' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：平遥牛肉、刀削面、太谷饼', '交通指南：晋中有高铁站', '住宿推荐：平遥古城内', '注意事项：古城夜游非常漂亮'],
    itineraries: [
      { day: 1, title: '古城之旅', activities: ['上午平遥古城', '中午品尝平遥牛肉', '下午古城游览'] },
      { day: 2, title: '大院之旅', activities: ['上午乔家大院', '下午王家大院', '返程'] }
    ]
  },
  '库尔勒': {
    attractions: [
      { name: '铁门关', type: '人文景观', rating: 4.5, description: '丝绸之路关隘，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tiemenguan%20Pass%20ancient%20silk%20road%20gateway&image_size=square' },
      { name: '孔雀河', type: '自然景观', rating: 4.4, description: '穿城而过的美丽河流', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Peacock%20River%20beautiful%20river%20in%20Korla&image_size=square' },
      { name: '巴音布鲁克草原', type: '自然景观', rating: 4.7, description: '高山草原，天鹅湖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bayanbulak%20Grassland%20beautiful%20alpine%20meadow&image_size=square' },
      { name: '博斯腾湖', type: '自然景观', rating: 4.6, description: '中国最大内陆淡水湖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bosten%20Lake%20largest%20inland%20lake%20in%20China&image_size=square' }
    ],
    festivals: [
      { name: '库尔勒香梨节', time: '9月', description: '香梨丰收节' },
      { name: '巴音布鲁克草原文化节', time: '7月', description: '草原盛会' },
      { name: '博斯腾湖旅游节', time: '8月', description: '湖泊旅游活动' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：香梨、烤包子、手抓饭', '交通指南：库尔勒有机场', '住宿推荐：库尔勒市区', '注意事项：草原地区温差大'],
    itineraries: [
      { day: 1, title: '城市之旅', activities: ['上午铁门关', '中午品尝当地美食', '下午孔雀河'] },
      { day: 2, title: '草原之旅', activities: ['上午巴音布鲁克草原', '下午博斯腾湖', '返程'] }
    ]
  },
  '唐山': {
    attractions: [
      { name: '清东陵', type: '人文景观', rating: 4.7, description: '世界文化遗产，清代皇家陵寝', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Eastern%20Qing%20Tombs%20world%20heritage%20imperial%20mausoleums&image_size=square' },
      { name: '南湖公园', type: '自然景观', rating: 4.5, description: '城市公园，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=South%20Lake%20Park%20beautiful%20city%20park%20in%20Tangshan&image_size=square' },
      { name: '唐山地震遗址公园', type: '人文景观', rating: 4.4, description: '纪念唐山大地震', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tangshan%20Earthquake%20Memorial%20Park%20historic%20site&image_size=square' },
      { name: '曹妃甸', type: '自然景观', rating: 4.4, description: '海滨风光，湿地景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Caofeidian%20beautiful%20coastal%20area%20in%20Hebei&image_size=square' }
    ],
    festivals: [
      { name: '唐山陶瓷文化节', time: '10月', description: '展示唐山陶瓷' },
      { name: '南湖灯会', time: '春节', description: '大型灯会活动' },
      { name: '唐山美食节', time: '9月', description: '品尝唐山美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：唐山麻糖、棋子烧饼、迁西板栗', '交通指南：唐山有机场和高铁站', '住宿推荐：唐山市区', '注意事项：清东陵需游玩半天'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午清东陵', '中午品尝唐山美食', '下午南湖公园'] },
      { day: 2, title: '城市之旅', activities: ['上午地震遗址公园', '下午曹妃甸', '返程'] }
    ]
  },
  '许昌': {
    attractions: [
      { name: '春秋楼', type: '人文景观', rating: 4.5, description: '关羽夜读《春秋》处', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chunqiu%20Tower%20historical%20site%20in%20Xuchang&image_size=square' },
      { name: '灞陵桥', type: '人文景观', rating: 4.4, description: '关羽挑袍处，三国文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baling%20Bridge%20historical%20bridge%20in%20Xuchang&image_size=square' },
      { name: '花都温泉', type: '特色体验', rating: 4.5, description: '温泉度假，养生休闲', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huadu%20Hot%20Spring%20spa%20resort%20in%20Henan&image_size=square' },
      { name: '神垕古镇', type: '人文景观', rating: 4.6, description: '钧瓷之乡，千年古镇', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shenhou%20ancient%20town%20Jun%20porcelain%20center&image_size=square' }
    ],
    festivals: [
      { name: '三国文化旅游周', time: '4月', description: '三国文化盛会' },
      { name: '钧瓷文化节', time: '10月', description: '展示钧瓷艺术' },
      { name: '温泉文化节', time: '12月', description: '温泉体验活动' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：许昌热干面、钧瓷宴、羊肉汤', '交通指南：许昌有高铁站', '住宿推荐：许昌市区或花都温泉', '注意事项：钧瓷值得购买'],
    itineraries: [
      { day: 1, title: '三国文化之旅', activities: ['上午春秋楼', '中午品尝许昌美食', '下午灞陵桥'] },
      { day: 2, title: '古镇之旅', activities: ['上午神垕古镇', '下午花都温泉', '返程'] }
    ]
  },
  '南阳': {
    attractions: [
      { name: '武侯祠', type: '人文景观', rating: 4.6, description: '诸葛亮躬耕地，三国文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuhou%20Shrine%20Zhuge%20Liang%20memorial%20in%20Nanyang&image_size=square' },
      { name: '医圣祠', type: '人文景观', rating: 4.5, description: '纪念张仲景，医圣故里', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhang%20Zhongjing%20Memorial%20traditional%20Chinese%20medicine&image_size=square' },
      { name: '卧龙岗', type: '自然景观', rating: 4.4, description: '诸葛亮隐居地，山水风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wolonggang%20beautiful%20mountain%20in%20Nanyang&image_size=square' },
      { name: '丹江口水库', type: '自然景观', rating: 4.5, description: '亚洲最大人工湖，南水北调源头', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Danjiangkou%20Reservoir%20large%20man%20made%20lake&image_size=square' }
    ],
    festivals: [
      { name: '诸葛亮文化旅游节', time: '9月', description: '纪念诸葛亮，文化盛会' },
      { name: '张仲景医药文化节', time: '10月', description: '中医药文化展示' },
      { name: '玉雕节', time: '4月', description: '南阳玉雕展示' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：南阳牛肉汤、板面、方城烩面', '交通指南：南阳有机场和高铁站', '住宿推荐：南阳市区', '注意事项：武侯祠需请讲解员'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午武侯祠', '中午品尝南阳美食', '下午医圣祠'] },
      { day: 2, title: '山水之旅', activities: ['上午卧龙岗', '下午丹江口水库', '返程'] }
    ]
  },
  '商丘': {
    attractions: [
      { name: '商丘古城', type: '人文景观', rating: 4.6, description: '保存完好的古城，商文化发源地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shangqiu%20ancient%20city%20well%20preserved%20city%20wall&image_size=square' },
      { name: '芒砀山', type: '人文景观', rating: 4.5, description: '汉高祖刘邦斩蛇起义地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mangdang%20Mountain%20historical%20site%20in%20Henan&image_size=square' },
      { name: '南湖', type: '自然景观', rating: 4.4, description: '古城内湖，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=South%20Lake%20beautiful%20lake%20in%20Shangqiu&image_size=square' },
      { name: '睢县北湖', type: '自然景观', rating: 4.3, description: '中原水城，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Suixian%20North%20Lake%20beautiful%20lake%20in%20Henan&image_size=square' }
    ],
    festivals: [
      { name: '商丘国际华商节', time: '10月', description: '商文化盛会' },
      { name: '芒砀山文化节', time: '9月', description: '展示芒砀山文化' },
      { name: '黄河故道生态旅游节', time: '5月', description: '生态旅游活动' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：商丘水激馍、糟鱼、砂锅', '交通指南：商丘有高铁站', '住宿推荐：商丘古城附近', '注意事项：古城夜景美丽'],
    itineraries: [
      { day: 1, title: '古城之旅', activities: ['上午商丘古城', '中午品尝商丘美食', '下午南湖'] },
      { day: 2, title: '历史之旅', activities: ['上午芒砀山', '下午睢县北湖', '返程'] }
    ]
  },
  '岳阳': {
    attractions: [
      { name: '岳阳楼', type: '人文景观', rating: 4.7, description: '江南三大名楼之一，范仲淹《岳阳楼记》', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yueyang%20Tower%20famous%20Chinese%20tower%20in%20Hunan&image_size=square' },
      { name: '洞庭湖', type: '自然景观', rating: 4.6, description: '中国第二大淡水湖，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dongting%20Lake%20beautiful%20lake%20in%20Hunan&image_size=square' },
      { name: '君山岛', type: '自然景观', rating: 4.5, description: '洞庭湖中岛，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=J君山%20Island%20beautiful%20island%20in%20Dongting%20Lake&image_size=square' },
      { name: '张谷英村', type: '人文景观', rating: 4.4, description: '明清古村落，建筑奇特', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangguying%20Village%20ancient%20Chinese%20village&image_size=square' }
    ],
    festivals: [
      { name: '岳阳楼文化旅游节', time: '9月', description: '展示岳阳楼文化' },
      { name: '洞庭湖国际龙舟节', time: '端午节', description: '龙舟竞渡' },
      { name: '岳阳美食节', time: '11月', description: '品尝岳阳美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：岳阳鱼、君山银针茶、米粉', '交通指南：岳阳有高铁站', '住宿推荐：岳阳楼附近', '注意事项：洞庭湖最佳观赏季节为秋季'],
    itineraries: [
      { day: 1, title: '名楼之旅', activities: ['上午岳阳楼', '中午品尝岳阳美食', '下午洞庭湖'] },
      { day: 2, title: '岛屿之旅', activities: ['上午君山岛', '下午张谷英村', '返程'] }
    ]
  },
  '衡阳': {
    attractions: [
      { name: '南岳衡山', type: '自然景观', rating: 4.8, description: '五岳独秀，佛教名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nanyue%20Hengshan%20beautiful%20mountain%20in%20Hunan&image_size=square' },
      { name: '石鼓书院', type: '人文景观', rating: 4.5, description: '中国四大书院之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shigu%20Academy%20ancient%20Chinese%20academy&image_size=square' },
      { name: '衡阳博物馆', type: '人文景观', rating: 4.4, description: '展示衡阳历史文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hengyang%20Museum%20local%20history%20exhibition&image_size=square' },
      { name: '回雁峰', type: '自然景观', rating: 4.4, description: '南岳第一峰，传说大雁南飞至此', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huiyan%20Peak%20beautiful%20peak%20in%20Hunan&image_size=square' }
    ],
    festivals: [
      { name: '南岳衡山国际寿文化节', time: '9月', description: '寿文化盛会' },
      { name: '衡山登山节', time: '10月', description: '登山健身活动' },
      { name: '衡阳美食节', time: '11月', description: '品尝衡阳美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：衡阳鱼粉、坛子菜、腊肉', '交通指南：衡阳有机场和高铁站', '住宿推荐：衡山附近或衡阳市区', '注意事项：衡山需游玩1-2天'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午登山衡山', '游览景点', '晚上住山上'] },
      { day: 2, title: '文化之旅', activities: ['上午石鼓书院', '下午回雁峰', '返程'] }
    ]
  },
  '常德': {
    attractions: [
      { name: '桃花源', type: '特色体验', rating: 4.6, description: '陶渊明笔下的世外桃源', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taohuayuan%20peach%20blossom%20garden%20in%20Hunan&image_size=square' },
      { name: '柳叶湖', type: '自然景观', rating: 4.5, description: '城市湖泊，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liuye%20Lake%20beautiful%20lake%20in%20Changde&image_size=square' },
      { name: '壶瓶山', type: '自然景观', rating: 4.5, description: '湖南屋脊，自然风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huping%20Mountain%20beautiful%20mountain%20in%20Hunan&image_size=square' },
      { name: '诗墙公园', type: '人文景观', rating: 4.4, description: '世界最长的诗书画刻艺术墙', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Poetry%20Wall%20Park%20unique%20cultural%20park&image_size=square' }
    ],
    festivals: [
      { name: '桃花源文化旅游节', time: '3月', description: '桃花盛开季节' },
      { name: '常德米粉节', time: '5月', description: '品尝常德米粉' },
      { name: '柳叶湖旅游节', time: '9月', description: '展示柳叶湖风光' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：常德米粉、酱板鸭、擂茶', '交通指南：常德有高铁站', '住宿推荐：常德市区或桃花源', '注意事项：桃花源春季最美'],
    itineraries: [
      { day: 1, title: '桃花源之旅', activities: ['上午桃花源', '中午品尝米粉', '下午继续游览'] },
      { day: 2, title: '城市之旅', activities: ['上午柳叶湖', '下午诗墙公园', '返程'] }
    ]
  },
  '湘潭': {
    attractions: [
      { name: '韶山', type: '人文景观', rating: 4.8, description: '伟人故里，红色旅游圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shaoshan%20red%20tourism%20in%20Hunan&image_size=square' },
      { name: '毛泽东故居', type: '人文景观', rating: 4.7, description: '毛泽东出生成长地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mao%20Zedong%20Former%20Residence%20historic%20site&image_size=square' },
      { name: '彭德怀纪念馆', type: '人文景观', rating: 4.5, description: '纪念彭德怀元帅', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Peng%20Dehuai%20Memorial%20red%20tourism&image_size=square' },
      { name: '齐白石纪念馆', type: '人文景观', rating: 4.4, description: '纪念国画大师齐白石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qi%20Baishi%20Memorial%20art%20museum&image_size=square' }
    ],
    festivals: [
      { name: '韶山红色文化节', time: '12月', description: '红色文化盛会' },
      { name: '齐白石国际文化艺术节', time: '10月', description: '展示齐白石艺术' },
      { name: '湘潭美食节', time: '9月', description: '品尝湘潭美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：湘潭臭豆腐、米粉、槟榔', '交通指南：湘潭有高铁站，距长沙30分钟', '住宿推荐：韶山或湘潭市区', '注意事项：韶山需提前预约'],
    itineraries: [
      { day: 1, title: '红色之旅', activities: ['上午毛泽东故居', '中午品尝湘潭美食', '下午韶山'] },
      { day: 2, title: '文化之旅', activities: ['上午彭德怀纪念馆', '下午齐白石纪念馆', '返程'] }
    ]
  },
  '南昌': {
    attractions: [
      { name: '滕王阁', type: '人文景观', rating: 4.6, description: '江南三大名楼之一，王勃《滕王阁序》', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tengwang%20Pavilion%20famous%20Chinese%20tower%20in%20Jiangxi&image_size=square' },
      { name: '八一广场', type: '人文景观', rating: 4.5, description: '纪念南昌起义，英雄城地标', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bayi%20Square%20red%20tourism%20in%20Nanchang&image_size=square' },
      { name: '绳金塔', type: '人文景观', rating: 4.4, description: '千年古塔，南昌地标', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shengjin%20Pagoda%20ancient%20pagoda%20in%20Nanchang&image_size=square' },
      { name: '鄱阳湖候鸟保护区', type: '自然景观', rating: 4.5, description: '候鸟天堂，冬季观鸟', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Poyang%20Lake%20bird%20sanctuary%20in%20Jiangxi&image_size=square' }
    ],
    festivals: [
      { name: '南昌国际军乐节', time: '10月', description: '军乐表演盛会' },
      { name: '滕王阁文化节', time: '9月', description: '展示滕王阁文化' },
      { name: '南昌美食节', time: '11月', description: '品尝南昌美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：南昌拌粉、瓦罐汤、炒粉', '交通指南：南昌有机场和高铁站', '住宿推荐：南昌市区', '注意事项：滕王阁夜景非常漂亮'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午滕王阁', '中午品尝拌粉', '下午八一广场'] },
      { day: 2, title: '城市之旅', activities: ['上午绳金塔', '下午鄱阳湖', '返程'] }
    ]
  },
  '宣城': {
    attractions: [
      { name: '敬亭山', type: '自然景观', rating: 4.5, description: '李白多次登临的名山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingting%20Mountain%20beautiful%20mountain%20in%20Anhui&image_size=square' },
      { name: '宣纸文化园', type: '特色体验', rating: 4.6, description: '宣纸制作工艺展示', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xuan%20Paper%20Cultural%20Park%20traditional%20Chinese%20paper&image_size=square' },
      { name: '查济古镇', type: '人文景观', rating: 4.6, description: '保存完好的古村落', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chaji%20ancient%20village%20beautiful%20traditional%20village&image_size=square' },
      { name: '桃花潭', type: '自然景观', rating: 4.5, description: '李白"桃花潭水深千尺"出处', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taohua%20Lake%20beautiful%20lake%20in%20Anhui&image_size=square' }
    ],
    festivals: [
      { name: '宣纸文化节', time: '10月', description: '展示宣纸文化' },
      { name: '敬亭山登山节', time: '9月', description: '登山健身活动' },
      { name: '宣城美食节', time: '11月', description: '品尝宣城美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：宣城烧饼、水阳三宝、豆腐', '交通指南：宣城有高铁站', '住宿推荐：查济古镇或宣城城区', '注意事项：宣纸值得购买'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午敬亭山', '中午品尝宣城美食', '下午桃花潭'] },
      { day: 2, title: '文化之旅', activities: ['上午宣纸文化园', '下午查济古镇', '返程'] }
    ]
  },
  '铜陵': {
    attractions: [
      { name: '天井湖', type: '自然景观', rating: 4.4, description: '城市公园，湖中有山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tianjing%20Lake%20beautiful%20city%20park%20in%20Tongling&image_size=square' },
      { name: '凤凰山', type: '自然景观', rating: 4.5, description: '牡丹之乡，自然风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fenghuang%20Mountain%20beautiful%20scenic%20spot&image_size=square' },
      { name: '大通古镇', type: '人文景观', rating: 4.4, description: '千年古镇，渔乡风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Datong%20ancient%20town%20traditional%20fishing%20village&image_size=square' },
      { name: '铜文化园', type: '特色体验', rating: 4.3, description: '展示铜陵铜文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Copper%20Culture%20Park%20industrial%20heritage&image_size=square' }
    ],
    festivals: [
      { name: '牡丹文化节', time: '4月', description: '凤凰山牡丹盛开' },
      { name: '铜文化节', time: '10月', description: '展示铜陵铜文化' },
      { name: '美食节', time: '9月', description: '品尝铜陵美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：铜陵酥糖、生姜、大通茶干', '交通指南：铜陵有高铁站', '住宿推荐：铜陵市区', '注意事项：凤凰山牡丹春季最美'],
    itineraries: [
      { day: 1, title: '山水之旅', activities: ['上午天井湖', '中午品尝铜陵美食', '下午凤凰山'] },
      { day: 2, title: '古镇之旅', activities: ['上午大通古镇', '下午铜文化园', '返程'] }
    ]
  },
  '滁州': {
    attractions: [
      { name: '琅琊山', type: '自然景观', rating: 4.6, description: '醉翁亭所在地，山水秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Langya%20Mountain%20beautiful%20scenic%20spot%20in%20Anhui&image_size=square' },
      { name: '醉翁亭', type: '人文景观', rating: 4.5, description: '中国四大名亭之一，欧阳修《醉翁亭记》', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zuiweng%20Pavilion%20famous%20Chinese%20pavilion&image_size=square' },
      { name: '明皇陵', type: '人文景观', rating: 4.4, description: '明太祖朱元璋父母陵墓', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ming%20Imperial%20Tomb%20ancient%20mausoleum&image_size=square' },
      { name: '吴敬梓纪念馆', type: '人文景观', rating: 4.3, description: '纪念《儒林外史》作者', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wu%20Jingzi%20Memorial%20literature%20museum&image_size=square' }
    ],
    festivals: [
      { name: '醉翁亭文化节', time: '10月', description: '纪念欧阳修' },
      { name: '琅琊山登山节', time: '9月', description: '登山健身活动' },
      { name: '滁州美食节', time: '11月', description: '品尝滁州美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：滁州琅琊酥糖、管坝牛肉、担子馄饨', '交通指南：滁州有高铁站', '住宿推荐：琅琊山附近', '注意事项：醉翁亭需请讲解员'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午琅琊山', '中午品尝滁州美食', '下午醉翁亭'] },
      { day: 2, title: '文化之旅', activities: ['上午明皇陵', '下午吴敬梓纪念馆', '返程'] }
    ]
  },
  '龙岩': {
    attractions: [
      { name: '永定土楼', type: '人文景观', rating: 4.8, description: '世界文化遗产，客家土楼群', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yongding%20Tulou%20traditional%20Hakka%20round%20houses&image_size=square' },
      { name: '古田会议会址', type: '人文景观', rating: 4.6, description: '红色旅游圣地，重要历史会议地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Gutian%20Meeting%20Site%20red%20tourism%20in%20Fujian&image_size=square' },
      { name: '冠豸山', type: '自然景观', rating: 4.5, description: '丹霞地貌，山清水秀', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guanzhai%20Mountain%20beautiful%20danxia%20landform&image_size=square' },
      { name: '长汀古城', type: '人文景观', rating: 4.6, description: '千年古城，客家首府', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Changting%20ancient%20city%20traditional%20Hakka%20town&image_size=square' }
    ],
    festivals: [
      { name: '客家文化节', time: '10月', description: '展示客家文化' },
      { name: '土楼文化节', time: '9月', description: '展示土楼建筑艺术' },
      { name: '龙岩美食节', time: '11月', description: '品尝龙岩美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：龙岩清汤粉、芋子包、簸箕板', '交通指南：龙岩有机场和高铁站', '住宿推荐：永定土楼附近或龙岩市区', '注意事项：土楼夜景非常漂亮'],
    itineraries: [
      { day: 1, title: '土楼之旅', activities: ['上午永定土楼', '中午品尝客家美食', '下午土楼游览'] },
      { day: 2, title: '红色之旅', activities: ['上午古田会议会址', '下午冠豸山', '返程'] }
    ]
  },
  '宁德': {
    attractions: [
      { name: '太姥山', type: '自然景观', rating: 4.7, description: '世界地质公园，奇石怪洞', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taimu%20Mountain%20beautiful%20scenic%20spot%20in%20Fujian&image_size=square' },
      { name: '白水洋', type: '特色体验', rating: 4.6, description: '世界唯一的浅水广场，玩水胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baishuiyang%20unique%20water%20square%20in%20Fujian&image_size=square' },
      { name: '鸳鸯溪', type: '自然景观', rating: 4.5, description: '鸳鸯之乡，瀑布众多', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yuanyang%20River%20beautiful%20waterfall%20scenic%20spot&image_size=square' },
      { name: '三都澳', type: '自然景观', rating: 4.4, description: '海上天湖，渔排景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sandu%20Bay%20beautiful%20coastal%20area%20in%20Fujian&image_size=square' }
    ],
    festivals: [
      { name: '太姥山文化旅游节', time: '10月', description: '展示太姥山风光' },
      { name: '白水洋文化旅游节', time: '8月', description: '玩水活动盛会' },
      { name: '宁德美食节', time: '9月', description: '品尝宁德美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：宁德肉丸、鱼片、海鲜', '交通指南：宁德有高铁站', '住宿推荐：太姥山附近或宁德市区', '注意事项：白水洋夏季最佳'],
    itineraries: [
      { day: 1, title: '太姥山之旅', activities: ['上午太姥山', '中午品尝宁德美食', '下午继续游览'] },
      { day: 2, title: '玩水之旅', activities: ['上午白水洋', '下午鸳鸯溪', '返程'] }
    ]
  },
  '南平': {
    attractions: [
      { name: '武夷山', type: '自然景观', rating: 4.8, description: '世界自然与文化双遗产，丹霞地貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuyi%20Mountain%20beautiful%20scenic%20spot%20in%20Fujian&image_size=square' },
      { name: '九曲溪', type: '自然景观', rating: 4.7, description: '竹筏漂流，风景如画', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiuqu%20River%20bamboo%20rafting%20in%20Wuyi&image_size=square' },
      { name: '武夷宫', type: '人文景观', rating: 4.5, description: '武夷山核心景区，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuyi%20Palace%20historic%20site%20in%20Fujian&image_size=square' },
      { name: '下梅古村', type: '人文景观', rating: 4.4, description: '茶文化古村，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiamei%20ancient%20village%20tea%20culture&image_size=square' }
    ],
    festivals: [
      { name: '武夷山国际茶文化节', time: '11月', description: '茶文化盛会' },
      { name: '武夷山国际马拉松', time: '10月', description: '体育赛事' },
      { name: '南平美食节', time: '9月', description: '品尝南平美食' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：武夷岩茶、熏鹅、光饼', '交通指南：南平有高铁站，武夷山有机场', '住宿推荐：武夷山景区或南平市区', '注意事项：九曲溪竹筏需提前预约'],
    itineraries: [
      { day: 1, title: '武夷山之旅', activities: ['上午登山武夷山', '中午品尝武夷美食', '下午九曲溪漂流'] },
      { day: 2, title: '文化之旅', activities: ['上午武夷宫', '下午下梅古村', '返程'] }
    ]
  },
  '莆田': {
    attractions: [
      { name: '湄洲岛', type: '人文景观', rating: 4.7, description: '妈祖故乡，世界妈祖文化中心', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Meizhou%20Island%20Mazu%20cultural%20site%20in%20Fujian&image_size=square' },
      { name: '广化寺', type: '人文景观', rating: 4.5, description: '千年古刹，福建四大名寺之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guanghua%20Temple%20ancient%20Buddhist%20temple&image_size=square' },
      { name: '南少林', type: '人文景观', rating: 4.6, description: '南少林武术发源地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Southern%20Shaolin%20Temple%20martial%20arts&image_size=square' },
      { name: '九鲤湖', type: '自然景观', rating: 4.5, description: '九漈瀑布，景色壮观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiuli%20Lake%20beautiful%20waterfall%20scenic%20spot&image_size=square' }
    ],
    festivals: [
      { name: '妈祖文化旅游节', time: '11月', description: '妈祖文化盛会' },
      { name: '南少林武术节', time: '10月', description: '武术表演盛会' },
      { name: '莆田美食节', time: '9月', description: '品尝莆田美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：莆田卤面、兴化米粉、海蛎煎', '交通指南：莆田有高铁站', '住宿推荐：湄洲岛或莆田市区', '注意事项：湄洲岛需乘船前往'],
    itineraries: [
      { day: 1, title: '湄洲岛之旅', activities: ['上午乘船前往湄洲岛', '游览妈祖庙', '晚上住岛上'] },
      { day: 2, title: '文化之旅', activities: ['上午南少林', '下午广化寺', '返程'] }
    ]
  },
  '抚顺': {
    attractions: [
      { name: '赫图阿拉城', type: '人文景观', rating: 4.5, description: '后金都城，满族发源地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hetuala%20City%20Manchu%20historic%20site%20in%20Liaoning&image_size=square' },
      { name: '雷锋纪念馆', type: '人文景观', rating: 4.6, description: '纪念雷锋，学习雷锋精神', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lei%20Feng%20Memorial%20red%20tourism&image_size=square' },
      { name: '萨尔浒风景区', type: '自然景观', rating: 4.4, description: '山水风光，历史战场', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sa%27erhu%20scenic%20area%20beautiful%20landscape&image_size=square' },
      { name: '三块石', type: '自然景观', rating: 4.4, description: '森林公园，自然风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Three%20Stones%20Mountain%20forest%20park&image_size=square' }
    ],
    festivals: [
      { name: '满族文化节', time: '8月', description: '展示满族文化' },
      { name: '雷锋文化节', time: '3月', description: '学习雷锋精神' },
      { name: '抚顺美食节', time: '9月', description: '品尝抚顺美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：抚顺麻辣拌、满族八大碗、煎饼', '交通指南：抚顺有高铁站，距沈阳1小时', '住宿推荐：抚顺市区', '注意事项：赫图阿拉城需请讲解员'],
    itineraries: [
      { day: 1, title: '文化之旅', activities: ['上午赫图阿拉城', '中午品尝满族美食', '下午雷锋纪念馆'] },
      { day: 2, title: '山水之旅', activities: ['上午萨尔浒风景区', '下午三块石', '返程'] }
    ]
  },
  '鞍山': {
    attractions: [
      { name: '千山', type: '自然景观', rating: 4.7, description: '东北明珠，千朵莲花山', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qian%20Mountain%20beautiful%20scenic%20spot%20in%20Liaoning&image_size=square' },
      { name: '玉佛苑', type: '特色体验', rating: 4.6, description: '世界最大玉佛，佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jade%20Buddha%20Garden%20largest%20jade%20Buddha&image_size=square' },
      { name: '汤岗子温泉', type: '特色体验', rating: 4.5, description: '百年温泉，疗养胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tanggangzi%20Hot%20Spring%20spa%20resort&image_size=square' },
      { name: '二一九公园', type: '自然景观', rating: 4.4, description: '城市公园，纪念鞍山解放', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ereryijiu%20Park%20beautiful%20city%20park&image_size=square' }
    ],
    festivals: [
      { name: '千山登山节', time: '9月', description: '登山健身活动' },
      { name: '玉佛文化节', time: '10月', description: '展示玉佛文化' },
      { name: '鞍山美食节', time: '8月', description: '品尝鞍山美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：鞍山馅饼、南果梨、烧烤', '交通指南：鞍山有高铁站', '住宿推荐：汤岗子温泉或鞍山市区', '注意事项：千山需游玩1-2天'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午千山', '中午品尝鞍山美食', '下午继续游览'] },
      { day: 2, title: '温泉之旅', activities: ['上午玉佛苑', '下午汤岗子温泉', '返程'] }
    ]
  },
  '营口': {
    attractions: [
      { name: '鲅鱼圈', type: '自然景观', rating: 4.6, description: '海滨度假胜地，沙滩美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bayuquan%20beautiful%20beach%20in%20Yingkou&image_size=square' },
      { name: '望儿山', type: '人文景观', rating: 4.5, description: '母爱主题公园，感人传说', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wang%27er%20Mountain%20mother%20love%20theme%20park&image_size=square' },
      { name: '熊岳温泉', type: '特色体验', rating: 4.5, description: '温泉度假，养生休闲', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiongyue%20Hot%20Spring%20spa%20resort&image_size=square' },
      { name: '楞严寺', type: '人文景观', rating: 4.4, description: '东北四大禅林之一', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lengyan%20Temple%20Buddhist%20temple%20in%20Liaoning&image_size=square' }
    ],
    festivals: [
      { name: '望儿山母亲节', time: '5月', description: '母爱主题活动' },
      { name: '营口国际海滨温泉节', time: '9月', description: '温泉文化盛会' },
      { name: '营口美食节', time: '7月', description: '品尝营口美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：营口海鲜、鲅鱼饺子、烧烤', '交通指南：营口有高铁站', '住宿推荐：鲅鱼圈或熊岳温泉', '注意事项：夏季是旅游旺季'],
    itineraries: [
      { day: 1, title: '海滨之旅', activities: ['上午鲅鱼圈', '中午品尝海鲜', '下午海边游玩'] },
      { day: 2, title: '温泉之旅', activities: ['上午望儿山', '下午熊岳温泉', '返程'] }
    ]
  },
  '吉林': {
    attractions: [
      { name: '雾凇岛', type: '自然景观', rating: 4.8, description: '中国四大自然奇观之一，雾凇美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wusong%20Island%20beautiful%20rime%20ice%20scenery&image_size=square' },
      { name: '北山公园', type: '自然景观', rating: 4.5, description: '城市公园，佛道圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beishan%20Park%20beautiful%20city%20park%20in%20Jilin&image_size=square' },
      { name: '松花湖', type: '自然景观', rating: 4.6, description: '大型水库，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Songhua%20Lake%20beautiful%20lake%20in%20Jilin&image_size=square' },
      { name: '陨石雨陈列馆', type: '特色体验', rating: 4.4, description: '世界最大陨石雨陈列馆', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Meteorite%20Museum%20unique%20exhibition&image_size=square' }
    ],
    festivals: [
      { name: '雾凇冰雪节', time: '12月', description: '冬季冰雪旅游盛会' },
      { name: '北山庙会', time: '四月初八', description: '传统庙会活动' },
      { name: '吉林美食节', time: '8月', description: '品尝吉林美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：吉林煎粉、酸菜白肉锅、锅包肉', '交通指南：吉林有高铁站，距长春1小时', '住宿推荐：雾凇岛附近或吉林市区', '注意事项：雾凇冬季最佳观赏'],
    itineraries: [
      { day: 1, title: '雾凇之旅', activities: ['上午雾凇岛', '中午品尝吉林美食', '下午松花湖'] },
      { day: 2, title: '城市之旅', activities: ['上午北山公园', '下午陨石雨陈列馆', '返程'] }
    ]
  },
  '延吉': {
    attractions: [
      { name: '长白山', type: '自然景观', rating: 4.9, description: '东北第一高峰，天池壮丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Changbai%20Mountain%20beautiful%20volcanic%20lake&image_size=square' },
      { name: '延边大学', type: '人文景观', rating: 4.5, description: '朝鲜族特色大学，网红打卡地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yanbian%20University%20Korean%20style%20campus&image_size=square' },
      { name: '朝鲜族民俗园', type: '特色体验', rating: 4.6, description: '体验朝鲜族传统生活', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Korean%20Ethnic%20Village%20traditional%20culture&image_size=square' },
      { name: '帽儿山', type: '自然景观', rating: 4.4, description: '城市森林公园，登山观景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Maor%27er%20Mountain%20city%20forest%20park&image_size=square' }
    ],
    festivals: [
      { name: '朝鲜族民俗文化旅游节', time: '8月', description: '朝鲜族文化盛会' },
      { name: '长白山冰雪节', time: '12月', description: '冬季冰雪旅游' },
      { name: '延边美食节', time: '9月', description: '品尝延边美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：冷面、烤肉、石锅拌饭、辣白菜', '交通指南：延吉有机场和高铁站', '住宿推荐：延吉市区', '注意事项：长白山需提前预约'],
    itineraries: [
      { day: 1, title: '长白山之旅', activities: ['上午长白山', '中午品尝朝鲜族美食', '下午天池'] },
      { day: 2, title: '民俗之旅', activities: ['上午朝鲜族民俗园', '下午延边大学', '返程'] }
    ]
  },
  '牡丹江': {
    attractions: [
      { name: '雪乡', type: '特色体验', rating: 4.8, description: '中国雪乡，童话世界', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Snow%20Town%20beautiful%20winter%20village%20in%20Heilongjiang&image_size=square' },
      { name: '镜泊湖', type: '自然景观', rating: 4.7, description: '世界最大火山熔岩堰塞湖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingpo%20Lake%20beautiful%20lake%20in%20Heilongjiang&image_size=square' },
      { name: '吊水楼瀑布', type: '自然景观', rating: 4.6, description: '镜泊湖瀑布，景色壮观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Diaoshuilou%20Waterfall%20spectacular%20waterfall&image_size=square' },
      { name: '威虎山', type: '人文景观', rating: 4.5, description: '林海雪原，剿匪故事发生地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Weihu%20Mountain%20forest%20landscape%20in%20Heilongjiang&image_size=square' }
    ],
    festivals: [
      { name: '雪乡文化旅游节', time: '12月', description: '冬季冰雪旅游盛会' },
      { name: '镜泊湖旅游节', time: '8月', description: '夏季旅游活动' },
      { name: '牡丹江美食节', time: '9月', description: '品尝牡丹江美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：牡丹江冷面、酸菜饺子、铁锅炖', '交通指南：牡丹江有机场和高铁站', '住宿推荐：雪乡或牡丹江市区', '注意事项：雪乡冬季寒冷，注意保暖'],
    itineraries: [
      { day: 1, title: '雪乡之旅', activities: ['上午雪乡', '中午品尝东北美食', '下午雪乡游览'] },
      { day: 2, title: '镜泊湖之旅', activities: ['上午镜泊湖', '下午吊水楼瀑布', '返程'] }
    ]
  },
  '齐齐哈尔': {
    attractions: [
      { name: '扎龙自然保护区', type: '特色体验', rating: 4.7, description: '丹顶鹤故乡，世界最大鹤类保护区', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhalong%20Nature%20Reserve%20red%20crowned%20cranes&image_size=square' },
      { name: '龙沙公园', type: '自然景观', rating: 4.5, description: '百年公园，城市绿肺', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Longsha%20Park%20beautiful%20city%20park&image_size=square' },
      { name: '明月岛', type: '自然景观', rating: 4.4, description: '江心岛屿，自然风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mingyue%20Island%20beautiful%20island%20in%20Heilongjiang&image_size=square' },
      { name: '大乘寺', type: '人文景观', rating: 4.4, description: '东北著名佛教寺院', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dacheng%20Temple%20Buddhist%20temple%20in%20Qiqihar&image_size=square' }
    ],
    festivals: [
      { name: '观鹤节', time: '6月', description: '观赏丹顶鹤' },
      { name: '齐齐哈尔冰雪节', time: '12月', description: '冬季冰雪旅游' },
      { name: '齐齐哈尔美食节', time: '8月', description: '品尝齐齐哈尔美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：齐齐哈尔烤肉、酸菜锅、烤冷面', '交通指南：齐齐哈尔有机场和高铁站', '住宿推荐：齐齐哈尔市区', '注意事项：扎龙保护区最佳观鹤时间为上午'],
    itineraries: [
      { day: 1, title: '观鹤之旅', activities: ['上午扎龙自然保护区', '中午品尝烤肉', '下午明月岛'] },
      { day: 2, title: '城市之旅', activities: ['上午龙沙公园', '下午大乘寺', '返程'] }
    ]
  },
  '佳木斯': {
    attractions: [
      { name: '三江湿地', type: '自然景观', rating: 4.6, description: '三江平原，湿地风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sanjiang%20Wetland%20beautiful%20wetland%20in%20Heilongjiang&image_size=square' },
      { name: '黑瞎子岛', type: '特色体验', rating: 4.5, description: '中俄边界，一岛两国', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Heixiazi%20Island%20China%20Russia%20border&image_size=square' },
      { name: '富锦国家湿地公园', type: '自然景观', rating: 4.4, description: '湿地生态，候鸟栖息地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fu%27jin%20Wetland%20Park%20nature%20reserve&image_size=square' },
      { name: '佳木斯水源山公园', type: '特色体验', rating: 4.3, description: '城市公园，动物园', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shuiyuanshan%20Park%20city%20park%20with%20zoo&image_size=square' }
    ],
    festivals: [
      { name: '三江国际湿地文化节', time: '6月', description: '展示湿地文化' },
      { name: '佳木斯冰雪大世界', time: '12月', description: '冬季冰雪活动' },
      { name: '佳木斯美食节', time: '8月', description: '品尝佳木斯美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：佳木斯拌面、酸菜白肉、铁锅炖', '交通指南：佳木斯有机场和高铁站', '住宿推荐：佳木斯市区', '注意事项：湿地夏季最佳'],
    itineraries: [
      { day: 1, title: '湿地之旅', activities: ['上午三江湿地', '中午品尝佳木斯美食', '下午富锦湿地公园'] },
      { day: 2, title: '边境之旅', activities: ['上午黑瞎子岛', '下午水源山公园', '返程'] }
    ]
  },
  '德阳': {
    attractions: [
      { name: '三星堆', type: '特色体验', rating: 4.8, description: '古蜀文明，神秘青铜文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sanxingdui%20ancient%20bronze%20culture%20museum&image_size=square' },
      { name: '德阳文庙', type: '人文景观', rating: 4.5, description: '西南地区最大文庙', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Deyang%20Confucian%20Temple%20traditional%20Chinese%20temple&image_size=square' },
      { name: '什邡蓥华山', type: '自然景观', rating: 4.4, description: '山水风光，避暑胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yinghua%20Mountain%20beautiful%20scenic%20spot&image_size=square' },
      { name: '孝泉古镇', type: '人文景观', rating: 4.4, description: '千年古镇，孝文化发源地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiaoquan%20ancient%20town%20filial%20piety%20culture&image_size=square' }
    ],
    festivals: [
      { name: '三星堆文化旅游节', time: '10月', description: '展示三星堆文化' },
      { name: '孝文化节', time: '9月', description: '弘扬孝文化' },
      { name: '德阳美食节', time: '11月', description: '品尝德阳美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：德阳米粉、孝泉果汁牛肉、什邡板鸭', '交通指南：德阳有高铁站，距成都30分钟', '住宿推荐：德阳市区', '注意事项：三星堆需请讲解员'],
    itineraries: [
      { day: 1, title: '三星堆之旅', activities: ['上午三星堆', '中午品尝德阳美食', '下午继续游览'] },
      { day: 2, title: '文化之旅', activities: ['上午德阳文庙', '下午孝泉古镇', '返程'] }
    ]
  },
  '南充': {
    attractions: [
      { name: '阆中古城', type: '人文景观', rating: 4.7, description: '千年古城，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Langzhong%20ancient%20city%20well%20preserved%20town&image_size=square' },
      { name: '锦屏山', type: '自然景观', rating: 4.5, description: '城市公园，俯瞰古城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinping%20Mountain%20beautiful%20city%20park&image_size=square' },
      { name: '西山风景区', type: '自然景观', rating: 4.4, description: '自然风光，历史遗迹', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=West%20Mountain%20scenic%20area%20in%20Nanchong&image_size=square' },
      { name: '朱德故里', type: '人文景观', rating: 4.6, description: '红色旅游圣地，朱德纪念馆', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhu%20De%20Memorial%20red%20tourism&image_size=square' }
    ],
    festivals: [
      { name: '阆中古城文化旅游节', time: '10月', description: '展示古城文化' },
      { name: '南充丝绸文化节', time: '9月', description: '展示丝绸文化' },
      { name: '南充美食节', time: '11月', description: '品尝南充美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：南充米粉、张飞牛肉、保宁醋', '交通指南：南充有机场和高铁站', '住宿推荐：阆中古城内', '注意事项：古城夜游非常漂亮'],
    itineraries: [
      { day: 1, title: '古城之旅', activities: ['上午阆中古城', '中午品尝南充美食', '下午锦屏山'] },
      { day: 2, title: '红色之旅', activities: ['上午朱德故里', '下午西山风景区', '返程'] }
    ]
  },
  '防城港': {
    attractions: [
      { name: '白浪滩', type: '自然景观', rating: 4.6, description: '海滨沙滩，白浪翻滚', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bailang%20Beach%20beautiful%20seaside%20in%20Guangxi&image_size=square' },
      { name: '东兴口岸', type: '特色体验', rating: 4.5, description: '中越边境口岸，异国风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dongxing%20Border%20China%20Vietnam%20border&image_size=square' },
      { name: '京岛', type: '人文景观', rating: 4.5, description: '京族聚居地，民族风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jing%20Island%20ethnic%20minority%20village&image_size=square' },
      { name: '簕山古渔村', type: '人文景观', rating: 4.4, description: '古渔村，海鲜丰富', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lesh%27an%20ancient%20fishing%20village&image_size=square' }
    ],
    festivals: [
      { name: '防城港国际海上龙舟节', time: '端午节', description: '龙舟竞渡' },
      { name: '京族哈节', time: '农历六月', description: '京族传统节日' },
      { name: '防城港美食节', time: '10月', description: '品尝防城港美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：海鲜、京族米粉、沙虫', '交通指南：防城港有高铁站', '住宿推荐：东兴或白浪滩附近', '注意事项：可办理越南一日游'],
    itineraries: [
      { day: 1, title: '海滨之旅', activities: ['上午白浪滩', '中午品尝海鲜', '下午簕山古渔村'] },
      { day: 2, title: '边境之旅', activities: ['上午东兴口岸', '下午京岛', '返程'] }
    ]
  },
  '德宏': {
    attractions: [
      { name: '芒市大金塔', type: '人文景观', rating: 4.7, description: '亚洲第一空心佛塔', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mangshi%20Golden%20Pagoda%20beautiful%20Buddhist%20temple&image_size=square' },
      { name: '瑞丽口岸', type: '特色体验', rating: 4.6, description: '中缅边境口岸，异国风情', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ruili%20Border%20China%20Myanmar%20border&image_size=square' },
      { name: '勐巴娜西珍奇园', type: '特色体验', rating: 4.5, description: '珍稀植物，奇珍异宝', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mengbanaxi%20Garden%20rare%20plants%20garden&image_size=square' },
      { name: '姐告', type: '人文景观', rating: 4.4, description: '边境贸易区，购物天堂', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiegao%20border%20trade%20zone&image_size=square' }
    ],
    festivals: [
      { name: '泼水节', time: '4月', description: '傣族最盛大的节日' },
      { name: '目瑙纵歌节', time: '正月十五', description: '景颇族传统节日' },
      { name: '德宏美食节', time: '10月', description: '品尝德宏美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：泡鲁达、撒撇、酸笋鸡', '交通指南：德宏有机场', '住宿推荐：芒市或瑞丽', '注意事项：可办理缅甸一日游'],
    itineraries: [
      { day: 1, title: '芒市之旅', activities: ['上午大金塔', '中午品尝德宏美食', '下午勐巴娜西珍奇园'] },
      { day: 2, title: '边境之旅', activities: ['上午瑞丽口岸', '下午姐告', '返程'] }
    ]
  },
  '怒江': {
    attractions: [
      { name: '怒江大峡谷', type: '自然景观', rating: 4.8, description: '世界最长峡谷，气势磅礴', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nujiang%20Grand%20Canyon%20spectacular%20river%20canyon&image_size=square' },
      { name: '独龙江', type: '自然景观', rating: 4.7, description: '独龙族聚居地，原始风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dulong%20River%20beautiful%20river%20in%20Yunnan&image_size=square' },
      { name: '丙中洛', type: '人文景观', rating: 4.6, description: '怒江第一湾，世外桃源', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bingzhongluo%20beautiful%20village%20in%20Yunnan&image_size=square' },
      { name: '老姆登', type: '人文景观', rating: 4.5, description: '怒族村寨，云海奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Laomudeng%20traditional%20village%20in%20Yunnan&image_size=square' }
    ],
    festivals: [
      { name: '怒江大峡谷文化旅游节', time: '9月', description: '展示峡谷文化' },
      { name: '独龙族卡雀哇节', time: '农历腊月', description: '独龙族传统节日' },
      { name: '怒江美食节', time: '10月', description: '品尝怒江美食' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：怒族手抓饭、漆油鸡、石板烤粑粑', '交通指南：怒江有机场，建议自驾', '住宿推荐：丙中洛或老姆登', '注意事项：峡谷地区路况复杂'],
    itineraries: [
      { day: 1, title: '峡谷之旅', activities: ['上午怒江大峡谷', '中午品尝怒族美食', '下午继续游览'] },
      { day: 2, title: '丙中洛之旅', activities: ['上午丙中洛', '下午怒江第一湾', '晚上住老姆登'] }
    ]
  },
  '迪庆': {
    attractions: [
      { name: '普达措', type: '自然景观', rating: 4.8, description: '高原森林湖泊，自然风光绝美', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pudacuo%20National%20Park%20plateau%20lakes&image_size=square' },
      { name: '独克宗古城', type: '人文景观', rating: 4.6, description: '月光之城，藏式古城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dukezong%20Old%20Town%20Tibetan%20ancient%20city&image_size=square' },
      { name: '松赞林寺', type: '人文景观', rating: 4.7, description: '小布达拉宫，藏传佛教寺院', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Songzanlin%20Monastery%20Tibetan%20Buddhist%20monastery&image_size=square' },
      { name: '纳帕海', type: '自然景观', rating: 4.5, description: '高原湖泊，季节性湿地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Napa%20Lake%20plateau%20wetland&image_size=square' }
    ],
    festivals: [
      { name: '赛马节', time: '农历五月初五', description: '藏族传统赛马盛会' },
      { name: '藏历新年', time: '藏历正月', description: '藏族最盛大的节日' },
      { name: '迪庆美食节', time: '9月', description: '品尝迪庆美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：牦牛肉火锅、酥油茶、青稞饼', '交通指南：迪庆有机场', '住宿推荐：独克宗古城内', '注意事项：海拔较高，注意高原反应'],
    itineraries: [
      { day: 1, title: '普达措之旅', activities: ['上午普达措国家公园', '中午品尝牦牛肉', '下午纳帕海'] },
      { day: 2, title: '古城寺院游', activities: ['上午松赞林寺', '下午独克宗古城', '晚上藏式歌舞'] }
    ]
  },
  '甘孜': {
    attractions: [
      { name: '稻城亚丁', type: '自然景观', rating: 4.9, description: '蓝色星球上最后一片净土', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Daocheng%20Yading%20beautiful%20plateau%20landscape&image_size=square' },
      { name: '新都桥', type: '自然景观', rating: 4.7, description: '摄影家天堂，草原风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xinduqiao%20beautiful%20grassland%20in%20Sichuan&image_size=square' },
      { name: '海螺沟', type: '自然景观', rating: 4.6, description: '冰川温泉，原始森林', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hailuogou%20glacier%20and%20hot%20spring&image_size=square' },
      { name: '丹巴藏寨', type: '人文景观', rating: 4.6, description: '中国最美乡村，碉楼藏寨', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Danba%20Tibetan%20village%20beautiful%20architecture&image_size=square' }
    ],
    festivals: [
      { name: '甘孜国际山地旅游节', time: '9月', description: '展示甘孜风光' },
      { name: '康巴艺术节', time: '8月', description: '藏族文化盛会' },
      { name: '甘孜美食节', time: '10月', description: '品尝甘孜美食' }
    ],
    travelTips: ['建议游玩天数：4-5天', '必尝美食：牦牛肉、酥油茶、青稞饼', '交通指南：甘孜有机场，建议自驾', '住宿推荐：稻城或新都桥', '注意事项：海拔较高，注意高原反应'],
    itineraries: [
      { day: 1, title: '新都桥之旅', activities: ['上午新都桥', '中午品尝藏餐', '下午继续游览'] },
      { day: 2, title: '稻城亚丁', activities: ['上午稻城亚丁', '游览三大神山', '晚上住景区'] }
    ]
  },
  '阿坝': {
    attractions: [
      { name: '九寨沟', type: '自然景观', rating: 4.9, description: '童话世界，五彩池群', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiuzhaigou%20beautiful%20colorful%20lakes&image_size=square' },
      { name: '黄龙', type: '自然景观', rating: 4.8, description: '钙华彩池，人间瑶池', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huanglong%20travertine%20pools%20in%20Sichuan&image_size=square' },
      { name: '四姑娘山', type: '自然景观', rating: 4.7, description: '蜀山之后，雪山风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Four%20Girls%20Mountain%20beautiful%20snow%20peaks&image_size=square' },
      { name: '若尔盖草原', type: '自然景观', rating: 4.6, description: '川西北草原，花海美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ruoergai%20Grassland%20beautiful%20meadow&image_size=square' }
    ],
    festivals: [
      { name: '九寨沟国际旅游节', time: '10月', description: '秋季九寨沟美景' },
      { name: '阿坝藏羌文化节', time: '7月', description: '藏族羌族文化盛会' },
      { name: '阿坝美食节', time: '9月', description: '品尝阿坝美食' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：牦牛肉、酥油茶、糌粑', '交通指南：阿坝有机场，建议自驾', '住宿推荐：九寨沟或四姑娘山', '注意事项：九寨沟需提前预约'],
    itineraries: [
      { day: 1, title: '九寨沟之旅', activities: ['上午九寨沟', '游览景区', '晚上住沟口'] },
      { day: 2, title: '黄龙之旅', activities: ['上午黄龙', '下午四姑娘山', '返程'] }
    ]
  },
  '汉中': {
    attractions: [
      { name: '汉中油菜花', type: '自然景观', rating: 4.7, description: '百万亩油菜花，金色花海', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hanzhong%20rapeseed%20flowers%20golden%20fields&image_size=square' },
      { name: '古汉台', type: '人文景观', rating: 4.5, description: '刘邦行宫，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guhan%20Terrace%20historic%20site%20in%20Shaanxi&image_size=square' },
      { name: '武侯祠', type: '人文景观', rating: 4.6, description: '纪念诸葛亮，三国文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuhou%20Shrine%20Zhuge%20Liang%20memorial&image_size=square' },
      { name: '青木川古镇', type: '人文景观', rating: 4.5, description: '千年古镇，传奇故事', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qingmuchuan%20ancient%20town%20traditional%20village&image_size=square' }
    ],
    festivals: [
      { name: '油菜花旅游文化节', time: '3月', description: '百万亩油菜花盛开' },
      { name: '汉中三国文化节', time: '9月', description: '三国文化展示' },
      { name: '汉中美食节', time: '10月', description: '品尝汉中美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：汉中热米皮、菜豆腐、腊肉', '交通指南：汉中有高铁站', '住宿推荐：汉中市区或青木川', '注意事项：油菜花春季最美'],
    itineraries: [
      { day: 1, title: '花海之旅', activities: ['上午油菜花', '中午品尝汉中美食', '下午古汉台'] },
      { day: 2, title: '古镇之旅', activities: ['上午武侯祠', '下午青木川古镇', '返程'] }
    ]
  },
  '安康': {
    attractions: [
      { name: '瀛湖', type: '自然景观', rating: 4.6, description: '西北最大淡水湖，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yinghu%20Lake%20beautiful%20lake%20in%20Shaanxi&image_size=square' },
      { name: '南宫山', type: '自然景观', rating: 4.5, description: '国家森林公园，山水秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nangong%20Mountain%20beautiful%20forest%20park&image_size=square' },
      { name: '香溪洞', type: '自然景观', rating: 4.4, description: '城市公园，天然氧吧', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xiangxi%20Cave%20beautiful%20city%20park&image_size=square' },
      { name: '中坝大峡谷', type: '自然景观', rating: 4.5, description: '峡谷风光，瀑布众多', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhongba%20Canyon%20beautiful%20scenic%20spot&image_size=square' }
    ],
    festivals: [
      { name: '安康龙舟节', time: '端午节', description: '汉江龙舟竞渡' },
      { name: '安康油菜花节', time: '3月', description: '春季油菜花盛开' },
      { name: '安康美食节', time: '9月', description: '品尝安康美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：安康蒸面、炕炕馍、腊肉', '交通指南：安康有机场和高铁站', '住宿推荐：安康市区', '注意事项：瀛湖夏季避暑好去处'],
    itineraries: [
      { day: 1, title: '瀛湖之旅', activities: ['上午瀛湖', '中午品尝安康美食', '下午香溪洞'] },
      { day: 2, title: '山水之旅', activities: ['上午南宫山', '下午中坝大峡谷', '返程'] }
    ]
  },
  '商洛': {
    attractions: [
      { name: '金丝峡', type: '自然景观', rating: 4.7, description: '国家地质公园，峡谷奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinsi%20Canyon%20beautiful%20scenic%20spot&image_size=square' },
      { name: '丹江漂流', type: '特色体验', rating: 4.5, description: '丹江漂流，刺激好玩', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Danjiang%20River%20rafting%20adventure&image_size=square' },
      { name: '商山', type: '自然景观', rating: 4.4, description: '商山四皓隐居地，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shang%20Mountain%20historic%20site%20in%20Shaanxi&image_size=square' },
      { name: '商洛博物馆', type: '人文景观', rating: 4.3, description: '展示商洛历史文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shangluo%20Museum%20local%20history%20exhibition&image_size=square' }
    ],
    festivals: [
      { name: '商洛文化旅游节', time: '9月', description: '展示商洛风光' },
      { name: '丹江漂流节', time: '6月', description: '漂流活动盛会' },
      { name: '商洛美食节', time: '10月', description: '品尝商洛美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：商洛擀面皮、腊肉、豆腐干', '交通指南：商洛有高铁站', '住宿推荐：商洛市区', '注意事项：金丝峡需游玩半天'],
    itineraries: [
      { day: 1, title: '峡谷之旅', activities: ['上午金丝峡', '中午品尝商洛美食', '下午继续游览'] },
      { day: 2, title: '漂流之旅', activities: ['上午丹江漂流', '下午商山', '返程'] }
    ]
  },
  '渭南': {
    attractions: [
      { name: '华山', type: '自然景观', rating: 4.9, description: '奇险天下第一山，五岳之西岳', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huashan%20Mountain%20spectacular%20peaks&image_size=square' },
      { name: '韩城古城', type: '人文景观', rating: 4.5, description: '千年古城，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hancheng%20ancient%20city%20well%20preserved%20town&image_size=square' },
      { name: '党家村', type: '人文景观', rating: 4.5, description: '明清古村落，建筑精美', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dangjia%20Village%20traditional%20Chinese%20village&image_size=square' },
      { name: '洽川湿地', type: '自然景观', rating: 4.4, description: '黄河湿地，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qiachuan%20Wetland%20beautiful%20wetland%20in%20Shaanxi&image_size=square' }
    ],
    festivals: [
      { name: '华山登山节', time: '9月', description: '登山健身活动' },
      { name: '韩城国际锣鼓节', time: '10月', description: '锣鼓表演盛会' },
      { name: '渭南美食节', time: '8月', description: '品尝渭南美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：渭南时辰包子、水盆羊肉、羊肉泡馍', '交通指南：渭南有高铁站，华山有高铁站', '住宿推荐：华山脚下或渭南市区', '注意事项：华山需游玩1-2天'],
    itineraries: [
      { day: 1, title: '华山之旅', activities: ['上午登山华山', '游览景点', '晚上住山上'] },
      { day: 2, title: '古城之旅', activities: ['上午韩城古城', '下午党家村', '返程'] }
    ]
  },
  '商洛': {
    attractions: [
      { name: '金丝峡', type: '自然景观', rating: 4.7, description: '国家地质公园，峡谷奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinsi%20Canyon%20beautiful%20scenic%20spot&image_size=square' },
      { name: '丹江漂流', type: '特色体验', rating: 4.5, description: '丹江漂流，刺激好玩', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Danjiang%20River%20rafting%20adventure&image_size=square' },
      { name: '商山', type: '自然景观', rating: 4.4, description: '商山四皓隐居地，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shang%20Mountain%20historic%20site%20in%20Shaanxi&image_size=square' },
      { name: '商洛博物馆', type: '人文景观', rating: 4.3, description: '展示商洛历史文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shangluo%20Museum%20local%20history%20exhibition&image_size=square' }
    ],
    festivals: [
      { name: '商洛文化旅游节', time: '9月', description: '展示商洛风光' },
      { name: '丹江漂流节', time: '6月', description: '漂流活动盛会' },
      { name: '商洛美食节', time: '10月', description: '品尝商洛美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：商洛擀面皮、腊肉、豆腐干', '交通指南：商洛有高铁站', '住宿推荐：商洛市区', '注意事项：金丝峡需游玩半天'],
    itineraries: [
      { day: 1, title: '峡谷之旅', activities: ['上午金丝峡', '中午品尝商洛美食', '下午继续游览'] },
      { day: 2, title: '漂流之旅', activities: ['上午丹江漂流', '下午商山', '返程'] }
    ]
  },
  '咸阳': {
    attractions: [
      { name: '兵马俑', type: '特色体验', rating: 4.9, description: '世界第八大奇迹，秦始皇兵马俑', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Terracotta%20Army%20ancient%20warriors%20museum&image_size=square' },
      { name: '华清宫', type: '人文景观', rating: 4.6, description: '唐代皇家温泉，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huaqing%20Palace%20ancient%20imperial%20hot%20spring&image_size=square' },
      { name: '乾陵', type: '人文景观', rating: 4.7, description: '武则天与唐高宗合葬墓', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qian%20Ling%20imperial%20mausoleum%20in%20Shaanxi&image_size=square' },
      { name: '汉阳陵', type: '人文景观', rating: 4.5, description: '汉代帝陵，文物丰富', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hanyang%20Mausoleum%20Han%20Dynasty%20tomb&image_size=square' }
    ],
    festivals: [
      { name: '咸阳国际马拉松', time: '10月', description: '体育赛事' },
      { name: '咸阳美食节', time: '9月', description: '品尝咸阳美食' },
      { name: '春节文化活动', time: '春节', description: '传统节日活动' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：咸阳锅盔、牛羊肉泡馍、凉皮', '交通指南：咸阳有机场和高铁站', '住宿推荐：咸阳市区', '注意事项：兵马俑需请讲解员'],
    itineraries: [
      { day: 1, title: '兵马俑之旅', activities: ['上午兵马俑', '中午品尝咸阳美食', '下午华清宫'] },
      { day: 2, title: '帝陵之旅', activities: ['上午乾陵', '下午汉阳陵', '返程'] }
    ]
  },
  '宝鸡': {
    attractions: [
      { name: '法门寺', type: '人文景观', rating: 4.7, description: '佛教圣地，佛指舍利存放地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Famen%20Temple%20Buddhist%20temple%20with%20relics&image_size=square' },
      { name: '太白山', type: '自然景观', rating: 4.8, description: '秦岭主峰，高山风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Taibai%20Mountain%20Qinling%20main%20peak&image_size=square' },
      { name: '炎帝陵', type: '人文景观', rating: 4.5, description: '炎帝故里，中华始祖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yan%20Emperor%20Mausoleum%20ancient%20Chinese%20ancestor&image_size=square' },
      { name: '青铜博物馆', type: '人文景观', rating: 4.4, description: '展示商周青铜器', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bronze%20Museum%20ancient%20Chinese%20bronze%20artifacts&image_size=square' }
    ],
    festivals: [
      { name: '法门寺文化节', time: '5月', description: '佛教文化盛会' },
      { name: '太白山登山节', time: '9月', description: '登山健身活动' },
      { name: '炎帝文化节', time: '10月', description: '纪念炎帝的文化活动' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：臊子面、擀面皮、豆花泡馍', '交通指南：宝鸡有高铁站', '住宿推荐：宝鸡市区或太白山附近', '注意事项：太白山海拔高，注意保暖'],
    itineraries: [
      { day: 1, title: '佛教文化游', activities: ['上午法门寺', '中午品尝臊子面', '下午青铜博物馆'] },
      { day: 2, title: '太白山之旅', activities: ['上午太白山', '下午游览景点', '返程'] }
    ]
  },
  '汉中': {
    attractions: [
      { name: '汉中油菜花', type: '自然景观', rating: 4.7, description: '百万亩油菜花，金色花海', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hanzhong%20rapeseed%20flowers%20golden%20fields&image_size=square' },
      { name: '古汉台', type: '人文景观', rating: 4.5, description: '刘邦行宫，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guhan%20Terrace%20historic%20site%20in%20Shaanxi&image_size=square' },
      { name: '武侯祠', type: '人文景观', rating: 4.6, description: '纪念诸葛亮，三国文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuhou%20Shrine%20Zhuge%20Liang%20memorial&image_size=square' },
      { name: '青木川古镇', type: '人文景观', rating: 4.5, description: '千年古镇，传奇故事', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qingmuchuan%20ancient%20town%20traditional%20village&image_size=square' }
    ],
    festivals: [
      { name: '油菜花旅游文化节', time: '3月', description: '百万亩油菜花盛开' },
      { name: '汉中三国文化节', time: '9月', description: '三国文化展示' },
      { name: '汉中美食节', time: '10月', description: '品尝汉中美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：汉中热米皮、菜豆腐、腊肉', '交通指南：汉中有高铁站', '住宿推荐：汉中市区或青木川', '注意事项：油菜花春季最美'],
    itineraries: [
      { day: 1, title: '花海之旅', activities: ['上午油菜花', '中午品尝汉中美食', '下午古汉台'] },
      { day: 2, title: '古镇之旅', activities: ['上午武侯祠', '下午青木川古镇', '返程'] }
    ]
  },
  '延安': {
    attractions: [
      { name: '延安革命纪念馆', type: '人文景观', rating: 4.7, description: '展示中国革命历史的重要纪念馆', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yan%27an%20Revolutionary%20Memorial%20Museum%20red%20tourism&image_size=square' },
      { name: '枣园革命旧址', type: '人文景观', rating: 4.6, description: '中共中央曾在此办公', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zaoyuan%20Revolutionary%20Site%20cave%20dwellings&image_size=square' },
      { name: '宝塔山', type: '自然景观', rating: 4.5, description: '延安标志性建筑，俯瞰延安城', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baota%20Mountain%20pagoda%20in%20Yan%27an&image_size=square' },
      { name: '壶口瀑布', type: '自然景观', rating: 4.8, description: '黄河上的壮观瀑布', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hukou%20Waterfall%20Yellow%20River%20spectacular%20waterfall&image_size=square' }
    ],
    festivals: [
      { name: '延安过大年', time: '春节', description: '陕北民俗文化展示' },
      { name: '公祭黄帝陵', time: '清明节', description: '中华民族祭祀黄帝的盛典' },
      { name: '秧歌节', time: '正月', description: '陕北秧歌表演' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：延安小米粥、洋芋擦擦、油糕', '交通指南：延安有机场和高铁站', '住宿推荐：延安市区或壶口瀑布附近', '注意事项：壶口瀑布最佳观赏季节为秋季'],
    itineraries: [
      { day: 1, title: '革命圣地游', activities: ['上午延安革命纪念馆', '中午品尝陕北美食', '下午枣园革命旧址'] },
      { day: 2, title: '壶口瀑布', activities: ['上午前往壶口瀑布', '下午游览瀑布', '返回延安'] }
    ]
  },
  '榆林': {
    attractions: [
      { name: '镇北台', type: '人文景观', rating: 4.6, description: '万里长城第一台', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhenbeitai%20Great%20Wall%20first%20watchtower&image_size=square' },
      { name: '红石峡', type: '自然景观', rating: 4.5, description: '峡谷奇观，摩崖石刻', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hongshi%20Canyon%20red%20rock%20gorge&image_size=square' },
      { name: '统万城', type: '人文景观', rating: 4.4, description: '匈奴古城遗址，白城子', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tongwan%20City%20ancient%20Xiongnu%20city%20ruins&image_size=square' },
      { name: '白云山', type: '自然景观', rating: 4.5, description: '道教名山，黄河边上的仙境', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Baiyun%20Mountain%20Taoist%20mountain%20near%20Yellow%20River&image_size=square' }
    ],
    festivals: [
      { name: '榆林国际煤炭博览会', time: '9月', description: '展示榆林煤炭产业' },
      { name: '白云山庙会', time: '四月初八', description: '道教祈福盛会' },
      { name: '陕北民歌节', time: '8月', description: '陕北民歌演唱大赛' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：拼三鲜、榆林豆腐、羊杂碎', '交通指南：榆林有机场', '住宿推荐：榆林市区或白云山附近', '注意事项：统万城需包车前往'],
    itineraries: [
      { day: 1, title: '长城之旅', activities: ['上午镇北台', '中午品尝榆林美食', '下午红石峡'] },
      { day: 2, title: '古城遗址游', activities: ['上午统万城', '下午白云山', '返程'] }
    ]
  },
  '张掖': {
    attractions: [
      { name: '七彩丹霞', type: '自然景观', rating: 4.9, description: '世界地质公园，色彩斑斓的丹霞地貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangye%20Danxia%20Colorful%20Landform%20Geological%20Park&image_size=square' },
      { name: '冰沟丹霞', type: '自然景观', rating: 4.7, description: '造型奇特的丹霞地貌，壮观震撼', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Binggou%20Danxia%20spectacular%20red%20rock%20formations&image_size=square' },
      { name: '马蹄寺', type: '人文景观', rating: 4.5, description: '千年石窟群，藏传佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mati%20Temple%20ancient%20Buddhist%20caves&image_size=square' },
      { name: '大佛寺', type: '人文景观', rating: 4.4, description: '亚洲最大的室内卧佛', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Great%20Buddha%20Temple%20largest%20indoor%20reclining%20Buddha&image_size=square' }
    ],
    festivals: [
      { name: '丹霞文化旅游节', time: '8月', description: '展示丹霞地貌奇观' },
      { name: '祁连山草原文化节', time: '7月', description: '草原盛会' },
      { name: '美食节', time: '9月', description: '品尝张掖特色美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：张掖牛肉小饭、臊面、搓鱼面', '交通指南：张掖有高铁站', '住宿推荐：张掖市区或丹霞景区附近', '注意事项：丹霞景区日落时分最美'],
    itineraries: [
      { day: 1, title: '七彩丹霞游', activities: ['上午游览七彩丹霞', '中午品尝张掖美食', '下午冰沟丹霞'] },
      { day: 2, title: '文化之旅', activities: ['上午参观马蹄寺', '下午大佛寺', '晚上观看丹霞夜景'] }
    ]
  },
  '酒泉': {
    attractions: [
      { name: '莫高窟', type: '人文景观', rating: 4.9, description: '世界文化遗产，千佛洞壁画艺术瑰宝', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mogao%20Caves%20Dunhuang%20ancient%20Buddhist%20caves&image_size=square' },
      { name: '鸣沙山月牙泉', type: '自然景观', rating: 4.8, description: '沙漠奇观，沙泉共生', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mingsha%20Sand%20Dunes%20and%20Crescent%20Lake%20Dunhuang&image_size=square' },
      { name: '嘉峪关', type: '人文景观', rating: 4.7, description: '天下第一雄关，长城起点', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jiayuguan%20Great%20Wall%20western%20gate&image_size=square' },
      { name: '金塔胡杨林', type: '自然景观', rating: 4.6, description: '秋季胡杨林美景', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinta%20Populus%20Forest%20autumn%20scenery&image_size=square' }
    ],
    festivals: [
      { name: '敦煌文化旅游节', time: '9月', description: '展示敦煌文化艺术' },
      { name: '嘉峪关国际滑翔节', time: '7月', description: '滑翔运动盛会' },
      { name: '酒泉美食节', time: '10月', description: '品尝酒泉美食' }
    ],
    travelTips: ['建议游玩天数：3-4天', '必尝美食：驴肉黄面、羊肉泡馍、敦煌酿皮子', '交通指南：酒泉有机场', '住宿推荐：敦煌市区或嘉峪关', '注意事项：莫高窟需提前预约'],
    itineraries: [
      { day: 1, title: '莫高窟深度游', activities: ['上午参观莫高窟', '中午品尝驴肉黄面', '下午游览数字展示中心'] },
      { day: 2, title: '鸣沙山月牙泉', activities: ['上午鸣沙山骑骆驼', '下午月牙泉拍照', '晚上观看沙漠日落'] }
    ]
  },
  '张掖': {
    attractions: [
      { name: '七彩丹霞', type: '自然景观', rating: 4.9, description: '世界地质公园，色彩斑斓的丹霞地貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangye%20Danxia%20Colorful%20Landform%20Geological%20Park&image_size=square' },
      { name: '冰沟丹霞', type: '自然景观', rating: 4.7, description: '造型奇特的丹霞地貌，壮观震撼', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Binggou%20Danxia%20spectacular%20red%20rock%20formations&image_size=square' },
      { name: '马蹄寺', type: '人文景观', rating: 4.5, description: '千年石窟群，藏传佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mati%20Temple%20ancient%20Buddhist%20caves&image_size=square' },
      { name: '大佛寺', type: '人文景观', rating: 4.4, description: '亚洲最大的室内卧佛', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Great%20Buddha%20Temple%20largest%20indoor%20reclining%20Buddha&image_size=square' }
    ],
    festivals: [
      { name: '丹霞文化旅游节', time: '8月', description: '展示丹霞地貌奇观' },
      { name: '祁连山草原文化节', time: '7月', description: '草原盛会' },
      { name: '美食节', time: '9月', description: '品尝张掖特色美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：张掖牛肉小饭、臊面、搓鱼面', '交通指南：张掖有高铁站', '住宿推荐：张掖市区或丹霞景区附近', '注意事项：丹霞景区日落时分最美'],
    itineraries: [
      { day: 1, title: '七彩丹霞游', activities: ['上午游览七彩丹霞', '中午品尝张掖美食', '下午冰沟丹霞'] },
      { day: 2, title: '文化之旅', activities: ['上午参观马蹄寺', '下午大佛寺', '晚上观看丹霞夜景'] }
    ]
  },
  '武威': {
    attractions: [
      { name: '雷台汉墓', type: '人文景观', rating: 4.5, description: '铜奔马出土地，汉代墓葬', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Leitai%20Han%20Tomb%20bronze%20horse%20museum&image_size=square' },
      { name: '武威文庙', type: '人文景观', rating: 4.4, description: '河西走廊最大文庙', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuwei%20Confucian%20Temple%20traditional%20Chinese%20temple&image_size=square' },
      { name: '天梯山石窟', type: '人文景观', rating: 4.5, description: '凉州石窟之祖，佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tiantishan%20Caves%20ancient%20Buddhist%20caves&image_size=square' },
      { name: '乌鞘岭', type: '自然景观', rating: 4.4, description: '河西走廊门户，高原风光', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wushaoling%20beautiful%20mountain%20pass&image_size=square' }
    ],
    festivals: [
      { name: '武威天马文化节', time: '9月', description: '展示武威文化' },
      { name: '凉州文化节', time: '10月', description: '弘扬凉州文化' },
      { name: '武威美食节', time: '8月', description: '品尝武威美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：凉州三套车、面皮子、沙米凉粉', '交通指南：武威有高铁站', '住宿推荐：武威市区', '注意事项：铜奔马是中国旅游标志'],
    itineraries: [
      { day: 1, title: '汉墓之旅', activities: ['上午雷台汉墓', '中午品尝三套车', '下午武威文庙'] },
      { day: 2, title: '石窟之旅', activities: ['上午天梯山石窟', '下午乌鞘岭', '返程'] }
    ]
  },
  '金昌': {
    attractions: [
      { name: '紫金花城', type: '自然景观', rating: 4.5, description: '紫金花海，浪漫花海', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zijin%20Flower%20City%20beautiful%20flower%20garden&image_size=square' },
      { name: '骊靬古城', type: '人文景观', rating: 4.4, description: '古罗马军团后裔传说地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ligan%20ancient%20city%20Roman%20legends&image_size=square' },
      { name: '金川国家矿山公园', type: '特色体验', rating: 4.3, description: '工业旅游，矿山景观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinchuan%20Mining%20Park%20industrial%20tourism&image_size=square' },
      { name: '金水湖', type: '自然景观', rating: 4.3, description: '城市公园，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jinshui%20Lake%20beautiful%20city%20park&image_size=square' }
    ],
    festivals: [
      { name: '紫金花城旅游节', time: '6月', description: '紫金花盛开季节' },
      { name: '金昌国际马拉松', time: '9月', description: '体育赛事' },
      { name: '金昌美食节', time: '10月', description: '品尝金昌美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：金昌羊肉垫卷子、灰豆子、油饼', '交通指南：金昌有机场和高铁站', '住宿推荐：金昌市区', '注意事项：紫金花夏季盛开'],
    itineraries: [
      { day: 1, title: '花海之旅', activities: ['上午紫金花城', '中午品尝金昌美食', '下午金水湖'] },
      { day: 2, title: '古城之旅', activities: ['上午骊靬古城', '下午矿山公园', '返程'] }
    ]
  },
  '张掖': {
    attractions: [
      { name: '七彩丹霞', type: '自然景观', rating: 4.9, description: '世界地质公园，色彩斑斓的丹霞地貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhangye%20Danxia%20Colorful%20Landform%20Geological%20Park&image_size=square' },
      { name: '冰沟丹霞', type: '自然景观', rating: 4.7, description: '造型奇特的丹霞地貌，壮观震撼', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Binggou%20Danxia%20spectacular%20red%20rock%20formations&image_size=square' },
      { name: '马蹄寺', type: '人文景观', rating: 4.5, description: '千年石窟群，藏传佛教圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mati%20Temple%20ancient%20Buddhist%20caves&image_size=square' },
      { name: '大佛寺', type: '人文景观', rating: 4.4, description: '亚洲最大的室内卧佛', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Great%20Buddha%20Temple%20largest%20indoor%20reclining%20Buddha&image_size=square' }
    ],
    festivals: [
      { name: '丹霞文化旅游节', time: '8月', description: '展示丹霞地貌奇观' },
      { name: '祁连山草原文化节', time: '7月', description: '草原盛会' },
      { name: '美食节', time: '9月', description: '品尝张掖特色美食' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：张掖牛肉小饭、臊面、搓鱼面', '交通指南：张掖有高铁站', '住宿推荐：张掖市区或丹霞景区附近', '注意事项：丹霞景区日落时分最美'],
    itineraries: [
      { day: 1, title: '七彩丹霞游', activities: ['上午游览七彩丹霞', '中午品尝张掖美食', '下午冰沟丹霞'] },
      { day: 2, title: '文化之旅', activities: ['上午参观马蹄寺', '下午大佛寺', '晚上观看丹霞夜景'] }
    ]
  },
  '白银': {
    attractions: [
      { name: '黄河石林', type: '自然景观', rating: 4.6, description: '黄河边上的石林奇观', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yellow%20River%20Stone%20Forest%20spectacular%20landscape&image_size=square' },
      { name: '会师楼', type: '人文景观', rating: 4.5, description: '红军会师纪念地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Huishi%20Tower%20red%20tourism%20in%20Gansu&image_size=square' },
      { name: '景泰古城', type: '人文景观', rating: 4.4, description: '明代古城，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Jingtai%20ancient%20city%20Ming%20Dynasty&image_size=square' },
      { name: '水川湿地', type: '自然景观', rating: 4.4, description: '黄河湿地，候鸟栖息地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shuichuan%20Wetland%20beautiful%20wetland&image_size=square' }
    ],
    festivals: [
      { name: '黄河石林文化旅游节', time: '9月', description: '展示黄河石林风光' },
      { name: '红色文化节', time: '10月', description: '弘扬红色文化' },
      { name: '白银美食节', time: '8月', description: '品尝白银美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：靖远羊羔肉、白银酸烂肉、酿皮', '交通指南：白银有机场', '住宿推荐：白银市区', '注意事项：黄河石林适合摄影'],
    itineraries: [
      { day: 1, title: '石林之旅', activities: ['上午黄河石林', '中午品尝羊羔肉', '下午继续游览'] },
      { day: 2, title: '红色之旅', activities: ['上午会师楼', '下午景泰古城', '返程'] }
    ]
  },
  '临夏': {
    attractions: [
      { name: '八坊十三巷', type: '人文景观', rating: 4.5, description: '回族风情，古街风貌', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bafang%20Thirteen%20Lanes%20traditional%20Muslim%20neighborhood&image_size=square' },
      { name: '刘家峡水库', type: '自然景观', rating: 4.6, description: '黄河上游水库，湖光山色', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Liujiaxia%20Reservoir%20beautiful%20lake%20in%20Gansu&image_size=square' },
      { name: '炳灵寺石窟', type: '人文景观', rating: 4.5, description: '唐代石窟，佛教艺术', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Binglingsi%20Caves%20ancient%20Buddhist%20caves&image_size=square' },
      { name: '松鸣岩', type: '自然景观', rating: 4.4, description: '森林景观，花儿故乡', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Songmingyan%20beautiful%20forest%20park&image_size=square' }
    ],
    festivals: [
      { name: '临夏花儿艺术节', time: '6月', description: '花儿演唱盛会' },
      { name: '临夏美食节', time: '9月', description: '品尝临夏美食' },
      { name: '莲花山花儿会', time: '六月六', description: '传统花儿会' }
    ],
    travelTips: ['建议游玩天数：2-3天', '必尝美食：东乡手抓、河沿面片、酿皮子', '交通指南：临夏有机场', '住宿推荐：临夏市区', '注意事项：八坊十三巷值得一游'],
    itineraries: [
      { day: 1, title: '民俗之旅', activities: ['上午八坊十三巷', '中午品尝手抓羊肉', '下午继续游览'] },
      { day: 2, title: '山水之旅', activities: ['上午刘家峡水库', '下午炳灵寺石窟', '返程'] }
    ]
  },
  '庆阳': {
    attractions: [
      { name: '南梁革命纪念馆', type: '人文景观', rating: 4.5, description: '红色旅游圣地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Nanliang%20Revolutionary%20Memorial%20red%20tourism&image_size=square' },
      { name: '周祖陵', type: '人文景观', rating: 4.4, description: '周祖文化，历史悠久', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhouzu%20Mausoleum%20ancient%20Chinese%20ancestor%20tomb&image_size=square' },
      { name: '崆峒山', type: '自然景观', rating: 4.6, description: '道教名山，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kongtong%20Mountain%20Taoist%20sacred%20mountain&image_size=square' },
      { name: '庆城古城', type: '人文景观', rating: 4.4, description: '千年古城，保存完好', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Qingcheng%20ancient%20city%20traditional%20town&image_size=square' }
    ],
    festivals: [
      { name: '庆阳农耕文化节', time: '9月', description: '展示农耕文化' },
      { name: '环县皮影艺术节', time: '8月', description: '皮影戏表演' },
      { name: '庆阳美食节', time: '10月', description: '品尝庆阳美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：庆阳臊子面、羊肉泡馍、黄米糕', '交通指南：庆阳有机场', '住宿推荐：庆阳市区', '注意事项：崆峒山需游玩半天'],
    itineraries: [
      { day: 1, title: '红色之旅', activities: ['上午南梁革命纪念馆', '中午品尝庆阳美食', '下午周祖陵'] },
      { day: 2, title: '名山之旅', activities: ['上午崆峒山', '下午庆城古城', '返程'] }
    ]
  },
  '定西': {
    attractions: [
      { name: '贵清山', type: '自然景观', rating: 4.5, description: '陇中名山，风景秀丽', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guiqing%20Mountain%20beautiful%20scenic%20spot&image_size=square' },
      { name: '遮阳山', type: '自然景观', rating: 4.4, description: '森林公园，避暑胜地', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zheyang%20Mountain%20forest%20park&image_size=square' },
      { name: '渭源古城', type: '人文景观', rating: 4.3, description: '千年古城，文化底蕴', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Weiyuan%20ancient%20city%20traditional%20town&image_size=square' },
      { name: '定西博物馆', type: '人文景观', rating: 4.3, description: '展示定西历史文化', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dingxi%20Museum%20local%20history%20exhibition&image_size=square' }
    ],
    festivals: [
      { name: '定西马铃薯文化节', time: '9月', description: '展示定西马铃薯' },
      { name: '贵清山旅游节', time: '6月', description: '展示贵清山风光' },
      { name: '定西美食节', time: '10月', description: '品尝定西美食' }
    ],
    travelTips: ['建议游玩天数：2天', '必尝美食：定西马铃薯、陇西腊肉、浆水面', '交通指南：定西有高铁站', '住宿推荐：定西市区', '注意事项：贵清山夏季避暑好去处'],
    itineraries: [
      { day: 1, title: '名山之旅', activities: ['上午贵清山', '中午品尝定西美食', '下午遮阳山'] },
      { day: 2, title: '文化之旅', activities: ['上午渭源古城', '下午定西博物馆', '返程'] }
    ]
  }
};

export const defaultTourismInfo = {
  attractions: [
    { name: '主要景点', type: '推荐', rating: 4.5, description: '该城市拥有丰富的旅游资源' }
  ],
  festivals: [
    { name: '特色节日', time: '全年', description: '当地特色民俗活动' }
  ],
  travelTips: [
    '建议游玩天数：1-2天',
    '当地美食丰富，值得品尝',
    '交通便利，适合自由行'
  ],
  itineraries: [
    { day: 1, title: '城市观光', activities: ['上午市区游览', '下午景点参观'] }
  ]
};