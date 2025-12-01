import WindowControls from "../components/windowsControls/WindowControls";
import { Search } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "../constants";
import useLocationStore from "../store/location";
import { use } from "react";
import useWindowStore from "../store/window";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") {
      return openWindow("resume");
    }
    if (item.kind === "folder") return setActiveLocation(item);

    if (["fig", "url"].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank");
    }

    // normalize key matching WINDOW_CONFIG (e.g. 'txtfile', 'imgfile')
    openWindow(`${item.fileType}file`, item);
  };

  const renderList = (item) =>
    item.map((location) => (
      <li
        key={location.id}
        onClick={() => {
          setActiveLocation(location);
        }}
        className={`${
          location.id === activeLocation.id ? "active" : "not-acitive"
        }`}
      >
        <img src={location.icon} alt={location.name} />
        <p>{location.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target={"finder"} />
        <Search className="icion" />
      </div>

      <div className="finder-window">
        <div className="sidebar">
          <div>
            {" "}
            <h3>favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div className="folder-group">
            {" "}
            <h3>work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                openItem(item);
              }}
            >
              <div>
                {" "}
                <img src={item.icon} alt={item.name} />
              </div>
              <div>
                {" "}
                <p>{item.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
