import React from "react";
import "./styles.css"

const STYLES = [
  "btn--primary--solid",
  "btn--rythm--1",
  "btn--rythm--2",
  "btn--rythm--3",
  "btn--rythm--4",
  "btn--rythm--5",
  "btn--rythm--chan",
]

const SIZES = [
  "btn--large"
]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
      {children}
    </button>
  )
};
