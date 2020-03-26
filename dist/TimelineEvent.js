"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimelineEvent = /*#__PURE__*/function (_Component) {
  _inherits(TimelineEvent, _Component);

  var _super = _createSuper(TimelineEvent);

  function TimelineEvent(props) {
    var _this;

    _classCallCheck(this, TimelineEvent);

    _this = _super.call(this, props);
    _this.state = {
      showContent: _this.props.showContent
    };
    _this.toggleContent = _this.toggleContent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimelineEvent, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.showContent !== prevProps.showContent) {
        this.setState({
          showContent: this.props.showContent
        });
      }
    }
  }, {
    key: "mergeNotificationStyle",
    value: function mergeNotificationStyle(iconColor, bubbleStyle, orientation) {
      var iconColorStyle = iconColor ? _objectSpread({}, _styles["default"].eventType, {}, {
        color: iconColor,
        borderColor: iconColor
      }) : _styles["default"].eventType;
      var leftOrRight = orientation === 'right' ? _objectSpread({}, _styles["default"]['eventType--right']) : _objectSpread({}, _styles["default"]['eventType--left']);
      return _objectSpread({}, iconColorStyle, {}, leftOrRight, {}, bubbleStyle);
    }
  }, {
    key: "mergeContentStyle",
    value: function mergeContentStyle(contentStyle) {
      var messageStyle = this.showAsCard() ? _styles["default"].cardBody : _styles["default"].message;
      return contentStyle ? _objectSpread({}, messageStyle, {}, contentStyle) : messageStyle;
    }
  }, {
    key: "timeStyle",
    value: function timeStyle() {
      return this.showAsCard() ? _styles["default"].time : _objectSpread({}, _styles["default"].time, {
        color: '#303e49'
      });
    }
  }, {
    key: "showAsCard",
    value: function showAsCard() {
      var container = this.props.container;
      return container === 'card';
    }
  }, {
    key: "containerStyle",
    value: function containerStyle() {
      var style = this.props.style;

      var containerStyle = _objectSpread({}, _styles["default"].eventContainer, {}, style);

      return this.showAsCard() ? _objectSpread({}, _styles["default"].card, {}, containerStyle) : containerStyle;
    }
  }, {
    key: "toggleStyle",
    value: function toggleStyle() {
      var _this$props = this.props,
          container = _this$props.container,
          cardHeaderStyle = _this$props.cardHeaderStyle,
          collapsible = _this$props.collapsible;
      var messageStyle = container === 'card' ? _objectSpread({}, _styles["default"].cardTitle, {}, cardHeaderStyle) : {};
      return collapsible ? _objectSpread({}, _styles["default"].toggleEnabled, {}, messageStyle) : messageStyle;
    }
  }, {
    key: "toggleContent",
    value: function toggleContent() {
      this.setState({
        showContent: !this.state.showContent
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props2 = this.props,
          collapsible = _this$props2.collapsible,
          contentStyle = _this$props2.contentStyle,
          contentClassName = _this$props2.contentClassName;
      return collapsible && this.state.showContent || !collapsible ? /*#__PURE__*/_react["default"].createElement("div", {
        className: contentClassName,
        style: this.mergeContentStyle(contentStyle)
      }, this.props.children, /*#__PURE__*/_react["default"].createElement("div", {
        style: _styles["default"].messageAfter
      })) : /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          fontWeight: 500,
          fontSize: 16,
          cursor: 'pointer'
        },
        onClick: this.toggleContent
      }, "\u2026");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          createdAt = _this$props3.createdAt,
          title = _this$props3.title,
          subtitle = _this$props3.subtitle,
          iconStyle = _this$props3.iconStyle,
          iconClassName = _this$props3.iconClassName,
          bubbleStyle = _this$props3.bubbleStyle,
          bubbleClassName = _this$props3.bubbleClassName,
          buttons = _this$props3.buttons,
          icon = _this$props3.icon,
          iconColor = _this$props3.iconColor,
          titleStyle = _this$props3.titleStyle,
          subtitleStyle = _this$props3.subtitleStyle,
          orientation = _this$props3.orientation,
          collapsible = _this$props3.collapsible,
          onClick = _this$props3.onClick,
          onIconClick = _this$props3.onIconClick,
          className = _this$props3.className,
          cardHeaderClassName = _this$props3.cardHeaderClassName;
      var leftOrRightEventStyling = orientation === 'right' ? _objectSpread({}, _styles["default"]['event--right']) : _objectSpread({}, _styles["default"]['event--left']);
      var leftOrRightButtonStyling = orientation === 'left' ? _objectSpread({}, _styles["default"]['actionButtons--right']) : _objectSpread({}, _styles["default"]['actionButtons--left']);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].event, {}, leftOrRightEventStyling)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: bubbleClassName,
        style: this.mergeNotificationStyle(iconColor, bubbleStyle, orientation)
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: iconClassName,
        style: _objectSpread({}, _styles["default"].materialIcons, {}, iconStyle),
        onClick: onIconClick
      }, icon)), /*#__PURE__*/_react["default"].createElement("div", _extends({
        style: this.containerStyle()
      }, {
        onClick: onClick,
        className: className
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: _styles["default"].eventContainerBefore
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: cardHeaderClassName,
        style: this.toggleStyle(),
        onClick: collapsible && this.toggleContent
      }, createdAt && /*#__PURE__*/_react["default"].createElement("div", {
        style: this.timeStyle()
      }, createdAt), /*#__PURE__*/_react["default"].createElement("div", {
        style: titleStyle
      }, title), subtitle && /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].subtitle, {}, subtitleStyle)
      }, subtitle), /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].actionButtons, {}, leftOrRightButtonStyling)
      }, buttons)), this.props.children && this.renderChildren()), /*#__PURE__*/_react["default"].createElement("div", {
        style: _styles["default"].eventAfter
      }));
    }
  }]);

  return TimelineEvent;
}(_react.Component);

TimelineEvent.propTypes = {
  title: _propTypes["default"].node.isRequired,
  subtitle: _propTypes["default"].node,
  createdAt: _propTypes["default"].node,
  children: _propTypes["default"].node,
  buttons: _propTypes["default"].node,
  container: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  iconColor: _propTypes["default"].string,
  iconStyle: _propTypes["default"].object,
  iconClassName: _propTypes["default"].string,
  bubbleStyle: _propTypes["default"].object,
  bubbleClassName: _propTypes["default"].string,
  orientation: _propTypes["default"].string,
  contentStyle: _propTypes["default"].object,
  contentClassName: _propTypes["default"].string,
  cardHeaderStyle: _propTypes["default"].object,
  cardHeaderClassName: _propTypes["default"].string,
  style: _propTypes["default"].object,
  titleStyle: _propTypes["default"].object,
  subtitleStyle: _propTypes["default"].object,
  collapsible: _propTypes["default"].bool,
  showContent: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onIconClick: _propTypes["default"].func
};
TimelineEvent.defaultProps = {
  createdAt: undefined,
  iconStyle: {},
  iconClassName: 'timeline-icon',
  bubbleStyle: {},
  bubbleClassName: 'timeline-bubble',
  contentStyle: {},
  contentClassName: 'timeline-content',
  cardHeaderStyle: {},
  style: {},
  titleStyle: {},
  subtitleStyle: {},
  orientation: 'left',
  showContent: false,
  className: '',
  onClick: function onClick() {},
  onIconClick: function onIconClick() {}
};
var _default = TimelineEvent;
exports["default"] = _default;