// find()的可选参数

// sort 小大、大小 <number 1, -1>
// 需求：一页2个，按年龄从小到大
db.workmate.find(
    {},
    {name: 1,age: 1, _id: 0}
).limit(2).skip(2).sort({age: 1});  // limit 分页个数 skip 跳过个数而非页数

// $where 容易被黑客攻击 以及压力增大
db.workmate.find(
    {$where: 'this.age > 30 && this.sex === 1'},
    {_id: 0}
);