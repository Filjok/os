import Dock from "./components/dock/Dock";
import Navbar from "./components/Navbar/Navbar";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Terminal from "./windows";

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;
