
// forEach
Array.prototype.forEach = function(fn, context) {
  if(Object.prototype.toString.call(fn) !== "[object Function]") {
      throw new TypeError(fn + "is not a function");
  }
  for(var i = 0; i < this.length; i++) {
      fn.call(context, this[i], i, this);
  }
}
// map
Array.prototype.map = function (func, ctx) {
  let len = this.length
  if(Object.prototype.toString.call(func) !== "[object Function]") {
    throw new TypeError(func + "is not a function")
  }
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(func.call(ctx, this[i], this))
  }
  return arr
}
// find
Array.prototype.find = function (func, ctx) {
  let len = this.length
  if(Object.prototype.toString.call(func) !== "[object Function]") {
    throw new TypeError(func + "is not a function")
  }
  var obj = undefined
  for (let i = 0; i < len; i++) {
    if (func.call(ctx, this[i], i)) {
      obj = this[i]
    }
  }
  return obj
}
// findIndex
Array.prototype.findIndex = function (func, ctx) {
  let len = this.length
  if(Object.prototype.toString.call(func) !== "[object Function]") {
    throw new TypeError(func + "is not a function")
  }
  let index = undefined
  for (let i = 0; i < len; i++) {
    if (func.call(ctx, this[i], i)) {
      index = i
    }
  }
  return index
}
// filter
 Array.prototype.filter = function (func, ctx) {
  let len = this.length
  if(Object.prototype.toString.call(func) !== "[object Function]") {
    throw new TypeError(func + "is not a function")
  }
  var arr = []
  for (let i = 0; i < len; i++) {
    if (func.call(ctx, this[i], i)) {
      arr.push(this[i])
    }
  }
  return arr
 }
// some
Array.prototype.some = function (func, ctx) {
  let len = this.length
  if(Object.prototype.toString.call(func) !== "[object Function]") {
    throw new TypeError(func + "is not a function")
  }
  let flag = false
  for (let i = 0; i < len; i++) {
    if (func.call(ctx, this[i], i)) {
      flag = true
    }
  }
  return flag
 }
// every
Array.prototype.every = function (func, ctx) {
  let len = this.length
  if(Object.prototype.toString.call(func) !== "[object Function]") {
    throw new TypeError(func + "is not a function")
  }
  var flag = true
  for (let i = 0; i < len; i++) {
    if (func.call(ctx, this[i], i)) {
      flag = false
    }
  }
  return flag
 }
