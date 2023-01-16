import React from 'react'
import "./Section.css";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
  class: string;
}

function Section(props: Props) {
  return (
    <div 
      className={cn([
        'section',
        props.class
      ])}
    >
      {props.children}
    </div>
  )
}

export default Section