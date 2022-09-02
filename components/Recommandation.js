import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import Profile from "../static/Profile.jpg";
import Image from "next/image";
import Styles from "./Styles";
import Logo from "../static/Logo.png";

const Recommandation = () => {
  const { styles } = Styles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch className="text-xl" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImgContainer}>
          <Image
            className="object-cover"
            src={Profile}
            height={85}
            width={85}
          />
        </div>
        <div className={styles.authorName}>Utkarsh Tiwari</div>
        <div className={styles.authorFollowing}>1M followers</div>
        <div className={styles.authorAction}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>
      <div className={styles.RecommadationContainer}>
        <div className={styles.title}>More From Medium</div>
        {postRecommendation.map((post, index) => (
          <div key={index} className={styles.articleContainer}>
            <div className={styles.authorRecommandationContainer}>
              <div className={styles.authorRecommendationImgNameContainer}>
                <div className={styles.recommandationAuthorProfileImgContainer}>
                  <Image
                    className="object-cover"
                    src={post.author.image}
                    width={85}
                    height={85}
                  />
                </div>
                <div className={styles.recommendationAuthorName}>
                  {post.author.name}
                </div>
              </div>
              <div className={styles.recommendationTitle}>{post.title}</div>
            </div>
            <div className={styles.recommendationThumbnailContainer}>
              <Image src={post.image} width={100} height={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommandation;

const postRecommendation = [
  {
    title:
      "  Britain Will Never Be Free Until The Daily Mail and The Sun are Destroyed",

    image: Logo,
    author: {
      name: "Utkarsh Tiwari",
      image: Profile,
    },
  },
  {
    title:
      "  What’s Missing from the Student Loan Forgiveness Debate? — The Dark History",

    image: Logo,
    author: {
      name: "Ankur Tiwari",
      image: Profile,
    },
  },
  {
    title:
      "  Britain Will Never Be Free Until The Daily Mail and The Sun are Destroyed",

    image: Logo,
    author: {
      name: "Yuvraj Singh",
      image: Profile,
    },
  },
];
