requirejs.config({
    paths: {
        Backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        jquery: '../bower_components/jquery/dist/jquery',
        mocha: '../bower_components/mocha/mocha',
        lib: '../lib',
        expect: '../bower_components/expect/index'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        mocha: {
            exports: 'mocha',
            init: function () {
                this.mocha.setup('bdd');
                return this.mocha;
            }
        },
        expect: {
            exports: 'expect'
        }
    }
});

// Hello PhantomJS https://github.com/ariya/phantomjs/issues/10522
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

require(['ElementsViewTests'], function (ElementsViewTests) {
    new ElementsViewTests({
        el: document.body
    });
});
