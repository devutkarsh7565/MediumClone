import React from "react";

const styles = {
  accentedButton:
    "flex bg-black text-white justify-center items-center my-[2rem] p-[0.6rem] text-sm rounded-full ",
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] p-[2rem] flex-1",
  searchBar:
    "flex gap-4 border px-3 items-center h-[3rem] py-3 border-[#787878] rounded-full",
  searchInput: "outline-none w-full",
  authorProfileImgContainer: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
  authorContainer: "my-[2.5rem]",
  authorName: "mt-[2rem] mb-[0.2rem] font-semibold",
  authorFollowing: "text-[#787878] ",
  authorAction: "flex gap-[0.6rem] my-[1rem] ",
  actionButton: "bg-[#1A8917] text-white py-2 px-3 rounded-full",
  articleContainer: "my-[1.5rem] flex items-center justify-center gap-[1rem]",
  recommandationAuthorProfileImgContainer:
    " w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden",
  recommendationAuthorName: "text-sm text-[#787878]",
  authorRecommandationContainer: "flex flex-col justify-center gap-[0.6rem]",
  recommendationTitle: "max-w-[19rem] font-semibold text-lg leading-tight",
  recommendationThumbnailContainer:
    "flex flex-1 justify-center items-center h-[4rem] w-[4rem]",
  authorRecommendationImgNameContainer:
    "flex items-center justify-start gap-[0.6rem]",
};

const Styles = () => {
  return { styles };
};

export default Styles;
