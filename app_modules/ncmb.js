
module.exports.TestClass = function () {
  var TestClass = NCMB.Object.extend("TestClass");
  var testClass = new TestClass();
  
  var query = new NCMB.Query(TestClass);
  query.equalTo("message", "test");
  query.find({
    success: function(results) {
      if (results[0] != null){
        console.info(results[0].get("message"));
      } else {
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
};
