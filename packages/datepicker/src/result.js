class Result {
  constructor(item) {
    if (typeof item !== 'object') {
      item = {
        label: item,
        value: item
      };
    }

    $.extend(this, item);
  }

  toString() {
    return this.value;
  }

  valueOf() {
    return this.value;
  }
}


export default Result;
