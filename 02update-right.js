// 正确又方便的update修改方法——运用update修改器
var db = connect('log');

// 操作$set
db.login.update({name: 'liutao'}, {$set: {age: 38}});   // 修改，如果不存在，会添加
db.login.update({name: 'wangxiaoming'}, {$set: {"family.farther": "ergouzi"}}); // 内嵌数据的修改,键名必须为字符串

// 操作$unset
db.login.update({name: 'limei'}, {$unset: {sex: "键值随便写"}});  // 删除某一个键

// 操作$inc
db.login.update({name: 'liutao'}, {$inc: {age: +2}});   // 在原数据上进行操作

// 选项multi
db.login.update({}, {$set: {hobby: []}}, {multi: true});    // 设置首次命中后继续执行操作（默认首次后停止执行）。

// 选项upsert
db.login.update({name: '李达后'}, {$set: {age: 68}}, {upsert: true});    // 如果命中失败，则添加

print('operate successfuly');
