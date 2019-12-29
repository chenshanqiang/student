const querystring = require('querystring')
const Student = require('../model/user'); // 引入学生集合规则

module.exports = (req, res) => {
    let formData = ''
    req.on('data', chunk => {
        formData += chunk
    })
    req.on('end', async() => {
        // 将用户提交的信息添加到数据库中
        await Student.create(querystring.parse(formData))
            // 301代表重定向
            // location 跳转地址
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
}