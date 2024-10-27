import styles from "./utils.module.scss";
import { formatCurrency } from "../utils/formatCurrency";
import {
  FaBath,
  FaBed,
  FaHeart,
  FaPlus,
  FaShareNodes,
  FaUpRightAndDownLeftFromCenter,
} from "react-icons/fa6";

const PropertiesCard = ({ buildingData }) => {
  return (
    <div className={styles.propertiesCard}>
      <div className={styles.top}>
        <img
          src={`/buildings/${buildingData.beds}-bed${
            buildingData.beds === 4
              ? Math.floor(Math.random() * 6)
              : buildingData.beds === 2 || buildingData.beds === 3
              ? Math.floor(Math.random() * 2)
              : ""
          }.jpg`}
          alt=""
        />
        <div className={styles.gradient}></div>
        <div className={styles.icons}>
          <ul>
            <li>
              <p>
                <FaShareNodes />
                <span>share</span>
              </p>
            </li>
            <li>
              <p>
                <FaHeart />
                <span>add to favorites</span>
              </p>
            </li>
            <li>
              <p>
                <FaPlus />
                <span>compare</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <h3>{formatCurrency(buildingData.price)}</h3>
        <p className={styles.first}>
          <span>
            <FaBed /> {buildingData.beds} Beds
          </span>
          <span>
            <FaBath /> {buildingData.baths} Baths
          </span>
          <span>
            <FaUpRightAndDownLeftFromCenter />
            &nbsp;{buildingData.area.toFixed(1)} m<sup>2</sup>
          </span>
        </p>
        <p>{buildingData.location}</p>
      </div>
    </div>
  );
};

export default PropertiesCard;
