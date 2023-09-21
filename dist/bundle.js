/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ripple: () => (/* binding */ Ripple)\n/* harmony export */ });\nfunction Ripple(p, element = null) {\r\n  let SuperInitiated = false;\r\n  let SuperCalled = 0;\r\n  let SuperDom;\r\n  let SuperRenderEngine = new RenderEngine();\r\n  let SuperState = new Proxy(\r\n    {},\r\n    {\r\n      get: function (target, key) {\r\n        return target[key];\r\n      },\r\n      set: function (target, key, value) {\r\n        // console.log(target, key, \"set\");\r\n        target[key] = value;\r\n\r\n        console.log(value);\r\n        if (SuperInitiated) {\r\n          return (\r\n            SuperRenderEngine.replace(SuperFunction.render(SuperState)) || true\r\n          );\r\n        }\r\n\r\n        return true;\r\n      },\r\n    }\r\n  );\r\n  let SuperFunction = p(SuperState);\r\n\r\n  const SuperRenderRequest = SuperFunction.render(SuperState);\r\n\r\n  if (element != null) {\r\n    SuperRenderEngine.setNode(element);\r\n    SuperRenderEngine.set(SuperRenderRequest);\r\n  } else {\r\n    // debugger;\r\n    SuperRenderEngine.setReturn(SuperRenderRequest);\r\n  }\r\n  function RenderEngine() {\r\n    let e;\r\n\r\n    function setNode(element) {\r\n      e = document.querySelector(element);\r\n    }\r\n    function setReturn(element) {\r\n      e = element;\r\n    }\r\n    function set(element) {\r\n      e.appendChild(element);\r\n    }\r\n    function replace(newElement) {\r\n      if (newElement instanceof Element) {\r\n        e.parentNode.replaceChild(newElement, e);\r\n        e = newElement;\r\n      } else {\r\n      }\r\n    }\r\n    function get() {\r\n      return e;\r\n    }\r\n\r\n    return { get, set, setNode, replace, setReturn };\r\n  }\r\n\r\n  SuperInitiated = true;\r\n  SuperCalled++;\r\n  const render = function () {\r\n    const r = SuperFunction.render(SuperState);\r\n    SuperRenderEngine.setReturn(r);\r\n    return SuperRenderEngine.get();\r\n  };\r\n  return { render };\r\n  return SuperRenderRequest;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://@mdshad/ripple/./index.js?");

/***/ }),

/***/ "./node_modules/@mdshad/sel/index.js":
/*!*******************************************!*\
  !*** ./node_modules/@mdshad/sel/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   el: () => (/* binding */ el),\n/* harmony export */   s: () => (/* binding */ s)\n/* harmony export */ });\nclass ____es {\r\n  constructor(tag = null) {\r\n    this.el = tag?.el ?? _IsElement(tag) ?? document.querySelectorAll(tag);\r\n\r\n    this.fragment = null;\r\n\r\n    function _IsElement(element) {\r\n      let c = element instanceof Element || element instanceof Document;\r\n\r\n      return c ? element : null;\r\n    }\r\n\r\n    return this;\r\n  }\r\n  class(p) {\r\n    this.el.classList.add(p);\r\n    return this;\r\n  }\r\n  attr(p, v = null) {\r\n    if (v == null) {\r\n      return this.el.getAttribute(p);\r\n    } else {\r\n      this.el.setAttribute(p, v);\r\n      return this;\r\n    }\r\n  }\r\n  html(p = null) {\r\n    if (p === null || p === undefined) {\r\n      return this.el.innerHTML;\r\n    } else {\r\n      for (let i = 0; this.el.length > i; i++) {\r\n        this.el[i].innerHTML = p;\r\n      }\r\n      return this;\r\n    }\r\n  }\r\n  each(fun) {\r\n    for (let i = 0; i < this.el.length; i++) {\r\n      fun.call(this.el[i], new ____es(this.el[i]));\r\n    }\r\n  }\r\n  append(p) {\r\n    // if (!this.fragment) {\r\n    //   this.fragment = document.createDocumentFragment();\r\n    //   console.log(\"fragment created\");\r\n    // }\r\n\r\n    try {\r\n      this.el.appendChild(p.el || p);\r\n    } catch {}\r\n    return this;\r\n  }\r\n\r\n  on(p, f) {\r\n    switch (p) {\r\n      case \"click\":\r\n        for (let i = 0; i < this.el.length; i++) {\r\n          this.el[i].onclick = () => {\r\n            f.call(this.el[i], new ____es(this.el[i]));\r\n          };\r\n        }\r\n\r\n        break;\r\n    }\r\n  }\r\n\r\n  appends(p) {\r\n    let fragment = document.createDocumentFragment();\r\n    for (let i = 0; i < p.length; i++) {\r\n      fragment.appendChild(p[i].el || p[i]);\r\n    }\r\n\r\n    this.el.appendChild(fragment);\r\n  }\r\n\r\n  appendRaw(p) {\r\n    for (let i = 0; i < this.el.length; i++) {\r\n      this.el[i].innerHTML = this.el[i].innerHTML + p;\r\n    }\r\n    return this;\r\n  }\r\n  set(p){\r\n    for (let i = 0; i < this.el.length; i++) {\r\n      this.el[i].innerHTML = \"\"; \r\n      this.el[i].appendChild(p);\r\n    }\r\n    return this;\r\n  }\r\n  get() {\r\n    //  var o = this.fragment.appendChild(this.el);\r\n    return this.el;\r\n  }\r\n\r\n  render() {\r\n    this.fragment && this.el.appendChild(this.fragment);\r\n\r\n    this.fragment = null;\r\n    return this;\r\n  }\r\n}\r\nclass el extends ____es {\r\n  constructor(tag = null) {\r\n    super(tag);\r\n    this.el = document.createElement(tag);\r\n    return this;\r\n  }\r\n}\r\n\r\nconst s = (tag) => new ____es(tag);\r\n\r\n\r\n\n\n//# sourceURL=webpack://@mdshad/ripple/./node_modules/@mdshad/sel/index.js?");

/***/ }),

/***/ "./test/index.jsx":
/*!************************!*\
  !*** ./test/index.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.js\");\n/* harmony import */ var _src_jsml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/jsml.js */ \"./src/jsml.js\");\n/* harmony import */ var _src_jsml_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_jsml_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mdshad_sel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdshad/sel */ \"./node_modules/@mdshad/sel/index.js\");\n\n\n\nnew _index__WEBPACK_IMPORTED_MODULE_0__.Ripple(function ($) {\n  var render = function render() {\n    return (0,_src_jsml_js__WEBPACK_IMPORTED_MODULE_1__.jsml)(\"div\", null);\n  };\n  return {\n    render: render\n  };\n}, \"#root\");\n\n//# sourceURL=webpack://@mdshad/ripple/./test/index.jsx?");

/***/ }),

/***/ "./src/jsml.js":
/*!*********************!*\
  !*** ./src/jsml.js ***!
  \*********************/
/***/ (() => {

eval("function jsml(el, attribute, ...html) {\r\n  const e = document.createElement(el);\r\n  const Fun = {\r\n    id: (v) => {\r\n      e.id = v;\r\n    },\r\n    onclick: (v) => {\r\n      e.onclick = () => {\r\n        v();\r\n      };\r\n    },\r\n\r\n    style: (v) => {\r\n      for (let styleName of Object.keys(v)) {\r\n        e.style[styleName] = v[styleName];\r\n      }\r\n    },\r\n\r\n    attr: (k, v) => {\r\n      e.setAttribute(k, v);\r\n    },\r\n  };\r\n\r\n  switch (true) {\r\n    case attribute instanceof Element:\r\n      e.appendChild(attribute);\r\n      break;\r\n\r\n    case typeof attribute == \"object\":\r\n      for (let key of Object.keys(attribute)) {\r\n        if (typeof Fun[key] === \"function\") {\r\n          Fun[key](attribute[key]);\r\n        } else {\r\n          Fun[\"attr\"](key, attribute[key]);\r\n        }\r\n      }\r\n      break;\r\n\r\n    default:\r\n      e.innerText = attribute;\r\n\r\n      break;\r\n  }\r\n\r\n  for (let i of html) {\r\n    const TypeOf = typeof i;\r\n    switch (true) {\r\n      case TypeOf == \"object\":\r\n        e.appendChild(i);\r\n        break;\r\n      case TypeOf == \"string\" || TypeOf == \"number\":\r\n        e.innerText = i;\r\n        break;\r\n    }\r\n  }\r\n\r\n  return e;\r\n}\r\n/*\r\nfunction a(attribute, ...html) {\r\n  return jsml(\"a\", attribute, html);\r\n}\r\n\r\nfunction abbr(attribute, ...html) {\r\n  return jsml(\"abbr\", attribute, html);\r\n}\r\n\r\nfunction address(attribute, ...html) {\r\n  return jsml(\"address\", attribute, html);\r\n}\r\n\r\nfunction article(attribute, ...html) {\r\n  return jsml(\"article\", attribute, html);\r\n}\r\n\r\nfunction aside(attribute, ...html) {\r\n  return jsml(\"aside\", attribute, html);\r\n}\r\n\r\nfunction audio(attribute, ...html) {\r\n  return jsml(\"audio\", attribute, html);\r\n}\r\n\r\nfunction b(attribute, ...html) {\r\n  return jsml(\"b\", attribute, html);\r\n}\r\n\r\nfunction blockquote(attribute, ...html) {\r\n  return jsml(\"blockquote\", attribute, html);\r\n}\r\n\r\nfunction body(attribute, ...html) {\r\n  return jsml(\"body\", attribute, html);\r\n}\r\n\r\nfunction button(attribute, ...html) {\r\n  return jsml(\"button\", attribute, html);\r\n}\r\n\r\nfunction canvas(attribute, ...html) {\r\n  return jsml(\"canvas\", attribute, html);\r\n}\r\n\r\nfunction caption(attribute, ...html) {\r\n  return jsml(\"caption\", attribute, html);\r\n}\r\n\r\nfunction cite(attribute, ...html) {\r\n  return jsml(\"cite\", attribute, html);\r\n}\r\n\r\nfunction code(attribute, ...html) {\r\n  return jsml(\"code\", attribute, html);\r\n}\r\n\r\nfunction col(attribute, ...html) {\r\n  return jsml(\"col\", attribute, html);\r\n}\r\n\r\nfunction colgroup(attribute, ...html) {\r\n  return jsml(\"colgroup\", attribute, html);\r\n}\r\n\r\nfunction data(attribute, ...html) {\r\n  return jsml(\"data\", attribute, html);\r\n}\r\n\r\nfunction datalist(attribute, ...html) {\r\n  return jsml(\"datalist\", attribute, html);\r\n}\r\n\r\nfunction dd(attribute, ...html) {\r\n  return jsml(\"dd\", attribute, html);\r\n}\r\n\r\nfunction del(attribute, ...html) {\r\n  return jsml(\"del\", attribute, html);\r\n}\r\n\r\nfunction details(attribute, ...html) {\r\n  return jsml(\"details\", attribute, html);\r\n}\r\n\r\nfunction dfn(attribute, ...html) {\r\n  return jsml(\"dfn\", attribute, html);\r\n}\r\n\r\nfunction dialog(attribute, ...html) {\r\n  return jsml(\"dialog\", attribute, html);\r\n}\r\n\r\nfunction div(attribute, ...html) {\r\n  return jsml(\"div\", attribute, html);\r\n}\r\n\r\nfunction dl(attribute, ...html) {\r\n  return jsml(\"dl\", attribute, html);\r\n}\r\n\r\nfunction dt(attribute, ...html) {\r\n  return jsml(\"dt\", attribute, html);\r\n}\r\n\r\nfunction em(attribute, ...html) {\r\n  return jsml(\"em\", attribute, html);\r\n}\r\n\r\nfunction embed(attribute, ...html) {\r\n  return jsml(\"embed\", attribute, html);\r\n}\r\n\r\nfunction fieldset(attribute, ...html) {\r\n  return jsml(\"fieldset\", attribute, html);\r\n}\r\n\r\nfunction figcaption(attribute, ...html) {\r\n  return jsml(\"figcaption\", attribute, html);\r\n}\r\n\r\nfunction figure(attribute, ...html) {\r\n  return jsml(\"figure\", attribute, html);\r\n}\r\n\r\nfunction footer(attribute, ...html) {\r\n  return jsml(\"footer\", attribute, html);\r\n}\r\n\r\nfunction form(attribute, ...html) {\r\n  return jsml(\"form\", attribute, html);\r\n}\r\n\r\nfunction h1(attribute, ...html) {\r\n  return jsml(\"h1\", attribute, html);\r\n}\r\n\r\nfunction h2(attribute, ...html) {\r\n  return jsml(\"h2\", attribute, html);\r\n}\r\n\r\nfunction h3(attribute, ...html) {\r\n  return jsml(\"h3\", attribute, html);\r\n}\r\n\r\nfunction h4(attribute, ...html) {\r\n  return jsml(\"h4\", attribute, html);\r\n}\r\n\r\nfunction h5(attribute, ...html) {\r\n  return jsml(\"h5\", attribute, html);\r\n}\r\n\r\nfunction h6(attribute, ...html) {\r\n  return jsml(\"h6\", attribute, html);\r\n}\r\n\r\nfunction head(attribute, ...html) {\r\n  return jsml(\"head\", attribute, html);\r\n}\r\n\r\nfunction header(attribute, ...html) {\r\n  return jsml(\"header\", attribute, html);\r\n}\r\n\r\nfunction hr(attribute, ...html) {\r\n  return jsml(\"hr\", attribute, html);\r\n}\r\n\r\nfunction html(attribute, ...html) {\r\n  return jsml(\"html\", attribute, html);\r\n}\r\n\r\nfunction i(attribute, ...html) {\r\n  return jsml(\"i\", attribute, html);\r\n}\r\n\r\nfunction iframe(attribute, ...html) {\r\n  return jsml(\"iframe\", attribute, html);\r\n}\r\n\r\nfunction img(attribute, ...html) {\r\n  return jsml(\"img\", attribute, html);\r\n}\r\n\r\nfunction input(attribute, ...html) {\r\n  return jsml(\"input\", attribute, html);\r\n}\r\n\r\nfunction ins(attribute, ...html) {\r\n  return jsml(\"ins\", attribute, html);\r\n}\r\n\r\nfunction kbd(attribute, ...html) {\r\n  return jsml(\"kbd\", attribute, html);\r\n}\r\n\r\nfunction label(attribute, ...html) {\r\n  return jsml(\"label\", attribute, html);\r\n}\r\n\r\nfunction legend(attribute, ...html) {\r\n  return jsml(\"legend\", attribute, html);\r\n}\r\n\r\nfunction li(attribute, ...html) {\r\n  return jsml(\"li\", attribute, html);\r\n}\r\n\r\nfunction link(attribute, ...html) {\r\n  return jsml(\"link\", attribute, html);\r\n}\r\n\r\nfunction main(attribute, ...html) {\r\n  return jsml(\"main\", attribute, html);\r\n}\r\n\r\nfunction map(attribute, ...html) {\r\n  return jsml(\"map\", attribute, html);\r\n}\r\n\r\nfunction mark(attribute, ...html) {\r\n  return jsml(\"mark\", attribute, html);\r\n}\r\n\r\nfunction meta(attribute, ...html) {\r\n  return jsml(\"meta\", attribute, html);\r\n}\r\n\r\nfunction meter(attribute, ...html) {\r\n  return jsml(\"meter\", attribute, html);\r\n}\r\n\r\nfunction nav(attribute, ...html) {\r\n  return jsml(\"nav\", attribute, html);\r\n}\r\n\r\nfunction noscript(attribute, ...html) {\r\n  return jsml(\"noscript\", attribute, html);\r\n}\r\n\r\nfunction object(attribute, ...html) {\r\n  return jsml(\"object\", attribute, html);\r\n}\r\n\r\nfunction ol(attribute, ...html) {\r\n  return jsml(\"ol\", attribute, html);\r\n}\r\n\r\nfunction optgroup(attribute, ...html) {\r\n  return jsml(\"optgroup\", attribute, html);\r\n}\r\n\r\nfunction option(attribute, ...html) {\r\n  return jsml(\"option\", attribute, html);\r\n}\r\n\r\nfunction output(attribute, ...html) {\r\n  return jsml(\"output\", attribute, html);\r\n}\r\n\r\nfunction p(attribute, ...html) {\r\n  return jsml(\"p\", attribute, html);\r\n}\r\n\r\nfunction param(attribute, ...html) {\r\n  return jsml(\"param\", attribute, html);\r\n}\r\n\r\nfunction picture(attribute, ...html) {\r\n  return jsml(\"picture\", attribute, html);\r\n}\r\n\r\nfunction pre(attribute, ...html) {\r\n  return jsml(\"pre\", attribute, html);\r\n}\r\n\r\nfunction progress(attribute, ...html) {\r\n  return jsml(\"progress\", attribute, html);\r\n}\r\n\r\nfunction q(attribute, ...html) {\r\n  return jsml(\"q\", attribute, html);\r\n}\r\n\r\nfunction rb(attribute, ...html) {\r\n  return jsml(\"rb\", attribute, html);\r\n}\r\n\r\nfunction rp(attribute, ...html) {\r\n  return jsml(\"rp\", attribute, html);\r\n}\r\n\r\nfunction select(attribute, ...html) {\r\n  return jsml(\"select\", attribute, html);\r\n}\r\n\r\nfunction small(attribute, ...html) {\r\n  return jsml(\"small\", attribute, html);\r\n}\r\n\r\nfunction source(attribute, ...html) {\r\n  return jsml(\"source\", attribute, html);\r\n}\r\n\r\nfunction span(attribute, ...html) {\r\n  return jsml(\"span\", attribute, html);\r\n}\r\n\r\nfunction strong(attribute, ...html) {\r\n  return jsml(\"strong\", attribute, html);\r\n}\r\n\r\nfunction style(attribute, ...html) {\r\n  return jsml(\"style\", attribute, html);\r\n}\r\n\r\nfunction sub(attribute, ...html) {\r\n  return jsml(\"sub\", attribute, html);\r\n}\r\n\r\nfunction summary(attribute, ...html) {\r\n  return jsml(\"summary\", attribute, html);\r\n}\r\n\r\nfunction sup(attribute, ...html) {\r\n  return jsml(\"sup\", attribute, html);\r\n}\r\n\r\nfunction table(attribute, ...html) {\r\n  return jsml(\"table\", attribute, html);\r\n}\r\n\r\nfunction tbody(attribute, ...html) {\r\n  return jsml(\"tbody\", attribute, html);\r\n}\r\n\r\nfunction td(attribute, ...html) {\r\n  return jsml(\"td\", attribute, html);\r\n}\r\n\r\nfunction template(attribute, ...html) {\r\n  return jsml(\"template\", attribute, html);\r\n}\r\n\r\nfunction textarea(attribute, ...html) {\r\n  return jsml(\"textarea\", attribute, html);\r\n}\r\n\r\nfunction tfoot(attribute, ...html) {\r\n  return jsml(\"tfoot\", attribute, html);\r\n}\r\n\r\nfunction th(attribute, ...html) {\r\n  return jsml(\"th\", attribute, html);\r\n}\r\n\r\nfunction thead(attribute, ...html) {\r\n  return jsml(\"thead\", attribute, html);\r\n}\r\n\r\nfunction time(attribute, ...html) {\r\n  return jsml(\"time\", attribute, html);\r\n}\r\n\r\nfunction title(attribute, ...html) {\r\n  return jsml(\"title\", attribute, html);\r\n}\r\n\r\nfunction tr(attribute, ...html) {\r\n  return jsml(\"tr\", attribute, html);\r\n}\r\n\r\nfunction track(attribute, ...html) {\r\n  return jsml(\"track\", attribute, html);\r\n}\r\n\r\nfunction u(attribute, ...html) {\r\n  return jsml(\"u\", attribute, html);\r\n}\r\n\r\nfunction ul(attribute, ...html) {\r\n  return jsml(\"ul\", attribute, html);\r\n}\r\n\r\nfunction varTag(attribute, ...html) {\r\n  return jsml(\"var\", attribute, html);\r\n}\r\n\r\nfunction video(attribute, ...html) {\r\n  return jsml(\"video\", attribute, html);\r\n}\r\n\r\nfunction wbr(attribute, ...html) {\r\n  return jsml(\"wbr\", attribute, html);\r\n}\r\n\r\n// Export all the functions\r\nexport {\r\n  a,\r\n  abbr,\r\n  address,\r\n  article,\r\n  aside,\r\n  audio,\r\n  b,\r\n  blockquote,\r\n  body,\r\n  button,\r\n  canvas,\r\n  caption,\r\n  cite,\r\n  code,\r\n  col,\r\n  colgroup,\r\n  data,\r\n  datalist,\r\n  dd,\r\n  del,\r\n  details,\r\n  dfn,\r\n  dialog,\r\n  div,\r\n  dl,\r\n  dt,\r\n  em,\r\n  embed,\r\n  fieldset,\r\n  figcaption,\r\n  figure,\r\n  footer,\r\n  form,\r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6,\r\n  head,\r\n  header,\r\n  hr,\r\n  html,\r\n  i,\r\n  iframe,\r\n  img,\r\n  input,\r\n  ins,\r\n  kbd,\r\n  label,\r\n  legend,\r\n  li,\r\n  link,\r\n  main,\r\n  map,\r\n  mark,\r\n  meta,\r\n  meter,\r\n  nav,\r\n  noscript,\r\n  object,\r\n  ol,\r\n  optgroup,\r\n  option,\r\n  output,\r\n  p,\r\n  param,\r\n  picture,\r\n  pre,\r\n  progress,\r\n  q,\r\n  rb,\r\n  rp,\r\n  select,\r\n  small,\r\n  source,\r\n  span,\r\n  strong,\r\n  style,\r\n  sub,\r\n  summary,\r\n  sup,\r\n  table,\r\n  tbody,\r\n  td,\r\n  template,\r\n  textarea,\r\n  tfoot,\r\n  th,\r\n  thead,\r\n  time,\r\n  title,\r\n  tr,\r\n  track,\r\n  u,\r\n  ul,\r\n  varTag,\r\n  video,\r\n  wbr,\r\n};\r\n\r\n\r\n*/\r\n\n\n//# sourceURL=webpack://@mdshad/ripple/./src/jsml.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./test/index.jsx");
/******/ 	
/******/ })()
;