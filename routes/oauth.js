
/*
 * GET OAuth Instagram
 */


var request = require('request'),
    qs = require('querystring')
    ;

exports.callback = function(req, res){
  
  if (req.query.access_token) {
    res.redirect('/photos?token='+req.query.access_token);
  }

  data = {
    client_id : 'ede7492bc340494587bbecf66267ebd4',
    client_secret : '727d7d2702cf4851b380f0c8ce479253',
    grant_type : 'authorization_code',
    redirect_uri : 'http://localhost:3000/callback',
    code : req.query.code
  };

  options = {
    uri : 'https://api.instagram.com/oauth/access_token',
    method : 'POST',
    form : data
  };

  request.post(options, function(e, r, body){
    console.log(body);
  });

  res.redirect('/photos');
};