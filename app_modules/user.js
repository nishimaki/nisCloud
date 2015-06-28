// ---------------------------------
// Userモジュール
// ---------------------------------
module.exports.init = function (moduleApp, NCMB) {

  //get(/portal)
  moduleApp.post('/login', function(req, res){
    console.log("portal post:" + req.body.data.email + ':' + req.body.data.password );
    
      // メールアドレスとパスワードでログイン
      NCMB.User.loginWithMailAddress(req.body.data.email, req.body.data.password, {
          success: function(user) {
              console.log("ログイン成功");
          },
          error: function(user, error) {
              console.log("ログイン失敗: " + error.message);
          }
      });

      // ユーザー名とパスワードでログイン
      // NCMB.User.logIn("tnis", "test", {
      //     success: function(user) {
      //         console.log("ログイン成功");
      //     },
      //     error: function(user, error) {
      //         console.log("ログイン失敗: " + error.message);
      //     }
      // });
    
  });
};

module.exports.AddUser = function (NCMB) {
  // var user = new NCMB.User();
  // user.set("userName", "tnis");
  // user.set("password", "test");
  // user.set("mailAddress", "t.nis@icloud.com");

  // // 任意フィールドに値を追加 
  // user.set("phone", "987-654-3210");
  // user.signUp(null, {
  //     success: function(user) {
  //         console.log("新規登録に成功");
  //     },
  //     error: function(user, error) {
  //         console.log("新規登録に失敗: " + error.message);
  //     }
  // });

  NCMB.User.requestAuthenticationMail("t.nis@icloud.com", {
    success: function() {
      // 成功
      console.log("send successful");
    },
    error: function(error) {
      // エラー
      console.log("send failed");
    }
  });

  
};
