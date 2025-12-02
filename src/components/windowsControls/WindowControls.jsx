import { ChevronLeft, ChevronLeftIcon } from "lucide-react";
import useWindowStore from "../../store/window";

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <>
      <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}></div>
        <div className="minimize" onClick={closeWindow}></div>
        <div className="maximize" onClick={closeWindow}></div>

        <div className="mobile-close" onClick={() => closeWindow(target)}>
          <ChevronLeftIcon color="#fff" className="icon" size={24} />
          <h6>Go Back</h6>
        </div>
      </div>
    </>
  );
};

export default WindowControls;
