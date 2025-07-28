import Hero from "./components/Hero";
import AboutSeo from "./components/AboutSeo";
import ProofOfCommitment from "./components/ProofOfCommitment";
import PartnersShowcase from "./components/Partners";
import JoinTalentNetwork from "./components/JoinTalentNetwork";
import Testimonials from "./components/Testimonials";
import GetInvolved from "./components/GetInvolved";
import BlogStories from "./components/BlogStories";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <div>
    <Hero />

    <AboutSeo/>

    <ProofOfCommitment/>

    <PartnersShowcase/>

    <JoinTalentNetwork/>

    <Testimonials/>

    <GetInvolved/>

    <BlogStories/>

    <Donate />

    <Footer />
  </div>
  );
}
