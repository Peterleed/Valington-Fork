import PropertiesCard from "../../utils/propertiesCard";
import { buildingData } from "../../utils/buildingData";
import { useState } from "react";
import styles from "./home.module.scss";

const BuildingCard = () => {
  const [noOfBuildingData, setNoOfBuildingData] = useState(9);

  const initialBuildingData = buildingData.slice(0, noOfBuildingData);

  const loadMore = () => {
    setNoOfBuildingData((prevNo) => prevNo + 9);
  };

  const hide = initialBuildingData.length === buildingData.length;

  return (
    <div className={styles.buildingCard}>
      <h1>Our Latest Properties</h1>
      <p className={styles.first}>
        We are very proud of the service we provide. See what our guests have to
        say about us, our locations and services.
      </p>
      <div className={styles.cards}>
        {initialBuildingData.map((buildingData) => (
          <PropertiesCard key={buildingData.id} buildingData={buildingData} />
        ))}
      </div>
      <button className={hide ? `${styles.hide}` : ``} onClick={loadMore}>
        Load More Listings
      </button>
    </div>
  );
};

export default BuildingCard;
