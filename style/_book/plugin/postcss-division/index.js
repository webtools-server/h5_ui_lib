var postcss = require('postcss');
var pxRegex = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)Px/g;

var toFixed = function(number, precision) {
  var multiplier = Math.pow(10, precision + 1),
  wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}

var createPxReplace = function (options) {
  return function (m, $1) {
    if (!$1) return m;
    var pixels = parseFloat($1);
    if (pixels < options.minPixelValue) return m;
    var fixedVal = toFixed((pixels / options.dpr), options.unitPrecision);
    
    return fixedVal + 'px';
  }
};

const defaultOptions = {
  dpr: '1',
  unitPrecision: '5',
  minPixelValue: '0'
}

module.exports = postcss.plugin('postcss-division', function(options) {
  options = Object.assign(defaultOptions, options);
  var pxReplace = createPxReplace(options);

  return function (css) {
    css.walkDecls(function (decl, i) {
      if (decl.value.indexOf('Px') === -1) return;
      var value = decl.value.replace(pxRegex, pxReplace);
      decl.value = value;
    });    
  }  
})