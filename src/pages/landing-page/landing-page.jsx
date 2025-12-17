import Profile from "../../component/profile/profile";
import Blog from "../blog/blog";
import { Feedback } from "../feedback";
import { FrequentlyAskedQuestions } from "../frequenlty-asked-questions";
import { Home } from "../home";
import { Project } from "../projects";

const LandingPage = () => {
  return (
    <section>
      <div className="flex md:hidden w-full justify-center"><Profile/></div>
      <Home />
      <Project />
      <Feedback />
      <Blog />
    </section>
  );
};

export default LandingPage;
