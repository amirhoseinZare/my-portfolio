import CryptoJS from "crypto-js";
import variables from "../core/variables";

export default class UtilityService {
  static decrypt = (txt) => {
    var bytes = CryptoJS.AES.decrypt(txt, variables.salt);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  };
  static encrypt = (data) =>
    CryptoJS.AES.encrypt(JSON.stringify(data), variables.salt).toString();
  static convertToQueryString = (obj) => new URLSearchParams(obj).toString();
  static sortAsc(key) {
    return function (a, b) {
      if (a[key] === b[key]) return 0;
      else if (a[key] > b[key]) return 1;
      else return -1;
    };
  }
  static sortDesc = function (key) {
    return function (a, b) {
      if (a[key] === b[key]) return 0;
      else if (a[key] > b[key]) return -1;
      else return 1;
    };
  };
  static arraySum = (arr, field) =>
    arr.reduce((acc, x) => acc + (field ? x[field] : x), 0);

  static getCurrentMenu(menus, pathname) {
    let result = [];
    pathname = pathname ?? window.location.pathname;
    let defaultMenus= [];
    for (let m of menus) {
      if (m.havePath) {
        if (~pathname.indexOf(m.path))
          return [m];
        else if (m.isDefault) {
          defaultMenus.push(m);
        }
      }
      else if (m.hasChild) {
        for (let cM of m.childMenus ?? []) {
          if (~pathname.indexOf(cM.path)) {
            result.push(m);
            result.push(cM);
            return [m, cM]
          }
          else if (cM.isDefault) {
            result.push(m);
            result.push(cM);
          }
        }
      }
    }
    if (!result.length) return defaultMenus;
    else return result;
  }

  static thousandSeparator(number, seperator = ',') {
    number += '';
    number = number.replace(',', '');
    var x = number.split('.');
    var y = x[0];
    var z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + seperator + '$2');
    return y + z;
  }

}
