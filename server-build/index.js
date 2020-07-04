/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/getNews.js":
/*!***************************!*\
  !*** ./server/getNews.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getNews = page => {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`).then(res => res.json());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNews);\n\n//# sourceURL=webpack:///./server/getNews.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getNews */ \"./server/getNews.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(\"./build\"));\napp.enable(\"trust proxy\");\napp.use(function (req, res, next) {\n  if (req.secure) {\n    // request was via https, so do no special handling\n    next();\n  } else {\n    // request was via http, so redirect to https\n    res.redirect(\"https://\" + req.headers.host + req.url);\n  }\n});\napp.get(\"/*\", (req, res) => {\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  Object(_getNews__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(0).then(response => {\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      data: response,\n      isLineChartVisible: false\n    }));\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        return res.status(500).send(\"Internal Server error!!\");\n      }\n\n      return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n    });\n  }).catch(err => {\n    console.log(err);\n    return res.status(500).send(\"Internal Server error!!\");\n  });\n});\napp.listen(PORT, () => {\n  console.log(`😎 Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewsFeed_NewsFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NewsFeed/NewsFeed */ \"./src/components/NewsFeed/NewsFeed.js\");\n/* harmony import */ var _components_LineChart_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LineChart/LineChart */ \"./src/components/LineChart/LineChart.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction App(props) {\n  const [newsFeed, setNewsFeed] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [currentPage, setCurrentPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const [upvotes, setUpvote] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [isLoaderVisible, setLoaderVisiblity] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(\"Props\", props.data.hits);\n    setNewsFeed(props.data.hits);\n  }, [props]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getNewsFeed(0);\n    let upvotes = localStorage.getItem(\"upvotes\");\n\n    try {\n      let parsedJson = JSON.parse(upvotes);\n      setUpvote(parsedJson);\n    } catch (err) {\n      console.log(err);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    let chartValues = newsFeed.map(value => {\n      let chartVal = {};\n      chartVal.id = value.objectID;\n      chartVal.votes = upvotes && upvotes[value.objectID] ? upvotes[value.objectID] : 0;\n      return chartVal;\n    });\n    setChartData(chartValues);\n  }, [newsFeed, upvotes]);\n\n  const getNewsFeed = async page => {\n    setLoaderVisiblity(true);\n    const newsFeedResponse = await fetch(`https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`);\n\n    if (newsFeedResponse.ok) {\n      let jsonData = await newsFeedResponse.json();\n      setLoaderVisiblity(false);\n      setCurrentPage(page);\n      setNewsFeed(jsonData.hits);\n    } else {\n      setLoaderVisiblity(true);\n      setCurrentPage(page);\n      setNewsFeed([]);\n    }\n  };\n\n  const next = () => {\n    getNewsFeed(currentPage + 1);\n  };\n\n  const previous = () => {\n    if (currentPage > 0) {\n      getNewsFeed(currentPage - 1);\n    }\n  };\n\n  const handleHideBtnClick = data => {\n    setNewsFeed(data);\n  };\n\n  const handleUpvote = data => {\n    setUpvote(data);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsFeed_NewsFeed__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    upvotes: upvotes,\n    data: newsFeed.length === 0 ? props.data.hits : newsFeed,\n    next: next,\n    previous: previous,\n    hideStory: handleHideBtnClick,\n    handleUpvote: handleUpvote,\n    currentPage: currentPage\n  }), isLoaderVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loader-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"loader\"\n  })), props.isLineChartVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LineChart_LineChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: chartData\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/assets/ic-upvote.png":
/*!**********************************!*\
  !*** ./src/assets/ic-upvote.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"153ba885dfddfcdffbda0e2b688ea4d5.png\");\n\n//# sourceURL=webpack:///./src/assets/ic-upvote.png?");

/***/ }),

/***/ "./src/components/LineChart/LineChart.js":
/*!***********************************************!*\
  !*** ./src/components/LineChart/LineChart.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst LineChartExample = props => {\n  const [chartWidth, setChartWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(window.innerWidth > 1200 ? 1200 : window.innerWidth - 50);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.addEventListener(\"resize\", e => {\n      if (e.currentTarget.innerWidth < 1200) {\n        setChartWidth(e.currentTarget.innerWidth - 50);\n      } else {\n        setChartWidth(1200);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"LineChart\"], {\n    width: chartWidth,\n    height: 300,\n    data: props.data,\n    margin: {\n      top: 5,\n      right: 30,\n      left: 20,\n      bottom: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"CartesianGrid\"], {\n    strokeDasharray: \"3 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"XAxis\"], {\n    dataKey: \"id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n    value: \"ID\",\n    offset: -15,\n    position: \"insideBottom\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"YAxis\"], {\n    dataKey: \"votes\",\n    label: {\n      value: \"Votes\",\n      angle: -90,\n      position: \"insideLeft\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    type: \"monotone\",\n    dataKey: \"votes\",\n    stroke: \"#ffa500\",\n    activeDot: {\n      r: 8\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineChartExample);\n\n//# sourceURL=webpack:///./src/components/LineChart/LineChart.js?");

/***/ }),

/***/ "./src/components/NewsFeed/NewsFeed.css":
/*!**********************************************!*\
  !*** ./src/components/NewsFeed/NewsFeed.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/NewsFeed/NewsFeed.css?");

/***/ }),

/***/ "./src/components/NewsFeed/NewsFeed.js":
/*!*********************************************!*\
  !*** ./src/components/NewsFeed/NewsFeed.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_ic_upvote_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/ic-upvote.png */ \"./src/assets/ic-upvote.png\");\n/* harmony import */ var _NewsFeed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsFeed.css */ \"./src/components/NewsFeed/NewsFeed.css\");\n/* harmony import */ var _NewsFeed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NewsFeed_css__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * Root component.\n * @component\n * Initialise view with required components.\n */\n\n\n\n\nconst NewsFeed = props => {\n  const [upvotes, setUpvote] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.upvotes);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setUpvote(props.upvotes);\n  }, [props.upvotes]);\n\n  const handleHideBtnClick = e => {\n    let index;\n    let newsFeedData = [...props.data];\n\n    for (let i = 0; i < props.data.length; i++) {\n      if (props.data[i].objectID === e.currentTarget.dataset.id) {\n        index = i;\n        break;\n      }\n    }\n\n    if (index || index === 0) {\n      newsFeedData.splice(index, 1);\n      props.hideStory(newsFeedData);\n    }\n  };\n\n  const handlePrevClick = e => {\n    props.previous();\n  };\n\n  const handleNextClick = e => {\n    props.next();\n  };\n\n  const handleUpvote = e => {\n    let upvotesUpdate = { ...upvotes\n    };\n\n    if (upvotesUpdate[e.currentTarget.dataset.id] || upvotesUpdate[e.currentTarget.dataset.id] === 0) {\n      upvotesUpdate[e.currentTarget.dataset.id]++;\n    } else {\n      //already initialised with 0. So increment by 1.\n      upvotesUpdate[e.currentTarget.dataset.id] = 1;\n    }\n\n    setUpvote(upvotesUpdate); //Store upvotes in localstorage.\n\n    localStorage.setItem(\"upvotes\", JSON.stringify(upvotesUpdate));\n    props.handleUpvote(upvotesUpdate);\n  };\n\n  const renderRows = () => {\n    return props.data.map(function (value, index) {\n      return value.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        key: value.objectID,\n        className: \"news-feed-data-row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"news-feed-data-item center\"\n      }, value.num_comments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"news-feed-data-item center\"\n      }, upvotes ? !upvotes[value.objectID] || upvotes[value.objectID] === 0 ? 0 : upvotes[value.objectID] : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"news-feed-data-item center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"upvote\",\n        \"data-id\": value.objectID,\n        onClick: handleUpvote\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"upvote-icon\",\n        src: _assets_ic_upvote_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        alt: \"Upvote\"\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"news-feed-data-item left-align\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"news-feed-details-wrapper\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n        className: \"news-title\"\n      }, value.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: value.url,\n        className: \"news-link\"\n      }, \"(\" + (value.url ? value.url : \"\") + \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"news-author\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"By\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"news-author-name\"\n      }, value.author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"news-last-updated-ts\"\n      }, value.created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"news-hide\",\n        \"data-id\": value.objectID,\n        onClick: handleHideBtnClick\n      }, \"[hide]\"))));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"main-container\",\n    role: \"main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"news-feed-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"news-feed-header-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"news-feed-header-item fixed-width center\"\n  }, \"Comments\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"news-feed-header-item fixed-width center\"\n  }, \"Vote Count\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"news-feed-header-item fixed-width center\"\n  }, \"Upvote\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"news-feed-header-item left-align\"\n  }, \"News Details\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, renderRows())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"btn-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"prev\",\n    disabled: props.currentPage === 0,\n    onClick: handlePrevClick\n  }, \"Previous\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"next\",\n    onClick: handleNextClick\n  }, \"Next\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsFeed);\n\n//# sourceURL=webpack:///./src/components/NewsFeed/NewsFeed.js?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recharts\");\n\n//# sourceURL=webpack:///external_%22recharts%22?");

/***/ })

/******/ });