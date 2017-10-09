webpackJsonp([1],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'site-search-form ',
                    role: 'search' },
                _react2.default.createElement('input', { type: 'text', className: 'site-search-form__input active',
                    placeholder: 'Search' }),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'site-search-form__btn' },
                    _react2.default.createElement(
                        'i',
                        { className: 'site-search-form__btn-i material-icons' },
                        'search'
                    )
                )
            );
        }
    }]);

    return Search;
}(_react2.default.Component);

exports.default = Search;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(35);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(36);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _cell = __webpack_require__(202);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table() {
        _classCallCheck(this, Table);

        return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_sidebar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'site-content' },
                    _react2.default.createElement(_header2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid site-users-table' },
                        _react2.default.createElement(
                            'div',
                            { className: 'site-users-table__wrapper' },
                            _react2.default.createElement(
                                'div',
                                { className: 'site-users-table__title' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'site-users-table__title-head' },
                                    'All users'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-users-table__title-description' },
                                    'Manage them'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'site-table-responsive-wrapper' },
                                _react2.default.createElement(
                                    'table',
                                    { className: 'site-users-table__wrapper-table' },
                                    _react2.default.createElement(
                                        'thead',
                                        null,
                                        _react2.default.createElement(
                                            'tr',
                                            null,
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-users-table__wrapper-table-head-data' },
                                                'Name'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-users-table__wrapper-table-head-data' },
                                                'E-mail'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-users-table__wrapper-table-head-data' },
                                                'Position'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-users-table__wrapper-table-head-data' },
                                                'Role'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-users-table__wrapper-table-head-data turn-center' },
                                                'Edit'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-users-table__wrapper-table-head-data turn-center' },
                                                'Delete'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(_cell2.default, null)
                                )
                            ),
                            _react2.default.createElement('div', { className: 'clearfix' })
                        )
                    )
                ),
                '      '
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

exports.default = Table;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _main_list = __webpack_require__(198);

var _main_list2 = _interopRequireDefault(_main_list);

var _user_list = __webpack_require__(201);

var _user_list2 = _interopRequireDefault(_user_list);

var _main_pages = __webpack_require__(199);

var _main_pages2 = _interopRequireDefault(_main_pages);

var _main_table = __webpack_require__(110);

var _main_table2 = _interopRequireDefault(_main_table);

var _main_carousel = __webpack_require__(197);

var _main_carousel2 = _interopRequireDefault(_main_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routers = function (_React$Component) {
		_inherits(Routers, _React$Component);

		function Routers() {
				_classCallCheck(this, Routers);

				return _possibleConstructorReturn(this, (Routers.__proto__ || Object.getPrototypeOf(Routers)).apply(this, arguments));
		}

		_createClass(Routers, [{
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								_reactRouterDom.BrowserRouter,
								{ history: _reactRouterDom.browserHistory },
								_react2.default.createElement(
										'div',
										null,
										_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _main_list2.default }),
										_react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _user_list2.default }),
										_react2.default.createElement(_reactRouterDom.Route, { path: '/pages', component: _main_pages2.default }),
										_react2.default.createElement(_reactRouterDom.Route, { path: '/table', component: _main_table2.default }),
										_react2.default.createElement(_reactRouterDom.Route, { path: '/carousel', component: _main_carousel2.default })
								)
						);
				}
		}]);

		return Routers;
}(_react2.default.Component);

exports.default = Routers;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(189);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _router = __webpack_require__(188);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* CSS */

_reactDom2.default.render(_react2.default.createElement(_router2.default, null), document.getElementById('app'));

/* JS */

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(24);

var _header = __webpack_require__(35);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(36);

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel() {
        _classCallCheck(this, Carousel);

        return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
    }

    _createClass(Carousel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_sidebar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'site-content' },
                    _react2.default.createElement(_header2.default, null),
                    'carousel'
                ),
                '      '
            );
        }
    }]);

    return Carousel;
}(_react2.default.Component);

exports.default = Carousel;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = __webpack_require__(35);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(36);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _reactRouterDom = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_sidebar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'site-content' },
                    _react2.default.createElement(_header2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid site-card-head' },
                        _react2.default.createElement(
                            'div',
                            { className: 'site-card-head__wrapper' },
                            _react2.default.createElement(
                                'div',
                                { className: 'site-card-head__title' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'site-card-head__title-head' },
                                    'Carousel'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-card-head__title-description' },
                                    'Edit it!'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'site-table-responsive-wrapper' },
                                _react2.default.createElement(
                                    'table',
                                    { className: 'site-card-head__wrapper-table' },
                                    _react2.default.createElement(
                                        'thead',
                                        null,
                                        _react2.default.createElement(
                                            'tr',
                                            null,
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-card-head__wrapper-table-head-data' },
                                                'Lable'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-card-head__wrapper-table-head-data turn-center' },
                                                'Edit'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-card-head__wrapper-table-head-data turn-center' },
                                                'Delete'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'tbody',
                                        null,
                                        _react2.default.createElement(
                                            'tr',
                                            null,
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-card-head__wrapper-table-data' },
                                                '123'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-card-head__wrapper-table-edit-data' },
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { to: '#', className: 'site-card-head__wrapper-table-edit-data-link' },
                                                    _react2.default.createElement(
                                                        'i',
                                                        { className: 'material-icons' },
                                                        'edit'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                { className: 'site-card-head__wrapper-table-edit-data' },
                                                _react2.default.createElement(
                                                    _reactRouterDom.Link,
                                                    { to: '#',
                                                        className: 'site-card-head__wrapper-table-delete-data-link' },
                                                    _react2.default.createElement(
                                                        'i',
                                                        { className: 'material-icons' },
                                                        'delete_forever'
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                '      '
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(35);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(36);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _main_table = __webpack_require__(110);

var _main_table2 = _interopRequireDefault(_main_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pages = function (_React$Component) {
    _inherits(Pages, _React$Component);

    function Pages() {
        _classCallCheck(this, Pages);

        return _possibleConstructorReturn(this, (Pages.__proto__ || Object.getPrototypeOf(Pages)).apply(this, arguments));
    }

    _createClass(Pages, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_sidebar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'site-content' },
                    _react2.default.createElement(_header2.default, null),
                    'Pages'
                )
            );
        }
    }]);

    return Pages;
}(_react2.default.Component);

exports.default = Pages;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserForm = function (_React$Component) {
    _inherits(UserForm, _React$Component);

    function UserForm() {
        _classCallCheck(this, UserForm);

        return _possibleConstructorReturn(this, (UserForm.__proto__ || Object.getPrototypeOf(UserForm)).apply(this, arguments));
    }

    _createClass(UserForm, [{
        key: 'lableUp',
        value: function lableUp(event) {
            var label = event.target.previousElementSibling;
            if (!label.classList.contains("site-inputs-label-to-top")) {
                label.className += " site-inputs-label-to-top";
            }
        }
    }, {
        key: 'labelDown',
        value: function labelDown(event) {
            var input = event.target;
            if (input.value == "") {
                input.previousElementSibling.classList.remove("site-inputs-label-to-top");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid site-user-form' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row site-row-md-revers' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12 col-sm-12 col-md-12 col-lg-8' },
                            _react2.default.createElement(
                                'div',
                                { className: 'site-user-form__form-wrapper' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'site-user-form__title' },
                                    _react2.default.createElement(
                                        'h4',
                                        { className: 'site-user-form__title-head' },
                                        'Edit Profile'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'site-user-form__title-description' },
                                        'Complete your profile'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row margin-t-5' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'site-user-form-input-wrapper' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'site-inputs-label' },
                                                'Fist Name'
                                            ),
                                            _react2.default.createElement('input', { onFocus: this.lableUp, onBlur: this.labelDown,
                                                className: 'site-bouncing-input site-underline-input', type: 'text' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'site-user-form-input-wrapper' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'site-inputs-label' },
                                                'Last Name'
                                            ),
                                            _react2.default.createElement('input', { onFocus: this.lableUp, onBlur: this.labelDown,
                                                className: 'site-bouncing-input site-underline-input', type: 'text' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'site-user-form-input-wrapper' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'site-inputs-label' },
                                                'E-mail'
                                            ),
                                            _react2.default.createElement('input', { onFocus: this.lableUp, onBlur: this.labelDown,
                                                className: 'site-bouncing-input site-underline-input', type: 'text' })
                                        )
                                    ),
                                    _react2.default.createElement('div', { className: 'clear' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'site-user-form-input-wrapper' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'site-inputs-label' },
                                                'Position'
                                            ),
                                            _react2.default.createElement('input', { onFocus: this.lableUp, onBlur: this.labelDown,
                                                className: 'site-bouncing-input site-underline-input', type: 'text' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'site-user-form-input-wrapper' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'site-inputs-label' },
                                                'Role'
                                            ),
                                            _react2.default.createElement('input', { onFocus: this.lableUp, onBlur: this.labelDown,
                                                className: 'site-bouncing-input site-underline-input', type: 'text' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-12 col-sm-12 col-md-4 col-lg-4' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'site-user-form-input-wrapper' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'site-inputs-label' },
                                                'Superpower'
                                            ),
                                            _react2.default.createElement('input', { onFocus: this.lableUp, onBlur: this.labelDown,
                                                className: 'site-bouncing-input site-underline-input', type: 'text' })
                                        )
                                    ),
                                    _react2.default.createElement('div', { className: 'clear' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'site-user-form__btn-wrapper' },
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'site-user-form__btn-wrapper-button' },
                                        'UPDATE PROFILE'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12 col-sm-12 col-md-12 col-lg-4 ' },
                            _react2.default.createElement(
                                'div',
                                { className: 'site-user-form__card' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'site-user-form__card-wrapper' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'site-user-form__card-label',
                                            htmlFor: 'site-user-form__card-input' },
                                        _react2.default.createElement('img', { src: 'http://demos.creative-tim.com/material-kit-pro/assets/img/faces/marc.jpg',
                                            alt: 'profile avatar', className: 'site-user-form__card-avatar' }),
                                        _react2.default.createElement(
                                            'i',
                                            { className: 'material-icons site-user-form__card-icon' },
                                            'file_upload'
                                        )
                                    ),
                                    _react2.default.createElement('input', { type: 'file', id: 'site-user-form__card-input' }),
                                    _react2.default.createElement('div', { className: 'clear' })
                                ),
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'site-user-form__card-mail' },
                                    'some-mail@gmail.com'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-user-form__card-name' },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'site-user-form__card-name-first' },
                                        'Alec'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'site-user-form__card-name-second' },
                                        'Thompson'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'site-user-form__card-position' },
                                            'Position'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6' },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'site-user-form__card-role' },
                                            'Role'
                                        )
                                    ),
                                    _react2.default.createElement('div', { className: 'clear' })
                                )
                            )
                        ),
                        _react2.default.createElement('div', { className: 'clear' })
                    ),
                    _react2.default.createElement('div', { className: 'clear' })
                )
            );
        }
    }]);

    return UserForm;
}(_react2.default.Component);

exports.default = UserForm;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _user_form = __webpack_require__(200);

var _user_form2 = _interopRequireDefault(_user_form);

var _header = __webpack_require__(35);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(36);

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserView = function (_React$Component) {
    _inherits(UserView, _React$Component);

    function UserView() {
        _classCallCheck(this, UserView);

        return _possibleConstructorReturn(this, (UserView.__proto__ || Object.getPrototypeOf(UserView)).apply(this, arguments));
    }

    _createClass(UserView, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_sidebar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'site-content' },
                    _react2.default.createElement(_header2.default, null),
                    _react2.default.createElement(_user_form2.default, null)
                )
            );
        }
    }]);

    return UserView;
}(_react2.default.Component);

exports.default = UserView;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
    _inherits(Cell, _React$Component);

    function Cell() {
        _classCallCheck(this, Cell);

        return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
    }

    _createClass(Cell, [{
        key: 'render',
        value: function render() {
            var usersTemplate = void 0,
                tableHead = void 0,
                tableData = void 0;
            tableData = {
                head: {
                    col1: "Name",
                    col2: "E-mail",
                    col3: "Position",
                    col4: "Role",
                    col5: "Edit",
                    col6: "Delete"
                },
                users: [{
                    name: "Andrei Krasovskii",
                    mail: "andrei.k1251@gmail.com",
                    position: "dev",
                    role: "Front",
                    userID: 1
                }, {
                    name: "Andrei Krasovskii 2",
                    mail: "andrei.k1251@gmail.com",
                    position: "dev",
                    role: "Front",
                    userID: 2
                }, {
                    name: "Andrei Krasovskii 3",
                    mail: "andrei.k1251@gmail.com",
                    position: "dev",
                    role: "Front",
                    userID: 3
                }, {
                    name: "Andrei Krasovskii 8",
                    mail: "andrei.k1251@gmail.com",
                    position: "dev",
                    role: "Front",
                    userID: 4
                }]

            };
            tableHead = function () {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-head-data' },
                        'Name'
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-head-data' },
                        'E-mail'
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-head-data' },
                        'Position'
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-head-data' },
                        'Role'
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-head-data turn-center' },
                        'Edit'
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-head-data turn-center' },
                        'Delete'
                    )
                );
            }();

            usersTemplate = tableData.users.map(function (item) {
                return _react2.default.createElement(
                    'tr',
                    { key: item.userID },
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-data' },
                        item.name
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-data' },
                        item.mail
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-data' },
                        item.position
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'site-users-table__wrapper-table-data' },
                        item.role
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: ' site-users-table__wrapper-table-edit-data' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '#', className: 'site-users-table__wrapper-table-edit-data-link' },
                            _react2.default.createElement(
                                'i',
                                { className: 'material-icons' },
                                'edit'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: ' site-users-table__wrapper-table-edit-data' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '#', className: 'site-users-table__wrapper-table-delete-data-link' },
                            _react2.default.createElement(
                                'i',
                                { className: 'material-icons' },
                                'delete_forever'
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'tbody',
                null,
                usersTemplate
            );
        }
    }]);

    return Cell;
}(_react2.default.Component);

exports.default = Cell;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(24);

var _main__search = __webpack_require__(109);

var _main__search2 = _interopRequireDefault(_main__search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'sandwichMenu',
        value: function sandwichMenu(event) {
            var siteContent = document.querySelector(".site-content");
            siteContent.classList.contains("site-sidebar-open") ? siteContent.classList.remove("site-sidebar-open") : siteContent.className += " site-sidebar-open";
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'head-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'site-header' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.sandwichMenu, type: 'button',
                                className: 'site-head__mobile-toggle hidden-md hidden-lg' },
                            _react2.default.createElement('span', { className: 'site-head__mobile-toggle-icon-bar' }),
                            _react2.default.createElement('span', { className: 'site-head__mobile-toggle-icon-bar' }),
                            _react2.default.createElement('span', { className: 'site-head__mobile-toggle-icon-bar' })
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'site-head__logo', href: '#' },
                            'Material Dashboard'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'site-header__desktop' },
                        _react2.default.createElement(
                            'div',
                            { className: 'site-header__desktop-search-container hidden-sm hidden-xs' },
                            _react2.default.createElement(_main__search2.default, null)
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'site-header__menu' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/', className: 'site-header__menu-link' },
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'material-icons' },
                                        'dashboard'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'hidden-lg hidden-md' },
                                        'Dashboard'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/', className: 'site-header__menu-link' },
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'material-icons' },
                                        'person'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'hidden-lg hidden-md' },
                                        'Profile'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(24);

var _main__search = __webpack_require__(109);

var _main__search2 = _interopRequireDefault(_main__search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
    _inherits(SideBar, _React$Component);

    function SideBar() {
        _classCallCheck(this, SideBar);

        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
    }

    _createClass(SideBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-sidebar' },
                _react2.default.createElement(
                    'div',
                    { className: 'site-sidebar__logo' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/', className: 'site-sidebar__link' },
                        'DAX100'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'site-sidebar__wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'site-sidebar__wrapper-search-container hidden-lg hidden-md' },
                        _react2.default.createElement(_main__search2.default, null)
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'site-sidebar__wrapper-list' },
                        _react2.default.createElement(
                            'li',
                            { className: 'site-sidebar__sidebar-wrapper-item' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/', className: 'site-sidebar__wrapper-link active' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'site-sidebar__wrapper-icon material-icons' },
                                    'dashboard'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-sidebar__wrapper-par' },
                                    'Dashboard'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/users', className: 'site-sidebar__wrapper-link' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'site-sidebar__wrapper-icon material-icons' },
                                    'person'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-sidebar__wrapper-par' },
                                    'User Profile'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/pages', className: 'site-sidebar__wrapper-link' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'site-sidebar__wrapper-icon material-icons' },
                                    'content_copy'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-sidebar__wrapper-par' },
                                    'Pages'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/table', className: 'site-sidebar__wrapper-link' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'site-sidebar__wrapper-icon material-icons' },
                                    'people'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-sidebar__wrapper-par' },
                                    'Table'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/carousel', className: 'site-sidebar__wrapper-link' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'site-sidebar__wrapper-icon material-icons' },
                                    'view_carousel'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'site-sidebar__wrapper-par' },
                                    'Carousel'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ })

},[196]);