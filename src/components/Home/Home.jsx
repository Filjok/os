import { useGSAP } from "@gsap/react";
import { locations } from "../../constants";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../../store/window";
import useLocationStore from "../../store/location";
const projects = locations.work?.children ?? [];
const abouts = locations.about?.children ?? [];
const resumes = locations.resume?.children ?? [];
const trashs = locations.trash?.children ?? [];
const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  useGSAP(() => {
    if (window.innerWidth > 992) {
      Draggable.create(".folder");
    }
  }, []);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  const handleOpenItemMobile = (item) => {
    if (item.kind === "folder") {
      setActiveLocation(item);
      return openWindow("finder");
    }
    if (item.fileType === "pdf") return openWindow("resume");
    if (["fig", "url"].includes(item.fileType) && item.href) {
      return window.open(item.href, "_blank");
    }
    return openWindow(`${item.fileType}file`, item);
  };
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className="group folder"
            onClick={() => {
              handleOpenProjectFinder(project);
            }}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
        {abouts.map((about) => (
          <li
            key={about.id}
            className="group folder mobile-folders"
            onClick={() => {
              handleOpenItemMobile(about);
            }}
          >
            <img src="/images/txt.png" alt={about.name} />
            <p>{about.name}</p>
          </li>
        ))}
        {resumes.map((resume) => (
          <li
            key={resume.id}
            className="group folder mobile-folders"
            onClick={() => {
              handleOpenItemMobile(resume);
            }}
          >
            <img src="/images/pdf.png" alt={resume.name} />
            <p>{resume.name}</p>
          </li>
        ))}
        {trashs.map((trash) => (
          <li
            key={trash.id}
            className="group folder mobile-folders"
            onClick={() => {
              handleOpenItemMobile(trash);
            }}
          >
            <img src="/images/txt.png" alt={trash.name} />
            <p>{trash.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
