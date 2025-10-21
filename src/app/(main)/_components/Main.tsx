import { MorphingText } from "@/components/ui/morphing-text";
import LastNewsBanner from "@/features/news/components/LastNewsBanner";

const Main = () => {
  return (
    <>
      <LastNewsBanner />

      <section className="text-center max-w-3xl mx-auto mt-12">
        <h1 className="mb-4">tl.base — your digital workspace</h1>

        <MorphingText
          texts={["Developer Hub", "Team Toolkit", "Knowledge Base", "Healper"]}
          className="text-cherry text-4xl font-semibold mb-6"
        />

        <p className="text-foregroundSecondary">
          Build, manage, and automate everything you need — from internal tools
          to public projects.
        </p>
      </section>
    </>
  );
};

export default Main;
