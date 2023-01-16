import React from 'react'
import "./Terminal.css";

const commands = [
  "hello world",
  "portfolio coming soon"
];

function Terminal() {

  const [html, setHtml] = React.useState("");
  const [userInput, setUserInput] = React.useState("");
  const [activateInput, setActivateInput] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      commandSetter(commands);
    }, 3000);
  }, []);

  return (
    <div className="terminal-wrapper">
      <span className="menu-item red" />
      <span className="menu-item yellow" />
      <span className="menu-item green" />
      <div className="terminal-container">
        <div className="terminal-text" 
          dangerouslySetInnerHTML={
            { __html: `${html} <span class='blinker'>&#32;</span>` }
          } />
      </div>
    </div>
  )

  async function commandSetter(commands: string[]) {
    for (let command of commands) {
      await commandHandler(command, setHtml)
    }
    setActivateInput(true);
    console.log("finished")
  }

  function commandHandler(command: string, setCommand: any): Promise<void> {
    return new Promise((resolve) => {
      let currentText = "";
      setCommand((prev: string) => prev + "<p>");
      typing(command, (text: string) => {
        currentText += text;
        setCommand((prev: string) => prev + text);
        if (currentText === command) {
          setCommand((prev: string) => prev + "</p>");
          resolve();
        }
      })
    })
  }

  function typing(text: string, callback: any) {
    if (text.length === 0) return true;
    setTimeout(() => {
      typing(text.substring(1), callback);
    }, 160);
    return callback(text[0]);
  }
}

export default Terminal;


/**
 * loop through all commands
 * on each command we need to envolk typying function
 * 
 * blinker needs to be at the last character of the command
 * and end at the bottom after all commands have been typed
 */