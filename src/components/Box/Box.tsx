import React from 'react'
import "./Box.css";

type Props = {
    children: React.ReactNode
}

function Box(props: Props) {
  return (
    <div className="box">{props.children}</div>
  )
}

export default Box