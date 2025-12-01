import { useGSAP } from "@gsap/react";
import { locations } from "../../constants";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "../../store/window";
import useLocationStore from "../../store/location";
const projects = locations.work?.children ?? [];
const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
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
      </ul>
    </section>
  );
};

export default Home;
