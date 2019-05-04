'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [pwdRange description]
 * @param  {[String]} str    [description]
 * @param  {[Array]} arr    [description]
 * @param  {Number} length [description]
 * @return {[type]}        [description]
 * arr : 五种校验类型,按数组顺序校验，可以自己把控顺序。 ['length', 'number', 'upper', 'lower', 'special']
 * length : 长度校验的长度可以调整。
 */
function pwdRange(str, arr) {
  var _length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

  var curr = 0;
  var result = {
    status: true,
    type: 'success'
  };
  try {
    var obj = {
      length: function length() {
        if (str.length < _length) {
          result.status = false;
          result.type = 'length';
          return;
        }
        curr++;
        this[arr[curr]] && this[arr[curr]]();
      },
      upper: function upper() {
        if (!/[A-Z]/.test(str)) {
          result.status = false;
          result.type = 'upper';
          return;
        }
        curr++;
        this[arr[curr]] && this[arr[curr]]();
      },
      lower: function lower() {
        if (!/[a-z]/.test(str)) {
          result.status = false;
          result.type = 'lower';
          return;
        }
        curr++;
        this[arr[curr]] && this[arr[curr]]();
      },
      number: function number() {
        if (!/[0-9]/.test(str)) {
          result.status = false;
          result.type = 'number';
          return;
        }
        curr++;
        this[arr[curr]] && this[arr[curr]]();
      },
      special: function special() {
        if (!/[^a-zA-z\s\d]/.test(str)) {
          result.status = false;
          result.type = 'special';
          return;
        }
        curr++;
        this[arr[curr]] && this[arr[curr]]();
      }
    };
    obj[arr[0]]();
    return result;
  } catch (err) {
    console.info(err, 'plugin suffix = . =!!!');
  }
}
exports.pwdRange = pwdRange;