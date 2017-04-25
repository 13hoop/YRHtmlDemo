function randomInt(min, max) {
  var x = Math.random() * (max - min)
  var a = Math.round(x) + min
  if(a == min || a == max) {
    return randomInt(min, max)
  }else {
    return a
  }
}

function randomStr(length) {
  var arr = []
  var str = ""
  
  arr[1] = function randomLower() {
    var code = randomInt(65,90)
    return String.fromCharCode(code)
  }
  arr[2] = function randomUpper() {
    var code = randomInt(65,90) + 32 
    return String.fromCharCode(code)
  }
  var temp = randomInt(0,9)
  arr[3] = function randomNumStr() {
    var code = randomInt(48,57) 
    return String.fromCharCode(code)
  }
  
  function randomAChar() {
    var i = randomInt(0,4)
    var c = arr[i]()
    return c
  }
  
  while(length--) {
    str = str + randomAChar()
  }
  console.log(str)
  return str
}

randomStr(5)
