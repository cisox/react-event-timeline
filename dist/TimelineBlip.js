"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var TimelineBlip = /*#__PURE__*/function (_Component) {
  _inherits(TimelineBlip, _Component);

  var _super = _createSuper(TimelineBlip);

  function TimelineBlip() {
    _classCallCheck(this, TimelineBlip);

    return _super.apply(this, arguments);
  }

  _createClass(TimelineBlip, [{
    key: "mergeNotificationStyle",
    value: function mergeNotificationStyle(iconColor, bubbleStyle) {
      var iconColorStyle = iconColor ? _objectSpread({}, _styles["default"].eventType, {}, {
        color: iconColor,
        borderColor: iconColor
      }) : _styles["default"].eventType;
      return _objectSpread({}, iconColorStyle, {}, bubbleStyle);
    }
  }, {
    key: "iconStyle",
    value: function iconStyle(_iconStyle) {
      return _objectSpread({}, _styles["default"].materialIcons, {}, _iconStyle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          createdAt = _this$props.createdAt,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          iconStyle = _this$props.iconStyle,
          iconClassName = _this$props.iconClassName,
          buttons = _this$props.buttons,
          icon = _this$props.icon,
          bubbleStyle = _this$props.bubbleStyle,
          bubbleClassName = _this$props.bubbleClassName,
          orientation = _this$props.orientation,
          iconColor = _this$props.iconColor,
          titleStyle = _this$props.titleStyle,
          subtitleStyle = _this$props.subtitleStyle,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["createdAt", "title", "subtitle", "iconStyle", "iconClassName", "buttons", "icon", "bubbleStyle", "bubbleClassName", "orientation", "iconColor", "titleStyle", "subtitleStyle", "style"]);

      var leftOrRightEvent = orientation === 'right' ? _objectSpread({}, _styles["default"]['event--right']) : _objectSpread({}, _styles["default"]['event--left']);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].event, {
          marginBottom: 50
        }, style)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: bubbleClassName,
        style: this.mergeNotificationStyle(iconColor, bubbleStyle)
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: iconClassName,
        style: this.iconStyle(iconStyle)
      }, icon)), /*#__PURE__*/_react["default"].createElement("div", _extends({}, otherProps, {
        style: _objectSpread({}, _styles["default"].blipStyle, {}, leftOrRightEvent)
      }), createdAt && /*#__PURE__*/_react["default"].createElement("div", {
        style: this.timeStyle()
      }, createdAt), /*#__PURE__*/_react["default"].createElement("div", {
        style: titleStyle
      }, title), subtitle && /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].subtitle, {}, subtitleStyle)
      }, subtitle), /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].actionButtons)
      }, buttons)), /*#__PURE__*/_react["default"].createElement("div", {
        style: _styles["default"].eventAfter
      }));
    }
  }]);

  return TimelineBlip;
}(_react.Component);

TimelineBlip.propTypes = {
  title: _propTypes["default"].node.isRequired,
  subtitle: _propTypes["default"].node,
  createdAt: _propTypes["default"].node,
  buttons: _propTypes["default"].node,
  icon: _propTypes["default"].node,
  iconColor: _propTypes["default"].string,
  iconStyle: _propTypes["default"].object,
  iconClassName: _propTypes["default"].string,
  bubbleStyle: _propTypes["default"].object,
  bubbleClassName: _propTypes["default"].string,
  style: _propTypes["default"].object,
  titleStyle: _propTypes["default"].object,
  subtitleStyle: _propTypes["default"].object,
  orientation: _propTypes["default"].string
};
TimelineBlip.defaultProps = {
  iconStyle: {},
  iconClassName: 'timeline-icon',
  bubbleStyle: {},
  bubbleClassName: 'timeline-bubble',
  style: {}
};
var _default = TimelineBlip;
exports["default"] = _default;