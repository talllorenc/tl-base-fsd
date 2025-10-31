import { AboutMe, TechnologysBlock } from "../components";

const About = () => {
  return (
    <>
      <h1>About tl-base</h1>
      <p className="text-foregroundSecondary">
        Here you can find all information about tl-base
      </p>

      <div className="mt-8">
        <TechnologysBlock />
      </div>

      <div className="mt-8">
        <AboutMe />
      </div>
    </>
  );
};

export default About;
