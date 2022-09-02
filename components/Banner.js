import React from "react";
import Image from "next/image";
import Blog from "../static/blog.jpg";

const styles = {
  accentedButton: "bg-black text-white py-2 px-3 rounded-full",
  content: "max-w-7xl flex justify-between items-center p-6 gap-5",
  wrapper: "h-max-[10rem] flex justify-center bg-[#FCC017] border border-black",
};

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5">
          <h1 className="max-w-xl font-bob font-light text-[6rem]">
            Stay Curious.
          </h1>
          <h3 className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            eaque, officiis tempore voluptate unde temporibus adipisci
            laboriosam est .
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <Image
          className=" hidden  md:inline-flex object-contain flex-1"
          src={Blog}
          width={600}
          height={500}
        />
      </div>
    </div>
  );
};

export default Banner;
