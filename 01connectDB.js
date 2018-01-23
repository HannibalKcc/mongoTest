var userName = 'wangxiaoming';
var timeStamep = Date.parse(new Date());
var jsonDatabase = {"_id": 996, "loginName": userName, "time": timeStamep};
var db = connect('log');    // 这里不能使用let声明
db.login.insert(jsonDatabase);

print('[demo]: log print success!');