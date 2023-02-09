module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false
  }
  let newStr = str.split('')
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (newStr === bracketsConfig[i].join('')) {
      return true
    }

    for (let k = 1; k <= newStr.length; k++) {
      if (
        newStr[k - 1] === bracketsConfig[i].join('')[0] && newStr[k] === bracketsConfig[i].join('')[1]) {
          newStr.splice(k - 1, 2)
        k = 0
      }
    }

    if (newStr.length === 0) {
      return true
    }
  }
  let result =''
  if (str.length > newStr.join('').length) {
    str = newStr.join('')
    result = check(str, bracketsConfig)
    return result
  }
  return false
}
