'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * type : up 从小到大排序；
 * type : lower 从大到小排序；
 * type : split 分开整数和浮点数；
 */
function dealSort(val, type) {
  try {
    var obj = {
      up: function up(a, b) {
        if (a > b) return 1;
        return -1;
      },
      lower: function lower(a, b) {
        if (a > b) return -1;
        return 1;
      },
      split: function split(a, b) {
        if (a > Math.floor(a)) return 1;
        if (b > Math.floor(b)) return -1;
      }
    };
    if (obj[type]) {
      return val.sort(obj[type]);
    } else {
      return val;
    }
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!');
  }
}

exports.dealSort = dealSort;