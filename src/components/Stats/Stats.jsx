import styles from "../../styles";
import { stats } from "../../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className="flex flex-1 flex-row justify-start items-center m-3"
          >
            <h4 className="font-poppins font-semibold xs:text-4xl text-3xl xs:leading-[53.16px] leading-[43.16px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-xl text-[16px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
