$(function () {
  var pageManager = {
      $container: $('#container'),
      _pageStack: [],
      _configs: [],
      _pageAppend: function(){},
      _defaultPage: null,
      _pageIndex: 1,
      setDefault: function (defaultPage) {
          this._defaultPage = this._find('name', defaultPage);
          return this;
      },
      setPageAppend: function (pageAppend) {
          this._pageAppend = pageAppend;
          return this;
      },
      init: function () {
          var self = this;

          $(window).on('hashchange', function () {              
              var state = history.state || {};
              var url = location.hash.indexOf('#') === 0 ? location.hash : '#';
              var page = self._find('url', url) || self._defaultPage;

              if (state._pageIndex <= self._pageIndex || self._findInStack(url)) {
                  self._back(page);
              } else {
                  self._go(page);
              }
          });

          if (history.state && history.state._pageIndex) {
              this._pageIndex = history.state._pageIndex;
          }

          this._pageIndex--;

          var url = location.hash.indexOf('#') === 0 ? location.hash : '#';
          var page = self._find('url', url) || self._defaultPage;
          this._go(page);
          return this;
      },
      push: function (config) {
          this._configs.push(config);
          return this;
      },
      go: function (to) {
          var config = this._find('name', to);
          if (!config) {
              return;
          }
          location.hash = config.url;
      },
      _go: function (config) {
          this._pageIndex ++;

          history.replaceState && history.replaceState({_pageIndex: this._pageIndex}, '', location.href);

          var html = $(config.template).html();
          var $html = $(html).addClass('slideIn').addClass(config.name);
          $html.on('animationend webkitAnimationEnd', function(){
              $html.removeClass('slideIn').addClass('js-show');
          });
          this.$container.append($html);
          this._pageAppend.call(this, $html);
          this._pageStack.push({
              config: config,
              dom: $html
          });

          if (!config.isBind) {
              this._bind(config);
          }

          return this;
      },
      back: function () {
          history.back();
      },
      _back: function (config) {
          this._pageIndex --;

          var stack = this._pageStack.pop();
          if (!stack) {
              return;
          }

          var url = location.hash.indexOf('#') === 0 ? location.hash : '#';
          var found = this._findInStack(url);
          if (!found) {
              var html = $(config.template).html();
              var $html = $(html).addClass('js-show').addClass(config.name);
              $html.insertBefore(stack.dom);

              if (!config.isBind) {
                  this._bind(config);
              }

              this._pageStack.push({
                  config: config,
                  dom: $html
              });
          }

          $('.overlay').parent().remove();
          $("#container").height('auto').removeClass('ui-ov-h');
          stack.dom.addClass('slideOut').on('animationend webkitAnimationEnd', function () {
              stack.dom.remove();
          });

          return this;
      },
      _findInStack: function (url) {
          var found = null;
          for(var i = 0, len = this._pageStack.length; i < len; i++){
              var stack = this._pageStack[i];
              if (stack.config.url === url) {
                  found = stack;
                  break;
              }
          }
          return found;
      },
      _find: function (key, value) {
          var page = null;
          for (var i = 0, len = this._configs.length; i < len; i++) {
              if (this._configs[i][key] === value) {
                  page = this._configs[i];
                  break;
              }
          }
          return page;
      },
      _bind: function (page) {
          var events = page.events || {};
          for (var t in events) {
              for (var type in events[t]) {
                  this.$container.on(type, t, events[t][type]);
              }
          }
          page.isBind = true;
      }
  };

//   function fastClick(){
//       var supportTouch = function(){
//           try {
//               document.createEvent("TouchEvent");
//               return true;
//           } catch (e) {
//               return false;
//           }
//       }();
//       var _old$On = $.fn.on;

//       $.fn.on = function(){
//           if(/click/.test(arguments[0]) && typeof arguments[1] == 'function' && supportTouch){ // 只扩展支持touch的当前元素的click事件
//               var touchStartY, callback = arguments[1];
//               _old$On.apply(this, ['touchstart', function(e){
//                   touchStartY = e.changedTouches[0].clientY;
//               }]);
//               _old$On.apply(this, ['touchend', function(e){
//                   if (Math.abs(e.changedTouches[0].clientY - touchStartY) > 10) return;

//                   e.preventDefault();
//                   callback.apply(this, [e]);
//               }]);
//           }else{
//               _old$On.apply(this, arguments);
//           }
//           return this;
//       };
//   }

  function setPageManager(){
      var pages = {}, tpls = $('script[type="text/html"]');
      var winH = $(window).height();

      for (var i = 0, len = tpls.length; i < len; ++i) {
          var tpl = tpls[i], name = tpl.id.replace(/tpl_/, '');
          pages[name] = {
              name: name,
              url: '#' + name,
              template: '#' + tpl.id
          };
      }
      pages.home.url = '#';

      for (var page in pages) {
          pageManager.push(pages[page]);
      }
      pageManager
          .setPageAppend(function($html){
              var $foot = $html.find('.page-ft');
              if($foot.length < 1) return;

              // if($foot.position().top + $foot.height() < winH){
              //     $foot.addClass('j_bottom');
              // }else{
              //     $foot.removeClass('j_bottom');
              // }
          })
          .setDefault('home')
          .init();
  }

  function init(){
    //   fastClick();
      Origami.fastclick(document.body);
      setPageManager();

      window.pageManager = pageManager;
      window.home = function(){
          location.hash = '';
      };
  }
  init();
});

// function createImg() {
//     const canvas = document.createElement('canvas');
//     canvas.width = '48';
//     canvas.height = '48';

//     const ctx = canvas.getContext('2d');
//     ctx.rect(0, 0, 48, 48);
//     ctx.fillStyle = '#ccc';
//     ctx.fill();

//     console.log(canvas.toDataURL());
// }
// createImg();