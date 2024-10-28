import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoad, setIsLoad] = useState(false);

  setTimeout(() => {
    setIsLoad(true);
  }, 500);

  return (
    <div className={styles.hero}>
      <h2>Making Your Realty Dream a Reality</h2>
      <h1 className={isLoad ? `${styles.active}` : ``}>
        VALINGTON <br />
        HOMES & <br />
        PROPERTIES
      </h1>
      <video
        src="/herovideo.mp4"
        autoPlay={true}
        muted
        playsInline
        loop
      ></video>
      <div className={styles.gradient}></div>

      <div className={styles.btns}>
        <Link>Contact us</Link>
        <Link>Log on</Link>
      </div>
    </div>
  );
};

export default Hero;
