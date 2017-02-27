webpackJsonp([8],{

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Error = __webpack_require__(7);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ValidationAction = function () {
		function ValidationAction() {
			_classCallCheck(this, ValidationAction);
		}

		_createClass(ValidationAction, [{
			key: 'getElements',
			value: function getElements(el) {
				this.passwordInputArray = [];
				this.validationObject = { status: true, fields: '' };

				for (var i = 0; i < el.length; i++) {
					if (el[i].type == 'hidden' || el[i].type == 'text' || el[i].type == 'email' || el[i].tagName == 'SELECT' || el[i].tagName == 'TEXTAREA') {
						this.objectRegExp(el[i].name, el[i]);
					}
					if (el[i].type == 'password' && (el[i].name == 'password' || el[i].name == 'repeat_password')) {
						this.objectRegExp(el[i].name, el[i]);
						this.passwordInputArray.push(el[i]);
					}
				}

				if (this.passwordInputArray.length > 1) {
					var repeatSuccess = this.passwordInputArray[0].value == this.passwordInputArray[1].value;

					if (!repeatSuccess) {
						this.validationObject.status = false;
						_Error2.default.appendErrorClass(this.passwordInputArray[1]);
					}
				}
			}
		}, {
			key: 'objectRegExp',
			value: function objectRegExp(name, field) {
				var editor = void 0;

				try {
					editor = CKEDITOR || null;
				} catch (e) {
					editor = null;
				}

				var regObj = {
					title_ru: /[А-Яа-я0-9]/,
					title_en: /[A-Za-z0-9]/,
					description_ru: 150,
					description_en: 150,
					password: /[A-Za-z0-9]/,
					repeat_password: /[A-Za-z0-9]/,
					new_password: /[A-Za-z0-9]/,
					old_password: /[A-Za-z0-9]/,
					username: /[A-Za-z]/
				},
				    content = field.tagName == 'TEXTAREA' && editor ? CKEDITOR.instances[name].getData() : field.value;

				this.validationObject.fields += name + '=' + encodeURIComponent(content) + '&';

				if (regObj[name]) {

					if (typeof regObj[name] == 'number') {
						if (content.length < regObj[name]) {
							_Error2.default.appendErrorClass(field.tagName == 'TEXTAREA' && editor ? field.nextElementSibling : field);
							this.validationObject.status = false;
						}
					} else {
						if (!regObj[name].test(content)) {
							this.validationObject.status = false;
							_Error2.default.appendErrorClass(field);
						}
					}
				}
			}
		}, {
			key: 'getStatus',
			value: function getStatus() {
				return this.validationObject;
			}
		}]);

		return ValidationAction;
	}();

	exports.default = ValidationAction;

/***/ }

});