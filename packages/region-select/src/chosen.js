const classes = {
  item: 'ui-region-select__chosen',
  chosen: 'ui-region-select__chosen--cur',
  text: 'ui-region-select__chosen-text',
};

class Chosen {
  constructor($el, options) {
    this.$el = $el;
    this.options = $.extend({
      onChange: $.noop,
      defaultText: '请选择',
    }, options);
    this._init();
  }

  _init() {
    this.$el.on('click', `.${classes.item}`, this._onClick.bind(this));
  }

  _onClick(e) {
    const node = $(e.currentTarget);
    node.addClass(classes.chosen).siblings().removeClass(classes.chosen);
    this.options.onChange(node.index());
  }

  setChosenText(text, level) {
    this.$el.find(`.${classes.item}`).eq(level).find(`.${classes.text}`).text(text);
  }

  switch(level) {
    const node = this.$el.find(`.${classes.item}`).eq(level);
    node.addClass(classes.chosen).siblings().removeClass(classes.chosen);
    this.options.onChange(level);
  }

  jumpTo(level) {
    this.$el.find(`.${classes.item}`).eq(level).addClass(classes.chosen).siblings().removeClass(classes.chosen);
    this.setChosenText(this.options.defaultText, level);
  }
}

export default Chosen;
