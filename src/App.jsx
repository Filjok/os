import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Dock from "./components/dock/Dock";
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./windows";
import Safari from "./windows/Safari";
import Resume from "./windows/Resume";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import Image from "./windows/Image";
import Contact from "./windows/Contact";
import Home from "./components/Home/Home";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <Image />
      <Finder />
      <Contact />
      <Home />
    </main>
  );
};

export default App;
