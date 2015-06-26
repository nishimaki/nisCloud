module.exports.init = function (moduleApp) {

  moduleApp.get('/portal/:id', function(req, res){
    console.log("portal get!!");
    res.send('portal ' + req.params.id);
  });

};
