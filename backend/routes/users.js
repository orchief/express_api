var express = require('express');
var router = express.Router();
var query = require('../db/pool.js');
var tree = require('../methods/tree.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  query("SELECT SQL_CALC_FOUND_ROWS * FROM admin_rule;", [], function (results, fields) {
    //查询后的回调

    console.log(results);
    console.log(fields);

    // 将数据返回的数据格式化为树结构
    fields = tree(fields);

    // SELECT FOUND_ROWS();

    let jsonData = {
      list: fields,
      dataCount: 10
    }
    res.json(jsonData);
    //Results代表是查询的结果，如果是插入修改等操作，则返回影响数据库信息的对象
    // fields代表查询的字段信息
  })
});

module.exports = router;
