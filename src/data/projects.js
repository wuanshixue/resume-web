import nextjs from "../assets/images/nextjs.png";
import photo from "../assets/images/photo.png";
import pretext from "../assets/images/pretext.png";
import zhejian from "../assets/images/zhejian.png";
import report from "../assets/images/report.png";
import wms from "../assets/images/wms.png";

export const projects = [
  {
    title: "毕业设计-特殊人群社交平台",
    description:"基于 Next.js 和 TypeScript 开发的特殊人群社交平台，旨在为特殊需求群体提供无障碍的社交互动体验。",
    image: nextjs,
    github: "https://github.com/wuanshixue/nextjs-typescript-test"
  },
  {
    title:"摄影-城市建设计划中",
    description:"记录城市建筑与发展的摄影项目，用镜头捕捉城市变迁的瞬间与建筑之美。",
    image: photo,
    github:"https://github.com/wuanshixue/photo-test"
  },
  {
    title:"md文档阅读器",
    description:"简洁易用的 Markdown 文档阅读器，支持实时预览和多种文档格式的渲染展示。",
    image: pretext,
    github:"https://github.com/wuanshixue/pretext-md"
  },
  {
    title:"report-delivery-backend",
    description:"报表数据的后端服务，负责报表的生成、外检排单算法推荐，支持高效的数据查询与分发功能。",
    image: report,
    gitee:"https://gitee.com/yuanchuan527/report-delivery-backend"
  },
  {
    title:"zhejian-miniapp-fronted",
    description:"健康体检微信小程序前端，提供体检套餐浏览、优惠筛选和下单等核心购物流程。",
    image: zhejian,
    gitee:"https://gitee.com/ZJ626_0/zhejian-miniapp-fronted"
  },
  {
    title:"wms-fronted",
    description:"仓储管理系统前端，涵盖入库、出库、库存盘点及货位管理等核心仓库业务流程。",
    image: wms,
    gitee:"https://gitee.com/forYj/wms-fronted"
  }
];
