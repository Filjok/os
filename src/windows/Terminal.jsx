import { Check, Flag } from "lucide-react";
import { techStack } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/windowsControls/WindowControls";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
         Creative Frontend Developer
         
        </p>

        <ul className="content">
          {techStack.map(({ category, items }, index) => (
            <li key={index}>
              <Check size={20} className="check" />
              <h3>{category}</h3>
              <ul>
                {items.map((item, idx) => (
                  <li key={idx}>
                    {item}
                    {idx < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={16} className="check" />5 of 5 stack loaded
            successfully
          </p>
          <p>
            <Flag size={16} className="flag" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
