// find查找
db.workmate.find(
    // 查找条件
    {"skill.skillOne": "HTML+CSS"},
    // 从结果中筛选
    {name: 1, "skill.skillOne": true, _id: 0}
);

// 比较 大于 小于 不等 $gt $lt $ne
db.workmate.find(
    // 查找条件
    {age: {$lte: 30, $gt: 25}},
    // 从结果中筛选技能
    {name: 1, age: true, _id: 0}
);

// 时间比较
var date = new Date("01/01/2018");
db.workmate.find(
    {regeditTime: {$gt: date}},
    {name: 1, age: true, _id: 0}
);

// $in 命中数组内的任意值
db.workmate.find(
    {age: {$in: [25, 33]}},
    {age: 1, _id: 0}
);

// $nin 与上述相反
db.workmate.find(
    {age: {$nin: [25, 33]}},
    {age: 1, _id: 0}
);

// $or $and
db.workmate.find(
    {
        $or: [
            {age: {$gte: 30}},
            {"skill.skillThree": "PHP"}
        ]
    },
    {age: 1, "skill.skillThree": 1, _id: 0}
);

// $not
db.workmate.find(
    {
        age: {$not: {$lte: 30, $gte: 20}}
    },
    {age: 1, "skill.skillThree": 1, _id: 0}
);