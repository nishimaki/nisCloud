// ---------------------------------
// Portalモジュール
// ---------------------------------
module.exports.init = function (moduleApp) {

  //get(/portal)
  moduleApp.get('/portal', function(req, res){
    console.log("portal get!!");
    
    if (req.session) {
        console.log(req.session);
    }
    req.session.user = {
        user: "hayo",
        pass: "fuga"
    };

    var portalList = [
      {title: 'タイトル１'},
      {title: 'タイトル２'},
      {title: 'タイトル３'}
    ];
    res.send(portalList);
    
  });

};
