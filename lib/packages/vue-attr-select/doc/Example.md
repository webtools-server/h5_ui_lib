# 例子

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>UiVueAttrSelect</title>
  <link href="../node_modules/@jyb/h5_ui_css/dist/style/ui.min.css" rel="stylesheet"></link>

  <script>
    (function (doc, win) {
      var basicWidth = window.basicWidth || 750;
      var minWidth = 320;
      var htmlElement = doc.documentElement;
      var dpr = parseInt(window.devicePixelRatio || 1, 10);
      var recalc = function () {
        var clientWidth = htmlElement.clientWidth || (basicWidth / 2);
        window.rootFontSize = 100 * (clientWidth / basicWidth);
        clientWidth = clientWidth < minWidth ? minWidth : clientWidth;
        htmlElement.style.fontSize = 100 * (clientWidth / basicWidth) + 'px';
        htmlElement.setAttribute("data-dpi", dpr);
      };
      recalc();
      if (!win.addEventListener) return;
      win.addEventListener('resize', recalc, false);
    })(document, window);

  </script>
  <script src="../node_modules/vue/dist/vue.js"></script>
</head>

<body>
  <div id="container">
    <div class="ui-panel">
      <ui-attr-select
        :attrs="attrs"
        :skus="skus"
        :chose-arr.sync="choseArray"
        @chose:change="onChoseChange"
      ></ui-attr-select>
      <div class="ui-text">skuStr：{{skuStr}}</div>
      <div class="ui-text">选择的属性：{{choseText}}</div>
    </div>
  </div>
  <script src="../dist/bundle.dev.js"></script>
  <script>
    const attrs = [{
      "code": "color",
      "name": "\u989c\u8272",
      "attr": [{
        "item_id": "3463",
        "value": "\u4e91\u96fe\u7070\u8272",
        "value_type": "0",
        "default": "1"
      }, {
        "item_id": "3464",
        "value": "\u7c89\u7802\u8272",
        "value_type": "0",
        "default": "0"
      }, {
        "item_id": "3465",
        "value": "\u7070\u8272",
        "value_type": "0",
        "default": "0"
      }, {
        "item_id": "3466",
        "value": "\u9ed1\u8272",
        "value_type": "0",
        "default": "0"
      }]
    }, {
      "code": "xin",
      "name": "\u578b\u53f7",
      "attr": [{
        "item_id": "3467",
        "value": "38\u6beb\u7c73",
        "value_type": "0",
        "default": "1"
      }, {
        "item_id": "3468",
        "value": "42\u6beb\u7c73",
        "value_type": "0",
        "default": "0"
      }]
    }];
    const skus = {
      ";3463;3467;": {
        "sku_id": "3815",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 316000,
        "price": 316000,
        "origin_price": 316000,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t8515\/63\/1248259364\/154512\/a03a7df5\/59b8d0faNbf46eee4.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t8500\/251\/1383902362\/98288\/b12b3103\/59b8d0e6Nb9091fec.jpg"
        ],
        stock: 1,
      },
      ";3463;3468;": {
        "sku_id": "3816",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 345800,
        "price": 345800,
        "origin_price": 345800,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t9154\/216\/1357530031\/148417\/86748957\/59b8d2e9N7a5738e2.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t8911\/76\/1374003779\/98253\/a6c30cf0\/59b8d2e7N4ae68da4.jpg"
        ],
        stock: 10,
      },
      ";3464;3467;": {
        "sku_id": "3817",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 308800,
        "price": 308800,
        "origin_price": 308800,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t9367\/163\/873968840\/175778\/7ef76135\/59b8d2a6Nf522a6e3.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t8875\/283\/896859430\/116654\/31d06483\/59b8d296Nd9cb3363.jpg"
        ],
        stock: 0,
      },
      ";3464;3468;": {
        "sku_id": "3818",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 345800,
        "price": 345800,
        "origin_price": 345800,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t8086\/132\/1418264524\/175590\/604794e8\/59b8d0d4N731f9f36.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t9445\/168\/1413531152\/115983\/80614bd6\/59b8d0daNe64179d4.jpg"
        ],
        stock: -1,
      },
      ";3465;3467;": {
        "sku_id": "3819",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 316000,
        "price": 316000,
        "origin_price": 316000,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t8938\/206\/1399296043\/149514\/1b1f6805\/59b8d379N9deaf4b7.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t9217\/64\/1386667205\/99612\/ba778729\/59b8d37aN4ceb19f2.jpg"
        ]
      },
      ";3465;3468;": {
        "sku_id": "3820",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 345800,
        "price": 345800,
        "origin_price": 345800,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t8980\/261\/1395483961\/146515\/58ac50e5\/59b8d276N732fdac0.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t9184\/106\/1408594916\/99085\/fd1cae13\/59b8d276N733d3eea.jpg"
        ]
      },
      ";3466;3467;": {
        "sku_id": "3821",
        "sku_name": null,
        "free_freight": "0",
        "show_price": 316000,
        "price": 316000,
        "origin_price": 316000,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t8455\/293\/1381797219\/142414\/48b1ae34\/59b8ddebN137f4762.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t7540\/246\/3063101836\/91615\/fc83ffc5\/59b8ddecNa6d56376.jpg"
        ]
      },
      ";3466;3468;": {
        "sku_id": "3822",
        "sku_name": null,
        "free_freight": "0",
        "package_rule": [{
          "rule_id": "5409",
          "rule_name": "\u5373\u65f6\u53d1\u653e",
          "period_unit": "0",
          "period": "1",
          "period_num": "1",
          "t_day": "0",
          "sku_id": "3822",
          "free_prd_id": "926",
          "pack_price": 345800,
          "type": "1",
          "prd_id": "381"
        }],
        "show_price": 345800,
        "price": 345800,
        "origin_price": 345800,
        "img": ["https:\/\/m.360buyimg.com\/n1\/jfs\/t8668\/73\/1380914462\/142264\/52d4232f\/59b8d20fN76efcbe6.jpg",
          "https:\/\/m.360buyimg.com\/n1\/jfs\/t9448\/62\/1408774928\/99097\/6c1d2650\/59b8d210Nb32e5fb3.jpg"
        ]
      }
    }
    new Vue({
      el: '#container',
      components: {
        [UIVueAttrSelect.name]: UIVueAttrSelect,
      },
      data: {
        choseArray: [],
        choseText: '',
        attrs,
        skus,        
      },
      computed: {
        skuStr() {
          return this.choseArray.join(';')
        },
      },
      methods: {
        onChoseChange(val1, texts) {
          this.choseText = texts.join(' ')
        }
      }
    })
  </script>
</body>

</html>
```

