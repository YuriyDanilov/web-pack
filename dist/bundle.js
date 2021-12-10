/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/add-cont.js":
/*!****************************!*\
  !*** ./src/js/add-cont.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddContact\": () => (/* binding */ AddContact)\n/* harmony export */ });\n/* harmony import */ var _cont_serv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cont-serv */ \"./src/js/cont-serv.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts */ \"./src/js/contacts.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AddContact = /*#__PURE__*/function () {\n  function AddContact(selector, contactService) {\n    var _this = this;\n\n    _classCallCheck(this, AddContact);\n\n    this.selector = selector;\n    this.contactService = contactService;\n\n    this.onAdd = function () {};\n\n    document.addEventListener(\"DOMContentLoaded\", function () {\n      _this.init();\n\n      _this.binds();\n    });\n  }\n\n  _createClass(AddContact, [{\n    key: \"init\",\n    value: function init() {\n      this.container = document.querySelector(this.selector);\n      this.name = this.container.querySelector('#name');\n      this.type = this.container.querySelector('#type');\n      this.value = this.container.querySelector('#value');\n      this.addBtn = this.container.querySelector('.btn');\n    }\n  }, {\n    key: \"binds\",\n    value: function binds() {\n      var _this2 = this;\n\n      this.addBtn.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        _this2.add();\n      });\n    }\n  }, {\n    key: \"add\",\n    value: function add() {\n      var _this3 = this;\n\n      if (this.value.value == '' || this.name.value == '' || this.type.value == '') {\n        alert('Заполните поля');\n        return;\n      }\n\n      var contact = new _contacts__WEBPACK_IMPORTED_MODULE_1__.Contact(this.value.value, this.name.value, this.type.value);\n      this.contactService.addContact(contact).then(function (response) {\n        if (response.status === \"error\") _this3.addError(response.error);\n\n        _this3.successAdd();\n      });\n    }\n  }, {\n    key: \"addError\",\n    value: function addError(text) {\n      alert(text);\n    }\n  }, {\n    key: \"successAdd\",\n    value: function successAdd() {\n      this.onAdd();\n      this.clearForm();\n    }\n  }, {\n    key: \"clearForm\",\n    value: function clearForm() {\n      this.name.value = '';\n      this.value.value = '';\n    }\n  }]);\n\n  return AddContact;\n}();\n\nvar contactService = new _cont_serv__WEBPACK_IMPORTED_MODULE_0__.ContactServices();\nvar addContact = new AddContact('.contacts-info', contactService);\n\naddContact.onAdd = function () {\n  _contacts__WEBPACK_IMPORTED_MODULE_1__.contact.update();\n};\n\n//# sourceURL=webpack://webpack-1/./src/js/add-cont.js?");

/***/ }),

/***/ "./src/js/cont-serv.js":
/*!*****************************!*\
  !*** ./src/js/cont-serv.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContactServices\": () => (/* binding */ ContactServices)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ContactServices = /*#__PURE__*/function () {\n  function ContactServices() {\n    _classCallCheck(this, ContactServices);\n  }\n\n  _createClass(ContactServices, [{\n    key: \"getAll\",\n    value: function getAll() {\n      return fetch(ContactServices.BASE_URL, {\n        method: 'GET',\n        headers: {\n          'Authorization': 'Bearer ' + localStorage.getItem('token'),\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        }\n      }).then(function (r) {\n        return r.json();\n      }).then(function (r) {\n        return r.contacts;\n      });\n    }\n  }, {\n    key: \"addContact\",\n    value: function addContact(con) {\n      return fetch(ContactServices.BASE_URL + 'add', {\n        method: 'POST',\n        headers: {\n          'Authorization': 'Bearer ' + localStorage.getItem('token'),\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          type: con.type,\n          value: con.value,\n          name: con.name\n        })\n      }).then(function (r) {\n        return r.json();\n      });\n    }\n  }]);\n\n  return ContactServices;\n}();\nContactServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/contacts/';\n\n//# sourceURL=webpack://webpack-1/./src/js/cont-serv.js?");

/***/ }),

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact),\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _cont_serv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cont-serv */ \"./src/js/cont-serv.js\");\n/* harmony import */ var _log_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-form */ \"./src/js/log-form.js\");\n/* harmony import */ var _user_serv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-serv */ \"./src/js/user-serv.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Contact = /*#__PURE__*/function () {\n  function Contact(value, name, type, id) {\n    _classCallCheck(this, Contact);\n\n    this.value = value;\n    this.name = name;\n    this.type = type;\n    this.id = id;\n  }\n\n  _createClass(Contact, [{\n    key: \"createContact\",\n    value: function createContact(contact) {\n      var contactElem = document.createElement('div');\n      contactElem.classList.add('contact-item');\n      contactElem.dataset.index = contact.id;\n      contactElem.insertAdjacentHTML('beforeend', '<img class=\"contact-img\" src=\"img/phonebook.png\" alt=\"X\">');\n      contactElem.append(\"\".concat(contact.name));\n\n      if (contact.id == activeContact) {\n        contactElem.classList.add('active');\n      }\n\n      return contactElem;\n    }\n  }, {\n    key: \"showContact\",\n    value: function showContact() {\n      var _this = this,\n          _document$querySelect;\n\n      document.querySelector('.contacts-list').innerHTML = '';\n      var elem = this.contact.map(function (contact) {\n        return _this.createContact(contact);\n      });\n\n      (_document$querySelect = document.querySelector('.contacts-list')).append.apply(_document$querySelect, _toConsumableArray(elem));\n    }\n  }, {\n    key: \"createContactInfo\",\n    value: function createContactInfo(contact) {\n      var contactElem = document.createElement('div');\n      contactElem.classList.add('none');\n\n      if (contact.id == activeContact) {\n        contactElem.classList.remove('none');\n        contactElem.classList.add('activeContact');\n      }\n\n      var name = document.createElement('div');\n      name.innerHTML = 'Имя: ' + contact.name;\n      var type = document.createElement('div');\n      type.innerHTML = 'Тип: ' + contact.type;\n      var value = document.createElement('div');\n      value.innerHTML = 'Контакт: ' + contact.value;\n      contactElem.append(name, type, value);\n      contactElem.classList.add('contact-item');\n      return contactElem;\n    }\n  }, {\n    key: \"showContactInfo\",\n    value: function showContactInfo() {\n      var _this2 = this,\n          _document$querySelect2;\n\n      document.querySelector('.contacts-show').innerHTML = '';\n      var elem = this.contact.map(function (c) {\n        return _this2.createContactInfo(c);\n      });\n\n      (_document$querySelect2 = document.querySelector('.contacts-show')).append.apply(_document$querySelect2, _toConsumableArray(elem));\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var _this3 = this;\n\n      contactService.getAll().then(function (contact) {\n        _this3.contact = contact;\n\n        _this3.showContact(_this3.contact);\n\n        _this3.showContactInfo(_this3.contact);\n      });\n    }\n  }]);\n\n  return Contact;\n}();\nvar activeContact = null;\ndocument.addEventListener('click', function (e) {\n  if (!e.target.matches('.contact-item')) return;\n  var index = e.target.dataset.index;\n  activeContact = index;\n  contact.showContact();\n  contact.showContactInfo();\n  activeContact = null;\n});\nvar contact = new Contact();\nvar userService = new _user_serv__WEBPACK_IMPORTED_MODULE_2__.UserServices();\nvar contactService = new _cont_serv__WEBPACK_IMPORTED_MODULE_0__.ContactServices();\nvar loginForm = new _log_form__WEBPACK_IMPORTED_MODULE_1__.LoginForm('.login', userService);\n\nloginForm.onLogin = function () {\n  contact.update();\n};\n\n//# sourceURL=webpack://webpack-1/./src/js/contacts.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_cont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-cont */ \"./src/js/add-cont.js\");\n/* harmony import */ var _cont_serv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cont-serv */ \"./src/js/cont-serv.js\");\n/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ \"./src/js/contacts.js\");\n/* harmony import */ var _log_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-form */ \"./src/js/log-form.js\");\n/* harmony import */ var _reg_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reg-form */ \"./src/js/reg-form.js\");\n/* harmony import */ var _user_serv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-serv */ \"./src/js/user-serv.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n\n\n\n\n\n\n\nvar exit = document.querySelector('.btn-exit');\nexit.addEventListener('click', function () {\n  document.querySelector('.container').style.display = 'flex';\n  exit.style.display = 'none';\n  document.querySelector('.contacts').style.display = 'none';\n});\n\n//# sourceURL=webpack://webpack-1/./src/js/index.js?");

/***/ }),

/***/ "./src/js/log-form.js":
/*!****************************!*\
  !*** ./src/js/log-form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginForm\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar LoginForm = /*#__PURE__*/function () {\n  function LoginForm(selector, userService) {\n    var _this = this;\n\n    _classCallCheck(this, LoginForm);\n\n    this.selector = selector;\n    this.userService = userService;\n\n    this.onLogin = function () {};\n\n    document.addEventListener('DOMContentLoaded', function () {\n      _this.init();\n\n      _this.bind();\n    });\n  }\n\n  _createClass(LoginForm, [{\n    key: \"init\",\n    value: function init() {\n      this.wrapper = document.querySelector('.container');\n      this.exit = document.querySelector('.btn-exit');\n      this.container = document.querySelector(this.selector);\n      this.loginInput = this.container.querySelector('#login-log');\n      this.passwordInput = this.container.querySelector('#password-log');\n      this.button = this.container.querySelector('.btn-login');\n    }\n  }, {\n    key: \"bind\",\n    value: function bind() {\n      var _this2 = this;\n\n      this.button.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        _this2.login();\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login() {\n      var _this3 = this;\n\n      if (this.loginInput.value == '' || this.passwordInput.value == '') {\n        alert('Заполните поля');\n        return;\n      }\n\n      var user = new _user__WEBPACK_IMPORTED_MODULE_0__.User(this.loginInput.value, null, this.passwordInput.value);\n      this.userService.login(user).then(function (response) {\n        if (response.status == 'error') {\n          _this3.loginError(response.error);\n\n          return;\n        }\n\n        localStorage.setItem('token', response.token);\n\n        _this3.succsessLogin();\n      });\n    }\n  }, {\n    key: \"loginError\",\n    value: function loginError(text) {\n      alert(text);\n    }\n  }, {\n    key: \"clearForm\",\n    value: function clearForm() {\n      this.loginInput.value = null;\n      this.passwordInput.value = null;\n    }\n  }, {\n    key: \"succsessLogin\",\n    value: function succsessLogin() {\n      this.wrapper.style.display = 'none';\n      this.exit.style.display = 'block';\n      document.querySelector('.contacts').style.display = 'flex';\n      this.clearForm();\n      this.onLogin();\n    }\n  }]);\n\n  return LoginForm;\n}();\n\n//# sourceURL=webpack://webpack-1/./src/js/log-form.js?");

/***/ }),

/***/ "./src/js/reg-form.js":
/*!****************************!*\
  !*** ./src/js/reg-form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterForm\": () => (/* binding */ RegisterForm)\n/* harmony export */ });\n/* harmony import */ var _user_serv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-serv */ \"./src/js/user-serv.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/js/user.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar RegisterForm = /*#__PURE__*/function () {\n  function RegisterForm(selector, userService) {\n    var _this = this;\n\n    _classCallCheck(this, RegisterForm);\n\n    this.selector = selector;\n    this.userService = userService;\n    document.addEventListener('DOMContentLoaded', function () {\n      _this.init();\n\n      _this.bind();\n    });\n  }\n\n  _createClass(RegisterForm, [{\n    key: \"init\",\n    value: function init() {\n      this.wrapper = document.querySelector('.container');\n      this.container = document.querySelector(this.selector);\n      this.loginInput = this.container.querySelector('#login-reg');\n      this.bornInput = this.container.querySelector('#date_born-reg');\n      this.passwordInput = this.container.querySelector('#password-reg');\n      this.button = this.container.querySelector('.btn');\n      this.exit = document.querySelector('.btn-exit');\n    }\n  }, {\n    key: \"bind\",\n    value: function bind() {\n      var _this2 = this;\n\n      this.button.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        _this2.register();\n      });\n    }\n  }, {\n    key: \"register\",\n    value: function register() {\n      var _this3 = this;\n\n      if (this.loginInput.value == '' || this.bornInput.value == '' || this.passwordInput.value == '') {\n        alert('Заполните поля');\n        return;\n      }\n\n      var user = new _user__WEBPACK_IMPORTED_MODULE_1__.User(this.loginInput.value, this.bornInput.value, this.passwordInput.value);\n      this.userService.register(user).then(function (response) {\n        if (response.status == 'error') _this3.registerError(response.error);else _this3.succsessRegister();\n      });\n    }\n  }, {\n    key: \"registerError\",\n    value: function registerError(text) {\n      alert(text);\n    }\n  }, {\n    key: \"succsessRegister\",\n    value: function succsessRegister() {\n      this.clearForm();\n      this.wrapper.style.display = 'none';\n      document.querySelector('.contacts').style.display = 'flex';\n      this.exit.style.display = 'block';\n    }\n  }, {\n    key: \"clearForm\",\n    value: function clearForm() {\n      this.loginInput.value = '';\n      this.bornInput.value = '';\n      this.passwordInput.value = '';\n    }\n  }]);\n\n  return RegisterForm;\n}();\nvar userService = new _user_serv__WEBPACK_IMPORTED_MODULE_0__.UserServices();\nvar registerForm = new RegisterForm('.register', userService);\n\n//# sourceURL=webpack://webpack-1/./src/js/reg-form.js?");

/***/ }),

/***/ "./src/js/user-serv.js":
/*!*****************************!*\
  !*** ./src/js/user-serv.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserServices\": () => (/* binding */ UserServices)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UserServices = /*#__PURE__*/function () {\n  function UserServices() {\n    _classCallCheck(this, UserServices);\n  }\n\n  _createClass(UserServices, [{\n    key: \"getAll\",\n    value: function getAll() {\n      return fetch(UserServices.BASE_URL + 'users').then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        return response.users;\n      }).then(function (users) {\n        return users.map(function (user) {\n          return User.create(user);\n        });\n      });\n    }\n  }, {\n    key: \"register\",\n    value: function register(user) {\n      return fetch(UserServices.BASE_URL + 'register', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          login: user.login,\n          date_born: user.date_born,\n          password: user.password\n        })\n      }).then(function (response) {\n        return response.json();\n      });\n    }\n  }, {\n    key: \"login\",\n    value: function login(user) {\n      return fetch(UserServices.BASE_URL + 'login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          login: user.login,\n          password: user.password\n        })\n      }).then(function (response) {\n        return response.json();\n      });\n    }\n  }]);\n\n  return UserServices;\n}();\nUserServices.BASE_URL = 'https://mag-contacts-api.herokuapp.com/';\n\n//# sourceURL=webpack://webpack-1/./src/js/user-serv.js?");

/***/ }),

/***/ "./src/js/user.js":
/*!************************!*\
  !*** ./src/js/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar User = /*#__PURE__*/function () {\n  function User(login, date_born, password) {\n    _classCallCheck(this, User);\n\n    this.login = login;\n    this.date_born = date_born;\n    this.password = password;\n  }\n\n  _createClass(User, null, [{\n    key: \"create\",\n    value: function create(user) {\n      return new User(user.login, user['date_born'], null);\n    }\n  }]);\n\n  return User;\n}();\n\n//# sourceURL=webpack://webpack-1/./src/js/user.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.scss\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".wrapper {\\n  height: 100%;\\n  padding-top: 10px;\\n  background-color: rgba(0, 0, 0, 0.6);\\n}\\n\\n.title {\\n  max-height: 50px;\\n  height: 100%;\\n  padding: 10px 20px;\\n  background-color: #f0f0f0;\\n  text-transform: capitalize;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.btn-exit {\\n  display: none;\\n}\\n\\n.container {\\n  justify-content: center;\\n  margin-top: 80px;\\n}\\n\\n.flex {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.contacts {\\n  display: none;\\n  margin-top: 80px;\\n}\\n\\nh2 {\\n  font-size: 30px;\\n  font-weight: 500;\\n  padding: 20px 0;\\n  border-bottom: 1px solid rgba(0, 180, 239, 0.5);\\n  margin-bottom: 30px;\\n  text-transform: uppercase;\\n  text-align: center;\\n}\\n\\n.register,\\n.login,\\n.contacts-list,\\n.contacts-show,\\n.contacts-info {\\n  width: 25%;\\n  min-height: 400px;\\n  background-color: #fff;\\n  padding: 20px;\\n  margin: 0 30px;\\n  border-radius: 12px;\\n  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);\\n}\\n\\n.contact-item {\\n  color: #369;\\n  border: 1px solid rgba(0, 180, 239, 0.5);\\n  border-radius: 5px;\\n  margin-bottom: 20px;\\n  padding-left: 5px;\\n  line-height: 40px;\\n  position: relative;\\n  cursor: pointer;\\n}\\n.contact-item:hover {\\n  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);\\n}\\n\\n.contact-img {\\n  position: absolute;\\n  top: 5px;\\n  right: 5px;\\n}\\n\\n.form-control {\\n  margin-bottom: 20px;\\n}\\n\\nlabel {\\n  margin-left: 20px;\\n  height: 30px;\\n  display: inline-block;\\n}\\n\\n.input,\\n.contact {\\n  width: 100%;\\n  background: #f0f0f0;\\n  border: none;\\n  border-radius: 20px;\\n  box-shadow: none;\\n  padding-left: 20px;\\n  height: 40px;\\n}\\n\\n.btn-pos {\\n  text-align: right;\\n}\\n\\n.btn {\\n  font-size: 14px;\\n  color: #fff;\\n  background: #00b4ef;\\n  border-radius: 30px;\\n  padding: 10px 25px;\\n  text-transform: capitalize;\\n}\\n\\n.btn-login {\\n  margin-top: 55px;\\n}\\n\\n.active {\\n  background-color: grey;\\n  color: #FFF;\\n}\\n\\n.activeContact {\\n  display: block;\\n  border: 1px solid rgba(0, 180, 239, 0.5);\\n  border-radius: 5px;\\n  padding: 10px;\\n  font-size: 20px;\\n}\\n\\n.none {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-1/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.scss":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.scss ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\r\\n    margin: 0;\\r\\n    height: 100%;\\r\\n}\\r\\n*, ::after, ::before {\\r\\n    box-sizing:border-box\\r\\n}\\r\\nul, li, h1, h2, h3, h4, h5, h6, p {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\nli {\\r\\n    list-style-type: none;\\r\\n}\\r\\na {\\r\\n    text-decoration: none;;\\r\\n}\\r\\nbutton {\\r\\n    padding: 0;\\r\\n    border: none;\\r\\n    font: inherit;\\r\\n    color: inherit;\\r\\n    background-color: transparent;\\r\\n    cursor: pointer;\\r\\n}\\r\\ninput {\\r\\npadding: 0;\\r\\nmargin: 0;\\r\\nborder: 0;\\r\\nborder: none;\\r\\noutline: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-1/./src/styles/reset.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-1/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;