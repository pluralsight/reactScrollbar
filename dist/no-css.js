(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ScrollArea"] = factory(require("react"));
	else
		root["ScrollArea"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ScrollArea = __webpack_require__(1);
	
	var _ScrollArea2 = _interopRequireDefault(_ScrollArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ScrollArea2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Scrollbar = __webpack_require__(3);
	
	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);
	
	var _utils = __webpack_require__(19);
	
	var _lineHeight = __webpack_require__(20);
	
	var _lineHeight2 = _interopRequireDefault(_lineHeight);
	
	var _reactMotion = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var eventTypes = {
	    wheel: 'wheel',
	    api: 'api',
	    touch: 'touch',
	    touchEnd: 'touchEnd',
	    mousemove: 'mousemove'
	};
	
	var ScrollArea = function (_React$Component) {
	    _inherits(ScrollArea, _React$Component);
	
	    function ScrollArea(props) {
	        _classCallCheck(this, ScrollArea);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollArea).call(this, props));
	
	        _this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0
	        };
	
	        _this.scrollArea = {
	            refresh: function refresh() {
	                _this.setSizesToState();
	            },
	            scrollTop: function scrollTop() {
	                _this.scrollTop();
	            },
	            scrollBottom: function scrollBottom() {
	                _this.scrollBottom();
	            },
	            scrollYTo: function scrollYTo(position) {
	                _this.scrollYTo(position);
	            },
	            scrollLeft: function scrollLeft() {
	                _this.scrollLeft();
	            },
	            scrollRight: function scrollRight() {
	                _this.scrollRight();
	            },
	            scrollXTo: function scrollXTo(position) {
	                _this.scrollXTo(position);
	            }
	        };
	
	        _this.evntsPreviousValues = {
	            clientX: 0,
	            clientY: 0,
	            deltaX: 0,
	            deltaY: 0
	        };
	
	        _this.bindedHandleWindowResize = _this.handleWindowResize.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollArea, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                scrollArea: this.scrollArea
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
	            }
	            this.lineHeightPx = (0, _lineHeight2.default)((0, _utils.findDOMNode)(this.content));
	            this.setSizesToState();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setSizesToState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var children = _props.children;
	            var className = _props.className;
	            var contentClassName = _props.contentClassName;
	            var ownerDocument = _props.ownerDocument;
	
	            var withMotion = this.props.smoothScrolling && (this.state.eventType === eventTypes.wheel || this.state.eventType === eventTypes.api || this.state.eventType === eventTypes.touchEnd);
	
	            var scrollbarY = this.canScrollY() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realHeight,
	                containerSize: this.state.containerHeight,
	                position: this.state.topPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarYPositionChange.bind(this),
	                containerStyle: this.props.verticalContainerStyle,
	                scrollbarStyle: this.props.verticalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                type: 'vertical' }) : null;
	
	            var scrollbarX = this.canScrollX() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realWidth,
	                containerSize: this.state.containerWidth,
	                position: this.state.leftPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarXPositionChange.bind(this),
	                containerStyle: this.props.horizontalContainerStyle,
	                scrollbarStyle: this.props.horizontalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                type: 'horizontal' }) : null;
	
	            if (typeof children === 'function') {
	                (0, _utils.warnAboutFunctionChild)();
	                children = children();
	            } else {
	                (0, _utils.warnAboutElementChild)();
	            }
	
	            var classes = 'scrollarea ' + (className || '');
	            var contentClasses = 'scrollarea-content ' + (contentClassName || '');
	
	            var contentStyle = {
	                marginTop: -this.state.topPosition,
	                marginLeft: -this.state.leftPosition
	            };
	            var springifiedContentStyle = withMotion ? (0, _utils.modifyObjValues)(contentStyle, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : contentStyle;
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: _extends({}, this.props.contentStyle, springifiedContentStyle) },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        { ref: function ref(x) {
	                                return _this2.wrapper = x;
	                            }, style: _this2.props.style, className: classes, onWheel: _this2.handleWheel.bind(_this2) },
	                        _react2.default.createElement(
	                            'div',
	                            { ref: function ref(x) {
	                                    return _this2.content = x;
	                                },
	                                style: style,
	                                className: contentClasses,
	                                onTouchStart: _this2.handleTouchStart.bind(_this2),
	                                onTouchMove: _this2.handleTouchMove.bind(_this2),
	                                onTouchEnd: _this2.handleTouchEnd.bind(_this2) },
	                            children
	                        ),
	                        scrollbarY,
	                        scrollbarX
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'setStateFromEvent',
	        value: function setStateFromEvent(newState, eventType) {
	            if (this.props.onScroll) {
	                this.props.onScroll(newState);
	            }
	            this.setState(_extends({}, newState, { eventType: eventType }));
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$ = touches[0];
	                var clientX = _touches$.clientX;
	                var clientY = _touches$.clientY;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	            }
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            e.preventDefault();
	
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$2 = touches[0];
	                var clientX = _touches$2.clientX;
	                var clientY = _touches$2.clientY;
	
	
	                var deltaY = this.eventPreviousValues.clientY - clientY;
	                var deltaX = this.eventPreviousValues.clientX - clientX;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    deltaY: deltaY,
	                    deltaX: deltaX,
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	
	                this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	            }
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _eventPreviousValues = this.eventPreviousValues;
	            var lastDeltaX = _eventPreviousValues.deltaX;
	            var lastDeltaY = _eventPreviousValues.deltaY;
	            var lastTimestamp = _eventPreviousValues.timestamp;
	
	
	            if (Date.now() - lastTimestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-lastDeltaX * 10, -lastDeltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	        }
	    }, {
	        key: 'handleScrollbarMove',
	        value: function handleScrollbarMove(deltaY, deltaX) {
	            this.setStateFromEvent(this.composeNewState(deltaX, deltaY));
	        }
	    }, {
	        key: 'handleScrollbarXPositionChange',
	        value: function handleScrollbarXPositionChange(position) {
	            this.scrollXTo(position);
	        }
	    }, {
	        key: 'handleScrollbarYPositionChange',
	        value: function handleScrollbarYPositionChange(position) {
	            this.scrollYTo(position);
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(e) {
	            var deltaY = e.deltaY;
	            var deltaX = e.deltaX;
	
	            if (this.props.swapWheelAxes) {
	                var _ref = [deltaX, deltaY];
	                deltaY = _ref[0];
	                deltaX = _ref[1];
	            }
	
	            /*
	             * WheelEvent.deltaMode can differ between browsers and must be normalized
	             * e.deltaMode === 0: The delta values are specified in pixels
	             * e.deltaMode === 1: The delta values are specified in lines
	             * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
	             */
	            if (e.deltaMode === 1) {
	                deltaY = deltaY * this.lineHeightPx;
	                deltaX = deltaX * this.lineHeightPx;
	            }
	
	            deltaY = deltaY * this.props.speed;
	            deltaX = deltaX * this.props.speed;
	
	            var newState = this.composeNewState(-deltaX, -deltaY);
	
	            if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition) {
	                e.preventDefault();
	            }
	
	            this.setStateFromEvent(newState, eventTypes.wheel);
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var newState = this.computeSizes();
	            newState = this.getModifiedPositionsIfNeeded(newState);
	            this.setStateFromEvent(newState);
	        }
	    }, {
	        key: 'composeNewState',
	        value: function composeNewState(deltaX, deltaY) {
	            var newState = this.computeSizes();
	
	            if (this.canScrollY(newState)) {
	                newState.topPosition = this.computeTopPosition(deltaY, newState);
	            }
	            if (this.canScrollX(newState)) {
	                newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'computeTopPosition',
	        value: function computeTopPosition(deltaY, sizes) {
	            var newTopPosition = this.state.topPosition - deltaY;
	            return this.normalizeTopPosition(newTopPosition, sizes);
	        }
	    }, {
	        key: 'computeLeftPosition',
	        value: function computeLeftPosition(deltaX, sizes) {
	            var newLeftPosition = this.state.leftPosition - deltaX;
	            return this.normalizeLeftPosition(newLeftPosition, sizes);
	        }
	    }, {
	        key: 'normalizeTopPosition',
	        value: function normalizeTopPosition(newTopPosition, sizes) {
	            if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                newTopPosition = sizes.realHeight - sizes.containerHeight;
	            }
	            if (newTopPosition < 0) {
	                newTopPosition = 0;
	            }
	            return newTopPosition;
	        }
	    }, {
	        key: 'normalizeLeftPosition',
	        value: function normalizeLeftPosition(newLeftPosition, sizes) {
	            if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                newLeftPosition = sizes.realWidth - sizes.containerWidth;
	            } else if (newLeftPosition < 0) {
	                newLeftPosition = 0;
	            }
	
	            return newLeftPosition;
	        }
	    }, {
	        key: 'computeSizes',
	        value: function computeSizes() {
	            var realHeight = this.content.offsetHeight;
	            var containerHeight = this.wrapper.offsetHeight;
	            var realWidth = this.content.offsetWidth;
	            var containerWidth = this.wrapper.offsetWidth;
	
	            return {
	                realHeight: realHeight,
	                containerHeight: containerHeight,
	                realWidth: realWidth,
	                containerWidth: containerWidth
	            };
	        }
	    }, {
	        key: 'setSizesToState',
	        value: function setSizesToState() {
	            var sizes = this.computeSizes();
	            if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
	            }
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            this.scrollYTo(0);
	        }
	    }, {
	        key: 'scrollBottom',
	        value: function scrollBottom() {
	            this.scrollYTo(this.state.realHeight - this.state.containerHeight);
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            this.scrollXTo(0);
	        }
	    }, {
	        key: 'scrollRight',
	        value: function scrollRight() {
	            this.scrollXTo(this.state.realWidth - this.state.containerWidth);
	        }
	    }, {
	        key: 'scrollYTo',
	        value: function scrollYTo(topPosition) {
	            if (this.canScrollY()) {
	                var position = this.normalizeTopPosition(topPosition, this.computeSizes());
	                this.setStateFromEvent({ topPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'scrollXTo',
	        value: function scrollXTo(leftPosition) {
	            if (this.canScrollX()) {
	                var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
	                this.setStateFromEvent({ leftPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'canScrollY',
	        value: function canScrollY() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var scrollableY = state.realHeight > state.containerHeight;
	            return scrollableY && this.props.vertical;
	        }
	    }, {
	        key: 'canScrollX',
	        value: function canScrollX() {
	            var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	            var scrollableX = state.realWidth > state.containerWidth;
	            return scrollableX && this.props.horizontal;
	        }
	    }, {
	        key: 'getModifiedPositionsIfNeeded',
	        value: function getModifiedPositionsIfNeeded(newState) {
	            var bottomPosition = newState.realHeight - newState.containerHeight;
	            if (this.state.topPosition >= bottomPosition) {
	                newState.topPosition = this.canScrollY(newState) ? (0, _utils.positiveOrZero)(bottomPosition) : 0;
	            }
	
	            var rightPosition = newState.realWidth - newState.containerWidth;
	            if (this.state.leftPosition >= rightPosition) {
	                newState.leftPosition = this.canScrollX(newState) ? (0, _utils.positiveOrZero)(rightPosition) : 0;
	            }
	
	            return newState;
	        }
	    }]);
	
	    return ScrollArea;
	}(_react2.default.Component);
	
	exports.default = ScrollArea;
	
	
	ScrollArea.childContextTypes = {
	    scrollArea: _react2.default.PropTypes.object
	};
	
	ScrollArea.propTypes = {
	    className: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object,
	    speed: _react2.default.PropTypes.number,
	    contentClassName: _react2.default.PropTypes.string,
	    contentStyle: _react2.default.PropTypes.object,
	    vertical: _react2.default.PropTypes.bool,
	    verticalContainerStyle: _react2.default.PropTypes.object,
	    verticalScrollbarStyle: _react2.default.PropTypes.object,
	    horizontal: _react2.default.PropTypes.bool,
	    horizontalContainerStyle: _react2.default.PropTypes.object,
	    horizontalScrollbarStyle: _react2.default.PropTypes.object,
	    onScroll: _react2.default.PropTypes.func,
	    contentWindow: _react2.default.PropTypes.any,
	    ownerDocument: _react2.default.PropTypes.any,
	    smoothScrolling: _react2.default.PropTypes.bool,
	    minScrollSize: _react2.default.PropTypes.number,
	    swapWheelAxes: _react2.default.PropTypes.bool
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true,
	    smoothScrolling: false,
	    swapWheelAxes: false,
	    contentWindow: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" ? window : undefined,
	    ownerDocument: (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === "object" ? document : undefined
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(4);
	
	var _utils = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScrollBar = function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);
	
	    function ScrollBar(props) {
	        _classCallCheck(this, ScrollBar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollBar).call(this, props));
	
	        var newState = _this.calculateState(props);
	        _this.state = {
	            position: newState.position,
	            scrollSize: newState.scrollSize,
	            isDragging: false,
	            lastClientPosition: 0
	        };
	
	        if (props.type === 'vertical') {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForVertical.bind(_this);
	        } else {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForHorizontal.bind(_this);
	        }
	
	        _this.bindedHandleMouseUp = _this.handleMouseUp.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this.calculateState(nextProps));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'calculateFractionalPosition',
	        value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
	            var relativeSize = realContentSize - containerSize;
	
	            return 1 - (relativeSize - contentPosition) / relativeSize;
	        }
	    }, {
	        key: 'calculateState',
	        value: function calculateState(props) {
	            var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
	            var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
	            var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
	
	            var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
	            return {
	                scrollSize: scrollSize,
	                position: Math.round(scrollPosition)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var smoothScrolling = _props.smoothScrolling;
	            var isDragging = _props.isDragging;
	            var type = _props.type;
	            var scrollbarStyle = _props.scrollbarStyle;
	            var containerStyle = _props.containerStyle;
	
	            var isVoriziontal = type === 'horizontal';
	            var isVertical = type === 'vertical';
	            var scrollStyles = this.createScrollStyles();
	            var springifiedScrollStyles = smoothScrolling ? (0, _utils.modifyObjValues)(scrollStyles, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : scrollStyles;
	
	            var scrollbarClasses = 'scrollbar-container ' + (isDragging ? 'active' : '') + ' ' + (isVoriziontal ? 'horizontal' : '') + ' ' + (isVertical ? 'vertical' : '');
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: _extends({}, scrollbarStyle, springifiedScrollStyles) },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: scrollbarClasses,
	                            style: containerStyle,
	                            onMouseDown: _this2.handleScrollBarContainerClick.bind(_this2),
	                            ref: function ref(x) {
	                                _this2.scrollbarContainer = x;
	                            } },
	                        _react2.default.createElement('div', { className: 'scrollbar',
	                            style: style,
	                            onMouseDown: _this2.handleMouseDown.bind(_this2)
	                        })
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'handleScrollBarContainerClick',
	        value: function handleScrollBarContainerClick(e) {
	            e.preventDefault();
	            var multiplier = this.computeMultiplier();
	            var clientPosition = this.isVertical() ? e.clientY : e.clientX;
	
	            var _scrollbarContainer$g = this.scrollbarContainer.getBoundingClientRect();
	
	            var top = _scrollbarContainer$g.top;
	            var left = _scrollbarContainer$g.left;
	
	            var clientScrollPosition = this.isVertical() ? top : left;
	
	            var position = clientPosition - clientScrollPosition;
	            var proportionalToPageScrollSize = this.props.containerSize * this.props.containerSize / this.props.realSize;
	
	            this.setState({ isDragging: true, lastClientPosition: clientPosition });
	            this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
	        }
	    }, {
	        key: 'handleMouseMoveForHorizontal',
	        value: function handleMouseMoveForHorizontal(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaX = this.state.lastClientPosition - e.clientX;
	                this.setState({ lastClientPosition: e.clientX });
	                this.props.onMove(0, deltaX / multiplier);
	            }
	        }
	    }, {
	        key: 'handleMouseMoveForVertical',
	        value: function handleMouseMoveForVertical(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaY = this.state.lastClientPosition - e.clientY;
	                this.setState({ lastClientPosition: e.clientY });
	                this.props.onMove(deltaY / multiplier, 0);
	            }
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
	            this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            e.preventDefault();
	            this.setState({ isDragging: false });
	        }
	    }, {
	        key: 'createScrollStyles',
	        value: function createScrollStyles() {
	            if (this.props.type === 'vertical') {
	                return {
	                    height: this.state.scrollSize,
	                    marginTop: this.state.position
	                };
	            } else {
	                return {
	                    width: this.state.scrollSize,
	                    marginLeft: this.state.position
	                };
	            }
	        }
	    }, {
	        key: 'computeMultiplier',
	        value: function computeMultiplier() {
	            return this.props.containerSize / this.props.realSize;
	        }
	    }, {
	        key: 'isVertical',
	        value: function isVertical() {
	            return this.props.type === 'vertical';
	        }
	    }]);
	
	    return ScrollBar;
	}(_react2.default.Component);
	
	ScrollBar.propTypes = {
	    onMove: _react2.default.PropTypes.func,
	    onPositionChange: _react2.default.PropTypes.func,
	    realSize: _react2.default.PropTypes.number,
	    containerSize: _react2.default.PropTypes.number,
	    position: _react2.default.PropTypes.number,
	    containerStyle: _react2.default.PropTypes.object,
	    scrollbarStyle: _react2.default.PropTypes.object,
	    type: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
	    ownerDocument: _react2.default.PropTypes.any,
	    smoothScrolling: _react2.default.PropTypes.bool,
	    minScrollSize: _react2.default.PropTypes.number
	};
	
	ScrollBar.defaultProps = {
	    type: 'vertical',
	    smoothScrolling: false
	};
	exports.default = ScrollBar;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(5);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(13);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(14);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(16);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(17);
	
	exports.presets = _interopRequire(_presets);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(18);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(6);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(7);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(8);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(9);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(11);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(12);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = _react2['default'].createClass({
	  displayName: 'Motion',
	
	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
	    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    onRest: _react.PropTypes.func
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },
	
	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;
	
	    for (var key in destStyle) {
	      if (!destStyle.hasOwnProperty(key)) {
	        continue;
	      }
	
	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }
	
	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }
	
	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }
	
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      _this.wasAnimating = true;
	
	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};
	
	      for (var key in propsStyle) {
	        if (!propsStyle.hasOwnProperty(key)) {
	          continue;
	        }
	
	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }
	
	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];
	
	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });
	
	      _this.unreadPropStyle = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(9)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(6);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(7);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(8);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(9);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(11);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(12);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = _react2['default'].createClass({
	  displayName: 'StaggeredMotion',
	
	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
	    styles: _react.PropTypes.func.isRequired,
	    children: _react.PropTypes.func.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },
	
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;
	
	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;
	
	      for (var key in unreadPropStyle) {
	        if (!unreadPropStyle.hasOwnProperty(key)) {
	          continue;
	        }
	
	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }
	
	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];
	
	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	
	        for (var key in destStyle) {
	          if (!destStyle.hasOwnProperty(key)) {
	            continue;
	          }
	
	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });
	
	      _this.unreadPropStyles = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(6);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(7);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(8);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(15);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(9);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(11);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(12);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  if (unreadPropStyles == null) {
	    // $FlowFixMe
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    // $FlowFixMe
	    for (var j = 0; j < unreadPropStyles.length; j++) {
	      // $FlowFixMe
	      if (unreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          // $FlowFixMe
	          key: unreadPropStyles[j].key,
	          data: unreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    // $FlowFixMe
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      // $FlowFixMe
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = _react2['default'].createClass({
	  displayName: 'TransitionMotion',
	
	  propTypes: {
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
	    })),
	    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
	    }))]).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    willLeave: _react.PropTypes.func,
	    willEnter: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      }
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      // $FlowFixMe
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync = mergeAndSync(
	    // $FlowFixMe
	    willEnter,
	    // $FlowFixMe
	    willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },
	
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(
	    // $FlowFixMe
	    this.props.willEnter,
	    // $FlowFixMe
	    this.props.willLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);
	
	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];
	
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;
	
	      for (var key in unreadPropStyle) {
	        if (!unreadPropStyle.hasOwnProperty(key)) {
	          continue;
	        }
	
	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }
	
	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var _mergeAndSync3 = mergeAndSync(
	      // $FlowFixMe
	      _this.props.willEnter,
	      // $FlowFixMe
	      _this.props.willLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];
	
	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	
	        for (var key in newMergedPropsStyle) {
	          if (!newMergedPropsStyle.hasOwnProperty(key)) {
	            continue;
	          }
	
	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });
	
	      _this.unreadPropStyles = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    if (typeof props.styles === 'function') {
	      // $FlowFixMe
	      this.unreadPropStyles = props.styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = props.styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ },
/* 15 */
/***/ function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!nextKeyIndex.hasOwnProperty(prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!prevKeyIndex.hasOwnProperty(pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!prevKeyIndex.hasOwnProperty(pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(17);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findDOMNode = findDOMNode;
	exports.warnAboutFunctionChild = warnAboutFunctionChild;
	exports.warnAboutElementChild = warnAboutElementChild;
	exports.positiveOrZero = positiveOrZero;
	exports.modifyObjValues = modifyObjValues;
	exports.isReact13 = isReact13;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var react13 = isReact13(_react2.default);
	var didWarnAboutChild = false;
	
	function findDOMNode(component) {
	    if (!react13) {
	        return component;
	    } else {
	        return _react2.default.findDOMNode(component);
	    }
	}
	
	function warnAboutFunctionChild() {
	    if (didWarnAboutChild || react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function.');
	}
	
	function warnAboutElementChild() {
	    if (didWarnAboutChild || !react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.13, you need to wrap <ScrollArea> child into a function.');
	}
	
	function positiveOrZero(number) {
	    return number < 0 ? 0 : number;
	}
	
	function modifyObjValues(obj) {
	    var modifier = arguments.length <= 1 || arguments[1] === undefined ? function (x) {
	        return x;
	    } : arguments[1];
	
	    var modifiedObj = {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
	    }
	
	    return modifiedObj;
	}
	
	function isReact13(React) {
	    var version = React.version;
	
	    if (typeof version !== 'string') {
	        return true;
	    }
	
	    var parts = version.split('.');
	    var major = parseInt(parts[0], 10);
	    var minor = parseInt(parts[1], 10);
	
	    return major === 0 && minor === 13;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(21);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height'),
	      lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	    lnHeight *= 96;
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName,
	        _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;

/***/ },
/* 21 */
/***/ function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMjcxYmQwZjQ5OTg2YTUxYjRiMiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhvdXRDc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1Njcm9sbEFyZWEuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JvbGxiYXIuanN4Iiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL01vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbWFwVG9aZXJvLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zdHJpcFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zdGVwcGVyLmpzIiwid2VicGFjazovLy8uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yYWYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL1N0YWdnZXJlZE1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvVHJhbnNpdGlvbk1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xpbmUtaGVpZ2h0L2xpYi9saW5lLWhlaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXB1dGVkLXN0eWxlL2Rpc3QvY29tcHV0ZWRTdHlsZS5jb21tb25qcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUEsS0FBTSxhQUFZO0FBQ2QsWUFBTyxPQURPO0FBRWQsVUFBSyxLQUZTO0FBR2QsWUFBTyxPQUhPO0FBSWQsZUFBVSxVQUpJO0FBS2QsZ0JBQVc7QUFMRyxFQUFsQjs7S0FRcUIsVTs7O0FBQ2pCLHlCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxtR0FDUixLQURROztBQUVkLGVBQUssS0FBTCxHQUFhO0FBQ1QsMEJBQWEsQ0FESjtBQUVULDJCQUFjLENBRkw7QUFHVCx5QkFBWSxDQUhIO0FBSVQsOEJBQWlCLENBSlI7QUFLVCx3QkFBVyxDQUxGO0FBTVQsNkJBQWdCO0FBTlAsVUFB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N0IsU0FBSSxPQUFPLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDN0IsZ0JBQU8sSUFBUDtBQUNIOztBQUVELFNBQU0sUUFBUSxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQWQ7QUFDQSxTQUFNLFFBQVEsU0FBUyxNQUFNLENBQU4sQ0FBVCxFQUFtQixFQUFuQixDQUFkO0FBQ0EsU0FBTSxRQUFRLFNBQVMsTUFBTSxDQUFOLENBQVQsRUFBbUIsRUFBbkIsQ0FBZDs7QUFFQSxZQUFPLFVBQVUsQ0FBVixJQUFlLFVBQVUsRUFBaEM7QUFDSCxFOzs7Ozs7QUN2REQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkI7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQSIsImZpbGUiOiJjMjcxYmQwZjQ5OTg2YTUxYjRiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNjcm9sbEFyZWFcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2Nyb2xsQXJlYVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjMjcxYmQwZjQ5OTg2YTUxYjRiMlxuICoqLyIsImltcG9ydCBTY3JvbGxBcmVhIGZyb20gJy4vU2Nyb2xsQXJlYS5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBcmVhO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL1Njcm9sbEFyZWFXaXRob3V0Q3NzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnLi9TY3JvbGxiYXInO1xuaW1wb3J0IHtmaW5kRE9NTm9kZSwgd2FybkFib3V0RnVuY3Rpb25DaGlsZCwgd2FybkFib3V0RWxlbWVudENoaWxkLCBwb3NpdGl2ZU9yWmVybywgbW9kaWZ5T2JqVmFsdWVzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBsaW5lSGVpZ2h0IGZyb20gJ2xpbmUtaGVpZ2h0JztcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IGV2ZW50VHlwZXM9IHtcbiAgICB3aGVlbDogJ3doZWVsJyxcbiAgICBhcGk6ICdhcGknLFxuICAgIHRvdWNoOiAndG91Y2gnLFxuICAgIHRvdWNoRW5kOiAndG91Y2hFbmQnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b3BQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IDAsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgICByZWFsV2lkdGg6IDAsXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsQXJlYSA9IHtcbiAgICAgICAgICAgIHJlZnJlc2g6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsQm90dG9tOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxZVG86IChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsWVRvKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsUmlnaHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJpZ2h0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsWFRvOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFhUbyhwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICB0aGlzLmV2bnRzUHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICBjbGllbnRYOiAwLFxuICAgICAgICAgICAgY2xpZW50WTogMCxcbiAgICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUgPSB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldENoaWxkQ29udGV4dCgpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2Nyb2xsQXJlYTogdGhpcy5zY3JvbGxBcmVhXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50V2luZG93KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmVIZWlnaHRQeCA9IGxpbmVIZWlnaHQoZmluZERPTU5vZGUodGhpcy5jb250ZW50KSk7XG4gICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5jb250ZW50V2luZG93KXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge2NoaWxkcmVuLCBjbGFzc05hbWUsIGNvbnRlbnRDbGFzc05hbWUsIG93bmVyRG9jdW1lbnR9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgd2l0aE1vdGlvbiA9IHRoaXMucHJvcHMuc21vb3RoU2Nyb2xsaW5nICYmIFxuICAgICAgICAgICAgKHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLndoZWVsIHx8IHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLmFwaSB8fCB0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy50b3VjaEVuZCk7XG5cbiAgICAgICAgbGV0IHNjcm9sbGJhclkgPSB0aGlzLmNhblNjcm9sbFkoKT8gKFxuICAgICAgICAgICAgPFNjcm9sbEJhclxuXHRcdFx0XHRvd25lckRvY3VtZW50PXtvd25lckRvY3VtZW50fVxuICAgICAgICAgICAgICAgIHJlYWxTaXplPXt0aGlzLnN0YXRlLnJlYWxIZWlnaHR9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUudG9wUG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLmhhbmRsZVNjcm9sbGJhck1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNjcm9sbGJhcllQb3NpdGlvbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLnZlcnRpY2FsQ29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyU3R5bGU9e3RoaXMucHJvcHMudmVydGljYWxTY3JvbGxiYXJTdHlsZX1cbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGxpbmc9e3dpdGhNb3Rpb259XG4gICAgICAgICAgICAgICAgbWluU2Nyb2xsU2l6ZT17dGhpcy5wcm9wcy5taW5TY3JvbGxTaXplfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ2ZXJ0aWNhbFwiLz5cbiAgICAgICAgKTogbnVsbDtcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyWCA9IHRoaXMuY2FuU2Nyb2xsWCgpPyAoXG4gICAgICAgICAgICA8U2Nyb2xsQmFyXG5cdFx0XHRcdG93bmVyRG9jdW1lbnQ9e293bmVyRG9jdW1lbnR9XG4gICAgICAgICAgICAgICAgcmVhbFNpemU9e3RoaXMuc3RhdGUucmVhbFdpZHRofVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNpemU9e3RoaXMuc3RhdGUuY29udGFpbmVyV2lkdGh9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUubGVmdFBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT17dGhpcy5wcm9wcy5ob3Jpem9udGFsQ29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyU3R5bGU9e3RoaXMucHJvcHMuaG9yaXpvbnRhbFNjcm9sbGJhclN0eWxlfVxuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbGluZz17d2l0aE1vdGlvbn1cbiAgICAgICAgICAgICAgICBtaW5TY3JvbGxTaXplPXt0aGlzLnByb3BzLm1pblNjcm9sbFNpemV9XG4gICAgICAgICAgICAgICAgdHlwZT1cImhvcml6b250YWxcIi8+XG4gICAgICAgICk6IG51bGw7XG5cbiAgICAgICAgaWYodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKTtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm5BYm91dEVsZW1lbnRDaGlsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzZXMgPSAnc2Nyb2xsYXJlYSAnICsgKGNsYXNzTmFtZSB8fCAnJyk7XG4gICAgICAgIGxldCBjb250ZW50Q2xhc3NlcyA9ICdzY3JvbGxhcmVhLWNvbnRlbnQgJyArIChjb250ZW50Q2xhc3NOYW1lIHx8ICcnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZW50U3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC10aGlzLnN0YXRlLnRvcFBvc2l0aW9uLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLXRoaXMuc3RhdGUubGVmdFBvc2l0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzcHJpbmdpZmllZENvbnRlbnRTdHlsZSA9IHdpdGhNb3Rpb24gPyBtb2RpZnlPYmpWYWx1ZXMoY29udGVudFN0eWxlLCB4ID0+IHNwcmluZyh4KSkgOiBjb250ZW50U3R5bGU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdGlvbiBzdHlsZT17ey4uLnRoaXMucHJvcHMuY29udGVudFN0eWxlLCAuLi5zcHJpbmdpZmllZENvbnRlbnRTdHlsZX19PlxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt4ID0+IHRoaXMud3JhcHBlciA9IHh9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9e2NsYXNzZXN9IG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17eCA9PiB0aGlzLmNvbnRlbnQgPSB4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJZfVxuICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJYfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Nb3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2V0U3RhdGVGcm9tRXZlbnQobmV3U3RhdGUsIGV2ZW50VHlwZSl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMub25TY3JvbGwpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNjcm9sbChuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4ubmV3U3RhdGUsIGV2ZW50VHlwZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoU3RhcnQoZSl7XG4gICAgICAgIGxldCB7dG91Y2hlc30gPSBlO1xuICAgICAgICBpZih0b3VjaGVzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gdG91Y2hlc1swXTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoTW92ZShlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHt0b3VjaGVzfSA9IGU7XG4gICAgICAgIGlmKHRvdWNoZXMubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSB0b3VjaGVzWzBdO1xuXG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLmNsaWVudFkgLSBjbGllbnRZO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRYIC0gY2xpZW50WDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyxcbiAgICAgICAgICAgICAgICBkZWx0YVksXG4gICAgICAgICAgICAgICAgZGVsdGFYLFxuICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5jb21wb3NlTmV3U3RhdGUoLWRlbHRhWCwgLWRlbHRhWSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hFbmQoZSl7XG4gICAgICAgIGxldCB7ZGVsdGFYOiBsYXN0RGVsdGFYLCBkZWx0YVk6IGxhc3REZWx0YVksIHRpbWVzdGFtcDogbGFzdFRpbWVzdGFtcH0gPSB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXM7ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKERhdGUubm93KCkgLSBsYXN0VGltZXN0YW1wIDwgMjAwKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5jb21wb3NlTmV3U3RhdGUoLWxhc3REZWx0YVggKiAxMCwgLWxhc3REZWx0YVkgKiAxMCksIGV2ZW50VHlwZXMudG91Y2hFbmQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICBkZWx0YVk6IDAsXG4gICAgICAgICAgICBkZWx0YVg6IDBcbiAgICAgICAgfTsgICAgICBcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlU2Nyb2xsYmFyTW92ZShkZWx0YVksIGRlbHRhWCl7XG4gICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSk7ICAgXG4gICAgfVxuICAgIFxuICAgIGhhbmRsZVNjcm9sbGJhclhQb3NpdGlvbkNoYW5nZShwb3NpdGlvbil7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKHBvc2l0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgaGFuZGxlU2Nyb2xsYmFyWVBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5zY3JvbGxZVG8ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZVdoZWVsKGUpe1xuICAgICAgICBsZXQgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGxldCBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3dhcFdoZWVsQXhlcyl7XG4gICAgICAgICAgICBbZGVsdGFZLCBkZWx0YVhdID0gW2RlbHRhWCwgZGVsdGFZXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFdoZWVsRXZlbnQuZGVsdGFNb2RlIGNhbiBkaWZmZXIgYmV0d2VlbiBicm93c2VycyBhbmQgbXVzdCBiZSBub3JtYWxpemVkXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAwOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gcGl4ZWxzXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAxOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gbGluZXNcbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQvZGVsdGFNb2RlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgIGRlbHRhWSA9IGRlbHRhWSAqIHRoaXMubGluZUhlaWdodFB4O1xuICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogdGhpcy5saW5lSGVpZ2h0UHg7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLnByb3BzLnNwZWVkO1xuICAgICAgICBkZWx0YVggPSBkZWx0YVggKiB0aGlzLnByb3BzLnNwZWVkO1xuXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVgsIC1kZWx0YVkpO1xuXG4gICAgICAgIGlmKChuZXdTdGF0ZS50b3BQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLnRvcFBvc2l0aW9uICE9PSBuZXdTdGF0ZS50b3BQb3NpdGlvbikgfHxcbiAgICAgICAgICAgKG5ld1N0YXRlLmxlZnRQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSwgZXZlbnRUeXBlcy53aGVlbCk7XG4gICAgfVxuXG4gICAgaGFuZGxlV2luZG93UmVzaXplKCl7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKXtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkpe1xuICAgICAgICAgICAgbmV3U3RhdGUudG9wUG9zaXRpb24gPSB0aGlzLmNvbXB1dGVUb3BQb3NpdGlvbihkZWx0YVksIG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZUxlZnRQb3NpdGlvbihkZWx0YVgsIG5ld1N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICBjb21wdXRlVG9wUG9zaXRpb24oZGVsdGFZLCBzaXplcyl7XG4gICAgICAgIGxldCBuZXdUb3BQb3NpdGlvbiA9IHRoaXMuc3RhdGUudG9wUG9zaXRpb24gLSBkZWx0YVk7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUxlZnRQb3NpdGlvbihkZWx0YVgsIHNpemVzKXtcbiAgICAgICAgbGV0IG5ld0xlZnRQb3NpdGlvbiA9IHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uIC0gZGVsdGFYO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuICAgIFxuICAgIG5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcyl7ICAgIFxuICAgICAgICBpZihuZXdUb3BQb3NpdGlvbiA+IHNpemVzLnJlYWxIZWlnaHQgLSBzaXplcy5jb250YWluZXJIZWlnaHQpe1xuICAgICAgICAgICAgbmV3VG9wUG9zaXRpb24gPSBzaXplcy5yZWFsSGVpZ2h0IC0gc2l6ZXMuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmKG5ld1RvcFBvc2l0aW9uIDwgMCl7XG4gICAgICAgICAgICBuZXdUb3BQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RvcFBvc2l0aW9uO1xuICAgIH1cbiAgICBcbiAgICBub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyl7XG4gICAgICAgIGlmKG5ld0xlZnRQb3NpdGlvbiA+IHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoKXtcbiAgICAgICAgICAgIG5ld0xlZnRQb3NpdGlvbiA9IHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYobmV3TGVmdFBvc2l0aW9uIDwgMCl7XG4gICAgICAgICAgICBuZXdMZWZ0UG9zaXRpb24gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0xlZnRQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBjb21wdXRlU2l6ZXMoKXtcbiAgICAgICAgbGV0IHJlYWxIZWlnaHQgPSB0aGlzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IHJlYWxXaWR0aCA9IHRoaXMuY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFsSGVpZ2h0OiByZWFsSGVpZ2h0LFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0OiBjb250YWluZXJIZWlnaHQsXG4gICAgICAgICAgICByZWFsV2lkdGg6IHJlYWxXaWR0aCxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBjb250YWluZXJXaWR0aFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFNpemVzVG9TdGF0ZSgpe1xuICAgICAgICBsZXQgc2l6ZXMgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgICAgICBpZihzaXplcy5yZWFsSGVpZ2h0ICE9PSB0aGlzLnN0YXRlLnJlYWxIZWlnaHQgfHwgc2l6ZXMucmVhbFdpZHRoICE9PSB0aGlzLnN0YXRlLnJlYWxXaWR0aCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuZ2V0TW9kaWZpZWRQb3NpdGlvbnNJZk5lZWRlZChzaXplcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9wKCl7XG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKDApO1xuICAgIH1cblxuICAgIHNjcm9sbEJvdHRvbSgpe1xuICAgICAgICB0aGlzLnNjcm9sbFlUbygodGhpcy5zdGF0ZS5yZWFsSGVpZ2h0IC0gdGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHQpKTtcbiAgICB9XG4gICAgXG4gICAgc2Nyb2xsTGVmdCgpe1xuICAgICAgICB0aGlzLnNjcm9sbFhUbygwKTtcbiAgICB9XG5cbiAgICBzY3JvbGxSaWdodCgpe1xuICAgICAgICB0aGlzLnNjcm9sbFhUbygodGhpcy5zdGF0ZS5yZWFsV2lkdGggLSB0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRoKSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsWVRvKHRvcFBvc2l0aW9uKXtcbiAgICAgICAgaWYodGhpcy5jYW5TY3JvbGxZKCkpe1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemVUb3BQb3NpdGlvbih0b3BQb3NpdGlvbiwgdGhpcy5jb21wdXRlU2l6ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHt0b3BQb3NpdGlvbjogcG9zaXRpb259LCBldmVudFR5cGVzLmFwaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2Nyb2xsWFRvKGxlZnRQb3NpdGlvbil7XG4gICAgICAgIGlmKHRoaXMuY2FuU2Nyb2xsWCgpKXtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplTGVmdFBvc2l0aW9uKGxlZnRQb3NpdGlvbiwgdGhpcy5jb21wdXRlU2l6ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHtsZWZ0UG9zaXRpb246IHBvc2l0aW9ufSwgZXZlbnRUeXBlcy5hcGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FuU2Nyb2xsWShzdGF0ZSA9IHRoaXMuc3RhdGUpe1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZVkgPSBzdGF0ZS5yZWFsSGVpZ2h0ID4gc3RhdGUuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVkgJiYgdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBjYW5TY3JvbGxYKHN0YXRlID0gdGhpcy5zdGF0ZSl7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlWCA9IHN0YXRlLnJlYWxXaWR0aCA+IHN0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xuICAgIH1cblxuICAgIGdldE1vZGlmaWVkUG9zaXRpb25zSWZOZWVkZWQobmV3U3RhdGUpe1xuICAgICAgICBsZXQgYm90dG9tUG9zaXRpb24gPSBuZXdTdGF0ZS5yZWFsSGVpZ2h0IC0gbmV3U3RhdGUuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBpZih0aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jYW5TY3JvbGxZKG5ld1N0YXRlKSA/IHBvc2l0aXZlT3JaZXJvKGJvdHRvbVBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmlnaHRQb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxXaWR0aCAtIG5ld1N0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICBpZih0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiA+PSByaWdodFBvc2l0aW9uKXtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhyaWdodFBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxufVxuXG5TY3JvbGxBcmVhLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHNjcm9sbEFyZWE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cblNjcm9sbEFyZWEucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzcGVlZDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250ZW50Q2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRlbnRTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2ZXJ0aWNhbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdmVydGljYWxDb250YWluZXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2ZXJ0aWNhbFNjcm9sbGJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGhvcml6b250YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGhvcml6b250YWxDb250YWluZXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3Jpem9udGFsU2Nyb2xsYmFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgb25TY3JvbGw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNvbnRlbnRXaW5kb3c6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgb3duZXJEb2N1bWVudDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzbW9vdGhTY3JvbGxpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG1pblNjcm9sbFNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgc3dhcFdoZWVsQXhlczogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cblNjcm9sbEFyZWEuZGVmYXVsdFByb3BzID0ge1xuICAgIHNwZWVkOiAxLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBzd2FwV2hlZWxBeGVzOiBmYWxzZSxcbiAgICBjb250ZW50V2luZG93OiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgPyB3aW5kb3cgOiB1bmRlZmluZWQsXG4gICAgb3duZXJEb2N1bWVudDogKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIikgPyBkb2N1bWVudCA6IHVuZGVmaW5lZFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL1Njcm9sbEFyZWEuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcbmltcG9ydCB7bW9kaWZ5T2JqVmFsdWVzfSBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgU2Nyb2xsQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5jYWxjdWxhdGVTdGF0ZShwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3U3RhdGUucG9zaXRpb24sXG4gICAgICAgICAgICBzY3JvbGxTaXplOiBuZXdTdGF0ZS5zY3JvbGxTaXplLFxuICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICBsYXN0Q2xpZW50UG9zaXRpb246IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZUZvclZlcnRpY2FsLmJpbmQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlRm9ySG9yaXpvbnRhbC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwID0gdGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuY2FsY3VsYXRlU3RhdGUobmV4dFByb3BzKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVGcmFjdGlvbmFsUG9zaXRpb24ocmVhbENvbnRlbnRTaXplLCBjb250YWluZXJTaXplLCBjb250ZW50UG9zaXRpb24pe1xuICAgICAgICBsZXQgcmVsYXRpdmVTaXplID0gcmVhbENvbnRlbnRTaXplIC0gY29udGFpbmVyU2l6ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAxIC0gKChyZWxhdGl2ZVNpemUgLSBjb250ZW50UG9zaXRpb24pIC8gcmVsYXRpdmVTaXplKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTdGF0ZShwcm9wcyl7XG4gICAgICAgIGxldCBmcmFjdGlvbmFsUG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZUZyYWN0aW9uYWxQb3NpdGlvbihwcm9wcy5yZWFsU2l6ZSwgcHJvcHMuY29udGFpbmVyU2l6ZSwgcHJvcHMucG9zaXRpb24pOyBcbiAgICAgICAgbGV0IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPSBwcm9wcy5jb250YWluZXJTaXplICogcHJvcHMuY29udGFpbmVyU2l6ZSAvIHByb3BzLnJlYWxTaXplO1xuICAgICAgICBsZXQgc2Nyb2xsU2l6ZSA9IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPCBwcm9wcy5taW5TY3JvbGxTaXplID8gcHJvcHMubWluU2Nyb2xsU2l6ZSA6IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemU7XG5cbiAgICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gKHByb3BzLmNvbnRhaW5lclNpemUgLSBzY3JvbGxTaXplKSAqIGZyYWN0aW9uYWxQb3NpdGlvbjsgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JvbGxTaXplOiBzY3JvbGxTaXplLFxuICAgICAgICAgICAgcG9zaXRpb246IE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7c21vb3RoU2Nyb2xsaW5nLCBpc0RyYWdnaW5nLCB0eXBlLCBzY3JvbGxiYXJTdHlsZSwgY29udGFpbmVyU3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGlzVm9yaXppb250YWwgPSB0eXBlID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIGxldCBpc1ZlcnRpY2FsID0gdHlwZSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgICAgbGV0IHNjcm9sbFN0eWxlcyA9IHRoaXMuY3JlYXRlU2Nyb2xsU3R5bGVzKCk7XG4gICAgICAgIGxldCBzcHJpbmdpZmllZFNjcm9sbFN0eWxlcyA9IHNtb290aFNjcm9sbGluZyA/IG1vZGlmeU9ialZhbHVlcyhzY3JvbGxTdHlsZXMsIHggPT4gc3ByaW5nKHgpKSA6IHNjcm9sbFN0eWxlcztcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyQ2xhc3NlcyA9IGBzY3JvbGxiYXItY29udGFpbmVyICR7aXNEcmFnZ2luZyA/ICdhY3RpdmUnIDogJyd9ICR7aXNWb3JpemlvbnRhbCA/ICdob3Jpem9udGFsJyA6ICcnfSAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YDsgXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb3Rpb24gc3R5bGU9e3suLi5zY3JvbGxiYXJTdHlsZSwgLi4uc3ByaW5naWZpZWRTY3JvbGxTdHlsZXN9fT5cbiAgICAgICAgICAgICAgICB7IHN0eWxlID0+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2Nyb2xsYmFyQ2xhc3Nlc30gXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlU2Nyb2xsQmFyQ29udGFpbmVyQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IHggPT4geyB0aGlzLnNjcm9sbGJhckNvbnRhaW5lciA9IHh9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Nb3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGhhbmRsZVNjcm9sbEJhckNvbnRhaW5lckNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgXG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gdGhpcy5jb21wdXRlTXVsdGlwbGllcigpO1xuICAgICAgICBsZXQgY2xpZW50UG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IGUuY2xpZW50WSA6IGUuY2xpZW50WDtcbiAgICAgICAgbGV0IHsgdG9wLCBsZWZ0IH0gPSB0aGlzLnNjcm9sbGJhckNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IGNsaWVudFNjcm9sbFBvc2l0aW9uID0gdGhpcy5pc1ZlcnRpY2FsKCkgPyB0b3AgOiBsZWZ0OyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgcG9zaXRpb24gPSBjbGllbnRQb3NpdGlvbiAtIGNsaWVudFNjcm9sbFBvc2l0aW9uO1xuICAgICAgICBsZXQgcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSA9IHRoaXMucHJvcHMuY29udGFpbmVyU2l6ZSAqIHRoaXMucHJvcHMuY29udGFpbmVyU2l6ZSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RyYWdnaW5nOiB0cnVlLCBsYXN0Q2xpZW50UG9zaXRpb246IGNsaWVudFBvc2l0aW9uIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uUG9zaXRpb25DaGFuZ2UoKHBvc2l0aW9uIC0gcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSAvIDIpIC8gbXVsdGlwbGllcik7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VNb3ZlRm9ySG9yaXpvbnRhbChlKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzRHJhZ2dpbmcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRYIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoMCwgZGVsdGFYIC8gbXVsdGlwbGllcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmVGb3JWZXJ0aWNhbChlKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzRHJhZ2dpbmcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRZO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRZIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoZGVsdGFZIC8gbXVsdGlwbGllciwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IGxhc3RDbGllbnRQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gZS5jbGllbnRZOiBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IHRydWUsIGxhc3RDbGllbnRQb3NpdGlvbjogbGFzdENsaWVudFBvc2l0aW9uIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlVXAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2Nyb2xsU3R5bGVzKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5zY3JvbGxTaXplLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5zdGF0ZS5wb3NpdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLnBvc2l0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbXB1dGVNdWx0aXBsaWVyKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5jb250YWluZXJTaXplKSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG4gICAgfVxuICAgIFxuICAgIGlzVmVydGljYWwoKXtcbiAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50eXBlID09PSAndmVydGljYWwnO1xuICAgIH1cbn1cblxuU2Nyb2xsQmFyLnByb3BUeXBlcyA9IHtcbiAgICBvbk1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uUG9zaXRpb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHJlYWxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbnRhaW5lclNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgcG9zaXRpb246IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2Nyb2xsYmFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddKSxcbiAgICBvd25lckRvY3VtZW50OiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICAgIHNtb290aFNjcm9sbGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgbWluU2Nyb2xsU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxuU2Nyb2xsQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlIDogJ3ZlcnRpY2FsJyxcbiAgICBzbW9vdGhTY3JvbGxpbmc6IGZhbHNlXG59O1xuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQmFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvU2Nyb2xsYmFyLmpzeFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqWydkZWZhdWx0J10gOiBvYmo7IH1cblxudmFyIF9Nb3Rpb24gPSByZXF1aXJlKCcuL01vdGlvbicpO1xuXG5leHBvcnRzLk1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShfTW90aW9uKTtcblxudmFyIF9TdGFnZ2VyZWRNb3Rpb24gPSByZXF1aXJlKCcuL1N0YWdnZXJlZE1vdGlvbicpO1xuXG5leHBvcnRzLlN0YWdnZXJlZE1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShfU3RhZ2dlcmVkTW90aW9uKTtcblxudmFyIF9UcmFuc2l0aW9uTW90aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uTW90aW9uJyk7XG5cbmV4cG9ydHMuVHJhbnNpdGlvbk1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShfVHJhbnNpdGlvbk1vdGlvbik7XG5cbnZhciBfc3ByaW5nID0gcmVxdWlyZSgnLi9zcHJpbmcnKTtcblxuZXhwb3J0cy5zcHJpbmcgPSBfaW50ZXJvcFJlcXVpcmUoX3NwcmluZyk7XG5cbnZhciBfcHJlc2V0cyA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG5leHBvcnRzLnByZXNldHMgPSBfaW50ZXJvcFJlcXVpcmUoX3ByZXNldHMpO1xuXG4vLyBkZXByZWNhdGVkLCBkdW1teSB3YXJuaW5nIGZ1bmN0aW9uXG5cbnZhciBfcmVvcmRlcktleXMgPSByZXF1aXJlKCcuL3Jlb3JkZXJLZXlzJyk7XG5cbmV4cG9ydHMucmVvcmRlcktleXMgPSBfaW50ZXJvcFJlcXVpcmUoX3Jlb3JkZXJLZXlzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX21hcFRvWmVybyA9IHJlcXVpcmUoJy4vbWFwVG9aZXJvJyk7XG5cbnZhciBfbWFwVG9aZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRvWmVybyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBfc3RlcHBlcjMgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIzKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgbXNQZXJGcmFtZSA9IDEwMDAgLyA2MDtcblxudmFyIE1vdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTW90aW9uJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgZGVmYXVsdFN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdE9mKF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyKSxcbiAgICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3RPZihfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsIF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XSkpLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVzdDogX3JlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlZmF1bHRTdHlsZSA9IF9wcm9wcy5kZWZhdWx0U3R5bGU7XG4gICAgdmFyIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgdmFyIGN1cnJlbnRTdHlsZSA9IGRlZmF1bHRTdHlsZSB8fCBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXShzdHlsZSk7XG4gICAgdmFyIGN1cnJlbnRWZWxvY2l0eSA9IF9tYXBUb1plcm8yWydkZWZhdWx0J10oY3VycmVudFN0eWxlKTtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFN0eWxlOiBjdXJyZW50U3R5bGUsXG4gICAgICBjdXJyZW50VmVsb2NpdHk6IGN1cnJlbnRWZWxvY2l0eSxcbiAgICAgIGxhc3RJZGVhbFN0eWxlOiBjdXJyZW50U3R5bGUsXG4gICAgICBsYXN0SWRlYWxWZWxvY2l0eTogY3VycmVudFZlbG9jaXR5XG4gICAgfTtcbiAgfSxcblxuICB3YXNBbmltYXRpbmc6IGZhbHNlLFxuICBhbmltYXRpb25JRDogbnVsbCxcbiAgcHJldlRpbWU6IDAsXG4gIGFjY3VtdWxhdGVkVGltZTogMCxcbiAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGN1cnJlbnRTdHlsZSdzIHZhbHVlIGlzIHN0YWxlOiBpZiBwcm9wcyBpcyBpbW1lZGlhdGVseVxuICAvLyBjaGFuZ2VkIGZyb20gMCB0byA0MDAgdG8gc3ByaW5nKDApIGFnYWluLCB0aGUgYXN5bmMgY3VycmVudFN0eWxlIGlzIHN0aWxsXG4gIC8vIGF0IDAgKGRpZG4ndCBoYXZlIHRpbWUgdG8gdGljayBhbmQgaW50ZXJwb2xhdGUgZXZlbiBvbmNlKS4gSWYgd2UgbmFpdmVseVxuICAvLyBjb21wYXJlIGN1cnJlbnRTdHlsZSB3aXRoIGRlc3RWYWwgaXQnbGwgYmUgMCA9PT0gMCAobm8gYW5pbWF0aW9uLCBzdG9wKS5cbiAgLy8gSW4gcmVhbGl0eSBjdXJyZW50U3R5bGUgc2hvdWxkIGJlIDQwMFxuICB1bnJlYWRQcm9wU3R5bGU6IG51bGwsXG4gIC8vIGFmdGVyIGNoZWNraW5nIGZvciB1bnJlYWRQcm9wU3R5bGUgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuICAvLyBub24taW50ZXJwb2xhdGluZyB2YWx1ZXMgKHRob3NlIHRoYXQgYXJlIGEgbnVtYmVyLCB3aXRob3V0IGEgc3ByaW5nXG4gIC8vIGNvbmZpZylcbiAgY2xlYXJVbnJlYWRQcm9wU3R5bGU6IGZ1bmN0aW9uIGNsZWFyVW5yZWFkUHJvcFN0eWxlKGRlc3RTdHlsZSkge1xuICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBjdXJyZW50U3R5bGUgPSBfc3RhdGUuY3VycmVudFN0eWxlO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSBfc3RhdGUuY3VycmVudFZlbG9jaXR5O1xuICAgIHZhciBsYXN0SWRlYWxTdHlsZSA9IF9zdGF0ZS5sYXN0SWRlYWxTdHlsZTtcbiAgICB2YXIgbGFzdElkZWFsVmVsb2NpdHkgPSBfc3RhdGUubGFzdElkZWFsVmVsb2NpdHk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGVzdFN0eWxlKSB7XG4gICAgICBpZiAoIWRlc3RTdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGVWYWx1ZSA9IGRlc3RTdHlsZVtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoIWRpcnR5KSB7XG4gICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgIGN1cnJlbnRTdHlsZSA9IF9leHRlbmRzKHt9LCBjdXJyZW50U3R5bGUpO1xuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0eSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdHkpO1xuICAgICAgICAgIGxhc3RJZGVhbFN0eWxlID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFN0eWxlKTtcbiAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0eSA9IF9leHRlbmRzKHt9LCBsYXN0SWRlYWxWZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgIGN1cnJlbnRWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgbGFzdElkZWFsU3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgIGxhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJ0eSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdHlsZTogY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHk6IGN1cnJlbnRWZWxvY2l0eSwgbGFzdElkZWFsU3R5bGU6IGxhc3RJZGVhbFN0eWxlLCBsYXN0SWRlYWxWZWxvY2l0eTogbGFzdElkZWFsVmVsb2NpdHkgfSk7XG4gICAgfVxuICB9LFxuXG4gIHN0YXJ0QW5pbWF0aW9uSWZOZWNlc3Nhcnk6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIFRPRE86IHdoZW4gY29uZmlnIGlzIHthOiAxMH0gYW5kIGRlc3QgaXMge2E6IDEwfSBkbyB3ZSByYWYgb25jZSBhbmRcbiAgICAvLyBjYWxsIGNiPyBObywgb3RoZXJ3aXNlIGFjY2lkZW50YWwgcGFyZW50IHJlcmVuZGVyIGNhdXNlcyBjYiB0cmlnZ2VyXG4gICAgdGhpcy5hbmltYXRpb25JRCA9IF9yYWYyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgICAgdmFyIHByb3BzU3R5bGUgPSBfdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgIGlmIChfc2hvdWxkU3RvcEFuaW1hdGlvbjJbJ2RlZmF1bHQnXShfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGUsIHByb3BzU3R5bGUsIF90aGlzLnN0YXRlLmN1cnJlbnRWZWxvY2l0eSkpIHtcbiAgICAgICAgaWYgKF90aGlzLndhc0FuaW1hdGluZyAmJiBfdGhpcy5wcm9wcy5vblJlc3QpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblJlc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICBfdGhpcy53YXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy53YXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50VGltZSAtIF90aGlzLnByZXZUaW1lO1xuICAgICAgX3RoaXMucHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IF90aGlzLmFjY3VtdWxhdGVkVGltZSArIHRpbWVEZWx0YTtcbiAgICAgIC8vIG1vcmUgdGhhbiAxMCBmcmFtZXM/IHByb2xseSBzd2l0Y2hlZCBicm93c2VyIHRhYi4gUmVzdGFydFxuICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA+IG1zUGVyRnJhbWUgKiAxMCkge1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID09PSAwKSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRGcmFtZUNvbXBsZXRpb24gPSAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKSAqIG1zUGVyRnJhbWUpIC8gbXNQZXJGcmFtZTtcbiAgICAgIHZhciBmcmFtZXNUb0NhdGNoVXAgPSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpO1xuXG4gICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGUgPSB7fTtcbiAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eSA9IHt9O1xuICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IHt9O1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0eSA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHNTdHlsZSkge1xuICAgICAgICBpZiAoIXByb3BzU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlVmFsdWUgPSBwcm9wc1N0eWxlW2tleV07XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVba2V5XTtcbiAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXR5W2tleV07XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcmFtZXNUb0NhdGNoVXA7IGkrKykge1xuICAgICAgICAgICAgdmFyIF9zdGVwcGVyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBfc3RlcHBlclswXTtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfc3RlcHBlclsxXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0ZXBwZXIyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICB2YXIgbmV4dElkZWFsWCA9IF9zdGVwcGVyMlswXTtcbiAgICAgICAgICB2YXIgbmV4dElkZWFsViA9IF9zdGVwcGVyMlsxXTtcblxuICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSArIChuZXh0SWRlYWxYIC0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSArIChuZXh0SWRlYWxWIC0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlO1xuICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgIC8vIHRoZSBhbW91bnQgd2UncmUgbG9vcGVkIG92ZXIgYWJvdmVcbiAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSAtPSBmcmFtZXNUb0NhdGNoVXAgKiBtc1BlckZyYW1lO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRTdHlsZTogbmV3Q3VycmVudFN0eWxlLFxuICAgICAgICBjdXJyZW50VmVsb2NpdHk6IG5ld0N1cnJlbnRWZWxvY2l0eSxcbiAgICAgICAgbGFzdElkZWFsU3R5bGU6IG5ld0xhc3RJZGVhbFN0eWxlLFxuICAgICAgICBsYXN0SWRlYWxWZWxvY2l0eTogbmV3TGFzdElkZWFsVmVsb2NpdHlcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy51bnJlYWRQcm9wU3R5bGUgPSBudWxsO1xuXG4gICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJldlRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgaWYgKHRoaXMudW5yZWFkUHJvcFN0eWxlICE9IG51bGwpIHtcbiAgICAgIC8vIHByZXZpb3VzIHByb3BzIGhhdmVuJ3QgaGFkIHRoZSBjaGFuY2UgdG8gYmUgc2V0IHlldDsgc2V0IHRoZW0gaGVyZVxuICAgICAgdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSh0aGlzLnVucmVhZFByb3BTdHlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEICE9IG51bGwpIHtcbiAgICAgIF9yYWYyWydkZWZhdWx0J10uY2FuY2VsKHRoaXMuYW5pbWF0aW9uSUQpO1xuICAgICAgdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZSk7XG4gICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNb3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL01vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuXG4vLyBjdXJyZW50bHkgdXNlZCB0byBpbml0aWF0ZSB0aGUgdmVsb2NpdHkgc3R5bGUgb2JqZWN0IHRvIDBcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1hcFRvWmVybztcblxuZnVuY3Rpb24gbWFwVG9aZXJvKG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldFtrZXldID0gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9tYXBUb1plcm8uanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcbi8vIHR1cm4ge3g6IHt2YWw6IDEsIHN0aWZmbmVzczogMSwgZGFtcGluZzogMn0sIHk6IDJ9IGdlbmVyYXRlZCBieVxuLy8gYHt4OiBzcHJpbmcoMSwge3N0aWZmbmVzczogMSwgZGFtcGluZzogMn0pLCB5OiAyfWAgaW50byB7eDogMSwgeTogMn1cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3RyaXBTdHlsZTtcblxuZnVuY3Rpb24gc3RyaXBTdHlsZShzdHlsZSkge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuICAgIGlmICghc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldFtrZXldID0gdHlwZW9mIHN0eWxlW2tleV0gPT09ICdudW1iZXInID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlxuXG4vLyBzdGVwcGVyIGlzIHVzZWQgYSBsb3QuIFNhdmVzIGFsbG9jYXRpb24gdG8gcmV0dXJuIHRoZSBzYW1lIGFycmF5IHdyYXBwZXIuXG4vLyBUaGlzIGlzIGZpbmUgYW5kIGRhbmdlci1mcmVlIGFnYWluc3QgbXV0YXRpb25zIGJlY2F1c2UgdGhlIGNhbGxzaXRlXG4vLyBpbW1lZGlhdGVseSBkZXN0cnVjdHVyZXMgaXQgYW5kIGdldHMgdGhlIG51bWJlcnMgaW5zaWRlIHdpdGhvdXQgcGFzc2luZyB0aGVcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdGVwcGVyO1xuXG52YXIgcmV1c2VkVHVwbGUgPSBbXTtcblxuZnVuY3Rpb24gc3RlcHBlcihzZWNvbmRQZXJGcmFtZSwgeCwgdiwgZGVzdFgsIGssIGIsIHByZWNpc2lvbikge1xuICAvLyBTcHJpbmcgc3RpZmZuZXNzLCBpbiBrZyAvIHNeMlxuXG4gIC8vIGZvciBhbmltYXRpb25zLCBkZXN0WCBpcyByZWFsbHkgc3ByaW5nIGxlbmd0aCAoc3ByaW5nIGF0IHJlc3QpLiBpbml0aWFsXG4gIC8vIHBvc2l0aW9uIGlzIGNvbnNpZGVyZWQgYXMgdGhlIHN0cmV0Y2hlZC9jb21wcmVzc2VkIHBvc2l0aW9uIG9mIGEgc3ByaW5nXG4gIHZhciBGc3ByaW5nID0gLWsgKiAoeCAtIGRlc3RYKTtcblxuICAvLyBEYW1waW5nLCBpbiBrZyAvIHNcbiAgdmFyIEZkYW1wZXIgPSAtYiAqIHY7XG5cbiAgLy8gdXN1YWxseSB3ZSBwdXQgbWFzcyBoZXJlLCBidXQgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcywgc3BlY2lmeWluZyBtYXNzIGlzIGFcbiAgLy8gYml0IHJlZHVuZGFudC4geW91IGNvdWxkIHNpbXBseSBhZGp1c3QgayBhbmQgYiBhY2NvcmRpbmdseVxuICAvLyBsZXQgYSA9IChGc3ByaW5nICsgRmRhbXBlcikgLyBtYXNzO1xuICB2YXIgYSA9IEZzcHJpbmcgKyBGZGFtcGVyO1xuXG4gIHZhciBuZXdWID0gdiArIGEgKiBzZWNvbmRQZXJGcmFtZTtcbiAgdmFyIG5ld1ggPSB4ICsgbmV3ViAqIHNlY29uZFBlckZyYW1lO1xuXG4gIGlmIChNYXRoLmFicyhuZXdWKSA8IHByZWNpc2lvbiAmJiBNYXRoLmFicyhuZXdYIC0gZGVzdFgpIDwgcHJlY2lzaW9uKSB7XG4gICAgcmV1c2VkVHVwbGVbMF0gPSBkZXN0WDtcbiAgICByZXVzZWRUdXBsZVsxXSA9IDA7XG4gICAgcmV0dXJuIHJldXNlZFR1cGxlO1xuICB9XG5cbiAgcmV1c2VkVHVwbGVbMF0gPSBuZXdYO1xuICByZXVzZWRUdXBsZVsxXSA9IG5ld1Y7XG4gIHJldHVybiByZXVzZWRUdXBsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIGFycmF5IHJlZmVyZW5jZSBhcm91bmQuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9zdGVwcGVyLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxufSAoKSlcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXG5cbi8vIHVzYWdlIGFzc3VtcHRpb246IGN1cnJlbnRTdHlsZSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmVuZGVyZWQgYnV0IGl0IHNheXNcbi8vIG5vdGhpbmcgb2Ygd2hldGhlciBjdXJyZW50U3R5bGUgaXMgc3RhbGUgKHNlZSB1bnJlYWRQcm9wU3R5bGUpXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzaG91bGRTdG9wQW5pbWF0aW9uO1xuXG5mdW5jdGlvbiBzaG91bGRTdG9wQW5pbWF0aW9uKGN1cnJlbnRTdHlsZSwgc3R5bGUsIGN1cnJlbnRWZWxvY2l0eSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50VmVsb2NpdHlba2V5XSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVZhbHVlID0gdHlwZW9mIHN0eWxlW2tleV0gPT09ICdudW1iZXInID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICAgIC8vIHN0ZXBwZXIgd2lsbCBoYXZlIGFscmVhZHkgdGFrZW4gY2FyZSBvZiByb3VuZGluZyBwcmVjaXNpb24gZXJyb3JzLCBzb1xuICAgIC8vIHdvbid0IGhhdmUgc3VjaCB0aGluZyBhcyAwLjk5OTkgIT09PSAxXG4gICAgaWYgKGN1cnJlbnRTdHlsZVtrZXldICE9PSBzdHlsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc2hvdWxkU3RvcEFuaW1hdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9tYXBUb1plcm8gPSByZXF1aXJlKCcuL21hcFRvWmVybycpO1xuXG52YXIgX21hcFRvWmVybzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBUb1plcm8pO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxudmFyIF9zdHJpcFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwU3R5bGUpO1xuXG52YXIgX3N0ZXBwZXIzID0gcmVxdWlyZSgnLi9zdGVwcGVyJyk7XG5cbnZhciBfc3RlcHBlcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGVwcGVyMyk7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJmb3JtYW5jZU5vdyk7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4vc2hvdWxkU3RvcEFuaW1hdGlvbicpO1xuXG52YXIgX3Nob3VsZFN0b3BBbmltYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hvdWxkU3RvcEFuaW1hdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbmZ1bmN0aW9uIHNob3VsZFN0b3BBbmltYXRpb25BbGwoY3VycmVudFN0eWxlcywgc3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIV9zaG91bGRTdG9wQW5pbWF0aW9uMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXNbaV0sIHN0eWxlc1tpXSwgY3VycmVudFZlbG9jaXRpZXNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgU3RhZ2dlcmVkTW90aW9uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTdGFnZ2VyZWRNb3Rpb24nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGEgY29uZmlnIGluIGhlcmVcbiAgICBkZWZhdWx0U3R5bGVzOiBfcmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoX3JlYWN0LlByb3BUeXBlcy5vYmplY3RPZihfcmVhY3QuUHJvcFR5cGVzLm51bWJlcikpLFxuICAgIHN0eWxlczogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMuZGVmYXVsdFN0eWxlcztcbiAgICB2YXIgc3R5bGVzID0gX3Byb3BzLnN0eWxlcztcblxuICAgIHZhciBjdXJyZW50U3R5bGVzID0gZGVmYXVsdFN0eWxlcyB8fCBzdHlsZXMoKS5tYXAoX3N0cmlwU3R5bGUyWydkZWZhdWx0J10pO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChjdXJyZW50U3R5bGUpIHtcbiAgICAgIHJldHVybiBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICBjdXJyZW50VmVsb2NpdGllczogY3VycmVudFZlbG9jaXRpZXMsXG4gICAgICBsYXN0SWRlYWxTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllc1xuICAgIH07XG4gIH0sXG5cbiAgYW5pbWF0aW9uSUQ6IG51bGwsXG4gIHByZXZUaW1lOiAwLFxuICBhY2N1bXVsYXRlZFRpbWU6IDAsXG4gIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjdXJyZW50U3R5bGUncyB2YWx1ZSBpcyBzdGFsZTogaWYgcHJvcHMgaXMgaW1tZWRpYXRlbHlcbiAgLy8gY2hhbmdlZCBmcm9tIDAgdG8gNDAwIHRvIHNwcmluZygwKSBhZ2FpbiwgdGhlIGFzeW5jIGN1cnJlbnRTdHlsZSBpcyBzdGlsbFxuICAvLyBhdCAwIChkaWRuJ3QgaGF2ZSB0aW1lIHRvIHRpY2sgYW5kIGludGVycG9sYXRlIGV2ZW4gb25jZSkuIElmIHdlIG5haXZlbHlcbiAgLy8gY29tcGFyZSBjdXJyZW50U3R5bGUgd2l0aCBkZXN0VmFsIGl0J2xsIGJlIDAgPT09IDAgKG5vIGFuaW1hdGlvbiwgc3RvcCkuXG4gIC8vIEluIHJlYWxpdHkgY3VycmVudFN0eWxlIHNob3VsZCBiZSA0MDBcbiAgdW5yZWFkUHJvcFN0eWxlczogbnVsbCxcbiAgLy8gYWZ0ZXIgY2hlY2tpbmcgZm9yIHVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuICAvLyBub24taW50ZXJwb2xhdGluZyB2YWx1ZXMgKHRob3NlIHRoYXQgYXJlIGEgbnVtYmVyLCB3aXRob3V0IGEgc3ByaW5nXG4gIC8vIGNvbmZpZylcbiAgY2xlYXJVbnJlYWRQcm9wU3R5bGU6IGZ1bmN0aW9uIGNsZWFyVW5yZWFkUHJvcFN0eWxlKHVucmVhZFByb3BTdHlsZXMpIHtcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IF9zdGF0ZS5jdXJyZW50U3R5bGVzO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IF9zdGF0ZS5jdXJyZW50VmVsb2NpdGllcztcbiAgICB2YXIgbGFzdElkZWFsU3R5bGVzID0gX3N0YXRlLmxhc3RJZGVhbFN0eWxlcztcbiAgICB2YXIgbGFzdElkZWFsVmVsb2NpdGllcyA9IF9zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0aWVzO1xuXG4gICAgdmFyIHNvbWVEaXJ0eSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5yZWFkUHJvcFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHVucmVhZFByb3BTdHlsZSA9IHVucmVhZFByb3BTdHlsZXNbaV07XG4gICAgICB2YXIgZGlydHkgPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHVucmVhZFByb3BTdHlsZSkge1xuICAgICAgICBpZiAoIXVucmVhZFByb3BTdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHVucmVhZFByb3BTdHlsZVtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgc29tZURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICBsYXN0SWRlYWxTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsU3R5bGVzW2ldKTtcbiAgICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV1ba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgY3VycmVudFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgICAgbGFzdElkZWFsU3R5bGVzW2ldW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc29tZURpcnR5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLCBsYXN0SWRlYWxTdHlsZXM6IGxhc3RJZGVhbFN0eWxlcywgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllcyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeTogZnVuY3Rpb24gc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgIC8vIGNhbGwgY2I/IE5vLCBvdGhlcndpc2UgYWNjaWRlbnRhbCBwYXJlbnQgcmVyZW5kZXIgY2F1c2VzIGNiIHRyaWdnZXJcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gX3JhZjJbJ2RlZmF1bHQnXShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGVzdFN0eWxlcyA9IF90aGlzLnByb3BzLnN0eWxlcyhfdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMpO1xuXG4gICAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgICBpZiAoc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCBkZXN0U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcykpIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBjYW5jZWwgYW5pbWF0aW9uSUQgaGVyZTsgc2hvdWxkbid0IGhhdmUgYW55IGluIGZsaWdodFxuICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICB2YXIgdGltZURlbHRhID0gY3VycmVudFRpbWUgLSBfdGhpcy5wcmV2VGltZTtcbiAgICAgIF90aGlzLnByZXZUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgKyB0aW1lRGVsdGE7XG4gICAgICAvLyBtb3JlIHRoYW4gMTAgZnJhbWVzPyBwcm9sbHkgc3dpdGNoZWQgYnJvd3NlciB0YWIuIFJlc3RhcnRcbiAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPiBtc1BlckZyYW1lICogMTApIHtcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA9PT0gMCkge1xuICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50RnJhbWVDb21wbGV0aW9uID0gKF90aGlzLmFjY3VtdWxhdGVkVGltZSAtIE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSkgKiBtc1BlckZyYW1lKSAvIG1zUGVyRnJhbWU7XG4gICAgICB2YXIgZnJhbWVzVG9DYXRjaFVwID0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKTtcblxuICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlcyA9IFtdO1xuICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXMgPSBbXTtcbiAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gW107XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXN0U3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXN0U3R5bGUgPSBkZXN0U3R5bGVzW2ldO1xuICAgICAgICB2YXIgbmV3Q3VycmVudFN0eWxlID0ge307XG4gICAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlID0ge307XG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eSA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZXN0U3R5bGUpIHtcbiAgICAgICAgICBpZiAoIWRlc3RTdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IGRlc3RTdHlsZVtrZXldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzW2ldW2tleV07XG4gICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnJhbWVzVG9DYXRjaFVwOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIF9zdGVwcGVyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF9zdGVwcGVyWzBdO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gX3N0ZXBwZXJbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc3RlcHBlcjIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgdmFyIG5leHRJZGVhbFggPSBfc3RlcHBlcjJbMF07XG4gICAgICAgICAgICB2YXIgbmV4dElkZWFsViA9IF9zdGVwcGVyMlsxXTtcblxuICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlICsgKG5leHRJZGVhbFggLSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgKyAobmV4dElkZWFsViAtIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IG5ld0N1cnJlbnRTdHlsZTtcbiAgICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBuZXdDdXJyZW50VmVsb2NpdHk7XG4gICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlc1tpXSA9IG5ld0xhc3RJZGVhbFN0eWxlO1xuICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gbmV3TGFzdElkZWFsVmVsb2NpdHk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgIC8vIHRoZSBhbW91bnQgd2UncmUgbG9vcGVkIG92ZXIgYWJvdmVcbiAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSAtPSBmcmFtZXNUb0NhdGNoVXAgKiBtc1BlckZyYW1lO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllcyxcbiAgICAgICAgbGFzdElkZWFsU3R5bGVzOiBuZXdMYXN0SWRlYWxTdHlsZXMsXG4gICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXM6IG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gbnVsbDtcblxuICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCkge1xuICAgICAgLy8gcHJldmlvdXMgcHJvcHMgaGF2ZW4ndCBoYWQgdGhlIGNoYW5jZSB0byBiZSBzZXQgeWV0OyBzZXQgdGhlbSBoZXJlXG4gICAgICB0aGlzLmNsZWFyVW5yZWFkUHJvcFN0eWxlKHRoaXMudW5yZWFkUHJvcFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gcHJvcHMuc3R5bGVzKHRoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEICE9IG51bGwpIHtcbiAgICAgIF9yYWYyWydkZWZhdWx0J10uY2FuY2VsKHRoaXMuYW5pbWF0aW9uSUQpO1xuICAgICAgdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RhZ2dlcmVkTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9TdGFnZ2VyZWRNb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbWFwVG9aZXJvID0gcmVxdWlyZSgnLi9tYXBUb1plcm8nKTtcblxudmFyIF9tYXBUb1plcm8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVG9aZXJvKTtcblxudmFyIF9zdHJpcFN0eWxlID0gcmVxdWlyZSgnLi9zdHJpcFN0eWxlJyk7XG5cbnZhciBfc3RyaXBTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpcFN0eWxlKTtcblxudmFyIF9zdGVwcGVyMyA9IHJlcXVpcmUoJy4vc3RlcHBlcicpO1xuXG52YXIgX3N0ZXBwZXI0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RlcHBlcjMpO1xuXG52YXIgX21lcmdlRGlmZiA9IHJlcXVpcmUoJy4vbWVyZ2VEaWZmJyk7XG5cbnZhciBfbWVyZ2VEaWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlRGlmZik7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJmb3JtYW5jZU5vdyk7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4vc2hvdWxkU3RvcEFuaW1hdGlvbicpO1xuXG52YXIgX3Nob3VsZFN0b3BBbmltYXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hvdWxkU3RvcEFuaW1hdGlvbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbi8vIHRoZSBjaGlsZHJlbiBmdW5jdGlvbiAmIChwb3RlbnRpYWwpIHN0eWxlcyBmdW5jdGlvbiBhc2tzIGFzIHBhcmFtIGFuXG4vLyBBcnJheTxUcmFuc2l0aW9uUGxhaW5TdHlsZT4sIHdoZXJlIGVhY2ggVHJhbnNpdGlvblBsYWluU3R5bGUgaXMgb2YgdGhlIGZvcm1hdFxuLy8ge2tleTogc3RyaW5nLCBkYXRhPzogYW55LCBzdHlsZTogUGxhaW5TdHlsZX0uIEhvd2V2ZXIsIHRoZSB3YXkgd2Uga2VlcFxuLy8gaW50ZXJuYWwgc3RhdGVzIGRvZXNuJ3QgY29udGFpbiBzdWNoIGEgZGF0YSBzdHJ1Y3R1cmUgKGNoZWNrIHRoZSBzdGF0ZSBhbmRcbi8vIFRyYW5zaXRpb25Nb3Rpb25TdGF0ZSkuIFNvIHdoZW4gY2hpbGRyZW4gZnVuY3Rpb24gYW5kIG90aGVycyBhc2sgZm9yIHN1Y2hcbi8vIGRhdGEgd2UgbmVlZCB0byBnZW5lcmF0ZSB0aGVtIG9uIHRoZSBmbHkgYnkgY29tYmluaW5nIG1lcmdlZFByb3BzU3R5bGVzIGFuZFxuLy8gY3VycmVudFN0eWxlcy9sYXN0SWRlYWxTdHlsZXNcbmZ1bmN0aW9uIHJlaHlkcmF0ZVN0eWxlcyhtZXJnZWRQcm9wc1N0eWxlcywgdW5yZWFkUHJvcFN0eWxlcywgcGxhaW5TdHlsZXMpIHtcbiAgaWYgKHVucmVhZFByb3BTdHlsZXMgPT0gbnVsbCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHNTdHlsZXMubWFwKGZ1bmN0aW9uIChtZXJnZWRQcm9wc1N0eWxlLCBpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IG1lcmdlZFByb3BzU3R5bGUua2V5LFxuICAgICAgICBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlLmRhdGEsXG4gICAgICAgIHN0eWxlOiBwbGFpblN0eWxlc1tpXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkUHJvcHNTdHlsZXMubWFwKGZ1bmN0aW9uIChtZXJnZWRQcm9wc1N0eWxlLCBpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdW5yZWFkUHJvcFN0eWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgaWYgKHVucmVhZFByb3BTdHlsZXNbal0ua2V5ID09PSBtZXJnZWRQcm9wc1N0eWxlLmtleSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICBrZXk6IHVucmVhZFByb3BTdHlsZXNbal0ua2V5LFxuICAgICAgICAgIGRhdGE6IHVucmVhZFByb3BTdHlsZXNbal0uZGF0YSxcbiAgICAgICAgICBzdHlsZTogcGxhaW5TdHlsZXNbaV1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB7IGtleTogbWVyZ2VkUHJvcHNTdHlsZS5rZXksIGRhdGE6IG1lcmdlZFByb3BzU3R5bGUuZGF0YSwgc3R5bGU6IHBsYWluU3R5bGVzW2ldIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTdG9wQW5pbWF0aW9uQWxsKGN1cnJlbnRTdHlsZXMsIGRlc3RTdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzLCBtZXJnZWRQcm9wc1N0eWxlcykge1xuICBpZiAobWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoICE9PSBkZXN0U3R5bGVzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWVyZ2VkUHJvcHNTdHlsZXNbaV0ua2V5ICE9PSBkZXN0U3R5bGVzW2ldLmtleSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHdlIGhhdmUgdGhlIGludmFyaWFudCB0aGF0IG1lcmdlZFByb3BzU3R5bGVzIGFuZFxuICAvLyBjdXJyZW50U3R5bGVzL2N1cnJlbnRWZWxvY2l0aWVzL2xhc3QqIGFyZSBzeW5jZWQgaW4gdGVybXMgb2YgY2VsbHMsIHNlZVxuICAvLyBtZXJnZUFuZFN5bmMgY29tbWVudCBmb3IgbW9yZSBpbmZvXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIV9zaG91bGRTdG9wQW5pbWF0aW9uMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXNbaV0sIGRlc3RTdHlsZXNbaV0uc3R5bGUsIGN1cnJlbnRWZWxvY2l0aWVzW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBjb3JlIGtleSBtZXJnaW5nIGxvZ2ljXG5cbi8vIHRoaW5ncyB0byBkbzogc2F5IHByZXZpb3VzbHkgbWVyZ2VkIHN0eWxlIGlzIHthLCBifSwgZGVzdCBzdHlsZSAocHJvcCkgaXMge2IsXG4vLyBjfSwgcHJldmlvdXMgY3VycmVudCAoaW50ZXJwb2xhdGluZykgc3R5bGUgaXMge2EsIGJ9XG4vLyAqKmludmFyaWFudCoqOiBjdXJyZW50W2ldIGNvcnJlc3BvbmRzIHRvIG1lcmdlZFtpXSBpbiB0ZXJtcyBvZiBrZXlcblxuLy8gc3RlcHM6XG4vLyB0dXJuIG1lcmdlZCBzdHlsZSBpbnRvIHthPywgYiwgY31cbi8vICAgIGFkZCBjLCB2YWx1ZSBvZiBjIGlzIGRlc3RTdHlsZXMuY1xuLy8gICAgbWF5YmUgcmVtb3ZlIGEsIGFrYSBjYWxsIHdpbGxMZWF2ZShhKSwgdGhlbiBtZXJnZWQgaXMgZWl0aGVyIHtiLCBjfSBvciB7YSwgYiwgY31cbi8vIHR1cm4gY3VycmVudCAoaW50ZXJwb2xhdGluZykgc3R5bGUgZnJvbSB7YSwgYn0gaW50byB7YT8sIGIsIGN9XG4vLyAgICBtYXliZSByZW1vdmUgYVxuLy8gICAgY2VydGFpbmx5IGFkZCBjLCB2YWx1ZSBvZiBjIGlzIHdpbGxFbnRlcihjKVxuLy8gbG9vcCBvdmVyIG1lcmdlZCBhbmQgY29uc3RydWN0IG5ldyBjdXJyZW50XG4vLyBkZXN0IGRvZXNuJ3QgY2hhbmdlLCB0aGF0J3Mgb3duZXInc1xuZnVuY3Rpb24gbWVyZ2VBbmRTeW5jKHdpbGxFbnRlciwgd2lsbExlYXZlLCBvbGRNZXJnZWRQcm9wc1N0eWxlcywgZGVzdFN0eWxlcywgb2xkQ3VycmVudFN0eWxlcywgb2xkQ3VycmVudFZlbG9jaXRpZXMsIG9sZExhc3RJZGVhbFN0eWxlcywgb2xkTGFzdElkZWFsVmVsb2NpdGllcykge1xuICB2YXIgbmV3TWVyZ2VkUHJvcHNTdHlsZXMgPSBfbWVyZ2VEaWZmMlsnZGVmYXVsdCddKG9sZE1lcmdlZFByb3BzU3R5bGVzLCBkZXN0U3R5bGVzLCBmdW5jdGlvbiAob2xkSW5kZXgsIG9sZE1lcmdlZFByb3BzU3R5bGUpIHtcbiAgICB2YXIgbGVhdmluZ1N0eWxlID0gd2lsbExlYXZlKG9sZE1lcmdlZFByb3BzU3R5bGUpO1xuICAgIGlmIChsZWF2aW5nU3R5bGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChfc2hvdWxkU3RvcEFuaW1hdGlvbjJbJ2RlZmF1bHQnXShvbGRDdXJyZW50U3R5bGVzW29sZEluZGV4XSwgbGVhdmluZ1N0eWxlLCBvbGRDdXJyZW50VmVsb2NpdGllc1tvbGRJbmRleF0pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHsga2V5OiBvbGRNZXJnZWRQcm9wc1N0eWxlLmtleSwgZGF0YTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5kYXRhLCBzdHlsZTogbGVhdmluZ1N0eWxlIH07XG4gIH0pO1xuXG4gIHZhciBuZXdDdXJyZW50U3R5bGVzID0gW107XG4gIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IFtdO1xuICB2YXIgbmV3TGFzdElkZWFsU3R5bGVzID0gW107XG4gIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwgPSBuZXdNZXJnZWRQcm9wc1N0eWxlc1tpXTtcbiAgICB2YXIgZm91bmRPbGRJbmRleCA9IG51bGw7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvbGRNZXJnZWRQcm9wc1N0eWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKG9sZE1lcmdlZFByb3BzU3R5bGVzW2pdLmtleSA9PT0gbmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwua2V5KSB7XG4gICAgICAgIGZvdW5kT2xkSW5kZXggPSBqO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVE9ETzoga2V5IHNlYXJjaCBjb2RlXG4gICAgaWYgKGZvdW5kT2xkSW5kZXggPT0gbnVsbCkge1xuICAgICAgdmFyIHBsYWluU3R5bGUgPSB3aWxsRW50ZXIobmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwpO1xuICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IHBsYWluU3R5bGU7XG4gICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBwbGFpblN0eWxlO1xuXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICB2YXIgdmVsb2NpdHkgPSBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKG5ld01lcmdlZFByb3BzU3R5bGVDZWxsLnN0eWxlKTtcbiAgICAgIG5ld0N1cnJlbnRWZWxvY2l0aWVzW2ldID0gdmVsb2NpdHk7XG4gICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gdmVsb2NpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0N1cnJlbnRTdHlsZXNbaV0gPSBvbGRDdXJyZW50U3R5bGVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3TGFzdElkZWFsU3R5bGVzW2ldID0gb2xkTGFzdElkZWFsU3R5bGVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBvbGRDdXJyZW50VmVsb2NpdGllc1tmb3VuZE9sZEluZGV4XTtcbiAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBvbGRMYXN0SWRlYWxWZWxvY2l0aWVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbbmV3TWVyZ2VkUHJvcHNTdHlsZXMsIG5ld0N1cnJlbnRTdHlsZXMsIG5ld0N1cnJlbnRWZWxvY2l0aWVzLCBuZXdMYXN0SWRlYWxTdHlsZXMsIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNdO1xufVxuXG52YXIgVHJhbnNpdGlvbk1vdGlvbiA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbk1vdGlvbicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdFN0eWxlczogX3JlYWN0LlByb3BUeXBlcy5hcnJheU9mKF9yZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAga2V5OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZGF0YTogX3JlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3RPZihfcmVhY3QuUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZFxuICAgIH0pKSxcbiAgICBzdHlsZXM6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsIF9yZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihfcmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGtleTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGE6IF9yZWFjdC5Qcm9wVHlwZXMuYW55LFxuICAgICAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0T2YoX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLCBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdF0pKS5pc1JlcXVpcmVkXG4gICAgfSkpXSkuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgd2lsbExlYXZlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgd2lsbEVudGVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lsbEVudGVyOiBmdW5jdGlvbiB3aWxsRW50ZXIoc3R5bGVUaGF0RW50ZXJlZCkge1xuICAgICAgICByZXR1cm4gX3N0cmlwU3R5bGUyWydkZWZhdWx0J10oc3R5bGVUaGF0RW50ZXJlZC5zdHlsZSk7XG4gICAgICB9LFxuICAgICAgLy8gcmVjYWxsOiByZXR1cm5pbmcgbnVsbCBtYWtlcyB0aGUgY3VycmVudCB1bm1vdW50aW5nIFRyYW5zaXRpb25TdHlsZVxuICAgICAgLy8gZGlzYXBwZWFyIGltbWVkaWF0ZWx5XG4gICAgICB3aWxsTGVhdmU6IGZ1bmN0aW9uIHdpbGxMZWF2ZSgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IF9wcm9wcy5kZWZhdWx0U3R5bGVzO1xuICAgIHZhciBzdHlsZXMgPSBfcHJvcHMuc3R5bGVzO1xuICAgIHZhciB3aWxsRW50ZXIgPSBfcHJvcHMud2lsbEVudGVyO1xuICAgIHZhciB3aWxsTGVhdmUgPSBfcHJvcHMud2lsbExlYXZlO1xuXG4gICAgdmFyIGRlc3RTdHlsZXMgPSB0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nID8gc3R5bGVzKGRlZmF1bHRTdHlsZXMpIDogc3R5bGVzO1xuXG4gICAgLy8gdGhpcyBpcyBzcGVjaWFsLiBmb3IgdGhlIGZpcnN0IHRpbWUgYXJvdW5kLCB3ZSBkb24ndCBoYXZlIGEgY29tcGFyaXNvblxuICAgIC8vIGJldHdlZW4gbGFzdCAobm8gbGFzdCkgYW5kIGN1cnJlbnQgbWVyZ2VkIHByb3BzLiB3ZSdsbCBjb21wdXRlIGxhc3Qgc286XG4gICAgLy8gc2F5IGRlZmF1bHQgaXMge2EsIGJ9IGFuZCBzdHlsZXMgKGRlc3Qgc3R5bGUpIGlzIHtiLCBjfSwgd2UnbGxcbiAgICAvLyBmYWJyaWNhdGUgbGFzdCBhcyB7YSwgYn1cbiAgICB2YXIgb2xkTWVyZ2VkUHJvcHNTdHlsZXMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGRlZmF1bHRTdHlsZXMgPT0gbnVsbCkge1xuICAgICAgb2xkTWVyZ2VkUHJvcHNTdHlsZXMgPSBkZXN0U3R5bGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBvbGRNZXJnZWRQcm9wc1N0eWxlcyA9IGRlZmF1bHRTdHlsZXMubWFwKGZ1bmN0aW9uIChkZWZhdWx0U3R5bGVDZWxsKSB7XG4gICAgICAgIC8vIFRPRE86IGtleSBzZWFyY2ggY29kZVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc3RTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGVzdFN0eWxlc1tpXS5rZXkgPT09IGRlZmF1bHRTdHlsZUNlbGwua2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzdFN0eWxlc1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRTdHlsZUNlbGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIG9sZEN1cnJlbnRTdHlsZXMgPSBkZWZhdWx0U3R5bGVzID09IG51bGwgPyBkZXN0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKHMuc3R5bGUpO1xuICAgIH0pIDogZGVmYXVsdFN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXShzLnN0eWxlKTtcbiAgICB9KTtcbiAgICB2YXIgb2xkQ3VycmVudFZlbG9jaXRpZXMgPSBkZWZhdWx0U3R5bGVzID09IG51bGwgPyBkZXN0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9tYXBUb1plcm8yWydkZWZhdWx0J10ocy5zdHlsZSk7XG4gICAgfSkgOiBkZWZhdWx0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9tYXBUb1plcm8yWydkZWZhdWx0J10ocy5zdHlsZSk7XG4gICAgfSk7XG5cbiAgICB2YXIgX21lcmdlQW5kU3luYyA9IG1lcmdlQW5kU3luYyhcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgd2lsbEVudGVyLFxuICAgIC8vICRGbG93Rml4TWVcbiAgICB3aWxsTGVhdmUsIG9sZE1lcmdlZFByb3BzU3R5bGVzLCBkZXN0U3R5bGVzLCBvbGRDdXJyZW50U3R5bGVzLCBvbGRDdXJyZW50VmVsb2NpdGllcywgb2xkQ3VycmVudFN0eWxlcywgLy8gb2xkTGFzdElkZWFsU3R5bGVzIHJlYWxseVxuICAgIG9sZEN1cnJlbnRWZWxvY2l0aWVzKTtcblxuICAgIHZhciBtZXJnZWRQcm9wc1N0eWxlcyA9IF9tZXJnZUFuZFN5bmNbMF07XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jWzFdO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmNbMl07XG4gICAgdmFyIGxhc3RJZGVhbFN0eWxlcyA9IF9tZXJnZUFuZFN5bmNbM107XG4gICAgdmFyIGxhc3RJZGVhbFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jWzRdO1xuICAgIC8vIG9sZExhc3RJZGVhbFZlbG9jaXRpZXMgcmVhbGx5XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllcyxcbiAgICAgIGxhc3RJZGVhbFN0eWxlczogbGFzdElkZWFsU3R5bGVzLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllcyxcbiAgICAgIG1lcmdlZFByb3BzU3R5bGVzOiBtZXJnZWRQcm9wc1N0eWxlc1xuICAgIH07XG4gIH0sXG5cbiAgYW5pbWF0aW9uSUQ6IG51bGwsXG4gIHByZXZUaW1lOiAwLFxuICBhY2N1bXVsYXRlZFRpbWU6IDAsXG4gIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjdXJyZW50U3R5bGUncyB2YWx1ZSBpcyBzdGFsZTogaWYgcHJvcHMgaXMgaW1tZWRpYXRlbHlcbiAgLy8gY2hhbmdlZCBmcm9tIDAgdG8gNDAwIHRvIHNwcmluZygwKSBhZ2FpbiwgdGhlIGFzeW5jIGN1cnJlbnRTdHlsZSBpcyBzdGlsbFxuICAvLyBhdCAwIChkaWRuJ3QgaGF2ZSB0aW1lIHRvIHRpY2sgYW5kIGludGVycG9sYXRlIGV2ZW4gb25jZSkuIElmIHdlIG5haXZlbHlcbiAgLy8gY29tcGFyZSBjdXJyZW50U3R5bGUgd2l0aCBkZXN0VmFsIGl0J2xsIGJlIDAgPT09IDAgKG5vIGFuaW1hdGlvbiwgc3RvcCkuXG4gIC8vIEluIHJlYWxpdHkgY3VycmVudFN0eWxlIHNob3VsZCBiZSA0MDBcbiAgdW5yZWFkUHJvcFN0eWxlczogbnVsbCxcbiAgLy8gYWZ0ZXIgY2hlY2tpbmcgZm9yIHVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuICAvLyBub24taW50ZXJwb2xhdGluZyB2YWx1ZXMgKHRob3NlIHRoYXQgYXJlIGEgbnVtYmVyLCB3aXRob3V0IGEgc3ByaW5nXG4gIC8vIGNvbmZpZylcbiAgY2xlYXJVbnJlYWRQcm9wU3R5bGU6IGZ1bmN0aW9uIGNsZWFyVW5yZWFkUHJvcFN0eWxlKHVucmVhZFByb3BTdHlsZXMpIHtcbiAgICB2YXIgX21lcmdlQW5kU3luYzIgPSBtZXJnZUFuZFN5bmMoXG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMucHJvcHMud2lsbEVudGVyLFxuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnByb3BzLndpbGxMZWF2ZSwgdGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgdW5yZWFkUHJvcFN0eWxlcywgdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCB0aGlzLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzLCB0aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcywgdGhpcy5zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0aWVzKTtcblxuICAgIHZhciBtZXJnZWRQcm9wc1N0eWxlcyA9IF9tZXJnZUFuZFN5bmMyWzBdO1xuICAgIHZhciBjdXJyZW50U3R5bGVzID0gX21lcmdlQW5kU3luYzJbMV07XG4gICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luYzJbMl07XG4gICAgdmFyIGxhc3RJZGVhbFN0eWxlcyA9IF9tZXJnZUFuZFN5bmMyWzNdO1xuICAgIHZhciBsYXN0SWRlYWxWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luYzJbNF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVucmVhZFByb3BTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB1bnJlYWRQcm9wU3R5bGUgPSB1bnJlYWRQcm9wU3R5bGVzW2ldLnN0eWxlO1xuICAgICAgdmFyIGRpcnR5ID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB1bnJlYWRQcm9wU3R5bGUpIHtcbiAgICAgICAgaWYgKCF1bnJlYWRQcm9wU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlVmFsdWUgPSB1bnJlYWRQcm9wU3R5bGVba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGlmICghZGlydHkpIHtcbiAgICAgICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICBsYXN0SWRlYWxTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsU3R5bGVzW2ldKTtcbiAgICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICBtZXJnZWRQcm9wc1N0eWxlc1tpXSA9IHtcbiAgICAgICAgICAgICAga2V5OiBtZXJnZWRQcm9wc1N0eWxlc1tpXS5rZXksXG4gICAgICAgICAgICAgIGRhdGE6IG1lcmdlZFByb3BzU3R5bGVzW2ldLmRhdGEsXG4gICAgICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgbWVyZ2VkUHJvcHNTdHlsZXNbaV0uc3R5bGUpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50U3R5bGVzW2ldW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzW2ldW2tleV0gPSAwO1xuICAgICAgICAgIGxhc3RJZGVhbFN0eWxlc1tpXVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzW2ldW2tleV0gPSAwO1xuICAgICAgICAgIG1lcmdlZFByb3BzU3R5bGVzW2ldLnN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdW5saWtlIHRoZSBvdGhlciAyIGNvbXBvbmVudHMsIHdlIGNhbid0IGRldGVjdCBzdGFsZW5lc3MgYW5kIG9wdGlvbmFsbHlcbiAgICAvLyBvcHQgb3V0IG9mIHNldFN0YXRlIGhlcmUuIGVhY2ggc3R5bGUgb2JqZWN0J3MgZGF0YSBtaWdodCBjb250YWluIG5ld1xuICAgIC8vIHN0dWZmIHdlJ3JlIG5vdC9jYW5ub3QgY29tcGFyZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllcyxcbiAgICAgIG1lcmdlZFByb3BzU3R5bGVzOiBtZXJnZWRQcm9wc1N0eWxlcyxcbiAgICAgIGxhc3RJZGVhbFN0eWxlczogbGFzdElkZWFsU3R5bGVzLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllc1xuICAgIH0pO1xuICB9LFxuXG4gIHN0YXJ0QW5pbWF0aW9uSWZOZWNlc3Nhcnk6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIFRPRE86IHdoZW4gY29uZmlnIGlzIHthOiAxMH0gYW5kIGRlc3QgaXMge2E6IDEwfSBkbyB3ZSByYWYgb25jZSBhbmRcbiAgICAvLyBjYWxsIGNiPyBObywgb3RoZXJ3aXNlIGFjY2lkZW50YWwgcGFyZW50IHJlcmVuZGVyIGNhdXNlcyBjYiB0cmlnZ2VyXG4gICAgdGhpcy5hbmltYXRpb25JRCA9IF9yYWYyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHByb3BTdHlsZXMgPSBfdGhpcy5wcm9wcy5zdHlsZXM7XG4gICAgICB2YXIgZGVzdFN0eWxlcyA9IHR5cGVvZiBwcm9wU3R5bGVzID09PSAnZnVuY3Rpb24nID8gcHJvcFN0eWxlcyhyZWh5ZHJhdGVTdHlsZXMoX3RoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIF90aGlzLnVucmVhZFByb3BTdHlsZXMsIF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcykpIDogcHJvcFN0eWxlcztcblxuICAgICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgICAgaWYgKHNob3VsZFN0b3BBbmltYXRpb25BbGwoX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlcywgZGVzdFN0eWxlcywgX3RoaXMuc3RhdGUuY3VycmVudFZlbG9jaXRpZXMsIF90aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzKSkge1xuICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50VGltZSAtIF90aGlzLnByZXZUaW1lO1xuICAgICAgX3RoaXMucHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IF90aGlzLmFjY3VtdWxhdGVkVGltZSArIHRpbWVEZWx0YTtcbiAgICAgIC8vIG1vcmUgdGhhbiAxMCBmcmFtZXM/IHByb2xseSBzd2l0Y2hlZCBicm93c2VyIHRhYi4gUmVzdGFydFxuICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA+IG1zUGVyRnJhbWUgKiAxMCkge1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID09PSAwKSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRGcmFtZUNvbXBsZXRpb24gPSAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKSAqIG1zUGVyRnJhbWUpIC8gbXNQZXJGcmFtZTtcbiAgICAgIHZhciBmcmFtZXNUb0NhdGNoVXAgPSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpO1xuXG4gICAgICB2YXIgX21lcmdlQW5kU3luYzMgPSBtZXJnZUFuZFN5bmMoXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBfdGhpcy5wcm9wcy53aWxsRW50ZXIsXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBfdGhpcy5wcm9wcy53aWxsTGVhdmUsIF90aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLCBkZXN0U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcywgX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzLCBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0aWVzKTtcblxuICAgICAgdmFyIG5ld01lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlQW5kU3luYzNbMF07XG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IF9tZXJnZUFuZFN5bmMzWzFdO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luYzNbMl07XG4gICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVzID0gX21lcmdlQW5kU3luYzNbM107XG4gICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmMzWzRdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld01lcmdlZFByb3BzU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlID0gbmV3TWVyZ2VkUHJvcHNTdHlsZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBuZXdDdXJyZW50U3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0eSA9IHt9O1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGUgPSB7fTtcbiAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXR5ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIG5ld01lcmdlZFByb3BzU3R5bGUpIHtcbiAgICAgICAgICBpZiAoIW5ld01lcmdlZFByb3BzU3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlVmFsdWUgPSBuZXdNZXJnZWRQcm9wc1N0eWxlW2tleV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBuZXdMYXN0SWRlYWxTdHlsZXNbaV1ba2V5XTtcbiAgICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXVtrZXldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcmFtZXNUb0NhdGNoVXA7IGorKykge1xuICAgICAgICAgICAgICB2YXIgX3N0ZXBwZXIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3N0ZXBwZXJbMF07XG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfc3RlcHBlclsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9zdGVwcGVyMiA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICB2YXIgbmV4dElkZWFsWCA9IF9zdGVwcGVyMlswXTtcbiAgICAgICAgICAgIHZhciBuZXh0SWRlYWxWID0gX3N0ZXBwZXIyWzFdO1xuXG4gICAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgKyAobmV4dElkZWFsWCAtIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSArIChuZXh0SWRlYWxWIC0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWU7XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBuZXdMYXN0SWRlYWxTdHlsZTtcbiAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5O1xuICAgICAgICBuZXdDdXJyZW50U3R5bGVzW2ldID0gbmV3Q3VycmVudFN0eWxlO1xuICAgICAgICBuZXdDdXJyZW50VmVsb2NpdGllc1tpXSA9IG5ld0N1cnJlbnRWZWxvY2l0eTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgLy8gdGhlIGFtb3VudCB3ZSdyZSBsb29wZWQgb3ZlciBhYm92ZVxuICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC09IGZyYW1lc1RvQ2F0Y2hVcCAqIG1zUGVyRnJhbWU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFN0eWxlczogbmV3Q3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgICBsYXN0SWRlYWxTdHlsZXM6IG5ld0xhc3RJZGVhbFN0eWxlcyxcbiAgICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbmV3TGFzdElkZWFsVmVsb2NpdGllcyxcbiAgICAgICAgbWVyZ2VkUHJvcHNTdHlsZXM6IG5ld01lcmdlZFByb3BzU3R5bGVzXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMudW5yZWFkUHJvcFN0eWxlcyA9IG51bGw7XG5cbiAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcmV2VGltZSA9IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBpZiAodGhpcy51bnJlYWRQcm9wU3R5bGVzKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGVzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BzLnN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gcHJvcHMuc3R5bGVzKHJlaHlkcmF0ZVN0eWxlcyh0aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLCB0aGlzLnVucmVhZFByb3BTdHlsZXMsIHRoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5yZWFkUHJvcFN0eWxlcyA9IHByb3BzLnN0eWxlcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEICE9IG51bGwpIHtcbiAgICAgIF9yYWYyWydkZWZhdWx0J10uY2FuY2VsKHRoaXMuYW5pbWF0aW9uSUQpO1xuICAgICAgdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBoeWRyYXRlZFN0eWxlcyA9IHJlaHlkcmF0ZVN0eWxlcyh0aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLCB0aGlzLnVucmVhZFByb3BTdHlsZXMsIHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcyk7XG4gICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKGh5ZHJhdGVkU3R5bGVzKTtcbiAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRyYW5zaXRpb25Nb3Rpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLy8gbGlzdCBvZiBzdHlsZXMsIGVhY2ggY29udGFpbmluZyBpbnRlcnBvbGF0aW5nIHZhbHVlcy4gUGFydCBvZiB3aGF0J3MgcGFzc2VkXG4vLyB0byBjaGlsZHJlbiBmdW5jdGlvbi4gTm90aWNlIHRoYXQgdGhpcyBpc1xuLy8gQXJyYXk8QWN0dWFsSW50ZXJwb2xhdGluZ1N0eWxlT2JqZWN0Piwgd2l0aG91dCB0aGUgd3JhcHBlciB0aGF0IGlzIHtrZXk6IC4uLixcbi8vIGRhdGE6IC4uLiBzdHlsZTogQWN0dWFsSW50ZXJwb2xhdGluZ1N0eWxlT2JqZWN0fS4gT25seSBtZXJnZWRQcm9wc1N0eWxlc1xuLy8gY29udGFpbnMgdGhlIGtleSAmIGRhdGEgaW5mbyAoc28gdGhhdCB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgc291cmNlIG9mIHRydXRoXG4vLyBmb3IgdGhlc2UsIGFuZCB0byBzYXZlIHNwYWNlKS4gQ2hlY2sgdGhlIGNvbW1lbnQgZm9yIGByZWh5ZHJhdGVTdHlsZXNgIHRvXG4vLyBzZWUgaG93IHdlIHJlZ2VuZXJhdGUgdGhlIGVudGlyZXR5IG9mIHdoYXQncyBwYXNzZWQgdG8gY2hpbGRyZW4gZnVuY3Rpb25cblxuLy8gdGhlIGFycmF5IHRoYXQga2VlcHMgdHJhY2sgb2YgY3VycmVudGx5IHJlbmRlcmVkIHN0dWZmISBJbmNsdWRpbmcgc3R1ZmZcbi8vIHRoYXQgeW91J3ZlIHVubW91bnRlZCBidXQgdGhhdCdzIHN0aWxsIGFuaW1hdGluZy4gVGhpcyBpcyB3aGVyZSBpdCBsaXZlc1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvVHJhbnNpdGlvbk1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcblxuLy8gY29yZSBrZXlzIG1lcmdpbmcgYWxnb3JpdGhtLiBJZiBwcmV2aW91cyByZW5kZXIncyBrZXlzIGFyZSBbYSwgYl0sIGFuZCB0aGVcbi8vIG5leHQgcmVuZGVyJ3MgW2MsIGIsIGRdLCB3aGF0J3MgdGhlIGZpbmFsIG1lcmdlZCBrZXlzIGFuZCBvcmRlcmluZz9cblxuLy8gLSBjIGFuZCBhIG11c3QgYm90aCBiZSBiZWZvcmUgYlxuLy8gLSBiIGJlZm9yZSBkXG4vLyAtIG9yZGVyaW5nIGJldHdlZW4gYSBhbmQgYyBhbWJpZ3VvdXNcblxuLy8gdGhpcyByZWR1Y2VzIHRvIG1lcmdpbmcgdHdvIHBhcnRpYWxseSBvcmRlcmVkIGxpc3RzIChlLmcuIGxpc3RzIHdoZXJlIG5vdFxuLy8gZXZlcnkgaXRlbSBoYXMgYSBkZWZpbml0ZSBvcmRlcmluZywgbGlrZSBjb21wYXJpbmcgYSBhbmQgYyBhYm92ZSkuIEZvciB0aGVcbi8vIGFtYmlndW91cyBvcmRlcmluZyB3ZSBkZXRlcm1pbmlzdGljYWxseSBjaG9vc2UgdG8gcGxhY2UgdGhlIG5leHQgcmVuZGVyJ3Ncbi8vIGl0ZW0gYWZ0ZXIgdGhlIHByZXZpb3VzJzsgc28gYyBhZnRlciBhXG5cbi8vIHRoaXMgaXMgY2FsbGVkIGEgdG9wb2xvZ2ljYWwgc29ydGluZy4gRXhjZXB0IHRoZSBleGlzdGluZyBhbGdvcml0aG1zIGRvbid0XG4vLyB3b3JrIHdlbGwgd2l0aCBqcyBiYyBvZiB0aGUgYW1vdW50IG9mIGFsbG9jYXRpb24sIGFuZCBpc24ndCBvcHRpbWl6ZWQgZm9yIG91clxuLy8gY3VycmVudCB1c2UtY2FzZSBiYyB0aGUgcnVudGltZSBpcyBsaW5lYXIgaW4gdGVybXMgb2YgZWRnZXMgKHNlZSB3aWtpIGZvclxuLy8gbWVhbmluZyksIHdoaWNoIGlzIGh1Z2Ugd2hlbiB0d28gbGlzdHMgaGF2ZSBtYW55IGNvbW1vbiBlbGVtZW50c1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWVyZ2VEaWZmO1xuXG5mdW5jdGlvbiBtZXJnZURpZmYocHJldiwgbmV4dCwgb25SZW1vdmUpIHtcbiAgLy8gYm9va2tlZXBpbmcgZm9yIGVhc2llciBhY2Nlc3Mgb2YgYSBrZXkncyBpbmRleCBiZWxvdy4gVGhpcyBpcyAyIGFsbG9jYXRpb25zICtcbiAgLy8gcG90ZW50aWFsbHkgdHJpZ2dlcmluZyBjaHJvbWUgaGFzaCBtYXAgbW9kZSBmb3Igb2JqcyAoc28gaXQgbWlnaHQgYmUgZmFzdGVyXG5cbiAgdmFyIHByZXZLZXlJbmRleCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcbiAgICBwcmV2S2V5SW5kZXhbcHJldltpXS5rZXldID0gaTtcbiAgfVxuICB2YXIgbmV4dEtleUluZGV4ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgIG5leHRLZXlJbmRleFtuZXh0W2ldLmtleV0gPSBpO1xuICB9XG5cbiAgLy8gZmlyc3QsIGFuIG92ZXJseSBlbGFib3JhdGUgd2F5IG9mIG1lcmdpbmcgcHJldiBhbmQgbmV4dCwgZWxpbWluYXRpbmdcbiAgLy8gZHVwbGljYXRlcyAoaW4gdGVybXMgb2Yga2V5cykuIElmIHRoZXJlJ3MgZHVwZSwga2VlcCB0aGUgaXRlbSBpbiBuZXh0KS5cbiAgLy8gVGhpcyB3YXkgb2Ygd3JpdGluZyBpdCBzYXZlcyBhbGxvY2F0aW9uc1xuICB2YXIgcmV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgIHJldFtpXSA9IG5leHRbaV07XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFuZXh0S2V5SW5kZXguaGFzT3duUHJvcGVydHkocHJldltpXS5rZXkpKSB7XG4gICAgICAvLyB0aGlzIGlzIGNhbGxlZCBteSBUTSdzIGBtZXJnZUFuZFN5bmNgLCB3aGljaCBjYWxscyB3aWxsTGVhdmUuIFdlIGRvbid0XG4gICAgICAvLyBtZXJnZSBpbiBrZXlzIHRoYXQgdGhlIHVzZXIgZGVzaXJlcyB0byBraWxsXG4gICAgICB2YXIgZmlsbCA9IG9uUmVtb3ZlKGksIHByZXZbaV0pO1xuICAgICAgaWYgKGZpbGwgIT0gbnVsbCkge1xuICAgICAgICByZXQucHVzaChmaWxsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBub3cgYWxsIHRoZSBpdGVtcyBhbGwgcHJlc2VudC4gQ29yZSBzb3J0aW5nIGxvZ2ljIHRvIGhhdmUgdGhlIHJpZ2h0IG9yZGVyXG4gIHJldHVybiByZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBuZXh0T3JkZXJBID0gbmV4dEtleUluZGV4W2Eua2V5XTtcbiAgICB2YXIgbmV4dE9yZGVyQiA9IG5leHRLZXlJbmRleFtiLmtleV07XG4gICAgdmFyIHByZXZPcmRlckEgPSBwcmV2S2V5SW5kZXhbYS5rZXldO1xuICAgIHZhciBwcmV2T3JkZXJCID0gcHJldktleUluZGV4W2Iua2V5XTtcblxuICAgIGlmIChuZXh0T3JkZXJBICE9IG51bGwgJiYgbmV4dE9yZGVyQiAhPSBudWxsKSB7XG4gICAgICAvLyBib3RoIGtleXMgaW4gbmV4dFxuICAgICAgcmV0dXJuIG5leHRLZXlJbmRleFthLmtleV0gLSBuZXh0S2V5SW5kZXhbYi5rZXldO1xuICAgIH0gZWxzZSBpZiAocHJldk9yZGVyQSAhPSBudWxsICYmIHByZXZPcmRlckIgIT0gbnVsbCkge1xuICAgICAgLy8gYm90aCBrZXlzIGluIHByZXZcbiAgICAgIHJldHVybiBwcmV2S2V5SW5kZXhbYS5rZXldIC0gcHJldktleUluZGV4W2Iua2V5XTtcbiAgICB9IGVsc2UgaWYgKG5leHRPcmRlckEgIT0gbnVsbCkge1xuICAgICAgLy8ga2V5IGEgaW4gbmV4dCwga2V5IGIgaW4gcHJldlxuXG4gICAgICAvLyBob3cgdG8gZGV0ZXJtaW5lIHRoZSBvcmRlciBiZXR3ZWVuIGEgYW5kIGI/IFdlIGZpbmQgYSBcInBpdm90XCIgKHRlcm1cbiAgICAgIC8vIGFidXNlKSwgYSBrZXkgcHJlc2VudCBpbiBib3RoIHByZXYgYW5kIG5leHQsIHRoYXQgaXMgc2FuZHdpY2hlZCBiZXR3ZWVuXG4gICAgICAvLyBhIGFuZCBiLiBJbiB0aGUgY29udGV4dCBvZiBvdXIgYWJvdmUgZXhhbXBsZSwgaWYgd2UncmUgY29tcGFyaW5nIGEgYW5kXG4gICAgICAvLyBkLCBiJ3MgKHRoZSBvbmx5KSBwaXZvdFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwaXZvdCA9IG5leHRbaV0ua2V5O1xuICAgICAgICBpZiAoIXByZXZLZXlJbmRleC5oYXNPd25Qcm9wZXJ0eShwaXZvdCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0T3JkZXJBIDwgbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJCID4gcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0T3JkZXJBID4gbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJCIDwgcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBwbHVnZ2FibGUuIGRlZmF1bHQgdG86IG5leHQgYmlnZ2VyIHRoYW4gcHJldlxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIC8vIHByZXZPcmRlckEsIG5leHRPcmRlckJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaXZvdCA9IG5leHRbaV0ua2V5O1xuICAgICAgaWYgKCFwcmV2S2V5SW5kZXguaGFzT3duUHJvcGVydHkocGl2b3QpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRPcmRlckIgPCBuZXh0S2V5SW5kZXhbcGl2b3RdICYmIHByZXZPcmRlckEgPiBwcmV2S2V5SW5kZXhbcGl2b3RdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChuZXh0T3JkZXJCID4gbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJBIDwgcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBsdWdnYWJsZS4gZGVmYXVsdCB0bzogbmV4dCBiaWdnZXIgdGhhbiBwcmV2XG4gICAgcmV0dXJuIC0xO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyB0byBsb29wIHRocm91Z2ggYW5kIGZpbmQgYSBrZXkncyBpbmRleCBlYWNoIHRpbWUpLCBidXQgSSBubyBsb25nZXIgY2FyZVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvbWVyZ2VEaWZmLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc3ByaW5nO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcHJlc2V0cyA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG52YXIgX3ByZXNldHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0cyk7XG5cbnZhciBkZWZhdWx0Q29uZmlnID0gX2V4dGVuZHMoe30sIF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlLCB7XG4gIHByZWNpc2lvbjogMC4wMVxufSk7XG5cbmZ1bmN0aW9uIHNwcmluZyh2YWwsIGNvbmZpZykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZywgeyB2YWw6IHZhbCB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgbm9Xb2JibGU6IHsgc3RpZmZuZXNzOiAxNzAsIGRhbXBpbmc6IDI2IH0sIC8vIHRoZSBkZWZhdWx0LCBpZiBub3RoaW5nIHByb3ZpZGVkXG4gIGdlbnRsZTogeyBzdGlmZm5lc3M6IDEyMCwgZGFtcGluZzogMTQgfSxcbiAgd29iYmx5OiB7IHN0aWZmbmVzczogMTgwLCBkYW1waW5nOiAxMiB9LFxuICBzdGlmZjogeyBzdGlmZm5lc3M6IDIxMCwgZGFtcGluZzogMjAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9wcmVzZXRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlb3JkZXJLZXlzO1xuXG52YXIgaGFzV2FybmVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJlb3JkZXJLZXlzKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgaGFzV2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2ByZW9yZGVyS2V5c2AgaGFzIGJlZW4gcmVtb3ZlZCwgc2luY2UgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBmb3IgVHJhbnNpdGlvbk1vdGlvblxcJ3MgbmV3IHN0eWxlcyBhcnJheSBBUEkuJyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVhY3QxMyA9IGlzUmVhY3QxMyhSZWFjdCk7XG52YXIgZGlkV2FybkFib3V0Q2hpbGQgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRET01Ob2RlKGNvbXBvbmVudCl7XG4gICAgaWYoIXJlYWN0MTMpe1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gUmVhY3QuZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuQWJvdXRGdW5jdGlvbkNoaWxkKCkge1xuICAgIGlmIChkaWRXYXJuQWJvdXRDaGlsZCB8fCByZWFjdDEzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlkV2FybkFib3V0Q2hpbGQgPSB0cnVlO1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dpdGggUmVhY3QgMC4xNCBhbmQgbGF0ZXIgdmVyc2lvbnMsIHlvdSBubyBsb25nZXIgbmVlZCB0byB3cmFwIDxTY3JvbGxBcmVhPiBjaGlsZCBpbnRvIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5BYm91dEVsZW1lbnRDaGlsZCgpIHtcbiAgICBpZiAoZGlkV2FybkFib3V0Q2hpbGQgfHwgIXJlYWN0MTMpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlkV2FybkFib3V0Q2hpbGQgPSB0cnVlO1xuICAgIGNvbnNvbGUuZXJyb3IoICdXaXRoIFJlYWN0IDAuMTMsIHlvdSBuZWVkIHRvIHdyYXAgPFNjcm9sbEFyZWE+IGNoaWxkIGludG8gYSBmdW5jdGlvbi4nICk7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aXZlT3JaZXJvKG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciA8IDAgPyAwIDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZ5T2JqVmFsdWVzIChvYmosIG1vZGlmaWVyID0geCA9PiB4KXtcbiAgICBsZXQgbW9kaWZpZWRPYmogPSB7fTtcbiAgICBmb3IobGV0IGtleSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSkgbW9kaWZpZWRPYmpba2V5XSA9IG1vZGlmaWVyKG9ialtrZXldKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG1vZGlmaWVkT2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWFjdDEzKFJlYWN0KSB7XG4gICAgY29uc3QgeyB2ZXJzaW9uIH0gPSBSZWFjdDtcbiAgICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIGNvbnN0IG1ham9yID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcbiAgICBjb25zdCBtaW5vciA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XG5cbiAgICByZXR1cm4gbWFqb3IgPT09IDAgJiYgbWlub3IgPT09IDEzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvdXRpbHMuanNcbiAqKi8iLCIvLyBMb2FkIGluIGRlcGVuZGVuY2llc1xudmFyIGNvbXB1dGVkU3R5bGUgPSByZXF1aXJlKCdjb21wdXRlZC1zdHlsZScpO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgYGxpbmUtaGVpZ2h0YCBvZiBhIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBjYWxjdWxhdGUgbGluZSBoZWlnaHQgb2YuIE11c3QgYmUgaW4gdGhlIERPTS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGBsaW5lLWhlaWdodGAgb2YgdGhlIGVsZW1lbnQgaW4gcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGxpbmVIZWlnaHQobm9kZSkge1xuICAvLyBHcmFiIHRoZSBsaW5lLWhlaWdodCB2aWEgc3R5bGVcbiAgdmFyIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKSxcbiAgICAgIGxuSGVpZ2h0ID0gcGFyc2VGbG9hdChsbkhlaWdodFN0ciwgMTApO1xuXG4gIC8vIElmIHRoZSBsaW5lSGVpZ2h0IGRpZCBub3QgY29udGFpbiBhIHVuaXQgKGkuZS4gaXQgd2FzIG51bWVyaWMpLCBjb252ZXJ0IGl0IHRvIGVtcyAoZS5nLiAnMi4zJyA9PT0gJzIuM2VtJylcbiAgaWYgKGxuSGVpZ2h0U3RyID09PSBsbkhlaWdodCArICcnKSB7XG4gICAgLy8gU2F2ZSB0aGUgb2xkIGxpbmVIZWlnaHQgc3R5bGUgYW5kIHVwZGF0ZSB0aGUgZW0gdW5pdCB0byB0aGUgZWxlbWVudFxuICAgIHZhciBfbG5IZWlnaHRTdHlsZSA9IG5vZGUuc3R5bGUubGluZUhlaWdodDtcbiAgICBub2RlLnN0eWxlLmxpbmVIZWlnaHQgPSBsbkhlaWdodFN0ciArICdlbSc7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVtIGJhc2VkIGhlaWdodFxuICAgIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKTtcbiAgICBsbkhlaWdodCA9IHBhcnNlRmxvYXQobG5IZWlnaHRTdHIsIDEwKTtcblxuICAgIC8vIFJldmVydCB0aGUgbGluZUhlaWdodCBzdHlsZVxuICAgIGlmIChfbG5IZWlnaHRTdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gX2xuSGVpZ2h0U3R5bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHB0YCwgY29udmVydCBpdCB0byBwaXhlbHMgKDRweCBmb3IgM3B0KVxuICAvLyBERVY6IGBlbWAgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBgcHRgIGluIElFNlxuICAvLyBDb252ZXJzaW9uIHJhdGlvIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlbmd0aFxuICBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZigncHQnKSAhPT0gLTEpIHtcbiAgICBsbkhlaWdodCAqPSA0O1xuICAgIGxuSGVpZ2h0IC89IDM7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignbW0nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgbW1gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMjUuNG1tKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDI1LjQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignY20nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgY21gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMi41NGNtKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDIuNTQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignaW4nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgaW5gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMWluKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ3BjJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHBjYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDEycHQgZm9yIDFwYylcbiAgICBsbkhlaWdodCAqPSAxNjtcbiAgfVxuXG4gIC8vIENvbnRpbnVlIG91ciBjb21wdXRhdGlvblxuICBsbkhlaWdodCA9IE1hdGgucm91bmQobG5IZWlnaHQpO1xuXG4gIC8vIElmIHRoZSBsaW5lLWhlaWdodCBpcyBcIm5vcm1hbFwiLCBjYWxjdWxhdGUgYnkgZm9udC1zaXplXG4gIGlmIChsbkhlaWdodFN0ciA9PT0gJ25vcm1hbCcpIHtcbiAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgbm9kZVxuICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUsXG4gICAgICAgIF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgX25vZGUuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG5cbiAgICAvLyBTZXQgdGhlIGZvbnQtc2l6ZSBvZiB0aGUgZWxlbWVudFxuICAgIHZhciBmb250U2l6ZVN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2ZvbnQtc2l6ZScpO1xuICAgIF9ub2RlLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVTdHI7XG5cbiAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGJvZHlcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChfbm9kZSk7XG5cbiAgICAvLyBBc3N1bWUgdGhlIGxpbmUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGlzIHRoZSBoZWlnaHRcbiAgICB2YXIgaGVpZ2h0ID0gX25vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGxuSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLy8gUmVtb3ZlIG91ciBjaGlsZCBmcm9tIHRoZSBET01cbiAgICBib2R5LnJlbW92ZUNoaWxkKF9ub2RlKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHRcbiAgcmV0dXJuIGxuSGVpZ2h0O1xufVxuXG4vLyBFeHBvcnQgbGluZUhlaWdodFxubW9kdWxlLmV4cG9ydHMgPSBsaW5lSGVpZ2h0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xpbmUtaGVpZ2h0L2xpYi9saW5lLWhlaWdodC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGlzIGNvZGUgaGFzIGJlZW4gcmVmYWN0b3JlZCBmb3IgMTQwIGJ5dGVzXG4vLyBZb3UgY2FuIHNlZSB0aGUgb3JpZ2luYWwgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3R3b2xmc29uL2NvbXB1dGVkU3R5bGUvYmxvYi8wNGNkMWRhMmUzMGZhNDU4NDRmOTVmNWNiMWFjODk4ZTliOWVmMDUwL2xpYi9jb21wdXRlZFN0eWxlLmpzXG52YXIgY29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIChlbCwgcHJvcCwgZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGU7XG5cbiAgLy8gSW4gb25lIGZlbGwgc3dvb3BcbiAgcmV0dXJuIChcbiAgICAvLyBJZiB3ZSBoYXZlIGdldENvbXB1dGVkU3R5bGVcbiAgICBnZXRDb21wdXRlZFN0eWxlID9cbiAgICAgIC8vIFF1ZXJ5IGl0XG4gICAgICAvLyBUT0RPOiBGcm9tIENTUy1RdWVyeSBub3Rlcywgd2UgbWlnaHQgbmVlZCAobm9kZSwgbnVsbCkgZm9yIEZGXG4gICAgICBnZXRDb21wdXRlZFN0eWxlKGVsKSA6XG5cbiAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSBpbiBJRSBhbmQgdXNlIGN1cnJlbnRTdHlsZVxuICAgICAgZWwuY3VycmVudFN0eWxlXG4gIClbXG4gICAgLy8gU3dpdGNoIHRvIGNhbWVsQ2FzZSBmb3IgQ1NTT01cbiAgICAvLyBERVY6IEdyYWJiZWQgZnJvbSBqUXVlcnlcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuOS1zdGFibGUvc3JjL2Nzcy5qcyNMMTkxLUwxOTRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuOS1zdGFibGUvc3JjL2NvcmUuanMjTDU5My1MNTk3XG4gICAgcHJvcC5yZXBsYWNlKC8tKFxcdykvZ2ksIGZ1bmN0aW9uICh3b3JkLCBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KVxuICBdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21wdXRlZFN0eWxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29tcHV0ZWQtc3R5bGUvZGlzdC9jb21wdXRlZFN0eWxlLmNvbW1vbmpzLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=