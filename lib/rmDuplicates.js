'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * [rmDuplicates description]
 * @param  {[type]} arr      [description]
 * @param  {[type]} property []
 * @return {[type]}          [description]
 * arr : 原数组或者是类数组
 * property : 可提供对象格式的数据的去重，根据属性名去重
 */
function rmDuplicates(arr, property) {
  var temp = [];
  var tempHas = {};
  try {
    if (property) {
      temp = arr.filter(function (n) {
        if (tempHas[n[property]] !== 1) {
          tempHas[n[property]] = 1;
          return true;
        }
      });
    } else {
      temp = [].concat(_toConsumableArray(new Set(Array.from(arr))));
    }
    return temp;
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!');
  }
}
exports.rmDuplicates = rmDuplicates;