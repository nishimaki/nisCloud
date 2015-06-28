// ---------------------------------
// Portalモジュール
// ---------------------------------
module.exports.init = function (moduleApp, NCMB) {

  //get(/portal)
  moduleApp.post('/login', function(req, res){
    console.log("portal post:" + req.body.data.email + ':' + req.body.data.password );
    
      // ユーザー名とパスワードでログイン
      NCMB.User.logIn("user1", "password1", {
          success: function(user) {
              console.log("ログイン成功");
          },
          error: function(user, error) {
              console.log("ログイン失敗: " + error.message);
          }
      });
    
  });
};
