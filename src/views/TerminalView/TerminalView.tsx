import React from 'react'
import "./TerminalView.css";
import { Section } from '../../components/Section'
import Terminal from '../../components/Terminal/Terminal';
import cn from "classnames";

function TerminalView() {

  const [hide, setHide] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   setTimeout(() => setHide(true), 5000);
  // }, []);

  return (
    <Section class={cn([
      "section-terminal",
      hide && "hide"
    ])}>
      <Terminal />
    </Section>
  )
}

export default TerminalView