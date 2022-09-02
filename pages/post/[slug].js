import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommandation from "../../components/Recommandation";

const styles = {
  content: "flex",
};

const Post = () => {
  return (
    <>
      <div className={styles.content}>
        <ReadersNav />
        <ArticleMain />
        <Recommandation />
      </div>
    </>
  );
};

export default Post;
