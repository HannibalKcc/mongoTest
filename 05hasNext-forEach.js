var db = connect('company');
var res = db.workmate.find();

// hasNext
// while(res.hasNext()) {
//     printjson(res.next())
// }

// forEach
res.forEach(function (res) {
    printjson(res);
});