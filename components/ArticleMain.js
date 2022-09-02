import React from "react";
import ArticleMainContainer from "./ArticleMainContainer";
import PostHeaderContainer from "./PostHeaderContainer";

const styles = {
  wrapper: "flex items-center justify-center flex-1 border-l border-r",
  content: "h-screen w-4/5 p-[2rem]",
};
const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <PostHeaderContainer />
        <ArticleMainContainer />
      </div>
    </div>
  );
};

export default ArticleMain;
