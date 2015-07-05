// ---------------------------------
// Custmerモジュール
// ---------------------------------
module.exports.init = function(moduleApp) {

        // ---------------------------------
        // 顧客リストの取得
        // ---------------------------------
        moduleApp.get('/custmer', function(req, res) {
                    console.log("顧客リストの取得 ");
                    var query = new NCMB.Query(C_CUSTMER);
                    // // タイムスタンプより大きいデータが対象
                    // if (TimeStamp != null && TimeStamp != undefined && TimeStamp != "") {
                    //     query.greaterThan("updateDate", new Date(TimeStamp));
                    // }
                    query.limit(1000);
                    query.find({
                        success: function(results) {
                            console.log("C_CUSTMER LENGTH:" + results.length);
                            custmerList = [];

                            // データ移送
                            __.each(results, function(c) {
                                var cus = {
                                    objectId: c.id,
                                    createDate: c.get("createDate"),
                                    updateDate: c.get("updateDate"),
                                    deleteFlag: c.get("deleteFlag"),
                                    name: c.get("name"),
                                    namekana: c.get("namekana"),
                                    yuubin: c.get("yuubin"),
                                    addr: c.get("addr"),
                                    addrSub: c.get("addrSub"),
                                    tel: c.get("tel"),
                                    fax: c.get("fax"),
                                    mobile: c.get("mobile"),
                                    email: c.get("email"),
                                };
                                custmerList.push(cus);
                            });
                            // 戻り値を取得したデータリストとする
                            res.send(custmerList);
                        },
                        error: function(error) {
                            res.send("");
                        }
                    });
                });
};