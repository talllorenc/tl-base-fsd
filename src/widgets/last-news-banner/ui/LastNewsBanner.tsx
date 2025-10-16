import { NewsCategoryBadge } from "@/entities/news";
import { DateDisplay, SmoothImage } from "@/shared/ui";

const NEWS = {
  id: "13134134",
  title: "QEKJRQ EOIJRQEOI RJQEoiRJ EQOIRJ",
  slug: "slug",
  desc: "qe013 r1389rj 1398rj 139jiqjrkl",
  dateCreated: Date.now(),
  imagePath:
    "https://wallpapers.com/images/hd/geometric-shapes-computer-lock-screen-ft5i26v990a15xx0.jpg",
  category: "ANNOUNCEMENT",
};

const LastNewsBanner = () => {
  return (
    <div className="w-full">
      <div className="relative border border-outline rounded-xl">
        <SmoothImage
          src={NEWS.imagePath}
          alt="Last news banner"
          fill
          sizes="100vw"
          containerHeight={300}
          className="rounded-xl object-cover"
        />
        <div className="absolute inset-0 bg-backgroundSecondary/20 backdrop-blur-sm rounded-xl z-[1]" />
        <div className="absolute inset-0 z-[2] flex gap-4 flex-col items-center justify-center">
          <NewsCategoryBadge category={NEWS.category} />
          <h2 className="text-[#d4d4d4]">{NEWS.title}</h2>
          <DateDisplay date={NEWS.dateCreated} />
        </div>
      </div>
    </div>
  );
};

export default LastNewsBanner;
