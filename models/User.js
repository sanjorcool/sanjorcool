/*
*
* CREATE BY SANJORCOOL ON 20170324
*
*/
var mongoose = require('mongoose');
var userSchema = require('../schemas/users');

module.exports = mongoose.model('User',userSchema);