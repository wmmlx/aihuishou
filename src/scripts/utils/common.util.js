var common = {
  renderBody: function ($el, str) {
      $el.prepend(str);
  },
  innerHTML:function ($el,str) {
      $el.html(str);
  },
  append:function ($el,str) {
      $el.append(str);
  },
  switchPage:function () {
        
  }
};

module.exports = common;
