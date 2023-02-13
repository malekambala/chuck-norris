import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Header from "@/src/components/layout/header/index";
import Footer from "@/src/components/layout/footer/index";

//API-Fetching
export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.chucknorris.io/jokes/random?category=dev"
  );
  const data = await res.json();

  console.log(`source data fetched. Count: ${data.value}`);

  return {
    props: { quoteValue: data },
  };
};

//Start of the Page
const Home = ({ quoteValue }) => {
  //Set LocalStorage-Value if not set yet
  if (typeof window !== "undefined") {
    if (localStorage.count == false) {
      localStorage.setItem("count", 0);
    }
  }

  //Function for Page-Refresh
  function refreshPage() {
    window.location.reload(false);
  }

  //Update-Function for LocalStorage
  function update() {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      localStorage.count = 1;
    }
  }

  //multiple functions in one (for Button Click-Handling)
  function onClick() {
    refreshPage();
    update();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://www.wus.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/w&slogo.webp"
                alt="W&S Logo"
                className={styles.wslogo}
                width={100}
                height={50}
                priority
              />
            </a>
          </div>
          <p>
            React Probejob by <b>Maleka Japhet Mbala</b>
          </p>
        </div>
        <div className={styles.center}>
          <div>
            <Image
              className={styles.logo}
              src="/chucknorris.png"
              alt="Chuck Norris Logo"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={styles.quoteArea}>
            <p className={styles.quoteValue}>{quoteValue.value} </p>
            <div>
              <button onClick={onClick} className={styles.refreshButton}>
                Click to get new Quote !
              </button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>{" "}
      </main>
      <Footer />
    </>
  );
};

export default Home;
