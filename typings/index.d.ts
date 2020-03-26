import * as React from "react";

export interface TimelineProps {
  children: React.ReactNode;
  orientation?: string;
  style?: React.CSSProperties;
  lineColor?: string;
  lineStyle?: object;
}

export interface TimelineEventProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  createdAt?: React.ReactNode;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  container?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  iconStyle?: object;
  iconClassName?: string;
  bubbleStyle?: object;
  bubbleClassName?: string;
  orientation?: string;
  contentStyle?: object;
  contentClassName?: string;
  cardHeaderStyle?: object;
  cardHeaderClassName?: string;
  style?: object;
  titleStyle?: object;
  subtitleStyle?: object;
  collapsible?: boolean;
  showContent?: boolean;
  className?: string;
  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
  onIconClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
}

export interface TimelineBlipProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  createdAt?: React.ReactNode;
  buttons?: React.ReactNode;
  icon?: React.ReactNode;
  iconColor?: string;
  iconStyle?: object;
  iconClassName?: string;
  bubbleStyle?: object;
  bubbleClassName?: string;
  style?: object;
  titleStyle?: object;
  subtitleStyle?: object;
  className?: string;
  orientation?: string;
}

export class Timeline extends React.Component<TimelineProps> {}
export class TimelineEvent extends React.Component<TimelineEventProps> {}
export class TimelineBlip extends React.Component<TimelineBlipProps> {}
