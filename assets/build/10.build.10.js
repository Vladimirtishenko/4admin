webpackJsonp([10],{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Notification = __webpack_require__(5);

	var _Notification2 = _interopRequireDefault(_Notification);

	var _Error = __webpack_require__(7);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UploadModel = function () {
		function UploadModel() {
			_classCallCheck(this, UploadModel);
		}

		_createClass(UploadModel, null, [{
			key: 'getCarouserById',
			value: function getCarouserById(_id, callback, ctrl) {

				ctrl.xhrRequest('GET', '/4admin/carousel/item_edit/' + _id, null, null, callback);
			}
		}, {
			key: 'setCarouselById',
			value: function setCarouselById(params, callback) {}
		}, {
			key: 'uploadImageandReturnSrc',
			value: function uploadImageandReturnSrc(params, callback) {

				this.xhrRequest('POST', params.url, null, params.formData, callback);
			}
		}, {
			key: 'addItemInArray',
			value: function addItemInArray() {}
		}, {
			key: 'removeItemWithArray',
			value: function removeItemWithArray() {}
		}, {
			key: 'addTranslation',
			value: function addTranslation() {}
		}, {
			key: 'removeTranslation',
			value: function removeTranslation() {}
		}, {
			key: 'verifyData',
			value: function verifyData(obj) {
				try {
					var json = JSON.parse(obj);

					if (json.status != 200) {
						throw 'CATEGORY_IS_NOT_DEFINED';
					}

					var objectModel = {};

					objectModel.items = json.data.items;
					objectModel.translation = json.data.translation;

					return objectModel;
				} catch (e) {
					e = typeof e == 'string' ? e : 'UNAMED_ERROR';
					_Notification2.default.codeToNotify(_Error2.default.errorCode(e), 'ERROR');
				}
			}
		}]);

		return UploadModel;
	}();

	exports.default = UploadModel;

/***/ }

});