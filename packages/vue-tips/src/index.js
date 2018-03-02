import Tips from './tips.vue';

const isAndroid = function () {
  return /android/i.test(window.navigator ? window.navigator.userAgent : '');
};

export default {
  install(Vue) {
    const CONSTRUCTOR = Vue.extend(Tips);
    let vm;
    let tid;

    const showTips = function ({
      msg = '',
      isLoading = false,
      autoHide = true,
      hideTime = 1200,
      iconClass = 'ui-spinner__icon--anim' }) {
      if (!vm) {
        const el = document.createElement('div');
        vm = new CONSTRUCTOR().$mount(el);
      }

      if (vm.open && tid) {
        clearTimeout(tid);
      }

      vm.msg = msg;
      vm.isLoading = isLoading;
      vm.open = true;
      vm.iconClass = iconClass;

      if (autoHide) {
        tid = setTimeout(() => {
          vm.open = false;
          tid = null;
        }, hideTime);
      }
    };

    const showLoading = function (msg = '努力加载中...') {
      this.$showTips({
        msg,
        isLoading: true,
        autoHide: false,
        iconClass: isAndroid() ? 'ui-spinner__icon--svg' : 'ui-spinner__icon--anim'
      });
    };

    const showError = function (msg) {
      this.$showTips({
        msg
      });
    };

    const hideTips = function () {
      vm.open = false;
    };

    Vue.$showTips = showTips;
    Vue.$showLoading = showLoading;
    Vue.$showError = showError;
    Vue.$hideTips = hideTips;

    Vue.prototype.$showTips = showTips;
    Vue.prototype.$showLoading = showLoading;
    Vue.prototype.$showError = showError;
    Vue.prototype.$hideTips = hideTips;
  }
};
