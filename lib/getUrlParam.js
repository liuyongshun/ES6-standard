'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getUrlParam(sVar) {
  return decodeURI(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURI(sVar).replace(/[.+*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
}
exports.getUrlParam = getUrlParam;