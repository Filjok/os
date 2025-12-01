import WindowControls from "../components/windowsControls/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";
import useWindowStore from "../store/window";

const Text = () => {
  const { windows } = useWindowStore();

  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, imageUrl, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target={"txtfile"} />

        <h2>{name}</h2>
      </div>

      <div className="content-text">
        {imageUrl || image ? (
          <div className="textfile-image">
            <img src={imageUrl ?? image} alt={name} />
          </div>
        ) : null}

        {subtitle ? <h4 className="subtitle">{subtitle}</h4> : null}

        {Array.isArray(description) && description.length ? (
          <div className="textfile-description">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
