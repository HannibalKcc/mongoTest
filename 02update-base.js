// 探究update的方法r
var worker1 = {
    name: 'wangxiaoming',
    sex: 1, // 0女 1男
    age: 18
}

var worker2 = {
    name: 'limei',
    sex: 0, // 0女 1男
    age: 18
}

var worker3 = {
    name: 'liutao',
    sex: 1, // 0女 1男
    age: 388
}

var db = connect('log');    // 这里不能使用let声明
db.login.insert([worker1, worker2, worker3]);

print('[demo]: log print success!');