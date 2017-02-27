webpackJsonp([4],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helper = __webpack_require__(1);

	var _helper2 = _interopRequireDefault(_helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordeonDispatcher = function (_Helper) {
		_inherits(AccordeonDispatcher, _Helper);

		function AccordeonDispatcher(el) {
			_classCallCheck(this, AccordeonDispatcher);

			var _this = _possibleConstructorReturn(this, (AccordeonDispatcher.__proto__ || Object.getPrototypeOf(AccordeonDispatcher)).call(this));

			if (!el) return _possibleConstructorReturn(_this);
			_this.flyEvent('add', ['click'], [el], _this.handlerAccardeon.bind(_this));
			_this.classToAppend = 'side-show-block';
			_this.classToButtonActive = 'side-card-wrapper__link-active';
			return _this;
		}

		_createClass(AccordeonDispatcher, [{
			key: 'handlerAccardeon',
			value: function handlerAccardeon(event) {
				event.preventDefault();
				if (event.target.classList.contains(this.classToButtonActive) || !event.target) return;

				var href = event.target.getAttribute('data-block'),
				    el = document.querySelector('#showing-block-' + href),
				    activeButton = document.querySelector('.' + this.classToButtonActive),
				    activeTub = document.querySelector('.' + this.classToAppend);

				activeTub.classList.remove(this.classToAppend);
				activeButton.classList.remove(this.classToButtonActive);
				el.classList.add(this.classToAppend);
				event.target.classList.add(this.classToButtonActive);
			}
		}]);

		return AccordeonDispatcher;
	}(_helper2.default);

	exports.default = AccordeonDispatcher;

/***/ }

});