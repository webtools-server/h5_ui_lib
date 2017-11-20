/* eslint-disable */

/**
 * 地区选择器
 */
import extend from '@jyb/lib-extend';
import Popup from '@jyb/ui-popup';
import Result from './result';
import tpl from './index.dot';
import listTpl from './list.dot';
import Select from './select';
import Chosen from './chosen';
import chosenTpl from './chosen.dot';

const isAllSame = function(list1, list2) {
  return list1.every((i, index) => i == list2[index]);
}

const classes = {
  selected: 'ui-region-select__list-item--selected',
  chosen: 'ui-region-select__chosen--cur',
  listWrap: 'ui-region-select__list-wrap',
  chosenWrap: 'ui-region-select__chosen-list',
  list: 'ui-region-select__list',
};

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

const defaultOptions = {
  tpl,
  data: [],
  defaultSelect: [],
  onChange: $.noop,
  getLevelData: $.noop,
  depth: 4,
  popup: {
    container: 'body',
    title: '选择所在地区',
    showClose: "false",
    classes: {
      wrap: 'ui-region-select',
      mask: 'ui-overlay--hidden',
      title: 'ui-region-select__title ui-popup__title--noborder',
      content: 'ui-region-select__content',
    }
  }
};

class RegionSelect {
  constructor(options) {
    this.options = extend(true, defaultOptions, options);
    this._init();
  }

  _init() {
    this.data = this.options.data;
    this.options.popup.content = this.options.tpl({
    });
    this.popup = new Popup(this.options.popup);
    this.result = [];

    let _depth = this.options.depth;
    let listHtml = '';
    let chosenHtml = '';
    while (_depth--) {
      listHtml += listTpl({width: `${innerWidth}px`});
      chosenHtml += chosenTpl();
    }

    this.$listWrap = this.popup.$el.find(`.${classes.listWrap}`);
    this.$listWrap.html(listHtml);
    this.$chosenWrap = this.popup.$el.find(`.${classes.chosenWrap}`);
    this.$chosenWrap.html(chosenHtml);

    this.chosenInst = null;
    this._addChosen();
    this.selectInst = [];
    this._addSelect(this.data, 0);
  
    this.$listWrap.css('width', `${innerWidth * this.options.depth}px`);
    this._bindEvent();
  }

  _bindEvent() {
    // this.popup.registerHandler('select', this._select.bind(this));
  }

  _addSelect(items, level) {
    const that = this;
    that._showList(level);
    if (!that.selectInst[level]) { 
      that.selectInst[level] = new Select(this.$listWrap.find(`.${classes.list}`).eq(level), {
        items,
        default: that.options.defaultSelect[level],
        onChange(item, index, isDefault) {
          if (item) {
            that.result[level] = new Result(item);
            for (let i = level, len = that.result.length; i < len; i++) {            
              that.chosenInst.setChosenText('', i + 1);
            } 

            that.result = that.result.slice(0, level + 1);
            that.chosenInst.setChosenText(item.label , level);
          }

          if (item.children && item.children.length > 0) {
            that.chosenInst.jumpTo(level + 1);
            that._addSelect(item.children, level + 1);          
          }
          else {
            that.options.getLevelData(level, item, function(children) {
              if (!isDefault) {
                if (!children || children.length === 0) {
                  that.options.onChange(that.result);
                  that.hide();
                  return 
                }
                else {
                  item.children = children;
                  that._addSelect(item.children, level + 1);
                }
              }
              else {
                that.chosenInst.switch(0);
              }
            })
          }
        }
      });
    }
    else {
      that.selectInst[level].setItems(items);
    }
  }

  _addChosen() {
    const that = this;
    this.chosenInst = new Chosen(this.$chosenWrap, {
      onChange: function(index) {
        that._showList(index);
      }
    })

    this.chosenInst.jumpTo(0);
  }

  _showList(index) {
    this.$listWrap.css('-webkit-transform', `translate3d(${-innerWidth * index}px, 0, 0)`);
    this.$listWrap.children().eq(index).height('auto').siblings().height('0px');
  }

  // _select(node) {
  //   node.addClass(classes.selected).siblings().removeClass(classes.selected);
  //   this.currentSelect = this.data[node.index()];
  // }

  hide() {
    this.popup.hide();
  }

  show() {
    this.popup.show();
  }
}

export default RegionSelect;
