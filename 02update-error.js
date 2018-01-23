// 错误的update方法
// 这样会导致对应数据只剩下_id 与 age，其他参数全部抹除
// 正确又冗余的方法是数据不论是否被修改了要update
var db = connect('log');
db.login.update({name: 'liutao'},{age: 38});
print('updated successfuly');