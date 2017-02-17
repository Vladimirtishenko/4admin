webpackJsonp([9,1,6,7,4,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
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

	var MenuAction = function (_Helper) {
		_inherits(MenuAction, _Helper);

		function MenuAction(button) {
			_classCallCheck(this, MenuAction);

			var _this = _possibleConstructorReturn(this, (MenuAction.__proto__ || Object.getPrototypeOf(MenuAction)).call(this));

			_this.wrapper = document.querySelector('.side-wrapper');
			_this.flyEvent('add', ['click'], [button], _this.changeState.bind(_this));
			return _this;
		}

		_createClass(MenuAction, [{
			key: 'changeState',
			value: function changeState() {
				if (!this.wrapper) return;
				this.wrapper.classList.toggle('side-animate-sidebar');
			}
		}]);

		return MenuAction;
	}(_helper2.default);

	exports.default = MenuAction;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
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
				this.validationObject = { status: true, fields: '' };

				for (var i = 0; i < el.length; i++) {
					if (el[i].type == 'hidden' || el[i].type == 'text' || el[i].type == 'email' || el[i].tagName == 'SELECT' || el[i].tagName == 'TEXTAREA') {
						this.objectRegExp(el[i].name, el[i]);
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
					description_en: 150
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

/***/ },
/* 7 */
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

	var Error = function (_Helper) {
		_inherits(Error, _Helper);

		function Error() {
			_classCallCheck(this, Error);

			var _this = _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).call(this));

			_this.flyEvent('add', ['click'], [window], _this.removeBlock.bind(_this));
			return _this;
		}

		_createClass(Error, [{
			key: 'removeBlock',
			value: function removeBlock(event) {

				if (!event && !event.target) return;

				var target = event.target;

				if (target.classList.contains('side-error')) {
					target.classList.remove('side-error');
				}
			}
		}, {
			key: 'errorCode',
			value: function errorCode() {}
		}, {
			key: 'appendErrorClass',
			value: function appendErrorClass(target) {
				target.classList.add('side-error');
			}
		}]);

		return Error;
	}(_helper2.default);

	exports.default = new Error();

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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

	var _Templates = __webpack_require__(12);

	var _Templates2 = _interopRequireDefault(_Templates);

	var _Validation__action = __webpack_require__(6);

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

				this.xhrRequest('POST', this.url + '/' + category_id + _id + _src, null, formData, this.responseUpload.bind(this));
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
					this.itemToPast.insertAdjacentHTML('beforeend', template);
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
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Templates = function () {
		function Templates() {
			_classCallCheck(this, Templates);
		}

		_createClass(Templates, [{
			key: 'carouselTemplate',
			value: function carouselTemplate(img, cat_id, _id) {

				var random = new Date().getTime() + Math.random();

				return '<form action="/4admin/categoryEditItem" class="side-carousel-item table-side__item-remove">' + '<input type="hidden" name="_id" value="' + _id + '">' + '<div class="row">' + '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 side-carousel-item__image">' + '<img src="' + img + '">' + '</div>' + '<div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-7 side-carousel-item__text-block">' + '<div class="side-form-group">' + '<label for="title_ru">' + '<input type="text" name="title_ru" id="title_ru" placeholder="Заголовок на русском">' + '</label>' + '<label for="title_en">' + '<input type="text" name="title_en" id="title_en" placeholder="Title in english">' + '</label>' + '</div>' + '<div class="side-form-group">' + '<label for="description_ru">' + '<textarea id="description_ru" rows="4" name="description_ru" placeholder="Описание на русском" required=""></textarea>' + '</label>' + '<label for="description_en">' + '<textarea id="description_en" rows="4" name="description_en" placeholder="Description in english" required=""></textarea>' + '</label>' + '</div>' + '</div>' + '<div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">' + '<div class="side-carousel-item__submited">' + '<label for="side-uploaded-file-' + random + '" class="side-card-wrapper__button">' + '<i title="Upload new" class="fa fa-file-image-o"></i>' + '<input id="side-uploaded-file-' + random + '" name="image" type="file" data-category="' + cat_id + '" data-id="' + _id + '" data-current-src="' + img + '" data-action="edit-upload" class="upload-button side-table-wrapper__upload-button">' + '</label>' + '<label class="side-card-wrapper__button" for="side-form-send-' + random + '">' + '<i title="Save" class="fa fa-floppy-o"></i>' + '<input type="submit" class="side-form-send-hidden" id="side-form-send-' + random + '">' + '</label>' + '<label class="side-card-wrapper__button">' + '<span role="link" data-href="/4admin/itemDelete?_id=' + _id + '" class="side-remove-item fa fa-remove"></span>' + '</label>' + '</div>' + '</div>' + '</div>' + '</form>';
			}
		}, {
			key: 'pageMenuTempalte',
			value: function pageMenuTempalte(page_id, _id, title_ru, title_en, description_ru, description_en) {

				return '<div class="side-carousel-item col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">' + '<form action="/4admin/pageMenuContentEdit/">' + '<input type="hidden" name="page_id" value="' + page_id + '" />' + '<input type="hidden" name="_id" value="' + _id + '" />' + ' <div class="side-form-group">' + '<label for="title_ru">' + '<input type="text" name="title_ru" id="title_ru" value="' + (title_ru || "") + '" placeholder="Заголовок на русском"/>' + '<span>Заголовок</span>' + '</label>' + '</div>' + '<div class="side-form-group">' + '<label for="title_en">' + '<input type="text" name="title_en" id="title_en" value="' + (title_en || "") + '" placeholder="Title in english"/>' + '<span>Title</span>' + '</label>' + '</div>' + ' <div class="side-form-group">' + '<label for="description_ru">' + '<textarea id="description_ru" name="description_ru" placeholder="Описание на русском" required="required">' + (description_ru || "") + '</textarea>' + '<span>Описание</span>' + '</label>' + '</div>' + '<div class="side-form-group">' + '<label for="description_en">' + '<textarea id="description_en" name="description_en" placeholder="Description in english" required="required">' + (description_en || "") + '</textarea>' + '<span>Description</span>' + '</label>' + '</div>' + '<div class="side-form-group">' + '<button class="side-button submit-button">Save</button>' + '</div>' + '</form>' + '</div>';
			}
		}, {
			key: 'accordionContentBlock',
			value: function accordionContentBlock(_id, content) {
				return '<div id="showing-block-' + _id + '" class="side-card-wrapper__content-block">' + '<div class="side-card-wrapper__content-block-items">' + content + '</div>' + '<div class="side-card-wrapper__remove-or-edit">' + '<span data-id-item="' + _id + '" class="side-card-wrapper__button fa fa-pencil-square-o side-card-wrapper__add-block"></span>' + '<span data-href="/4admin/pageMenuDeleteItem?_id=' + _id + '" class="side-remove-item fa fa-remove"></span>' + '</div>' + '</div>';
			}
		}, {
			key: 'accordionLinksBlock',
			value: function accordionLinksBlock(_id, title) {
				return '<a href="#' + _id + '" data-block="' + _id + '" id="side-links-' + _id + '" class=" side-card-wrapper__link side-card-wrapper__link">' + title + '</a>';
			}
		}]);

		return Templates;
	}();

	exports.default = new Templates();

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helper = __webpack_require__(1);

	var _helper2 = _interopRequireDefault(_helper);

	var _Templates = __webpack_require__(12);

	var _Templates2 = _interopRequireDefault(_Templates);

	var _Accordeon__model = __webpack_require__(16);

	var _Accordeon__model2 = _interopRequireDefault(_Accordeon__model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordeonAction = function (_Helper) {
		_inherits(AccordeonAction, _Helper);

		function AccordeonAction() {
			_classCallCheck(this, AccordeonAction);

			var _this = _possibleConstructorReturn(this, (AccordeonAction.__proto__ || Object.getPrototypeOf(AccordeonAction)).call(this));

			_this.addBlock = 'side-card-wrapper__append-or-update';
			return _this;
		}

		_createClass(AccordeonAction, [{
			key: 'created',
			value: function created(el) {

				this.removeScript();

				var attr = el.getAttribute('data-id-item') || null,
				    elToPaste = document.querySelector('.' + this.addBlock),
				    cat_id = elToPaste.getAttribute('data-id-pages'),
				    html = void 0;

				if (attr) {
					var ar = _Accordeon__model2.default.getContents(attr);
					html = _Templates2.default.pageMenuTempalte(cat_id, ar._id, ar.title_ru, ar.title_en, ar.description_ru, ar.description_en);
				} else {
					html = _Templates2.default.pageMenuTempalte(cat_id, null);
				}

				elToPaste.innerHTML = "";
				elToPaste.insertAdjacentHTML('beforeend', html);
				this.addScripts();
			}
		}, {
			key: 'removeScript',
			value: function removeScript() {
				var s = document.querySelector('#side-appended-script__ready-to-remove');
				if (s) {
					s.parentNode.removeChild(s);
				}
			}
		}, {
			key: 'addScripts',
			value: function addScripts() {
				var script = document.createElement('script');
				script.id = "side-appended-script__ready-to-remove";
				script.innerHTML = "CKEDITOR.config.width = '80%';" + "CKEDITOR.config.filebrowserBrowseUrl = '/4admin/uploader';" + "CKEDITOR.config.filebrowserUploadUrl = '/4admin/uploader';" + "CKEDITOR.replaceAll();";

				document.body.appendChild(script);
			}
		}]);

		return AccordeonAction;
	}(_helper2.default);

	exports.default = AccordeonAction;

/***/ },
/* 15 */
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _helper = __webpack_require__(1);

	var _helper2 = _interopRequireDefault(_helper);

	var _Templates = __webpack_require__(12);

	var _Templates2 = _interopRequireDefault(_Templates);

	var _Notification = __webpack_require__(5);

	var _Notification2 = _interopRequireDefault(_Notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccordeonModel = function (_Helper) {
		_inherits(AccordeonModel, _Helper);

		function AccordeonModel() {
			_classCallCheck(this, AccordeonModel);

			return _possibleConstructorReturn(this, (AccordeonModel.__proto__ || Object.getPrototypeOf(AccordeonModel)).call(this));
		}

		_createClass(AccordeonModel, [{
			key: 'getContents',
			value: function getContents(attr) {

				for (var i = 0; i < items.length; i++) {
					if (items[i]._id == attr) {
						return {
							_id: items[i]._id,
							title_ru: items[i].title_ru,
							title_en: items[i].title_en,
							description_ru: items[i].description_ru,
							description_en: items[i].description_en
						};
						break;
					}
				}
			}
		}, {
			key: 'removeContents',
			value: function removeContents(json) {

				console.log(json);
			}
		}, {
			key: 'appendNewLocalObject',
			value: function appendNewLocalObject(obj) {

				var appended = void 0;

				for (var i = 0; i < items.length; i++) {
					if (items[i]._id == obj.data._id) {
						items[i] = obj.data;
						appended = true;
					}
				}

				if (!appended) {
					items.push(obj.data);
				}
			}
		}, {
			key: 'stateContents',
			value: function stateContents(json) {

				console.log(items);

				var updatedBlock = document.querySelector('#showing-block-' + json.data._id),
				    updatedLink = document.querySelector('#side-links-' + json.data._id);

				if (!updatedBlock) {
					this.addContents(json);
				} else {
					this.updateContent(updatedBlock, updatedLink, json);
				}
			}
		}, {
			key: 'addContents',
			value: function addContents(json) {
				var data = json.data,
				    form = document.querySelector('.side-carousel-item'),
				    linksBlock = document.querySelector('.side-card-wrapper__links-block'),
				    contentBlock = document.querySelector('.side-card-wrapper__content-wrapper-block'),
				    templateForLinks = _Templates2.default.accordionLinksBlock(data._id, data.title_ru),
				    templateForContent = _Templates2.default.accordionContentBlock(data._id, data.description_ru);

				linksBlock.insertAdjacentHTML('beforeend', templateForLinks);
				contentBlock.insertAdjacentHTML('beforeend', templateForContent);

				this.notifyAndAddBinding(json);
			}
		}, {
			key: 'updateContent',
			value: function updateContent(block, link, json) {
				var data = json.data,
				    contentBlock = block.querySelector('.side-card-wrapper__content-block-items');

				link.innerHTML = data.title_ru;
				contentBlock.innerHTML = data.description_ru;

				this.notifyAndAddBinding(json);
			}
		}, {
			key: 'notifyAndAddBinding',
			value: function notifyAndAddBinding(json) {
				var form = document.querySelector('.side-carousel-item');

				form.parentNode.removeChild(form);

				this.appendNewLocalObject(json);

				_Notification2.default.codeToNotify(json.message);
			}
		}]);

		return AccordeonModel;
	}(_helper2.default);

	exports.default = new AccordeonModel();

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Accordeon/Accordeon__action": 14,
		"./Accordeon/Accordeon__action.js": 14,
		"./Accordeon/Accordeon__controller": 13,
		"./Accordeon/Accordeon__controller.js": 13,
		"./Accordeon/Accordeon__dispatcher": 15,
		"./Accordeon/Accordeon__dispatcher.js": 15,
		"./Accordeon/Accordeon__model": 16,
		"./Accordeon/Accordeon__model.js": 16,
		"./Error/Error": 7,
		"./Error/Error.js": 7,
		"./Menu/Menu__action": 3,
		"./Menu/Menu__action.js": 3,
		"./Menu/Menu__controller": 2,
		"./Menu/Menu__controller.js": 2,
		"./Notification/Notification": 5,
		"./Notification/Notification.js": 5,
		"./Remove/Remove__action": 9,
		"./Remove/Remove__action.js": 9,
		"./Remove/Remove__controller": 8,
		"./Remove/Remove__controller.js": 8,
		"./Remove/Remove__model": 19,
		"./Remove/Remove__model.js": 19,
		"./Templates/Templates": 12,
		"./Templates/Templates.js": 12,
		"./Uploader/Uploader__action": 11,
		"./Uploader/Uploader__action.js": 11,
		"./Uploader/Uploader__controller": 10,
		"./Uploader/Uploader__controller.js": 10,
		"./Validation/Validation__action": 6,
		"./Validation/Validation__action.js": 6,
		"./Validation/Validation__controller": 4,
		"./Validation/Validation__controller.js": 4,
		"./Validation/Validation__model": 17,
		"./Validation/Validation__model.js": 17
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 18;


/***/ }
]);