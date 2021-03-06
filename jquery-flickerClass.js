$.fn.flickerClass = function(opts) {
  var default_ops = {
    action: "start",
    wait: [500, 1000],
    stay: [200, 400],
    flickerClass: ""};

    if (typeof opts !== "object" || !opts.flickerClass) {
      return;
    }
    opts = $.extend(default_ops, opts);

    var _rand = function(t) {
      return Math.floor(Math.random() * (t[1] - t[0]) + t[0]);
    };

    var _flicker = function($el, klass, range1, range2) {
      var _time = _rand(range1);
      var _id = setTimeout(function() {
        $el.toggleClass(klass);
        _flicker($el, klass, range2, range1);
      }, _time);
      $el.data("_flicker_id_" + klass, _id);
    };

    return this.each(function() {
      var $el = $(this);
      if (opts.action == "start") {
        if ($el.hasClass(opts.flickerClass)) {
          _flicker($el, opts.flickerClass, opts.stay, opts.wait);
        } else {
          _flicker($el, opts.flickerClass, opts.wait, opts.stay);
        }
      } else {
        clearInterval($el.data("_flicker_id_" + opts.flickerClass));
      }
    });
};
