import React from "react";
import Image from "next/image";
import Logo from "../static/vercel.svg";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";
import ProfileImg from "../static/Profile.jpg";

const styles = {
  logoContainer: "cursor-pointer",
  wrapper:
    "flex flex-col justify-between items-center w-[5rem] p-[1rem] h-screen ",
  iconsContainer:
    "flex-1 flex flex-col justify-center gap-12 text-2xl font-light text-[#787878]",
  icons: "cursor-pointer",
  divider: "border-b",
  ProfileImg: "object-cover",
  profileImgContainer: "w-[2.5rem] rounded-full overflow-hidden",
};

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={Logo} height={15} width={60} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome className={styles.icons} />
        <FiBell className={styles.icons} />
        <BiBookmark className={styles.icons} />
        <RiArticleLine className={styles.icons} />
        <div className={styles.divider}>
          <BsPencilSquare className={styles.icons} />
        </div>
      </div>
      <div>
        <div className={styles.profileImgContainer}>
          <Image src={ProfileImg} height={50} width={50} />
        </div>
      </div>
    </div>
  );
};

export default ReadersNav;
