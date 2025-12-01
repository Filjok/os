import WindowControls from "../components/windowsControls/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Image = () => {
  const { windows } = useWindowStore();

  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, image, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target={"imgfile"} />
        <h2>{name}</h2>
      </div>

      <div className="content image-file-content">
        {(imageUrl || image) && (
          <div className="image-wrapper">
            <img src={imageUrl ?? image} alt={name} />
          </div>
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
