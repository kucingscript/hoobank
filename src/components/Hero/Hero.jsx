import styles from "../../styles";
import { robot } from "../../assets";

import Discount from "./Discount";
import Text from "./Text";
import Gradient from "./Gradient";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <Discount />
        <Text />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img
          src={robot}
          alt="Hero Image"
          className="w-full h-full relative z-[5] sm:-mt-7 mt-10"
        />

        <Gradient />
      </div>
    </section>
  );
};

export default Hero;
