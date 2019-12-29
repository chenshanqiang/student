const getRouter = require('router'); // 引入router模块
const router = getRouter(); // 获取路由对象

router.get('/add', require('../controller/addPage')) //渲染add界面
router.get('/list', require('../controller/listPage')) //渲染list界面
router.post('/add', require('../controller/addData')) // 添加数据
module.exports = router