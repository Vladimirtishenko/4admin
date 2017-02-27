webpackJsonp([6],{

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Remove__model = __webpack_require__(19);

	var _Remove__model2 = _interopRequireDefault(_Remove__model);

	var _Error = __webpack_require__(7);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RemoveAction = function () {
		function RemoveAction() {
			_classCallCheck(this, RemoveAction);
		}

		_createClass(RemoveAction, [{
			key: 'removeItem',
			value: function removeItem(event) {
				this.element = event.target;
				this.action = this.element.getAttribute('data-href');

				this.sendActionToRemove();
			}
		}, {
			key: 'sendActionToRemove',
			value: function sendActionToRemove() {
				if (!confirm(_Error2.default.errorCode('DO_YOU_SURE'))) return;
				_Remove__model2.default.sendActionToRemove(this.action, this.element);
			}
		}]);

		return RemoveAction;
	}();

	exports.default = RemoveAction;

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helper = __webpack_require__(1);

	var _helper2 = _interopRequireDefault(_helper);

	var _Notification = __webpack_require__(5);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _Error = __webpack_require__(7);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RemoveModel = function (_Helper) {
		_inherits(RemoveModel, _Helper);

		function RemoveModel() {
			_classCallCheck(this, RemoveModel);

			return _possibleConstructorReturn(this, (RemoveModel.__proto__ || Object.getPrototypeOf(RemoveModel)).call(this));
		}

		_createClass(RemoveModel, [{
			key: 'sendActionToRemove',
			value: function sendActionToRemove(action, el) {
				this.el = el;
				this.xhrRequest('DELETE', action, null, null, this.afterRemoveResponse.bind(this));
			}
		}, {
			key: 'afterRemoveResponse',
			value: function afterRemoveResponse(obj) {
				try {
					var json = JSON.parse(obj);

					if (json.status == 1 && json.model) {
						this.modelAppend(json);
					} else if (json.status == 1) {
						var closest = this.el.closest('.table-side__item-remove');
						closest.parentNode.removeChild(closest);
					} else {
						_Notification2.default.codeToNotify(_Error2.default.errorCode('TRY_LETTER_NOT_DELETED', 'ERROR') + json.message);
					}
				} catch (e) {}
			}
		}, {
			key: 'modelAppend',
			value: function modelAppend(json) {
				__webpack_require__.e/* nsure */(5, function () {
					var Model = __webpack_require__(8)("./" + json.path + '/' + json.model).default;
					Model.removeContents(json);
				});
			}
		}]);

		return RemoveModel;
	}(_helper2.default);

	exports.default = new RemoveModel();

/***/ }

});