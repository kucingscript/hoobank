import { features } from "../../constants";
import styles from "../../styles";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] feature-card ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      }`}
    >
      <div
        className={`w-[52px] h-[52px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt={title} className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
          {title}
        </h4>
        <p className="font-poppins text-dimWhite text-[16px] leading-[24px] mt-2">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
