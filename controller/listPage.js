const Student = require('../model/user'); // 引入学生集合规则
const template = require('art-template'); // 引入art-template模板引擎

module.exports = async(req, res) => {
    // 查询学生信息
    let students = await Student.find();
    let html = template('list', { students })
    res.end(html)
}