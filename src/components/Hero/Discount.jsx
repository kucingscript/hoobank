import { discount } from "../../assets";
import styles from "../../styles";

const Discount = () => {
  return (
    <div className="flex flex-row items-center py-4 px-4 bg-discount-gradient rounded-[10px] mb-4 sm:-mt-28 mt-0">
      <img
        src={discount}
        alt="discount hoobanks"
        className="w-[32px] h-[32px]"
      />
      <p className={`${styles.paragraph} ml-2`}>
        <span className="text-white">20%</span> Discount for
        <span className="text-white"> 1 Month</span> Account
      </p>
    </div>
  );
};

export default Discount;
