const userModel = require('../models/Users');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');				
var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';

module.exports = {
	register: function(req, res, next) { 
		
		userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "User added successfully!!!", data: null});
				  
				});
	},

	login: function(req, res, next) {
		userModel.findOne({email:req.body.email}, function(err, userInfo){
					if (err) {
						next(err);
					} else {

						if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {

						 const token = jwt.sign({id: userInfo._id}, secret, { expiresIn: '1h' }); 

						 res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});	

						}else{

							res.json({status:"error", message: "Invalid email/password!!!", data:null});

						}
					}
				});
	},

	changepassword: function(req, res, next){
		if (req.body.token) { 
			let token = req.body.token;
			jwt.verify(token, secret, (err, decoded) => { 
				if (err) {
			        return res.json({
			          status:"error",
			          success: false,
			          message: 'Token is not valid'
			        });
		      	} else { 
		      		let tokens = jwt.decode(token);
		      		let _id = tokens.id;
		      		userModel.findById(_id, function(err, userInfo) {
					  if (!userInfo)
					    return next(new Error('Could not load Document'));
					  else {
					    // do your updates here
					    userInfo.password = req.body.password;
					    userInfo.updatedAt = new Date();
					    userInfo.save(function(err) {
					      if (err)
					        return res.json({success: false, status:"error", message: 'Opps! Somthing wrong. Please try again.'});
					      else
					        return res.json({success: true, message: 'Password change successfully.'});
					    });
					  }
					});

				}
			});
		}else{
			return res.json({
						  status:"error",
					      success: false,
					      message: 'Auth token is not supplied'
					});
		}
		

	}


} 