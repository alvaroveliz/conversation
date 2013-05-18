
/*
 * GET home page.
 */

 var request = require('request')
     ;

exports.index = function(req, res){
  res.render('index');
};

exports.singin = function(req, res){
  client_id = 'ede7492bc340494587bbecf66267ebd4';
  callback = 'http://localhost:3000/callback';
  response_type = 'code'; // code, token
  api_url = 'https://instagram.com/oauth/authorize/?client_id='+client_id+'&redirect_uri='+callback+'&response_type='+response_type;
  res.redirect(api_url);
};

exports.photos = function(req, res){
  res.render('photos');
}

exports.loadPhotos = function(req, res){
  user_data = {
    "access_token":"773856.ede7492.6ca7abafd566420a8c99b8d1e5ab5f27",
    "user" : { 
      "username":"alvaroveliz",
      "bio":"",
      "website":"http:\/\/alvaroveliz.cl",
      "profile_picture":"http:\/\/images.ak.instagram.com\/profiles\/profile_773856_75sq_1364408737.jpg",
      "full_name":"Alvaro V\u00e9liz",
      "id":"773856"
    }
  };

  url_user = 'https://api.instagram.com/v1/users/'+user_data.user.id+'/media/recent?access_token='+user_data.access_token;
  url_self = 'https://api.instagram.com/v1/users/self/feed?access_token='+user_data.access_token;

  options = {
    uri : url_user,
    method : 'GET',
    json: true
  };

  request.get(options, function(e, r, body){
    res.json(body);
  });
}