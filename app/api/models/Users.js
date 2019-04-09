const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		trim: true,		
		required: true,
	},
	email: {
		type: String,
		index: true, 
		unique: true,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	role: {
		type: String,
		trim: true,
		default: 'user'
	}
	
}, {timestamps: true});

UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('User', UserSchema);