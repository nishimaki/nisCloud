// NCMB
NCMB = require("ncmb-latest.min").NCMB;
NCMB.initialize("51eb52bd757e683f478b83012e77cbe63625301882bbc4972b412eabc19b5fde", "fcb51d2e05594e10b0f47ef258a6db9b30ac061932cedd33cfa63e1a930377f4");

module.exports = {
    init: function() {},
    addCustmer: function() {},
    getCustmer: function(v1, v2) {},
    getTest: function() {
        var TestClass = NCMB.Object.extend("TestClass");
        var testClass = new TestClass();

        var query = new NCMB.Query(TestClass);
        query.equalTo("message", "test");
        query.find({
            success: function(results) {
                if (results[0] != null) {
                    console.info(results[0].get("message"));
                }
                else {
                    testClass.set("message", "Hello, NCMB!");
                    testClass.save({
                        success: function(results) {
                            console.info("Success", results.get("message"));
                        }
                    });
                    console.log("Save..");
                }
            },
            error: function(results) {
                console.error(results);
            }
        });

    },

};
