// 对数组型键值的查找
db.workmate.find(
    {
        $and: [
            {interest: "看电影"}, // 无[]时则对数组存在，有[]则是精确匹配
            {interest: "画画"}
        ]
    },
    {_id: 0}
);

// $all 必须都含有
db.workmate.find(
    {
        interest: {$all: ["看电影", "画画"]}
    },
    {_id: 0}
);

// $in 命中一个，原理同上节
db.workmate.find(
    {
        interest: {$in: ["看电影", "画画"]}
    },
    {_id: 0}
);

// $size 数组的长度
db.workmate.find(
    {
        interest: {$size: 5}
    },
    {_id: 0}
);

// $slice
db.workmate.find(
    {
        interest: {$size: 3}
    },
    {interest: {$slice: 1}, _id: 0} // 可选 -1, [1, 2]
);