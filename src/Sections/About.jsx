import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../Components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("manasshrivastava0410@hmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/useravatar.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain  transition duration-300 ease-in-out"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Lokshana Chavan</p>
              <p className="grid-subtext">
                As a UI/UX Designer with over 2 years of experience, I turn user
                frustrations into delightful, intuitive designs. I specialize in
                simplifying complex flows and crafting seamless digital
                experiences with passion and purpose. Let’s bring your next big
                idea to life!
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/lctecks.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Skiils</p>
              <p className="grid-subtext">
                Additional skills include strong problem-solving, collaboration,
                adaptability, and clear communication abilities. Skilled in time
                management and leadership, with experience mentoring junior
                designers and driving project success across multiple
                initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="cursor-grab rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Kanpur, UP",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Mumbai, India and open to work remotely .
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">From Curiosity to Impact</p>
              <p className="grid-subtext">
                My journey into UI/UX began with a curiosity about digital
                experiences, leading me from an IT background into the fintech
                space at Depronto Infotech, where I redesigned complex systems
                to be more user-friendly. I learned to balance user needs with
                business goals, boosting retention and usability. My passion
                evolved into using design to shape brand perception and drive
                engagement. Today, I’m a storyteller and strategic thinker,
                crafting meaningful digital experiences through empathy and
                collaboration.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container " onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-sm md:text-sm font-medium text-gray_gradient text-white">
                  lupomudra@gmail.com
                </p>
              </div>
              <p className="lg:text-sm md:text-sm font-medium text-gray_gradient text-white text-center">
                9930324555
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
