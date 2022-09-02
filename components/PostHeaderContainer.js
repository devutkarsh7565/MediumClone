import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Profile from "../static/Profile.jpg";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex justify-between items-center gap-[1rem]",
  authorImgContainer: "w-[5rem] h-[5rem] overflow-hidden rounded-full",
  authorColumn: "flex flex-col justify-center ",
  postDetail: "flex gap-[0.2rem] text-[#787878]",
  listenButton: "flex gap-[.2rem] text-[#1A8917] items-center",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
};
const PostHeaderContainer = () => {
  return (
    <div className={styles.postHeaderContainer}>
      <div className={styles.authorContainer}>
        <div className={styles.authorImgContainer}>
          <Image
            className="object-cover"
            src={Profile}
            width={85}
            height={85}
          />
        </div>
        <div className={styles.authorColumn}>
          <div className={styles.authorName}>Utkarsh Tiwari</div>
          <div className={styles.postDetail}>
            <span>June 15 · 7 min read ·</span>
            <span className={styles.listenButton}>
              <AiFillPlayCircle /> Listen
            </span>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <IoLogoTwitter />
        <FaFacebook />
        <GrLinkedin />
        <HiOutlineLink />
        <div className={styles.space} />
        <BiBookmark />
        <FiMoreHorizontal />
      </div>
    </div>
  );
};

export default PostHeaderContainer;
