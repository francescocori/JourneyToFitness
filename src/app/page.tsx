import {
  Hero3,
  Hero2,
  SplitScreen,
  About,
  About2,
  Contact,
  Faq,
  Features,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div>
      <Hero3 />
      <About />
      {/* <Hero2 /> */}
      <Features />
      <SplitScreen />
      {/* <About /> */}
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
