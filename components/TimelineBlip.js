import React, { Component } from 'react'
import PropTypes from 'prop-types'
import s from './styles'

class TimelineBlip extends Component {
  mergeNotificationStyle(iconColor, bubbleStyle) {
    const iconColorStyle = iconColor
      ? { ...s.eventType, ...{ color: iconColor, borderColor: iconColor } }
      : s.eventType

    return { ...iconColorStyle, ...bubbleStyle }
  }

  timeStyle() {
    return { ...s.time, color: '#303e49' }
  }

  iconStyle(iconStyle) {
    return { ...s.materialIcons, ...iconStyle }
  }

  render() {
    const {
      createdAt,
      title,
      subtitle,
      iconStyle,
      iconClassName,
      buttons,
      icon,
      bubbleStyle,
      bubbleClassName,
      orientation,
      iconColor,
      titleStyle,
      subtitleStyle,
      style,
      ...otherProps
    } = this.props

    const leftOrRightEvent = (orientation === 'right') ? { ...s['event--right'] } : { ...s['event--left'] }
    return (
      <div style={{ ...s.event, marginBottom: 50, ...style }}>
        <div
          className={bubbleClassName}
          style={this.mergeNotificationStyle(iconColor, bubbleStyle)}
        >
          <span
            className={iconClassName}
            style={this.iconStyle(iconStyle)}
          >
            {icon}
          </span>
        </div>
        <div {...otherProps} style={{ ...s.blipStyle, ...leftOrRightEvent }}>
          {createdAt && <div style={this.timeStyle()}>{createdAt}</div>}
          <div style={titleStyle}>{title}</div>
          {subtitle && (
            <div style={{ ...s.subtitle, ...subtitleStyle }}>{subtitle}</div>
          )}
          <div style={{ ...s.actionButtons }}>
            {buttons}
          </div>
        </div>
        <div style={s.eventAfter} />
      </div>
    )
  }
}

TimelineBlip.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  createdAt: PropTypes.node,
  buttons: PropTypes.node,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  iconClassName: PropTypes.string,
  bubbleStyle: PropTypes.object,
  bubbleClassName: PropTypes.string,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  orientation: PropTypes.string
}

TimelineBlip.defaultProps = {
  iconStyle: {},
  iconClassName: 'timeline-icon',
  bubbleStyle: {},
  bubbleClassName: 'timeline-bubble',
  style: {}
}

export default TimelineBlip
