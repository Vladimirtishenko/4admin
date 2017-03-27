webpackJsonp([9,8],{

/***/ 21:
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

	var _Templates = __webpack_require__(10);

	var _Templates2 = _interopRequireDefault(_Templates);

	var _Validation__action = __webpack_require__(22);

	var _Validation__action2 = _interopRequireDefault(_Validation__action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UploadAction = function (_Helper) {
		_inherits(UploadAction, _Helper);

		function UploadAction() {
			_classCallCheck(this, UploadAction);

			return _possibleConstructorReturn(this, (UploadAction.__proto__ || Object.getPrototypeOf(UploadAction)).call(this));
		}

		_createClass(UploadAction, [{
			key: 'generateRequest',
			value: function generateRequest(direction, element, url, callback) {
				this.url = url;
				this.callback = callback;
				this.direction = direction;
				this.element = element;
				this.itemToPast = document.querySelector('.side-item-to-paste');

				var file = this.element.files[0],
				    category_id = this.element.getAttribute('data-category'),
				    _id = this.element.getAttribute('data-id') ? "?_id=" + this.element.getAttribute('data-id') : "",
				    _src = this.element.getAttribute('data-current-src') ? "&_src=" + this.element.getAttribute('data-current-src') : "",
				    formData = new FormData(),
				    boundary = String(Math.random()).slice(2);

				formData.append('image', file, file.name);

				return { formData: formData, url: this.url + '/' + category_id + _id + _src, action: _id ? 'replace' : 'add' };
			}
		}, {
			key: 'responseUpload',
			value: function responseUpload(obj) {
				try {
					var json = JSON.parse(obj);
					if (json.status == 200) {
						this.pageUpdated(json.doc);
					} else {
						_Notification2.default.codeToNotify(json.message);
					}
				} catch (e) {}
			}
		}, {
			key: 'pageUpdated',
			value: function pageUpdated(doc) {
				if (this.direction == 'new-upload') {
					var template = _Templates2.default.carouselTemplate(doc.src, doc.category_id, doc._id);
					this.itemToPast.insertAdjacentHTML('afterbegin', template);
					var inputBindind = this.itemToPast.lastElementChild.querySelector('[id*="side-uploaded-file-"]'),
					    deleteButtonBinding = this.itemToPast.lastElementChild.querySelector('.side-remove-item');
					this.flyEvent('add', ['change'], [inputBindind], this.callback);
				} else {
					var form = this.element.closest('.side-carousel-item'),
					    input = form.querySelector('[id*="side-uploaded-file-"]'),
					    image = form.querySelector('.side-carousel-item__image img');

					image.src = doc.src;
					input.setAttribute('data-current-src', doc.src);
				}
			}
		}]);

		return UploadAction;
	}(_helper2.default);

	exports.default = UploadAction;

/***/ },

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
					title_ru: /[А-Яа-яA-Za-z0-9]/,
					title_en: /[A-Za-z0-9]/,
					description_ru: 50,
					description_en: 50,
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