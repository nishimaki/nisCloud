// ---------------------------------
// Portalモジュール
// ---------------------------------
module.exports.init = function (moduleApp) {

  //get(/portal)
  moduleApp.get('/portal', function(req, res){
    console.log("portal get!!");
    
    var portalList = [
      {title: 'タイトル１'},
      {title: 'タイトル２'},
      {title: 'タイトル３'}
    ];
    res.send(portalList);
    
  });

};
