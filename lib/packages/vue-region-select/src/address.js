import { getLevelAddress } from './service'
import { loadScript } from './util';

let Cache;
let init = 0;
const initJDAddress = function (callback) {
  if (init) {
    callback();
  } else {
    const localAddr = window.localStorage.getItem('jdAddress')
    if (localAddr) {
      // 创建script节点，把代码插入到文档中
      var script = document.createElement("script");
      script.innerHTML = localAddr;
      document.querySelector("head").appendChild(script);
      initData();
      init = 1;
      callback();
    } else {
      // 通过ajax加载地址库内容
      loadScript("https://cdn.jyblife.com/static/js/data/regionData_jd.js", () => {
        initData();
        setLocalAddress();
        init = 1;
        callback();
      });
    }
  }
}

const initCache = function (data) {
  return {
    filter(areaList) {
      return areaList.filter(area => {
        return !data[area.level] || !data[area.level][area.code]
      })
    },
    get(areaList) {
      return areaList.map(area => {
        return data[area.level] && data[area.level][area.code]
      })
    },
    set(areaList, areaData) {
      areaList.forEach(area => {
        data[area.level] = data[area.level] || {}
        data[area.level][area.code] = areaData[area.code]
      })
    }
  }
};

const initData = function () {
  const data = $getRegionMap && $getRegionMap()
  if (!data) {
    return
  }

  //设置省份
  Cache = initCache({})
  Cache.set([{ level: 1, code: 0 }], { 0: data[0].addressList })

  //设置城市
  const provinces = data[0].addressList
  const citys = Array.prototype.slice.call(data, 1)
  setCityCache(provinces, citys)
}

const setCityCache = function (provinces, citys) {
  provinces.forEach((pro, index) => {
    Cache.set([{ level: 2, code: pro.id }], {
      [pro.id]: citys[index].addressList
    })
  })
}

const setLocalAddress = function () {
  const codeString = $getRegionMap && $getRegionMap.toString() + 'window["JDregionData"]=true;'
  localStorage.setItem('jdAddress', codeString)
}

const translateToJdAddress = function (areas) {
  if (!areas) {
    return
  }

  for (let areaCode in areas) {
    const obj = areas[areaCode]
    areas[areaCode] = Object.keys(obj).map(name => ({ id: obj[name], name }))
  }
}

const getAddressData = function (areaList, callback) {
  const unCachedArea = Cache.filter(areaList)
  if (unCachedArea.length === 0) {
    setTimeout(() => { callback(Cache.get(areaList)) }, 0)
    return
  }

  getLevelAddress({
    area: unCachedArea.filter(i => i)
  }, ret => {
    if (ret.code != 0) {
      alert(ret.msg);
      return
    }

    translateToJdAddress(ret.data.area)
    Cache.set(unCachedArea, ret.data.area)
    callback(Cache.get(areaList))
  })
};

export function getLevelData(...args) {
  initJDAddress(function() {
    getAddressData.apply(null, args);
  });
};