// 之前的 updatae 是属于非应答式操作
// 实际开发中应给使用 db.runCommand();获取返回值并判断
var db = connect('log');

// args[2] upsert, args[3] multi
// db.login.update({sex: 1}, {$set: {money: 1000}}, false, true);
// var resMsg = db.runCommand({getLastError: 1});
//
// printjson(resMsg);

var modify = {
    findAndModify: 'login',
    query: {name: 'liutao'},    // 搜索条件
    update: {$set:{age: 99}},   // 与 remove 互斥
    new: true
};

var resMsg2 = db.runCommand(modify);
printjson(resMsg2);