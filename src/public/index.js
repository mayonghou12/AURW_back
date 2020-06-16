// 序列化字符串的方法 urlListData Function

const urlListData = function (data) {
  var urlStr = ''
  for (var item in data) {
    urlStr += item + '=' + data[item] + '&'
  }
  return urlStr.replace(/&$/, '')
}

export {
  urlListData
}
