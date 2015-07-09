    var async = require('async');
    // ---------------------------------
    // オブジェクト判定(ツール)
    // ---------------------------------
    module.exports.isUndefined = function(data) {
        if (data == null || data == undefined) {
            return true;
        }
        var count = 0;
        for (var j in data) {
            count++;
        }
        if (count > 0) {
            return false;
        }
        else {
            return true;
        }
    };



    module.exports.add = function(v1, v2) {
        return v1 + v2;
    };
    module.exports.minus = function(v1, v2) {
        return v1 - v2;
    };

    module.exports.testdata = function(moduleApp) {

        // mongo TEST
        var Item = require('./model/items').Item;


        moduleApp.get('/createItem', function(req, res) {
            console.log("createItem get!!");
            var readCount = 0;
            var csv = require('ya-csv');
            // var reader = csv.createCsvFileReader('./csv/niscloud_items.csv');
            var reader = csv.createCsvFileReader('./csv/item.csv');
            reader.setColumnNames(['code', 'name', 'Kikaku', 'price', 'maker', 'salesDate']);
            reader.addListener('data', function(data) {
                readCount++;
                var newItem = new Item(data);
                newItem.save(function(err) {
                    if (err) {
                        console.log("insert error:" + err);
                    }
                });
            }).on('end', function() {
                res.send("OK:" + readCount);
            });
        });
        
        
        // moduleApp.get('/createItem', function(req, res) {
        //     console.log("createItem get!!");
        //     var readCount = 0;
        //     var csv = require('ya-csv');
        //     var reader = csv.createCsvFileReader('./csv/niscloud_items.csv');
        //     reader.setColumnNames(['item', 'itemname', 'maker']);
        //     reader.addListener('data', function(data) {

        //         readCount++;
        //         // 顧客レコードへの変換
        //         var itemRec = ncmb.toRecord('RE_ITEM', data);

        //         // 保存
        //         itemRec.save({
        //             success: function(result) {
        //                 return ;
        //             },
        //             error: function(error) {
        //                 return ;
        //             }
        //         });
        //     }).on('end', function() {
        //         res.send("OK:" + readCount);
        //     });
        // });

        moduleApp.get('/createCust', function(req, res) {
            console.log("createCust get!!");

            var custList = [{
                    name: "西田 謙多郎",
                    namekana: "ニシダ ケンタロウ",
                    yuubin: "785-0209",
                    addr: "高知県高岡郡津野町西谷乙1-7-13",
                    addrSub: "",
                    tel: "088-073-7655",
                    email: "kentarou_nishida@ffuucmtxzn.qxdp.wv"
                }, {
                    name: "森脇 千鶴",
                    namekana: "モリワキ チヅル",
                    yuubin: "919-1131",
                    addr: "福井県三方郡美浜町木野3-16-5",
                    addrSub: "木野メゾン307",
                    tel: "077-083-2153",
                    email: "chizuru1221@cxzej.kmeep.pru"
                }, {
                    name: "杉原 春江",
                    namekana: "スギハラ ハルエ",
                    yuubin: "787-0006",
                    addr: "高知県四万十市麻生3-11",
                    addrSub: "",
                    tel: "088-158-5542",
                    email: "harue35337@jgssjpax.mb.mj"
                }, {
                    name: "古山 莉央",
                    namekana: "フルヤマ リオ",
                    yuubin: "327-0005",
                    addr: "栃木県佐野市七軒町3-7-8",
                    addrSub: "",
                    tel: "028-516-9426",
                    email: "rio53338@dbhkzzmoq.sdhc.qo"
                }, {
                    name: "横田 里桜",
                    namekana: "ヨコタ リオ",
                    yuubin: "635-0815",
                    addr: "奈良県北葛城郡広陵町古寺2-18-20",
                    addrSub: "ロイヤル古寺202",
                    tel: "074-121-0632",
                    email: "oyokota@mdrmkhtaw.vg"
                }, {
                    name: "久保田 岩雄",
                    namekana: "クボタ イワオ",
                    yuubin: "989-6831",
                    addr: "宮城県大崎市鳴子温泉柳木1-8-18",
                    addrSub: "",
                    tel: "022-209-2821",
                    email: "Iwao_Kubota@uuvskq.rrro.zm"
                }, {
                    name: "牧野 裕一",
                    namekana: "マキノ ユウイチ",
                    yuubin: "602-8374",
                    addr: "京都府京都市上京区一条通御前３丁目西入3-8-17",
                    addrSub: "プラチナ414",
                    tel: "077-959-0317",
                    email: "yuuichi613@qpwr.aoi"
                }, {
                    name: "田村 結花",
                    namekana: "タムラ ユイカ",
                    yuubin: "992-0343",
                    addr: "山形県東置賜郡高畠町根岸3-14-14",
                    addrSub: "",
                    tel: "023-359-3940",
                    email: "yuikatamura@umjb.llo.fd"
                },

            ];

            // async.eachSeries(custList, function(cust, next) {
            //     ncmb.saveCustmer(cust);
            //     next();
            // }, function(err) {
            //     if (err) {
            //         res.send("NG");
            //     }
            //     res.send("OK");
            // });

        });
    };