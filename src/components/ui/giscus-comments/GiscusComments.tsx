import Giscus from "@giscus/react";

const GiscusComments = () => {
  return (
    <Giscus
      id="comments"
      repo="talllorenc/tl-base-comments"
      repoId="R_kgDOOiIBxQ"
      category="Announcements"
      categoryId="DIC_kwDOOiIBxc4Cpnz4"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
