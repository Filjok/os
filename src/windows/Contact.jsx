import WindowControls from "../components/windowsControls/WindowControls";
import WindowWrapper from "../hoc/WindowWrapper";

const Contact = () => {
  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="contact-wrapper">
        <h3>
          Do you need a <span>UI/UX developer</span>? Because{" "}
          <span>I need a job</span>. <span>Perfect match</span>?
        </h3>

        <div className="social-gridWrapper">
          <div
            className=""
            onClick={() =>
              handleSocialClick(
                "mailto:filjokurian.info@gmail.com?subject=You%20free%20for%20a%20project!"
              )
            }
          >
            <div className="icon">
              <img src="/icons/mail.svg" alt="" />
            </div>
            <h4> mail me</h4>
          </div>
          <div
            className=""
            onClick={() =>
              handleSocialClick("https://linkedin.com/in/filjo-kurian")
            }
          >
            <div className="icon">
              <img src="/icons/linkedin.svg" alt="" />
            </div>
            <h4> linkedin</h4>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
