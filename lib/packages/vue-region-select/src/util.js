const preventDocMove = function () {
  document.documentElement.addEventListener('touchmove', preventDefault, false);
};

const enableDocMove = function () {
  document.documentElement.removeEventListener('touchmove', preventDefault, false);
};

const getIOSVer = function () {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }

  return [0];
};

const loadScript = function (url, callback, error) {
  var sc = document.createElement("script");
  sc.type = "text/javascript";
  callback && (sc.onload = callback);
  error && (sc.onerror = error);
  document.querySelector("head").appendChild(sc);
  sc.src = url;
};

export {
  preventDocMove,
  enableDocMove,
  getIOSVer,
  loadScript
};
