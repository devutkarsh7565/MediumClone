import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";

const styles = {
  wrapper: "mx-auto",
  postList: "flex flex-col justify-start gap-6 md:p-6 p-2 ",
  container: "flex-1 max-w-7xl",
  main: "flex justify-center",
};

const index = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
