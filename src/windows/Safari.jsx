import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalfIcon,
} from "lucide-react";
import WindowControls from "../components/windowsControls/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import { blogPosts } from "../constants";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft icon />

        <div className="">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="search-bar">
          <ShieldHalfIcon className="icon" />

          <div className="search">
            <Search className="icon" />
            <input type="text" placeholder="Search or enter website name" />
          </div>
        </div>

        <div className="icon-group">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <div>
          <h1>404</h1>
          <h4>Wait… I’m cooking. It might burn, but trust the vision.</h4>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
