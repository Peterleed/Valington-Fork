import React from "react";
import styles from "./footer.module.scss";
import {
  FaBuilding,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaPrint,
  FaTv,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.one}>
          <h3>Valington Estate</h3>
          <p>
            Establish unique and world class real estate marketing company that
            provides genuine land and properties at affordable rates in Africa
            and across the world.
          </p>
        </div>
        <div className={styles.two}>
          <h3>CONTACT</h3>
          <ul>
            <li>
              <span>
                <FaBuilding />
              </span>
              <p>
                Suite C1-C5 2nd Floor Busy Mart Plaza 44 Ebitu Ukiwe Street
                Jabi, Abuja
              </p>
            </li>
            <li>
              <span>
                <FaPhone />
              </span>
              <Link to="tel:07037092049+++">
                <p>07037092049</p>
              </Link>
            </li>
            <li>
              <span>
                <FaPrint />
              </span>
              <p>07037092049</p>
            </li>
            <li>
              <span>
                <FaEnvelope />
              </span>
              <Link to="mailto:info@valingtonproperties.ng">
                <p>info@valingtonproperties.ng</p>
              </Link>
            </li>
            <li>
              <span>
                <FaTv />
              </span>
              <Link to="/">
                <p>Valington</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.three}>
          <h3>SOCIAL LINKS:</h3>
          <div className={styles.icons}>
            <Link to="/fjfj">
              <FaFacebookF />
            </Link>
            <Link>
              <FaYoutube />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>2023 Copyright. All Rights Reserved. Powered by TEQBOX.</p>
        <div>
          <Link to="https://www.valingtonproperties.ng/terms-of-user/">
            <p>Terms of Use</p>
          </Link>
          <Link to="https://www.valingtonproperties.ng/privacy-policy-2/">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
