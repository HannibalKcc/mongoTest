// 进一步运用update修改器
var db = connect('log');

// $push
// db.login.update({name: 'limei'}, {$push: {sex: 'football'}});   // 注意，如果原键值类型不是数组，那么会整个键值会被一个新的数组取代

// $ne  目标值不存在则命中
// db.login.update({name: 'limei', hobby: {$ne: 'tableGame'}}, {$push: {hobby: 'tableGame'}});

// $addToSet 上面$ne的升级版本
db.login.update({name: 'limei'}, {$addToSet: {hobby: 'readBook'}});

// $each 批量追加
var hobbyList = ['sing', 'code', 'jump'];
db.login.update({name: 'limei'}, {$addToSet: {hobby: {$each: hobbyList}}});

// $pop 1从末端进行删除 -1从开始位置删除
// db.login.update({name: 'limei'}, {$pop: {hobby: 1}});

// 根据数组下标修改
// db.login.update({name: 'limei'}, {$set: {"hobby.2": 'run'}});

print('operate successfuly');