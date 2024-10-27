import React from "react";
import Hero from "../../ui/home/hero";
import Slideshow from "../../utils/slideshow";
import styles from "./home.module.scss";
import { FaArrowRight, FaFacebookF } from "react-icons/fa6";
import BuildingCard from "../../ui/home/buildingCard";
import Card from "../../utils/Card";
import { estateData } from "../../utils/estateData";
import { categoriesData } from "../../utils/categoriesData";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <div className={styles.about}>
        <div className={styles.slideshow}>
          <Slideshow />
        </div>
        <div className={styles.text}>
          <h1>About Valington</h1>
          <p>
            Establish unique and world class real estate marketing company that
            provides genuine land and properties at affordable rates in Africa
            and across the world
          </p>
          <p>
            Helping you achieve your real estate goals is our top priority. When
            we work together, it is about YOU. We listen to your needs, work
            diligently to achieve your objectives, and strive to always exceed
            your expectations.
          </p>
          <button>
            About Us <FaArrowRight />
          </button>
        </div>
      </div>
      <BuildingCard />

      <div className={styles.categories}>
        <h1>Our Prototypes & Categories</h1>
        <p>
          We have an array of the best Architectural designs and prototypes.
        </p>
        <div className={styles.categoriesCards}>
          {categoriesData.map((category) => (
            <Card data={category} key={category.id} />
          ))}
        </div>
      </div>

      <div className={styles.estate}>
        <h1>Our Estates and Neighbourhood</h1>
        <p>Our Estates and their Locations.</p>
        <div className={styles.estateCards}>
          {estateData.map((estate) => (
            <Card data={estate} key={estate.id} />
          ))}
        </div>
      </div>

      <div className={styles.directors}>
        <h1 className={styles.h1}>Meet Our Directors</h1>
        <p className={styles.first}>
          We help clients throughout the FCT get the best in Real estate
          investment.
        </p>
        <div className={styles.cards}>
          <div className={styles.clone}>
            <div className={styles.top}>
              <img src="/director1.jpeg" alt="" />
            </div>
            <div className={styles.bottom}>
              <h2>Dr. Valentine Abiji</h2>
              <p className={styles.p1}>Managing Director</p>
              <p className={styles.p2}>
                Managing Director at Valington Homes and Properties Ltd.
                Valentine has years of Real Estat ...
              </p>
              <div className={styles.icons}>
                <Link to="https://www.facebook.com/Dr.valentineabiji">
                  <FaFacebookF />
                </Link>

                <Link to="tel:07037092049">
                  <FaPhone />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.clone}>
            <div className={styles.top}>
              <img src="/director2.jpg" alt="" />
            </div>
            <div className={styles.bottom}>
              <h2>Engr. Dr. Darlington-Ugota</h2>
              <p className={styles.p1}>Executive Director</p>
              <p className={styles.p2}>
                Co-founder and Executive Director of Valington Homes and
                Properties Ltd. He is a graduate ...
              </p>
              <div className={styles.icons}>
                <Link to="https://www.facebook.com/Valington1">
                  <FaFacebookF />
                </Link>

                <Link to="tel:07034795677">
                  <FaPhone />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
