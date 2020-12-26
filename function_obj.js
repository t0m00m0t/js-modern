'use strict';

var param = 'base, height'
var formula = 'return base * height / 2;'
//var getTriangle = new Function('base', 'height', 'return base * height / 2;');
var getTriangle = new Function(param, formula)

console.log(getTriangle(5, 2));