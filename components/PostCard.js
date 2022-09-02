import React from "react";
import Image from "next/image";
import Logo from "../static/blog.jpg";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
const styles = {
  wrapper: "flex items-center w-[43rem] justify-between cursor-pointer",
  authorContainer: "flex items-center gap-2",
  authorImg: "rounded-full object-contain ",
  authorName: "font-medium",
  postDetails: "flex flex-col justify-start gap-1 py-2",
  title: "font-semibold text-2xl",
  breifying: "text-[#787878] text-md",
  category: "bg-gray-200 py-1 px-3 rounded-full text-[#787878]",
  articleDetails: "text-sm text-[#787878]",
  articleDetailContainer: "flex items-center justify-between",
  bookmark: "cursor-pointer",
};

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <Image
              className={styles.authorImg}
              src={Logo}
              width={40}
              height={40}
            />

            <div className={styles.authorName}>Ankur</div>
          </div>
          <h1 className={styles.title}>
            I Outgrew Buying Experiences Not Things.
          </h1>
          <div className={styles.breifying}>
            The rebirth of Russian authoritarianism
          </div>
          <div className={styles.articleDetailContainer}>
            <span className={styles.articleDetails}>
              Jun 15 · 6 min read ·{" "}
              <span className={styles.category}>productivity</span>
            </span>
            <span className={styles.bookmark}>
              <FiBookmark className="h-5 w-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image src={Logo} height={100} width={100} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
