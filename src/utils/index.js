// import MD5 from 'crypto-js/md5';
import * as _ from 'lodash';

/**
 * !function
 */

export function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function pick(...manyMoreArgs) {
  let a = manyMoreArgs,
    c,
    r,
    u = a.length;
  for (c = 0; c < u; c++)
    if (((r = a[c]), void 0 !== r && null !== r)) return r;
}

export function numberFormat(h, c = 0, t = '', r, u) {
  if (h === 'ATO' || h === 'ATC') return h;
  h = +h || 0;
  c = +c;
  let w = (h.toString().split('.')[1] || '').split('e')[0].length,
    n,
    g,
    d = h.toString().split('e');

  g = (Math.abs(d[1] ? d[0] : h) + Math.pow(10, -Math.max(c, w) - 1)).toFixed(
    c
  );
  w = String(parseInt(g, 10));
  n = 3 < w.length ? w.length % 3 : 0;
  r = pick(r, '.');
  u = pick(u, ',');
  h = (0 > h ? '-' : '') + (n ? w.substr(0, n) + u : '');
  h += w.substr(n).replace(/(\d{3})(?=\d)/g, '$1' + u);
  c && (h += r + g.slice(-c));
  d[1] && 0 !== +h && (h += 'e' + d[1]);
  if (h == 0) return t;
  return h;
}

export function StringToInt(pString) {
  pString = '' + pString;
  pString = pString.replace(/,/g, '');
  let vInt = parseInt(pString, 10);
  if (isNaN(vInt)) {
    return 0;
  } else {
    return vInt;
  }
}

export function StringToDouble(pString) {
  pString = '' + pString;
  pString = pString.replace(/,/g, '');
  //Convert sang so he so 10
  let vFloat = parseFloat(pString);
  if (isNaN(vFloat)) {
    return 0;
  } else {
    return vFloat;
  }
}

export function formatDateTimeFull(idata, slack = ':') {
  const h = addZero(idata.getHours());
  const m = addZero(idata.getMinutes());
  const s = addZero(idata.getSeconds());

  const yyyy = idata.getFullYear();
  const mm = addZero(idata.getMonth() + 1);
  const dd = addZero(idata.getDate());

  return h + slack + m + slack + s + ' ' + dd + '/' + mm + '/' + yyyy;
}

export function formatDateTime(idata, slack = ':') {
  if (typeof idata === 'number') {
    let st = new Date(idata);
    let h = addZero(st.getHours());
    let m = addZero(st.getMinutes());
    let s = addZero(st.getSeconds());
    return h + slack + m + slack + s;
  } else {
    let h = addZero(idata.getHours());
    let m = addZero(idata.getMinutes());
    let s = addZero(idata.getSeconds());
    return h + slack + m + slack + s;
  }
}

export function formatDate(idata, slack = ':', _fm = 'ymd') {
  let y, m, d;

  try {
    if (typeof idata === 'number' || typeof idata === 'string') {
      let st = new Date(idata);
      y = st.getFullYear();
      m = addZero(st.getMonth() + 1);
      d = addZero(st.getDate());
    } else {
      y = idata.getFullYear();
      m = addZero(idata.getMonth() + 1);
      d = addZero(idata.getDate());
    }
    if (_fm === 'ymd') {
      return y + slack + m + slack + d;
    } else {
      return d + slack + m + slack + y;
    }
  } catch (error) {
    return null;
  }
}

export function stringToDate(idata, format = 'ymd', slack = '/') {
  try {
    const _date = idata.split(slack);
    if (format === 'ymd') {
      let y = _date[0];
      let m = addZero(_date[1]);
      let d = addZero(_date[2]);
      let st = new Date(y + '-' + m + '-' + d);
      return st;
    } else {
      let y = _date[2];
      let m = addZero(_date[1]);
      let d = addZero(_date[0]);
      let st = new Date(y + '-' + m + '-' + d);
      return st;
    }
  } catch (error) {
    return null;
  }
}

export function _formatDate(str) {
  const arr = str.split('/');

  return arr.reverse().join('');
}

export function _formatDate2(str, slack = '/') {
  if (!str || str.length !== 8) return str;

  const year = str.substring(0, 4);
  const month = str.substring(4, 6);
  const day = str.slice(-2);

  return day + slack + month + slack + year;
}

export function checkRightEndDate(str) {
  if (!str || str.length !== 8) return false;
  // console.log(str)
  const year = str.substring(0, 4);
  const month = str.substring(4, 6);
  const day = str.slice(-2);

  let chkDate = new Date(year, month - 1, day);
  let curDate = new Date();
  curDate.setHours(0, 0, 0, 0);

  return curDate <= chkDate;
}

export function _diff2Date(date1, date2) {
  let mydate1, mydate2;
  if (typeof date1 === 'string') {
    let parts1 = date1.split('/');
    mydate1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
  } else {
    mydate1 = date1;
  }
  if (typeof date2 === 'string') {
    let parts2 = date2.split('/');
    mydate2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);
  } else {
    mydate2 = date2;
  }

  var diff = Math.floor((mydate1 - mydate2) / (1000 * 60 * 60 * 24));

  return diff || 0;
}

export function _diff2DateSecond(date1, date2) {
  let mydate1, mydate2;
  if (typeof date1 === 'string') {
    let parts1 = date1.split('/');
    mydate1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
  } else {
    mydate1 = date1;
  }
  if (typeof date2 === 'string') {
    let parts2 = date2.split('/');
    mydate2 = new Date(parts2[2], parts2[1] - 1, parts2[0]);
  } else {
    mydate2 = date2;
  }

  var diff = Math.floor((mydate1 - mydate2) / 1000);

  return diff || 0;
}

export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function replaceAll(str, find, replace) {
  console.log(str);
  if (!str) return str;

  return str.replace(new RegExp(find, 'g'), replace);
}

export function formatPhoneNumber(str) {
  //Filter only numbers from the input
  let cleaned = ('' + str).replace(/\D/g, '');
  console.log(cleaned);
  //Check if the input is of correct

  let match84 = cleaned.match(/^(84|)?(\d{3})(\d{3})(\d{3})$/);
  console.log(match84);
  if (match84) {
    //Remove the matched extension code
    //Change this to format for any country code.
    let intlCode = match84[1] ? '+84' : '';
    return [
      '(',
      intlCode,
      ') ',
      match84[2],
      '.',
      match84[3],
      '.',
      match84[4],
    ].join('');
  } else {
    let match = cleaned.match(/(\d{4})(\d{3})(\d{3})$/);
    if (match) {
      return [match[1], '.', match[2], '.', match[3]].join('');
    }
  }
  return null;
}

export function renderParams(
  token,
  params,
  group = 'Q',
  mode = 'async',
  other = false
) {
  let _reParam = {},
    chkSum = '';

  _.mapKeys(params, function (value, key) {
    if (
      (key === 'volume' || key === 'nvol') &&
      params.cmd !== 'BD.newCrossOrder'
    ) {
      _reParam[key] = StringToInt(value);
    } else {
      _reParam[key] = value;
    }
  });

  let _msg = {
    action: params.cmd + (other ? 'Other' : ''),
    mode,
    data: {},
  };

  _msg.data['group'] = group;
  _msg.data['c'] = 'H';
  _msg.data['user'] = token?.USER_NAME || '';
  _msg.data['session'] = token?.SESSION_ID || '';

  if (chkSum) _msg.data['checksum'] = chkSum;

  _msg.data['data'] = _reParam;

  return _msg;
}

export function encodeHTML(str) {
  if (!str) return;

  var aStr = str.split(''),
    i = aStr.length,
    aRet = [];

  while (i--) {
    var iC = aStr[i].charCodeAt();
    if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {
      aRet.push('&#' + iC + ';');
    } else {
      aRet.push(aStr[i]);
    }
  }
  return aRet.reverse().join('');
}

export function isValidURL(string) {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
}

export function dataURItoBlob(dataURI) {
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

export function removeAccent(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
}

export function getAge(dateString) {
  //dd/MM/yyyy
  let parts1 = dateString.split('/');
  var today = new Date();
  var birthDate = new Date(new Date(parts1[2], parts1[1] - 1, parts1[0]));
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function checkHasActByFunc(funcCode, pfAccFunc) {
  if (_.some(funcCode, (o) => o === 'ALL')) return true;
  const _boFunc = _.find(pfAccFunc, (o) =>
    _.some(funcCode, (k) => k === o.C_FUNCTION_CODE)
  );
  if (_boFunc?.C_VIEW || _boFunc?.C_APPROVE || _boFunc?.C_UPDATE) return true;

  return false;
}

export function getActByFunc(funcCode, pfAccFunc) {
  if (_.some(funcCode, (o) => o === 'ALL'))
    return {
      C_VIEW: 1,
      C_APPROVE: 1,
      C_UPDATE: 1,
    };
  const _boFunc = _.find(pfAccFunc, (o) =>
    _.some(funcCode, (k) => k === o.C_FUNCTION_CODE)
  );
  return _boFunc;
}

export function findAll(id, items) {
  var i = 0,
    found,
    result = [];

  for (; i < items.length; i++) {
    if (items[i].url === id) {
      result.push(items[i]);
    } else if (_.isArray(items[i].children)) {
      found = findAll(id, items[i].children);
      if (found?.length) {
        result = result.concat(found);
      }
    }
  }
  return result;
}