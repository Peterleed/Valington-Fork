import { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaEnvelope,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const handleToggleMobileMenu = (type) => {
    setIsMobile((prev) => !prev);

    if (type === 1 && isCategory) {
      setIsCategory((prev) => !prev);
      setIsLocation((prev) => !prev);
    } else if (type === 1) {
      setIsLocation((prev) => !prev);
    } else if (type === 2) {
      setIsCategory((prev) => !prev);
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={
          isScroll
            ? `${styles.header} ${styles.active}`
            : isMobile
            ? `${styles.header} ${styles.tablet}`
            : `${styles.header}`
        }
      >
        <div className={styles.toggle} onClick={handleToggleMobileMenu}>
          <span>{isMobile ? <FaXmark /> : <FaBars />}</span>
        </div>
        <Link to="/">
          <img
            className={styles.desktop}
            src={isScroll ? "/images-1.png" : "/valington-white-logo.png"}
          />
          <img className={styles.tablet} src="/images-1.png" alt="" />
        </Link>
        <nav onClick={handleToggleMobileMenu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                handleToggleMobileMenu(1);
              }}
            >
              <Link to="/#">
                Locations
                <span>{isLocation ? <FaAngleUp /> : <FaAngleDown />}</span>
              </Link>
              <ul className={isLocation ? `${styles.location}` : ``}>
                <li>
                  <p>Valington Royal City Jikwoyi</p>
                </li>
                <li>
                  <p>Valington Phase 2</p>
                </li>
                <li>
                  <p>Valington Premium City Idu</p>
                </li>
                <li>
                  <p>Valington Estate Phase 4 Lugbe</p>
                </li>
                <li>
                  <p>Valington Terrace Apartments</p>
                </li>
                <li>
                  <p>Valington Metro-View Idu</p>
                </li>
                <li>
                  <p>Valington Monarch Residence Idu</p>
                </li>
                <li>
                  <p>Valington Sideview Estate</p>
                </li>
              </ul>
            </li>
            <li
              onClick={() => {
                handleToggleMobileMenu(2);
              }}
            >
              <Link to="/#">
                Categories
                <span>{isCategory ? <FaAngleUp /> : <FaAngleDown />}</span>
              </Link>
              <ul className={isCategory ? `${styles.category}` : ``}>
                <li>
                  <p>Duplexes</p>
                </li>
                <li>
                  <p>Penthouse</p>
                </li>
                <li>
                  <p>Terrace Duplexes</p>
                </li>
                <li>
                  <p>Semi Detached Duplex</p>
                </li>
                <li>
                  <p>Apartments</p>
                </li>
                <li>
                  <p>Terrace Bungalow</p>
                </li>
                <li>
                  <p>Bungalow</p>
                </li>
                <li>
                  <p>Semi Detached Bungalows</p>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#">Our catalogue</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.no}>
          <Link to="tel:07037092049">
            <FaPhone />
            <span>07037092049</span>
          </Link>
        </p>
      </header>

      <div
        className={
          isScroll
            ? `${styles.scrolltop} ${styles.active}`
            : `${styles.scrolltop}`
        }
      >
        <Link to="/#">
          <button>
            <FaEnvelope />
          </button>
        </Link>
        <button onClick={scrollToTop}>
          <FaAngleUp />
        </button>
      </div>
    </>
  );
};

export default Header;
