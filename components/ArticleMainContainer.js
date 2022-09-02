import Image from "next/image";
import React from "react";
import Banner from "../static/blog.jpg";

const styles = {
  bannerContainer: "h-[18rem] w-full mb-[2rem] overflow-hidden",
  articleMainContainer: "flex flex-col gap-[1rem]",
  title: "text-3xl font-semibold",
  subTitle: "text-2xl font-normal text-[#787878]",
};

const ArticleMainContainer = () => {
  return (
    <div className={styles.articleMainContainer}>
      <div className={styles.bannerContainer}>
        <Image className="object-cover w-full" src={Banner} />
      </div>
      <div className={styles.title}>
        Britain Will Never Be Free Until The Daily Mail and The Sun are
        Destroyed
      </div>
      <div className={styles.subTitle}>
        A right-wing desire to cut state budgets and quell dissent eventually
        buried forty-three million Americans in debt
      </div>
      <div className={styles.paragraph}>
        The oldest classical British and Latin writing had little or no space
        between words and could be written in boustrophedon (alternating
        directions). Over time, text direction (left to right) became
        standardized, and word dividers and terminal punctuation became common.
        The first way to divide sentences into groups was the original
        paragraphs, similar to an underscore at the beginning of the new
        group.[2] The Greek parágraphos evolved into the pilcrow (¶), which in
        English manuscripts in the Middle Ages can be seen inserted inline
        between sentences. The hedera leaf (e.g. ☙) has also been used in the
        same way.
      </div>
    </div>
  );
};

export default ArticleMainContainer;
