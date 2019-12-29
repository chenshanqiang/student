const template = require('art-template'); // 引入art-template模板引擎

module.exports = (req, res) => {
    let html = template('index', {});
    res.end(html);
}