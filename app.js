const http = require('http');
const path = require('path'); // 引入path模块
const router = require('./router/router'); // 引入路由
const template = require('art-template'); //引入art-template模块
const serveStatic = require('serve-static'); // 引入静态资源访问模块
const dateformat = require('dateformat'); // 引入处理日期的第三方模块
require('./model/connect') // 连接数据库

const app = http.createServer(); // 创建服务器

template.defaults.root = path.join(__dirname, 'views'); // 配置模板的根目录
template.defaults.extname = '.art' // 设置模板默认后缀
template.defaults.imports.dateformat = dateformat; // 处理日期格式的方法

const serve = serveStatic(path.join(__dirname, 'public'))

app.on('request', (req, res) => {
    // 启用路由功能
    router(req, res, () => {});
    // 启用静态资源访问服务功能
    serve(req, res, () => {})
});
app.listen(1000, () => {
    console.log('服务器运行在 http://localhost:1000');
});