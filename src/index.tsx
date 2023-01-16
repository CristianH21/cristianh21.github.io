import { createRoot } from "react-dom/client";
import React from "react";
import { TerminalView, ProjectsView } from "./views";
import "./styles.css";

function App() {
  return (
    <>
      <TerminalView />
      {/* <ProjectsView /> */}
    </>
  )
};

const app = document.getElementById("app") as HTMLDivElement;
const root = createRoot(app);

root.render(<App />)

