var countdown = (callback) => {
  setTimeout(callback, 2000)
}

var createMultiplier = (multiplyValue) => {
  return (value) =>  multiplyValue * value;
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var multiplier = (x, y) => {
  return x * y;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
