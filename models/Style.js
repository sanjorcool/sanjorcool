/* CREATE BY SANJORCOOL */

var mongoose = require('mongoose');
var styleSchema = require('../schemas/style');

module.exports = mongoose.module('userStyle',styleSchema);