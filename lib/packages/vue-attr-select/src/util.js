const defaultDelimiter = ';';

function powerset(arr) {
  const ret = [[]];
  arr.forEach((i) => {
    ret.forEach((j) => {
      ret.push(j.concat(i));
    });
  });
  return ret;
}

function getAttrArr(key, delimiter = defaultDelimiter) {
  return key.split(delimiter).filter(i => i);
}

function getAttrStr(arr, delimiter = defaultDelimiter) {
  return `${delimiter}${arr.join(delimiter)}${delimiter}`;
}

function parseStock(stock = 0) {
  stock = +stock;
  // -1 代表无限库存
  return stock === -1 ? Infinity : stock;
}

/**
 * 获取所有可选择的组合,返回一个对象，key是所有选择组合，value是组合剩余的库存
 * @param {Object} skus
 * @param {String} delimiter
 * @return {Object} 返回值格式如下所示
 * {
 *  ';231;': 1024,
 *  ';231;8;': 102,
 *  ';231;8;9;': 2,
 *  ';22;': 1022,
 *  ';22;221;': 10,
 *  ';22;221;500;': 0,
 * }
 */
function getAvailMap(skus, delimiter = defaultDelimiter) {
  return Object.keys(skus).reduce((p, c) => {
    const sku = skus[c];
    // 获取当前sku所有可选择的组合
    powerset(getAttrArr(c, delimiter)).forEach((i) => {
      const key = getAttrStr(i, delimiter);
      // 设置当前选择的属性组合的库存
      p[key] = p[key] || 0;
      p[key] += parseStock(sku.stock);
    });

    return p;
  }, {});
}

export {
  getAttrArr,
  getAvailMap,
  getAttrStr
};

// test
// const skus = {
//   ';47815;47816;': { stock: 1024 },
//   ';47815;47817;': { stock: 65535 }
// }
// console.log('>>>>', getAvailMap(skus));
