(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueFa = factory());
}(this, function () { 'use strict';

  var fa = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('svg', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: _vm.i[4],
          expression: "i[4]"
        }],
        style: _vm.style,
        attrs: {
          "viewBox": "0 0 " + _vm.i[0] + " " + _vm.i[1],
          "aria-hidden": "true",
          "role": "img",
          "xmlns": "http://www.w3.org/2000/svg"
        }
      }, [_vm.i[4] ? _c('g', {
        attrs: {
          "transform": "translate(256 256)"
        }
      }, [_c('g', {
        attrs: {
          "transform": _vm.transform
        }
      }, [typeof _vm.i[4] == 'string' ? _c('path', {
        attrs: {
          "d": _vm.i[4],
          "fill": _vm.color || _vm.primaryColor || 'currentColor',
          "transform": "translate(-256 -256)"
        }
      }) : [_c('path', {
        attrs: {
          "d": _vm.i[4][0],
          "fill": _vm.secondaryColor || _vm.color || 'currentColor',
          "fill-opacity": _vm.swapOpacity !== false ? _vm.primaryOpacity : _vm.secondaryOpacity,
          "transform": "translate(-256 -256)"
        }
      }), _vm._v(" "), _c('path', {
        attrs: {
          "d": _vm.i[4][1],
          "fill": _vm.primaryColor || _vm.color || 'currentColor',
          "fill-opacity": _vm.swapOpacity !== false ? _vm.secondaryOpacity : _vm.primaryOpacity,
          "transform": "translate(-256 -256)"
        }
      })]], 2)]) : _vm._e()]);
    },
    staticRenderFns: [],
    props: {
      icon: Object,
      fw: Boolean,
      flip: {
        type: String,
        validator: function validator(value) {
          return ['horizontal', 'vertical', 'both'].indexOf(value) >= 0;
        }
      },
      pull: {
        type: String,
        validator: function validator(value) {
          return ['right', 'left'].indexOf(value) >= 0;
        }
      },
      rotate: {
        type: [Number, String],
        validator: function validator(value) {
          return /^[-\d.]+$/.test("" + value);
        }
      },
      size: {
        type: String,
        validator: function validator(value) {
          return /^(lg|xs|sm|([\d.]+)x)$/.test(value);
        }
      },
      color: String,
      primaryColor: String,
      secondaryColor: String,
      primaryOpacity: {
        type: [Number, String],
        default: 1
      },
      secondaryOpacity: {
        type: [Number, String],
        default: 0.4
      },
      // eslint-disable-next-line vue/require-prop-types
      swapOpacity: {
        default: false
      }
    },
    computed: {
      i: function i() {
        return this.icon && this.icon.icon || [0, 0, '', [], ''];
      },
      style: function style() {
        if (!this.i[4]) {
          return {};
        }

        var base = {
          height: '1em',
          overflow: 'visible',
          verticalAlign: '-.125em'
        };
        var fw = this.fw,
            pull = this.pull,
            size = this.size;

        if (fw) {
          base.textAlign = 'center';
          base.width = '1.25em';
        }

        if (pull) {
          base.float = pull;
        }

        if (size) {
          if (size == 'lg') {
            base.fontSize = '1.33333em';
            base.lineHeight = '.75em';
            base.verticalAlign = '-.225em';
          } else if (size == 'xs') {
            base.fontSize = '.75em';
          } else if (size == 'sm') {
            base.fontSize = '.875em';
          } else {
            base.fontSize = size.replace('x', 'em');
          }
        }

        return base;
      },
      transform: function transform() {
        var flip = this.flip,
            rotate = this.rotate;
        var transform = '';

        if (flip) {
          var flipX = 1;
          var flipY = 1;

          if (flip == 'horizontal') {
            flipX = -1;
          } else if (flip == 'vertical') {
            flipY = -1;
          } else {
            flipX = flipY = -1;
          }

          transform += " scale(" + flipX + " " + flipY + ")";
        }

        if (rotate) {
          transform += " rotate(" + rotate + " 0 0)";
        }

        return transform;
      }
    }
  };

  return fa;

}));
