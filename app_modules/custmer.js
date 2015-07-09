// ---------------------------------
// Custmerモジュール
// ---------------------------------
module.exports.init = function(moduleApp) {

    var Custmer = require('./model/custmers').Custmer;

    // ---------------------------------
    // 顧客リストの取得
    // ---------------------------------
    moduleApp.get('/custmer', function(req, res) {
        console.log("顧客リストの取得 ");

        Custmer.find({}, {}, {
            sort: {
                'code': 1
            },
            limit: 100
        }, function(err, items) {
            res.send(items);
        });

    });

    // ---------------------------------
    // CSV顧客テストデータの登録
    // ---------------------------------
    moduleApp.get('/createCustmer', function(req, res) {
        console.log("createCustmer get!!");
        var readCount = 0;

        // collection削除
        Custmer.remove({}, function(err, numberRemoved) {
            console.log("inside remove call back" + numberRemoved);
            // CSV読み込み
            var csv = require('ya-csv');
            var reader = csv.createCsvFileReader('./csv/custmer.csv');
            reader.setColumnNames(['code', 'name_sei', 'name_mei', 'kananame_sei', 'kananame_mei']);
            reader.addListener('data', function(data) {
                readCount++;
                var newCustmer = new Custmer(data);
                newCustmer.save(function(err) {
                    if (err) {
                        console.log("insert error:" + err);
                    }
                });
            }).on('end', function() {
                res.redirect(302, "/");
                // res.send("OK:" + readCount);
            });
        });

    });
};