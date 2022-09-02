import React from "react";
import Image from "next/image";
import Logo from "../static/vercel.svg";

const styles = {
  wrapper: " flex justify-center gap-10  p-5 bg-[#FCC017]",
  content: "w-[1200px] flex1 flex  justify-between ",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  navBanner: "flex cursor-pointer justify-evenly items-center space-x-5",
  accentedButton: "bg-black text-white py-2 px-3 rounded-full",
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={Logo} height={40} width={100} />
        </div>
        <div className={styles.navBanner}>
          <div>Our story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
