import { navIcons, navLinks } from "../../constants";
import useWindowStore from "../../store/window";
import styles from "./Navbar.module.scss";
import dayjs from "dayjs";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <div className={styles.logoWrapper}>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <h6>Filjo Kurian</h6>

          <ul>
            {navLinks.map(({ id, name, type }) => (
              <li
                key={id}
                onClick={() => {
                  openWindow(type);
                }}
              >
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.rightSection}>
          <ul>
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <img src={img} alt="icons" />
              </li>
            ))}
          </ul>

          <div>
            <time> {dayjs().format("ddd MMM D h:mm A")}</time>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
