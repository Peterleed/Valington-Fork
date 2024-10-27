import styles from "./utils.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <p className={styles.first}>{data.name}</p>
      <p className={styles.second}>
        {data.listing} Listing{data.listing > 1 ? "s" : ""}
      </p>
      <img src={data.image} alt="" />
      <div className={styles.gradient}></div>
    </div>
  );
};

export default Card;
